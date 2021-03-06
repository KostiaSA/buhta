import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";
import {IBaseLayoutProps} from "./BaseLayout";
import {observer} from "mobx-react";
import {IColumnElementProps, ColumnElement} from "./ColumnElement";
import {getRandomString} from "../utils/getRandomString";

type columnWidth = "1/1" | "1/2" | "1/3" |"1/4" |"1/6" | "2/3" | "3/4" | "5/6";

export interface  IColumnProps extends IComponentProps {
    width: columnWidth;
    elements?: IColumnElementProps[];
}

@observer
export class Column extends Component<IColumnProps> {
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

        let elements: JSX.Element[] = [];
        if (this.props.elements) {
            elements = this.props.elements.map<JSX.Element>((item: IColumnElementProps, index: number) => {
                return <ColumnElement designMode={this.props.designMode} key={index} {...item}></ColumnElement>
            });
        }

        if (this.props.designMode) {

            let style: React.CSSProperties = {};
            style.border = "1px solid silver";
            style.height = 200;
            style.position="relative";

            let toolbarStyle:React.CSSProperties={
                position: "absolute",
               top: -1,
               left: -1
            };


            let toolButtonStyle:React.CSSProperties={
                borderBottomRightRadius:0,
                borderBottomLeftRadius:0,
                borderTopRightRadius:0,
                borderTopLeftRadius:0,
                color:"gray"
            };

            return (
                <div className={className+" draggableColumn"}>
                    <div  style={style}>
                        <div className="btn-group" style={toolbarStyle}>
                            <button style={toolButtonStyle}  type="button" className="btn btn-default">{this.props.width}</button>
                            <button style={toolButtonStyle}  type="button" className="btn btn-default"><i className="fa fa-pencil-square-o"></i></button>
                            <button style={toolButtonStyle} type="button" className="btn btn-default"><i className="fa fa-files-o"/></button>
                            <button style={toolButtonStyle} type="button" className="btn btn-default"><i className="fa fa-trash"/></button>
                        </div>
                        col {this.props.width}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={className}>
                    {elements}
                    {this.props.children}
                </div>
            )
        }
    };


}
