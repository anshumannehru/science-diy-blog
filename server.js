const express = require('express');
const app = express();
const connectDB = require('./config/mongo.config');
connectDB();/*mongodb connection established*/
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 5000;

/*Route middlewares*/
app.use('/api/auth',require('./routes/api/Auth.Admin'));
app.use('/api/register',require('./routes/api/Admin.Register'));
app.listen(PORT,()=>console.log(`server started at port ${PORT}`));
