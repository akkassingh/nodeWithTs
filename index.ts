import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import messenger from './src/controllers/createMessage';
import { Settings } from './settings';

const app = express();

//instance of our class
let messages = new messenger(Settings.PORT);
const dataConnection = (user: string, pass: string, db: string): string => {
  return `mongodb://${user}:${pass}@ds219839.mlab.com:19839/${db}`;
};

let databse = dataConnection(
  Settings.mlabUser,
  Settings.mlabPass,
  Settings.mlabDatabase
);

// mongoose connection
mongoose.connect(databse, {
  useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

//generics 
function nameCreator<T>(name: T): T {
    return name;
}

let myName = nameCreator<string>('akkas,');

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => res.send(messages.messagePrint()));

app.listen(Settings.PORT, () => console.log(myName, messages.messagePrint()));
