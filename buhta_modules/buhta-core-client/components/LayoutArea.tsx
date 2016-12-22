import * as React from "react";
import * as ReactDOM from "react-dom";
import {Component, IComponentProps} from "./Component";
import {observer} from "mobx-react";


export interface  ILayoutAreaProps extends IComponentProps {
    id: string;
    description?: string;
}

@observer
export class LayoutArea extends Component<ILayoutAreaProps,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    static contextTypes = {
        elementsFromLayoutContent: React.PropTypes.array
    };

    // обязательный рендеринг всегда, не убирать!
    shouldComponentUpdate(nextProps: ILayoutAreaProps, nextState: ILayoutAreaProps) {
        return true;
    }

    render() {

        //console.log("LayoutContent", this.props.id);

        let elements = this.context.elementsFromLayoutContent as JSX.Element[];

        elements = elements.filter((item: JSX.Element) => item.props.layoutArea === this.props.id);

        return (
            <span>
                {elements}
            </span>
        );
    }

}
