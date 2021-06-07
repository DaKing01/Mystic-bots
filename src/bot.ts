import { config } from 'dotenv';
config({ path: '.env' });

import { Client } from 'discord.js';
import mongoose from 'mongoose';
import Deps from './utils/deps';

import EventsService from './services/events.service';
import { API } from './api/server';
import Log from './utils/log';
import { PostStats } from 'api-mystic-stats';

const stats = new PostStats({
    apiToken: '',
    botToken: ''
  });
  
  stats.on('postStats', (res) => console.log(res.ok ? 'Posted stats.' : 'Failed to post stats.'));

export const bot = new Client();

bot.login(process.env.BOT_TOKEN);

Deps.get<EventsService>(EventsService).init();
Deps.build(API);

mongoose.connect(process.env.MONGO_URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false 
}, (error) => error
    ? Log.error('Failed to connect to db', 'bot')
    : Log.info('Connected to db', 'bot'));