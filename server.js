const express = require('express');
const app = express();
const cors = require('cors')
const connectDB = require('./config/mongo.config');
connectDB();/*mongodb connection established*/
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())
const PORT = process.env.PORT || 5000;

/*Route middlewares*/
app.use('/api/auth',require('./routes/api/Auth.Admin'));
app.use('/api/register',require('./routes/api/Admin.Register'));
app.use('/api/activitypage',require('./routes/api/Admin.ActivityPage'));
app.listen(PORT,()=>console.log(`server started at port ${PORT}`));

