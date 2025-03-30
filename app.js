const express = require("express");



const app = express();


const PORT = 4200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})