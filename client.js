const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // print when successfully connected
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });

  conn.write("Name: RDL"); {
  };

  conn.on("data", (data) => {
    console.log("Received data:", data);
  });  

  /*setTimeout(() => {
    conn.write("Move: up");
  }, 3000);*/

  return conn;
};

/* "Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) */

module.exports = { connect };
