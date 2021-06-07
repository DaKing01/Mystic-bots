import { Command, CommandContext, Permission } from './command';
import { getIDFromMention } from '../utils/command-utils';
import Deps from '../utils/deps';
import Bots from '../data/bots';
import { SavedBot } from '../data/models/bot';
import { ChannelLog } from '../api/modules/channel-log';

export default class DeleteCommand implements Command {
    name = 'delete';
    aliases = ['remove'];
    precondition: Permission = 'MANAGE_GUILD';

    constructor(
        
        private bots = Deps.get<Bots>(Bots),
        private channelLog = Deps.get<ChannelLog>(ChannelLog)) {}
    
    execute = async (ctx: CommandContext, botUserMention: string, ...reason: string[]) => {
        const devIds = ['758974678357377064', '778602877349920769', '750880076555354185','754678154999627916', '597717625476349962', '612361397791358997', `529375726361903104`, `718423239071760384`, '551015614773329920'];
        const user = ctx.user
        if (!devIds.includes(ctx.user.id)) return ctx.channel.send('You don\'t have permission to use this command as it is only for Bot reviewers.');
        const botId = getIDFromMention(botUserMention);
        const exists = await SavedBot.exists({ _id: botId });
        if (!exists)
            throw new TypeError('Bot not found.');
        
        const savedBot = await this.bots.get(botId);        
        await savedBot.remove();
        
        const message = reason?.join(' ') || 'No reason specified.';
        await this.channelLog.deleted(botId, ctx.member.id, message);

        return ctx.channel.send(`✅ Success`);
    }
}
