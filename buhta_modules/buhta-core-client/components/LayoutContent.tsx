import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";
import {IBaseLayoutProps} from "./BaseLayout";
import {observer} from "mobx-react";


export interface  ILayoutContentProps extends IComponentProps {
    layout: React.ComponentClass<IBaseLayoutProps>;
    layoutProps: IComponentProps;
}

@observer
export class LayoutContent extends Component<ILayoutContentProps,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    render() {
      //console.log("LayoutContent",this.props.layoutProps);

        let layoutProps = {
            elementsFromLayoutContent: React.Children.toArray(this.props.children),
            ...this.props.layoutProps
        };

        return (React.createElement(this.props.layout as any, layoutProps, null));
    };


}
