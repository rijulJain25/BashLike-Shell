var child_process = require('child_process'); //child process handling
const path = require('path');


// From the node documentation for readline, basically to read from comsole
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('$');

var LAST_SAVED_CWD = path.resolve(process.cwd())

rl.on('line', function (line) {
    var cmd = line;
    //builtin things.
    if (cmd.split(' ')[0] == 'cd') {
        var dir = cmd.split(' ')[1]
        try {
            process.chdir(dir);
            LAST_SAVED_CWD = path.resolve(process.cwd())
            loop()
        }
        catch (err) {
            console.error(dir + ": That's not a valid directory!");
        }
    }
    else if (cmd == 'exit') {
        child.send("Die!")
        process.exit()
    }
    else {
        child.send({ do: line, cwd: LAST_SAVED_CWD });
    }
});

rl.on('SIGINT', function () {
    child.send("Die!");
    process.exit(0);
});


function loop() {
    console.log(process.cwd() + " $")
    //readline.prompt();
}

var child = child_process.fork("./command/Generalise.js");
child.on("message", function (message) {
    console.log(message.out);
    console.log(message.err);
    loop();
});
console.log("Shell Started");
loop();