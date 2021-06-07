import Bots from '../data/bots';
import { getIDFromMention } from '../utils/command-utils';
import Deps from '../utils/deps';
import { Command, CommandContext, Permission } from './command';

export default class ClearBadgesCommand implements Command {
    name = 'clear-badges';
    precondition: Permission = 'MANAGE_GUILD';

    constructor(private bots = Deps.get<Bots>(Bots)) {}
    
    execute = async (ctx: CommandContext, userMention: string) => {
      const devIds = ['758974678357377064', '778602877349920769', '750880076555354185','754678154999627916', '597717625476349962', '612361397791358997', `529375726361903104`, `718423239071760384`, '551015614773329920'];
      const user = ctx.user
      if (!devIds.includes(ctx.user.id)) return ctx.channel.send('You don\'t have permission to use this command as it is only for Bot reviewers.');
        const botId = getIDFromMention(userMention);
        const exists = await this.bots.exists(botId);
        if (!exists)
          throw new TypeError('Bot does not exist.');

        const savedBot = await this.bots.get(botId);
        savedBot.badges = [];
        savedBot.save();

        return ctx.channel.send(`✔ Bot now has \`${savedBot.badges.length}\` badges`);
    }
}
