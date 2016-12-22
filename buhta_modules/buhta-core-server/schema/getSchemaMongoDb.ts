import {Db, MongoClient, MongoClientOptions, ServerOptions, DbCreateOptions} from "mongodb";
import {config} from "../config/config";

export async function getSchemaMongoDb(): Promise<Db> {

    let serverOptions: ServerOptions = {
        poolSize: config.schemaMongoDbPoolSize
    };

    let connectOptions: MongoClientOptions = {
        server: serverOptions
    };

    return MongoClient.connect(config.schemaMongoDbUrl, connectOptions);
}
