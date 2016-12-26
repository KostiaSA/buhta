import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";
import {IBaseLayoutProps} from "./BaseLayout";
import {observer} from "mobx-react";
import {IRowProps, Row} from "./Row";

let Sortable = (window as any)["Sortable"];


export interface  IContainerProps extends IComponentProps {
    rows?: IRowProps[];
}

@observer
export class Container extends Component<IContainerProps> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    protected afterMount() {
        super.afterMount();

        var sortable = Sortable.create($(this.nativeContainer)[0], {group: "aaa", draggable: ".draggableRow"});

    }

    private nativeContainer: Element;

    render(): JSX.Element {

        let rows: JSX.Element[] = [];
        if (this.props.rows) {
            rows = this.props.rows.map<JSX.Element>((item: IRowProps, index: number) => {
                return <Row designMode={this.props.designMode} key={index} {...item}></Row>
            });
        }

        let style: React.CSSProperties = {};
        if (this.props.designMode) {
            style.border = "1px solid red";
            style.minHeight = 100;
            style.paddingTop = 15;
            style.paddingBottom = 15;
        }


        return (
            <div ref={(e:Element)=>this.nativeContainer=e} className="container-fluid" style={style}>
                {rows}
                {this.props.children}
            </div>
        )
    };


}
