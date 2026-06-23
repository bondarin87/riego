module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    flowFile: 'flows.json',
    userDir: __dirname,
    
    // Configuración de seguridad oficial
    adminAuth: {
        type: "credentials",
        users: [{
            username: "sergei", // <-- REEMPLAZA: Pon aquí tu nombre de usuario entre las comillas
            password: "$2a$12$MFvOMOd1xX2u93fhZQPt/OippAqIybCfQip5YJx0xQ4PQ3x3jScIq", // <-- REEMPLAZA: Pega aquí todo el texto largo que empieza con $2a$ o $2b$
            permissions: "*"
        }]
    },
    
    // Esto repara el error "Cannot GET /dashboard/" forzando la ruta correcta
    // Configuración correcta para Dashboard 2.0 en Node-RED v4
    dashboard: {
        ui: {
            path: "dashboard"
        }
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
