const bodyparser = require('body-parser');
const express = require("express");
const path = require('path');
const app = express();

let PORT = process.env.port || 3000;

// Setting the view engine to EJS and specifying views directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(bodyparser.urlencoded({ extended: true })); // Parses URL-encoded bodies
app.use(bodyparser.json()); // Parses JSON bodies
app.use(express.static(path.join(__dirname, "public"))); // Serves static files (CSS, JS)

// Route to render the form
app.get("/", (req, res) => {
    res.render("index"); // Renders SampleForm.ejs from the views folder
});

// Route to handle form submission
app.post('/saveData', (req, res) => {
    console.log("Using Body-parser: ", req.body.email); // Logs the email from the form
    res.send(`Email received: ${req.body.email}`); // Sends confirmation response
});

// Start the server
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log("Server created Successfully on PORT", PORT);
});
