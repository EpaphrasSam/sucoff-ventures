const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const archiver = require("archiver");

const OUT_DIR = path.join(__dirname, "..", "out");
const ZIP_NAME = "sucoff-ventures-deploy.zip";
const ZIP_PATH = path.join(__dirname, "..", ZIP_NAME);

console.log("Building... (npm run build)\n");
execSync("npm run build", { stdio: "inherit", cwd: path.join(__dirname, "..") });

if (!fs.existsSync(OUT_DIR)) {
  console.error("Build failed: out folder not found.");
  process.exit(1);
}

console.log("\nZipping contents of out/ into " + ZIP_NAME + " ...");

const output = fs.createWriteStream(ZIP_PATH);
const archive = archiver("zip", { zlib: { level: 6 } });

output.on("close", () => {
  console.log("Done. Upload '" + ZIP_NAME + "' to public_html in cPanel and Extract.");
});

archive.on("error", (err) => {
  console.error(err);
  process.exit(1);
});

archive.pipe(output);
archive.directory(OUT_DIR, false);
archive.finalize();
