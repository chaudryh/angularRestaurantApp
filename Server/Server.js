const express = require('express');
const app = express();
const mongoose = require('mongoose')
const urouter = require('./routes/userrouter');
const krouter = require('./routes/kitchenroter');
const prouter = require('./routes/providerrouter');
const mrouter = require('./routes/menurouter');
const orouter = require('./routes/orderrouter');

app.use('/api/kitchen',krouter);
app.use('/api/menu',mrouter)
app.use('/api/order',orouter)
app.use('/api/users', urouter);
app.use('/api/provider',prouter);


//set up mongodb connection
mongoose.connect('mongodb://localhost/usersproj2')
.then(() => console.log('Connected!'))
.catch((err) => console.error('Error Msg',err));

app.get('/',(req,res) => {
    res.send('Default Route');
});

const port = process.env.port || 4000;

app.listen(port);
console.log('Listening on port ' + port + '...');