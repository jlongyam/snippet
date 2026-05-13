import Core from './core.js';
import './plugin.js';

const app = new Core();
app.baseMethod();
app
  .log('Starting...')
  .timestamp()
;
