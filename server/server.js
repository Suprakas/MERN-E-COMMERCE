const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dns = require("dns");
const authRouter = require("./routes/auth/auth-routes");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

mongoose.connect(
    "mongodb+srv://suprakashballav:suprakashballav1997@cluster123.7rygusb.mongodb.net/"
)
.then(() => console.log("MongoDB connected"))
.catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});