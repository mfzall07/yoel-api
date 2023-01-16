import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from 'dotenv';
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from './routes/UserRoute.js';
import ListContactRoute from './routes/ListContactRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import MissionRoute from './routes/MissionRoute.js';
import VisiRoute from './routes/VisiRoute.js';
import QuotesRoute from './routes/QuotesRoute.js';


dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store)

const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();    
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true,
    origin: [
        'http://localhost:3000', 
    ]
}))

app.use(express.json())
app.use(UserRoute);
app.use(ListContactRoute);
app.use(AuthRoute);
app.use(MissionRoute);
app.use(VisiRoute);
app.use(QuotesRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server Running', process.env.APP_PORT )
});