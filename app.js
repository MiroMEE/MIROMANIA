const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http');
const server = http.createServer(app);
//
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.get('/',(req,res)=>{
    res.render('index.ejs');
});


server.listen(PORT, () => console.info(`Listening on port ${PORT}`));