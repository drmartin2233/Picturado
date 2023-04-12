import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name: "dzfgcibfh",
    api_key: "222234592475649",
    api_secret: "8_1QOEIziEeJf7VVj4jkxy4QMwk"
  });

  export default cloudinary;