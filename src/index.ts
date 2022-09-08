import express, { json } from 'express';
import { config as configEnv } from 'dotenv';
import morgan from 'morgan';
import volcanoesRouter from './router/volcanoes.routes';
import connectDB from './config/db.config';

configEnv();
connectDB();

const app = express();

app.use(morgan('dev'));
app.use(json());

const PORT = process.env.API_PORT || 8000;

app.get('/', (req, res)=>{
    res.status(200);
    res.setHeader('X-NANANANAN', 'Batman!');
    if(req.accepts('json')){
        res.json({message: 'OK'})
    }else{
        res.send('<h1>OK</h1>');
    }
})

app.get('/coucou', (req, res) => {
    res.send('coucou');
});

// import des routes
app.use('/volcanoes', volcanoesRouter);

app.listen(PORT, ()=>{
    console.log(`Serveur lancé sur le port ${PORT}`);
});
