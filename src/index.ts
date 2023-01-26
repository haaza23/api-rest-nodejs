import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.routes';
import appRoutes from './routes/app.routes';
import 'dotenv/config'

const app = express();

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});



appRoutes(app)
app.use('/users', userRoutes)
