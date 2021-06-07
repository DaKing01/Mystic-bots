import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'admin';
    precondition: Permission = 'MANAGE_MESSAGES';
    
    execute = async (ctx: CommandContext, TextChannel, Message, msg) => {

        return ctx.channel.send("https://staff-sign-in.3dprintingkingp.repl.co/!");

    }
}