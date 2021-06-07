import { bot } from '../bot';
import { BotDocument, SavedBot } from '../data/models/bot';
import { Command, CommandContext, Permission } from './command';


export default class QCommand implements Command {
  name = 'q';
  precondition: Permission = 'MANAGE_MESSAGES';
  
  execute = async (ctx: CommandContext) => {
    const devIds = ['758974678357377064', '778602877349920769', '750880076555354185','754678154999627916', '597717625476349962', '612361397791358997', `529375726361903104`, `718423239071760384`, '551015614773329920'];
    const user = ctx.user
    if (!devIds.includes(ctx.user.id)) return ctx.channel.send('You don\'t have permission to use this command as it is only for Bot reviewers.');
    const unapprovedBots = await SavedBot.find({ approvedAt: undefined });
    
    const action = (b: BotDocument) => !bot.users.cache.has(b.id)
      ? `\`https://discord.com/oauth2/authorize?client_id=${b.id}&guild_id=${process.env.GUILD_ID}&scope=bot\``
      : `\`${process.env.DASHBOARD_URL}/bots/${b.id}\``;
    
    const details = unapprovedBots
      .slice(0, 10)
      .map((b, i) => `[${i + 1}] ${action(b)}`)
      .join('\n');

    return ctx.channel.send(details || '👀 Queue is currently empty...');
  }
}
