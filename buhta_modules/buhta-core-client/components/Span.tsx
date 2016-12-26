import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";


export interface  ISpanProps extends IComponentProps {

}

export class Span extends Component<ISpanProps> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    render() {

        return (
            <span>{this.props.children}</span>
        );
    }

}
