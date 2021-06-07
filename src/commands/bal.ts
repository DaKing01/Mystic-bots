import { Command, CommandContext, Permission } from './command';
const { Client, MessageEmbed } = require('discord.js');
const mongoCurrency = require('discord-mongo-currency-fork');

export default class HelpCommand implements Command {
    name = 'bal';
    precondition: Permission = 'SEND_MESSAGES';
    
    execute = async (ctx: CommandContext) => {
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
