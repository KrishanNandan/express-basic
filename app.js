const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/pathFinder");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

/**Hosting Css file staticaly */
app.use(express.static(path.join(__dirname, "public")));

/**Order matters */
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
