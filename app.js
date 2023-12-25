const express = require("express");

const app = express();

app.use("/add-product",(req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
//   next(); // Allows the request to continue to the next middleware in line
});


/**For Routing */
app.use("/product", (req, res, next) => {
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
