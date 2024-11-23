import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = new Router();

router.get("/", (req, res) => {
  res.send(
    "connected to bingo-server successfully and server is successfully running"
  );
});

router.get("/get-pdf", (req, res) => {
  const filePath = path.join("/workspaces/rpm-complete-backend/readme.md");
  const randomname = "hellome";

  res.setHeader("Content-Disposition", `attachment; filename= ${randomname} `); // Change filename as needed

  res.sendFile(filePath, (err) => {
    if (err) {
      console.log(err);
      res.status(404).send("File not found");
    }
  });
});

export default router;
