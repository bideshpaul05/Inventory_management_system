import express from "express";
import cors from "cors";
import routes from "./Routes/product.js";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
// import fs from "fs";
import dotenv from 'dotenv'
dotenv.config()
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: ["https://inventory-management-system-mvej.vercel.app/"],
    methods: ["POST", "GET","PUT","DELETE"],
    credentials: true
}
));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
  console.log(req.file.path);
  cloudinary.uploader.upload(req.file.path, function (err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    console.log(result.url);
    return res.status(200).json(result.url);
  });
  // fs.unlink('public'+req.file.path,(err)=>{
  //   if(err) console.log(err)
  // })
});
app.use("/api/products", routes);

app.listen(process.env.PORT, () => {
  console.log("server is running on "+ process.env.PORT );
});
