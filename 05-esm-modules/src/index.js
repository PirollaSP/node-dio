import { disconnectDatabase, databaseType } from "./utils/database.js";
import {getDataFromApi} from './utils/api.js'


getDataFromApi();
disconnectDatabase();
