import { IPersistentObject } from "./IPersistentObject";
export interface ISchemaObject extends IPersistentObject {
    _id: string;
    parentObjectId?: string;
    name: string;
    description?: string;
    createDate: Date;
    createUserId: string;
    changeDate?: Date;
    changeUserId?: string;
    lockDateTime?: Date;
    lockedByUserId?: string;
    position?: number;
    serverModule?: string;
}
