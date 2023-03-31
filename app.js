import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import web from './routes/web.js';

const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine' , 'ejs');
app.use(cookieParser());

// Session
app.use(session({
    name:'Demo Cookie',
    secret:'I am Key',
    resave:true,
    saveUninitialized:true,
    cookie:{maxAge:10000 , path:'/getsessioninfo'}
}))

app.use('/' , web);

app.listen(3000 , ()=>{
    console.log(`Server listening On Port http://127.0.0.1:3000`);
})