import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";


export interface  IDivProps extends IComponentProps {

}

export class Div extends Component<IDivProps> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    render() {

        return (
            <div>{this.props.children}</div>
        );
    }

}
