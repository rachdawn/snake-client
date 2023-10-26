const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Received data:", data);
  });
  // print when successfully connected
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("name: RDL");});
  
  setTimeout(() => {
    conn.write("Move: up");
  }, 3000);

  return conn;
};


module.exports = { connect };
