const { connect } = require("./client");
const net = require("net");


let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };

const handleUserInput = function(key) {   
    if (key === "\u0003") {
        process.exit();
    };
    if (key === "w") {
        connection.write('Move: up');
        connection.write('Say: UP');
    };
    if (key === "a") {
        connection.write('Move: left');
        connection.write('Say: LEFT');
    };
    if (key === "s") {
        connection.write('Move: down');
        connection.write('Say: DOWN');
    };
    if (key === "d") {
        connection.write('Move: right');
        connection.write('Say: RIGHT');
    };
};

module.exports = { setupInput };

/*process.stdin.on("data", (key) => {
        process.stdout.write(".")
    })*/