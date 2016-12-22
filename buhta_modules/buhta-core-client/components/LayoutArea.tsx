import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";


export interface  ILayoutAreaProps extends IComponentProps {
    id: string;
    description?: string;
}

export class LayoutArea extends Component<ILayoutAreaProps,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    static contextTypes = {
        elementsFromPageContent: React.PropTypes.array
    };

    render() {

        let elements = this.context.elementsFromPageContent as JSX.Element[];

        elements = elements.filter((item: JSX.Element) => item.props.layoutArea === this.props.id);

        return (
            <span>
                {elements}
            </span>
        );
    }

}
