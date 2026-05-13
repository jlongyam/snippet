import Core from './core.js';

Core.plugin((instance) => {
  instance.log = (message) => {
    console.log(`[Log]: ${message}`);
    return instance;
  };
  
  instance.timestamp = () => {
    console.log(`[Time]: ${Date.now()}`);
    return instance;
  };
});