import * as React from "react";
import {ISchemaObject} from "buhta-core-api/schema/ISchemaObject";
import {ISqlTableColumn} from "./SqlTableColumn";


export interface ISqlTable extends ISchemaObject {

    name: string;

    description: string;

    columns: ISqlTableColumn[];

    //indexes: SchemaTableIndex[] = [];

    // isQuerySourceObject(): boolean {
    //     return true;
    // }

    // getSelectTable(): Promise<SelectTable> {
    //     return getInstantPromise<SelectTable>({tableName: this.name});
    // }

}

// registerSchemaObjectType({
//     id: SCHEMA_TABLE_TYPE_ID,
//     name: "Таблица",
//     description: "Sql таблица",
//     type: SchemaTable,
//     icon: SCHEMA_TABLE_ICON
// });

