import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";


export interface  ILayoutContentProps extends IComponentProps {
    layout: Function;
    layoutProps: IComponentProps;
}

export class LayoutContent extends Component<ILayoutContentProps,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    render() {

        let layoutProps = {
            elementsFromLayoutContent: React.Children.toArray(this.props.children),
            ...this.props.layoutProps
        };

        return (React.createElement(this.props.layout as any, layoutProps, null));  // todo заменить ComponentDesignerLayout
        // return (
        //     <ComponentDesignerLayout>this BasePage</ComponentDesignerLayout>
        // )
    };


}
