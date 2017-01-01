import {IPersistentObject} from "../../buhta-core-api/schema/IPersistentObject";

export interface ISqlTableColumn extends IPersistentObject {
    name: string;
 //   dataType: BaseDataType;
    description: string;
    notNull: boolean;
    primaryKey: boolean;
}

