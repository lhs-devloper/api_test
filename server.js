import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import apiUserRouter from './Routes/apiUserRouter';

const app = express();
const logger = morgan("dev");
const Port = 4000

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true, }));
app.use("/api/User", apiUserRouter)


app.listen(Port, () => { console.log("Hello") });