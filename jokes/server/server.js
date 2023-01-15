const express = require('express');
const app = express();
const PORT = 8000;

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/joke.routes")(app);

app.listen(PORT, () => console.log("Listening on port" + PORT))