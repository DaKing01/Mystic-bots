import { Command, CommandContext, Permission } from './command';
const { Client, message, edit, cdseconds, MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

export default class HelpCommand implements Command {
    name = 'stats';
    precondition: Permission = 'MANAGE_MESSAGES';
    
    execute = async (ctx: CommandContext) => {
      const devIds = ['758974678357377064', '778602877349920769', '750880076555354185','754678154999627916', '597717625476349962', '612361397791358997', `529375726361903104`, `718423239071760384`, '551015614773329920'];
      const user = ctx.user
      if (!devIds.includes(ctx.user.id)) return ctx.channel.send('You don\'t have permission to use this command as it is only for Bot reviewers.');

        const embedd = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Welcome to Mystics live stats!')
        .addFields(
          { name: ' API:', value: `-> LIVE` },
          { name: '\u200B', value: '\u200B' },
          { name: ' Website:', value: `-> LIVE`, inline: true },
          { name: ' Login:', value: `-> LIVE`, inline: true },
          { name: ' Bot:', value: `-> LIVE`, inline: true },
          { name: ' Management Portal:', value: `-> LIVE`, inline: true },
          { name: ' Shards:', value: `-> 1`, inline: true },
          { name: ' RAM:', value: `-> 30%`, inline: true },
          { name: ' CPU:', value: `-> 10%`, inline: true },
          { name: ' Undergoing maintenance:', value: `-> NO`, inline: true },
          { name: ' API delay:', value: `-> 254ms`, inline: true },

        )
        .setTimestamp()
        .setFooter('https://dash.mysticbot.xyz');

        const newembedd = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Welcome to Mystics live stats!')
        .addFields(
          { name: ' API:', value: `-> LIVE` },
          { name: '\u200B', value: '\u200B' },
          { name: ' Website:', value: `-> LIVE`, inline: true },
          { name: ' Login:', value: `-> LIVE`, inline: true },
          { name: ' Bot:', value: `-> LIVE`, inline: true },
          { name: ' Management Portal:', value: `-> LIVE`, inline: true },
          { name: ' Shards:', value: `-> 1`, inline: true },
          { name: ' RAM:', value: `-> 30%`, inline: true },
          { name: ' CPU:', value: `-> 10%`, inline: true },
          { name: ' Undergoing maintenance:', value: `-> NO`, inline: true },
          { name: ' API delay:', value: `-> 254ms`, inline: true },

        )
        .setTimestamp()
        .setFooter('https://dash.mysticbot.xyz');

      ctx.channel.send(embedd);      

    }
}
