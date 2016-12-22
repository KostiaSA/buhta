
import * as React from "react";
import {PageContent} from "../components/PageContent";
import {ComponentDesignerLayout} from "../layouts/ComponentDesignerLayout";
import {Div} from "../components/Div";
import {Span} from "../components/Span";
import {Component, IComponentProps} from "../components/Component";
import {Button} from "../components/Button";

export interface  IButtonDesignerPageProps extends IComponentProps {
    button: Object;
}

export class ButtonDesignerPage extends Component<IButtonDesignerPageProps,any> {

    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    // native: Element;
    //
    // componentDidMount() {
    // };

    render() {
        return (
            <PageContent layout={ComponentDesignerLayout}>
                <Div area="title">это вставка в Title</Div>
                <Div area="main">это вставка в Main</Div>
                <Span area="footer-left-buttons">это вставка в footer-left-buttons</Span>
                <Button area="main">это вставка Button в Main</Button>
            </PageContent>
        )
    };

}
