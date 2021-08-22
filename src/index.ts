import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Express initializing
const app = express();

// Production SPA
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get("*", (req, res, next) => {
    if (req.path.match(/^\/api\/.*$/)) next();
    else res.sendFile(__dirname + "/public/index.html");
  });
}

/// Middlewares
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Listen specific port
app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
