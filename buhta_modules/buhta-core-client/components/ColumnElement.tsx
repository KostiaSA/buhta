import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {observer} from "mobx-react";


export interface  IColumnElementProps extends IComponentProps {

}

@observer
export class ColumnElement extends Component<IColumnElementProps> {

    render(): JSX.Element {

        return (
            <div>
                Это элемент
                {this.props.children}
            </div>
        )
    };


}
