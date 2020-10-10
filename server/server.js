const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");

const cors = require("cors");

require("dotenv").config();

const multer = require("multer");

const userRouter = require("./routes/userRouter");

const rootDir = require("./utils/rootDir");

const db = require("./utils/db");

const app = express();

const port = process.env.PORT || 5000;

const fileStorage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "images");
   },
   filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + "-" + file.originalname);
   },
});

app.use(bodyParser.json());

app.use("/images", express.static(path.join(rootDir, "images")));

app.use(multer({ storage: fileStorage }).single("postImageURL"));

app.use(cors());

app.use(userRouter);

db.then(() => {
   console.log("connected to the database");
   app.listen(port, () => {
      console.log(`server is listening on port http://locathost:${port}`);
   });
}).catch((err) => console.log(err));
