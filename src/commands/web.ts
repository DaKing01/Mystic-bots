import { Command, CommandContext, Permission } from './command';
const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
const disbut = require('discord-buttons')(client);


export default class HelpCommand implements Command {
    name = 'web';
    precondition: Permission = 'SEND_MESSAGES';
    
    execute = async (ctx: CommandContext, TextChannel, Message, msg) => {

        return ctx.channel.send("https://mysticbot.xyz");

    }
}