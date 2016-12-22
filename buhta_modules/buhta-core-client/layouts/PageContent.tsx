import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "../components/component/component";
import {ComponentDesignerLayout} from "./ComponentDesignerLayout";


export interface  IPageContentProps extends IComponentProps {
    layout: Function;

}

export class PageContent extends Component<IPageContentProps,any> {
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
