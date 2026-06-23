module.exports = {
    uiPort: process.env.PORT || 8080,
    uiHost: "0.0.0.0",
    flowFile: 'flows.json',
    userDir: __dirname,
    functionGlobalContext: {},
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
