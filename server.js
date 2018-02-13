const express = require("express");
const cors = require("cors");
const PORT = process.env.port || 9000;

const app = express();

app.use(cors());

app.get("/", (req, resp) => {
    resp.send("<h1>App is working! Now with Nodemon</h1>");
});

app.get("/api/test-route", (req, resp) => {
    resp.send("<h1> this is another H1 <h1>")
});

app.get("/api/get-user", (req, resp) => {
    resp.send({
        username: "Bob",
        email: "bob@now.com",
        Name: "Harry"
    });
});

app.get("/api/get-articles",(req, resp) => {
    resp.send(["1", "2", "3"])
});

app.listen(PORT, () => {
    console.log("app running on PORT: " + PORT)
});