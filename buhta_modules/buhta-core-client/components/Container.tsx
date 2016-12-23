import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";
import {IBaseLayoutProps} from "./BaseLayout";
import {observer} from "mobx-react";
import {IRowProps, Row} from "./Row";


export interface  IContainerProps extends IComponentProps {
    rows?: IRowProps[];
}

@observer
export class Container extends Component<IContainerProps,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    render(): JSX.Element {

        let rows:JSX.Element[] = [];
        if (this.props.rows) {
            rows = this.props.rows.map<JSX.Element>((item:IRowProps) => {
                return <Row {...item}></Row>
            });
        }

        return (
            <div className="container-fluid">
                {rows}
                {this.props.children}
            </div>
        )
    };


}
