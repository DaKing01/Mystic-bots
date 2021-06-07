import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'ping';
    
    execute = async (ctx: CommandContext, client) => {
        //ctx.channel.send(`🏓 Pong`);

        ctx.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            ctx.channel.send(`🏓Latency is ${ctx.user.createdTimestamp - ctx.user.createdTimestamp}ms. API Latency is MID-range`);
          }).catch (err => ctx.channel.send(err));
    }
}
