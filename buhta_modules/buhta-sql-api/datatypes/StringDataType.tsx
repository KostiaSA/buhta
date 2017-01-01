import * as React from "react";
import {BaseDataType} from "./BaseDataType";

export class StringDataType extends BaseDataType {
    constructor(public column: SchemaTableColumn, public maxSize: number) {
        super(column);
        if (this.maxSize === undefined)
            this.maxSize = 50;
    }

    getName(): string {
        return STRING_DATA_TYPE_NAME;
    }

    getNameEx(): string {
        return this.getName() + (this.maxSize === 0 ? "(max)" : "(" + this.maxSize + ")");
    }

    toString(): string {
        return this.getNameEx();
    }

    getDesignerEditor(): JSX.Element | null {
        return (
            <p className="control">
                <span className="caption" style={{marginRight:10}}>длина</span>
                <Input
                    type={InputType.Number}
                    style={{width:80}}
                    bindObject={this}
                    bindPropName="maxSize"
                />
            </p>
        )
    }

    getEditor(): JSX.Element {
        throwAbstractError();
        throw "fake";
    }

    getCreateTableColumns(): CreateColumn[] {
        let col: CreateColumn = {
            column: this.column.getSqlName(),
            dataType: "string",
            dataLen: this.maxSize,
            notNull: this.column.notNull,
            primaryKey: this.column.primaryKey,
        }
        return [col];
    }

    getIsNumeric(): boolean {
        return false;
    }
}

registerDataType({
    name: STRING_DATA_TYPE_NAME,
    description: STRING_DATA_TYPE_DESCRIPTION,
    type: StringDataType
});