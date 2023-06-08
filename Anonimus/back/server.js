const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appRoute = require('./routes/route.js')

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors({
  origin: '',
  credentials: true,
}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(bodyParser.json());



/** routes */
app.use('/api', appRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://:${PORT}`)
})
