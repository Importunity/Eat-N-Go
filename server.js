import morgan from 'morgan';
import express from 'express';
import path from 'path';
import './config/config.js';
const app = express();

// api routes
//const authRoutes = require('./routes/api/auth_api');
//const userRoutes = require('./routes/api/user_api');
import authRoutes from './routes/api/auth_api.js';
import userRoutes from './routes/api/user_api.js';
//import shopRoutes from './routes/api/shop_api.js';
//import reviewRoutes from './routes/api/review_api.js';


app.use(express.json());
// logger
app.use(morgan("dev"));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
//app.use('/api/shops', shopRoutes);
//app.use('/api/users', reviewRoutes);



if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*", (request, response) => {
        response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})