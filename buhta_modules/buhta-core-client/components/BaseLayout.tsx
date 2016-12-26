import * as React from "react";
import * as ReactDOM from "react-dom";
import {IComponentProps, Component} from "./Component";

//export const ButtonComponent_Id = "t3m0id3lb5zdqbrj83au";

export interface  IBaseLayoutProps extends IComponentProps {
    areas?: string[];
    elementsFromLayoutContent?:JSX.Element[];
}

export class BaseLayout<P extends IBaseLayoutProps,S> extends Component<P> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    native: Element;


    static childContextTypes = {
        elementsFromLayoutContent: React.PropTypes.array
    };


    getChildContext() {
        return {elementsFromLayoutContent: this.props.elementsFromLayoutContent};
    };

    render():JSX.Element {
        throw "abstract";
        // return (
        //     <button ref={(e:Element)=>this.native=e}>Это пиздец button</button>
        // );
    }

}

