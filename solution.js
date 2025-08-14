import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files through middleware if u have anything under public foldr
//app.use(express.static("public"));

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route
app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    //console.log("API Response:", result.data);

    res.render("index", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.error("Error fetching secret:", error.message);
    res.status(500).send("Error fetching secret");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
