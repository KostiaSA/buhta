import * as React from "react";
import * as ReactDOM from "react-dom";


import {IPersistentObject} from "../../buhta-core-api/schema/IPersistentObject";

export interface  IComponentProps {
    area?: string;
}

export class Component<P extends IComponentProps,S> extends React.Component<P,S> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    native: Element;

    componentDidMount() {
    };

     render() {

         return (
             <div ref={(e:Element)=>this.native=e}>Это компонент</div>
         );
     }

}