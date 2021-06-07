import Bots from '../data/bots';
import { handleFeedback } from '../modules/reviewal';
import { getUserFromMention } from '../utils/command-utils';
import Deps from '../utils/deps';
import { Command, CommandContext, Permission } from './command';

export default class AcceptCommand implements Command {
  aliases = ['approve'];
  name = 'accept';
  precondition: Permission = 'MANAGE_MESSAGES';

  constructor(private bots = Deps.get<Bots>(Bots)) {}
  
  execute = async (ctx: CommandContext, userMention: string, ...reason: string[]) => {
    const devIds = ['758974678357377064', '778602877349920769', '750880076555354185','754678154999627916', '597717625476349962', '612361397791358997', `529375726361903104`, `718423239071760384`, '551015614773329920'];
    const user = ctx.user
    if (!devIds.includes(ctx.user.id)) return ctx.channel.send('You don\'t have permission to use this command as it is only for Bot reviewers.');
    const botUser = getUserFromMention(userMention);
    const exists = await this.bots.exists(botUser.id);
    if (!exists)
      throw new TypeError('Bot does not exist.');

    const message = reason.join(' ');
    if (message.length < 50)
      throw new TypeError('Reason must be >= 50 characters long.');

    await handleFeedback(botUser.id, {
      approved: true,
      by: ctx.user.id,
      message
    });

    return ctx.channel.send(`✅ Success`);
  }
}
