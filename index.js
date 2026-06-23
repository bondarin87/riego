const { exec } = require('child_process');

// Arranca Node-RED usando los comandos del sistema
const nodeRed = exec('npm start');

nodeRed.stdout.on('data', (data) => {
    console.log(data.toString());
});

nodeRed.stderr.on('data', (data) => {
    console.error(data.toString());
});

nodeRed.on('exit', (code) => {
    console.log(`Node-RED se detuvo con el código: ${code}`);
    process.exit(code);
});
