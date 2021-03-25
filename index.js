const express = require("express");

const app = express();
app.get("/", (req, res) => {
    res.send("111111111111111111")
});
app.get("/api", (req, res) => {
    res.send({method: "GET"})
});

app.listen(4000, () => {
    console.log("server has ben started on http://localhost:4000/")

})