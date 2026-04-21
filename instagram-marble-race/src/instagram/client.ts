import axios from 'axios';
import { env } from '../config/env.js';

export const instagramClient = axios.create({
  baseURL: 'https://graph.facebook.com/v22.0',
  timeout: 20_000,
  params: {
    access_token: env.INSTAGRAM_ACCESS_TOKEN
  }
});
