import { Command, CommandContext, Permission } from './command';
const { Client, MessageEmbed } = require('discord.js');

export default class HelpCommand implements Command {
    name = 'help';
    precondition: Permission = 'MANAGE_MESSAGES';
    
    execute = async (ctx: CommandContext) => {
      const devIds = ['758974678357377064', '778602877349920769', '750880076555354185','754678154999627916', '597717625476349962', '612361397791358997', `529375726361903104`, `718423239071760384`, '551015614773329920'];
      const user = ctx.user
      if (!devIds.includes(ctx.user.id)) return ctx.channel.send('You don\'t have permission to use this command as it is only for Bot reviewers.');

        const embedd = new MessageEmbed()
        .setColor('WHITE')
        .setTitle('Help!')
        .addFields(
          { name: ' 🔨 Mystic accept <bot> <reason>', value: `-> accept bot user with reason` },
          { name: '\u200B', value: '\u200B' },
          { name: ' 🔨 Mystic delete <bot> <reason>', value: `-> delete a bot from the list`, inline: true },
          { name: ' 🔨 Mystic decline <bot> <reason>', value: `-> decline bot user with reason`, inline: true },
          { name: ' 🔨 Mystic help', value: `-> show this`, inline: true },
          { name: ' 🔨 Mystic q', value: `-> show approval queue`, inline: true },
          { name: ' 🅰 Mystic add-badge <bot> <badge_name>', value: `-> add a badge to a bot`, inline: true },
          { name: ' 🅰 Mystic clear-badges <bot>', value: `-> clear badges from a bot`, inline: true },
          { name: ' ✅ Mystic ping', value: `-> Mystic ping lmao`, inline: true },

        )
        .setTimestamp()
        .setFooter('https://dash.mysticbot.xyz');
      return ctx.channel.send(embedd);

    }
}
