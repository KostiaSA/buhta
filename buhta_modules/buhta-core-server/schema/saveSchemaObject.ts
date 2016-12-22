
import {getSchemaMongoDb} from "./getSchemaMongoDb";
import {getInstantPromise} from "../utils/getInstantPromise";
import {getRandomString} from "../utils/getRandomString";
import {ISchemaObject} from "buhta-core-api/schema/ISchemaObject";

export async function saveSchemaObject(obj: ISchemaObject): Promise<void> {

    let db = await getSchemaMongoDb();
    var collection = db.collection("SchemaObject");
    if (obj._id === undefined)
        obj._id = getRandomString();
    //console.log("saveSchemaObject", obj);

    // конвертацию через JSON не убирать, мы избавляемся от observable, иначе массивы не сохраняются
    let result = await collection.updateOne({_id: obj._id}, JSON.parse(JSON.stringify(obj)), {upsert: true});

    if (result.upsertedCount + result.modifiedCount !== 1)
        throw `error saveSchemaObject(_id=${obj._id})`;

    return getInstantPromise<void>(undefined);
}
