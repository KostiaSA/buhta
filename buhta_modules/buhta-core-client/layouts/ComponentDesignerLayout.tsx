import * as React from "react";
import * as ReactDOM from "react-dom";
import {BaseLayout, IBaseLayoutProps} from "../components/BaseLayout";
import {LayoutArea} from "../components/LayoutArea";
import * as EJSON from "ejson";

//export const ButtonComponent_Id = "t3m0id3lb5zdqbrj83au";

export interface  IComponentDesignerLayoutProps extends IBaseLayoutProps {
    bindObject: any;
}

export class ComponentDesignerLayout<P extends IComponentDesignerLayoutProps,S> extends BaseLayout<P,S> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }


    componentDidMount() {
        this.savedBindObject = EJSON.clone(this.props.bindObject);
        debugger;
    };

    savedBindObject: any;

    handleCancel = (): void => {
        debugger;
        for (var propName in this.savedBindObject)
            this.props.bindObject[propName] = this.savedBindObject[propName];
    }

    render() {

        return (
            <div>
                <h1>Это дизайнер компонента</h1>
                <LayoutArea id="title"></LayoutArea>
                <LayoutArea id="main"></LayoutArea>
                <div>
                    <LayoutArea id="footer-left-buttons">
                    </LayoutArea>
                    <button>сохранить</button>
                    <button onClick={this.handleCancel}>отмена</button>
                    <LayoutArea id="footer-right-buttons">
                    </LayoutArea>

                </div>
            </div>
        );
    }

}
