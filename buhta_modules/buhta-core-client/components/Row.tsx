import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";
import {IBaseLayoutProps} from "./BaseLayout";
import {observer} from "mobx-react";
import {IColumnProps, Column} from "./Column";
let Sortable = (window as any)["Sortable"];

export interface  IRowProps extends IComponentProps {
    columns?: IColumnProps[];
}

@observer
export class Row extends Component<IRowProps> {

    private nativeRow:Element;

    protected afterMount() {
        super.afterMount();

        var sortable = Sortable.create($(this.nativeRow)[0], {group: "draggableColumns", draggable: ".draggableColumn"});
        console.log("row afgter moijnty");
    }

    render(): JSX.Element {

        let columns: JSX.Element[] = [];
        if (this.props.columns) {
            columns = this.props.columns.map<JSX.Element>((item: IColumnProps, index: number) => {
                return <Column className="draggableColumn" designMode={this.props.designMode} key={index} {...item}></Column>
            });
        }

        return (
            <div className="row" ref={(e:Element)=>this.nativeRow=e}  style={{padding:15}}>
                {columns}
                {this.props.children}
            </div>
        )
    };


}
