import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";
import {IBaseLayoutProps} from "./BaseLayout";
import {observer} from "mobx-react";


export interface  IRowProps extends IComponentProps {
    //rows?: IRowsProps;
}

@observer
export class Row extends Component<IRowProps,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    render(): JSX.Element {

        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    };


}
