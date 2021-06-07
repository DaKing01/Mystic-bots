import { Command, CommandContext, Permission } from './command';
const { Client, MessageEmbed } = require('discord.js');

export default class HelpCommand implements Command {
    name = 'premium';
    precondition: Permission = 'SEND_MESSAGES';
    
    execute = async (ctx: CommandContext) => {

        const embedd = new MessageEmbed()
        .setColor('WHITE')
        .setTitle('Premium!')
        .addFields(
          { name: ' Booster', value: `$150 | Mystic coin` },
          { name: '\u200B', value: '\u200B' },
          { name: ' VIP', value: `$150 | Mystic coin`, inline: true },
          { name: ' VIP+', value: `$1500 | Mystic coin`, inline: true },
          { name: ' Temp 1# place on website', value: `$2500 | Mystic coin`, inline: true },
          { name: ' Featured badge', value: `$9500 | Mystic coin`, inline: true },
        )
        .setTimestamp()
        .setFooter('https://dash.mysticbot.xyz');
      return ctx.channel.send(embedd);

    }
}
