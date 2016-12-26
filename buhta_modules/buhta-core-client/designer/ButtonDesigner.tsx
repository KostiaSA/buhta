import * as React from "react";
import {Input} from "../inputs/Input";
import {observer} from "mobx-react";
import {BaseComponentDesigner, IBaseComponentDesignerProps} from "./BaseComponentDesigner";
import {IButtonProps} from "../components/Button";

export interface  IButtonDesignerProps extends IBaseComponentDesignerProps {
    bindObject: IButtonProps;
}

@observer
export class ButtonDesigner extends BaseComponentDesigner<IButtonDesignerProps> {


    renderTitle(): JSX.Element[] {
        return [<h1 key="bagowbvx26" >Это дизайнер Баттона ({this.props.bindObject.text})</h1>];
    }

    renderEditors(): JSX.Element[] {
        return [
            ...super.renderEditors(),
            <Input key="6xsea7zdiu" bindObj={this.props.bindObject} bindProp="text"/>,
            <Input key="zqw3quy7fn" bindObj={this.props.bindObject} bindProp="text"/>
        ];
    }


}
