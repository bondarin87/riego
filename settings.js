module.exports = {
    flowFile: 'flows.json',
    userDir: __dirname,
    functionGlobalContext: {},
    webDir: __dirname + '/public',
    dashboard: {
        title: 'Riego Garden Panel'
    },
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
