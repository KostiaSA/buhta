import * as React from "react";
import {IPersistentObject} from "buhta-core-api/schema/IPersistentObject";

export interface BaseDataTypeClass {
    new(): BaseDataType;
}

export let registeredDataTypes: {[classId: string]: BaseDataTypeClass;} = {};

export function registerDataType(classId: string, handler: BaseDataTypeClass) {

}


export interface IBaseDataType extends IPersistentObject {

}


export class BaseDataType {

    // getName(): string {
    //     throwAbstractError();
    //     throw "fake";
    // }
    //
    // getNameEx(): string {
    //     throwAbstractError();
    //     throw "fake";
    // }
    //
    // toString(): string {
    //     return this.getNameEx();
    // }

    // getDesignerEditor(): JSX.Element | null {
    //     throwAbstractError();
    //     throw "fake";
    // }
    //
    // getEditor(): JSX.Element {
    //     throwAbstractError();
    //     throw "fake";
    // }

    // getCreateTableColumns(): CreateColumn[] {
    //     throwAbstractError();
    //     throw "fake";
    // }

    // getIsNumeric(): boolean {
    //     return false;
    // }
    //
    // getIsAllowedInIndex(): boolean {
    //     return true;
    // }
}