import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";


export interface  ILayoutContentProps extends IComponentProps {
    layout: Function;

}

export class LayoutContent extends Component<ILayoutContentProps,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    //BasePage.prototype.render = function () {
    //return (React.createElement(ComponentDesignerLayout_1.ComponentDesignerLayout, null, "this BasePage"));

    render() {

        let props={elementsFromPageContent:React.Children.toArray(this.props.children)};

        return (React.createElement(ComponentDesignerLayout, props,  null));  // todo заменить ComponentDesignerLayout
        // return (
        //     <ComponentDesignerLayout>this BasePage</ComponentDesignerLayout>
        // )
    };


}
