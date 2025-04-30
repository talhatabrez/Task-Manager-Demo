const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const taskRoutes = require('./routes/taskRoutes');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('server started'))
    .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send('API is running!');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));