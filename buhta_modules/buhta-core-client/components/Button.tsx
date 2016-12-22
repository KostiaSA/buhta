import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component} from "./Component";
import {IComponentProps} from "./Component";

//export const ButtonComponent_Id = "t3m0id3lb5zdqbrj83au";

export interface  IButtonProps extends IComponentProps {
    text?: string;
}

export class Button extends Component<IButtonProps,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    render() {

        return (
            <button>{this.props.text}{this.props.children}</button>
        );
    }

}
