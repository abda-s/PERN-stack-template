const express = require("express");
const cors = require("cors");
const morgan = require("morgan") // for dev logs
const dotenv = require("dotenv");
dotenv.config();


const app = express();
const port = process.env.SERVER_PORT;


app.use(express.json());
app.use(morgan("dev"))


app.use(cors({
    origin: [process.env.FRONTEND_URL], // Array of allowed origins
}));



// const authRoutes = require("./routes/authRoutes")
// app.use('/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
