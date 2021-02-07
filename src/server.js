import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./event";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));
app.get("/", (req, res) => res.render("home", { events: events }));
// JSON.stringify(events);

const handleListening = () => {
  console.log(`😎 Server Running: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

// 이 부분은 서버의 메모리라고 생각하면 된다.

io.on("connection", (socket) => socketController(socket));
