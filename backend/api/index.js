const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const agentsRoute = require("./routes/agents");
const propertiesRoute = require("./routes/properties");

const port = 8800;
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successfully!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/properties", propertiesRoute);
app.use("/api/agents", agentsRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});