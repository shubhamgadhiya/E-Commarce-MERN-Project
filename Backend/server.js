const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const db = require("./db/database");
const router = require('./routes/routes');
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
    res.send('Api is working');
});
app.use("/api", router);

db.connect().then(()=> {
    console.log("Connected to database");
})
.catch(err => {
    console.log("Error connecting to database", err);

});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('image'), (req, res) => {
    try {
        res.json({ filename: req.file.filename });
    } catch (error) {
        res.status(400).send('Error uploading file');
    }
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})