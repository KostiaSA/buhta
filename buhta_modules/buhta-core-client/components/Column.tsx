import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";
import {IBaseLayoutProps} from "./BaseLayout";
import {observer} from "mobx-react";

type columnWidth = "1/1" | "1/2" | "1/3" |"1/4" |"1/6" | "2/3" | "3/4" | "5/6";

export interface  IColumnProps extends IComponentProps {
    width: columnWidth;
}

@observer
export class Column extends Component<IColumnProps,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    render(): JSX.Element {

        let className = "col-md-";
        if (this.props.width === "1/1") className += "12";
        if (this.props.width === "1/2") className += "6";
        if (this.props.width === "1/3") className += "4";
        if (this.props.width === "1/4") className += "3";
        if (this.props.width === "1/6") className += "2";
        if (this.props.width === "2/3") className += "8";
        if (this.props.width === "3/4") className += "9";
        if (this.props.width === "5/6") className += "10";

        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    };


}
