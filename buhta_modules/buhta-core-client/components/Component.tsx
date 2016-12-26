import * as React from "react";
import * as ReactDOM from "react-dom";


import {IPersistentObject} from "../../buhta-core-api/schema/IPersistentObject";
import {getRandomString} from "../utils/getRandomString";

export interface  IComponentProps {
    layoutArea?: string;
    designMode?: boolean;
    className?: string;
}

export class Component<P extends IComponentProps> extends React.Component<P,any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    native: Element;

    private componentDidMount() {
        this.afterMount();
    };

    protected afterMount() {

    }

    protected beforeRender() {

    }

    // private randKey: string;
    //
    // getKey(index: number) {
    //     if (!this.randKey)
    //         this.randKey = getRandomString(10);
    //     return this.randKey + index.toString();
    // }

    render() {

        this.beforeRender();

        return (
            <div ref={(e:Element)=>this.native=e}>Это компонент</div>
        );
    }

}