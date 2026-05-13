// good for event driver
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    }
    
    emit(event, ...args) {
        (this.events[event] || []).forEach(cb => cb(...args));
    }
}

class Application extends EventEmitter {
    constructor() {
        super();
        this.plugins = [];
    }
    
    loadPlugin(PluginClass, options = {}) {
        const plugin = new PluginClass(this, options);
        
        // Extend application prototype with plugin methods
        if (plugin.methods) {
            Object.entries(plugin.methods).forEach(([name, method]) => {
                if (!this[name]) {
                    this[name] = method.bind(this);
                }
            });
        }
        
        // Add event listeners
        if (plugin.listeners) {
            Object.entries(plugin.listeners).forEach(([event, handler]) => {
                this.on(event, handler.bind(plugin));
            });
        }
        
        this.plugins.push(plugin);
        this.emit('pluginLoaded', plugin);
        
        return plugin;
    }
}

// Example plugin
class DatabasePlugin {
    constructor(app, options) {
        this.app = app;
        this.options = options;
        
        // Methods to add to app
        this.methods = {
            query: (sql) => this.query(sql),
            insert: (table, data) => this.insert(table, data)
        };
        
        // Event listeners
        this.listeners = {
            'beforeShutdown': () => this.closeConnection(),
            'startup': () => this.connect()
        };
    }
    
    connect() {
        console.log('Connected to database');
        this.app.emit('dbConnected', this.options);
    }
    
    query(sql) {
        console.log('Executing:', sql);
        return { results: [] };
    }
    
    insert(table, data) {
        console.log(`Insert into ${table}:`, data);
        return { id: Date.now() };
    }
    
    closeConnection() {
        console.log('Database connection closed');
    }
}

// Usage
const app = new Application();
app.loadPlugin(DatabasePlugin, { host: 'localhost', port: 5432 });

app.query('SELECT * FROM users');  // Plugin method available on app
app.emit('startup');                // Triggers plugin's connect method