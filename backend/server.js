require("dotenv").config()
const http=require("http")
const {Server}=require("socket.io")

const PORT=process.env.PORT|| 5000;
const CLIENT_URL=process.env.CLIENT_URL|| "http://localhost:5173";

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Server is runnig..");
});
const io=new Server(server,{
    cors:{
        origin:CLIENT_URL,
        methods:["GET","POST"],
        credentials:true
    }
});

io.on("connection",(socket)=>{
    console.log("User conected",socket.id);

    socket.on("message",(data)=>{
        io.emit("message",data);
        console.log("User:",socket.id," -> ",data);
    });

    socket.on("disconnect",()=>{
        console.log("User disconected");
    });
});

server.listen(PORT,()=>{
    console.log("Server running on port 5000");
});