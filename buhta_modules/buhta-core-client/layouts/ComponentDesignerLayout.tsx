import * as React from "react";
import * as ReactDOM from "react-dom";
import {BaseLayout, IBaseLayoutProps} from "../components/BaseLayout";
import {LayoutArea} from "../components/LayoutArea";

//export const ButtonComponent_Id = "t3m0id3lb5zdqbrj83au";

export interface  IComponentDesignerPageTemplateProps extends IBaseLayoutProps {

}

export class ComponentDesignerLayout<P extends IComponentDesignerPageTemplateProps,S> extends BaseLayout<P,S> {
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
            <div>
                <h1>Это дизайнер компонента</h1>
                <LayoutArea id="title"></LayoutArea>
                <LayoutArea id="main"></LayoutArea>
                <div>
                    <LayoutArea id="footer-left-buttons">
                    </LayoutArea>
                    <button>сохранить</button>
                    <button>отмена</button>
                    <LayoutArea id="footer-right-buttons">
                    </LayoutArea>

                </div>
            </div>
        );
    }

}
