module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    flowFile: 'flows.json',
    userDir: __dirname,
    
    // Aquí activamos la seguridad usando tus variables de Render
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME || "admin",
            // Esta línea acepta la contraseña en texto plano desde Render
            password: process.env.NODE_RED_PASSWORD ? require('crypto').createHash('sha256').update(process.env.NODE_RED_PASSWORD).digest('hex') : "admin",
            permissions: "*"
        }]
    },
    
    functionGlobalContext: {},
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
