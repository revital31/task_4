const express = require("express");
const app = express();
const { pool } = require("../pool/dbconnection");
const cors = require("cors");

app.use(
  cors({
    mode: "no-cors",
    origin: "http://localhost:3000",
  })
);

app.route("/product").get((req, res) => {
  pool.query(
    "SELECT p.id, p.name ,p.price ,M.name AS manufacturer, p.units,p.time FROM test_4.products AS P LEFT JOIN test_4.manufacturers AS m ON p.manufacturer=m.id;",
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.route("/api/products/:id/units").post((req, res) => {
  pool.query(" UPDATE test_4.products SET units ?  WHERE id= '?';", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
