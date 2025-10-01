const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: ["http://localhost:8081", "http://localhost:3000"],
  methods: "GET, POST, PUT, PATCH, DELETE",
  headers: "Content-Type, Authorization",
  optionsSuccessStatus: 200,
  credential: true,
};

app.use(express.json());
app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "8889",
  user: "root",
  password: "root",
  database: "crudnode_db",
});
// .then((connection) => {
//   console.log("Connected to database");
// });

app.get("/", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
