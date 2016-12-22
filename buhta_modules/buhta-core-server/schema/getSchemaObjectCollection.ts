import {Collection} from "mongodb";
import {getSchemaMongoDb} from "./getSchemaMongoDb";

export async function getSchemaObjectCollection(): Promise<Collection> {
    let db = await getSchemaMongoDb();
    return db.collection('SchemaObject');
}