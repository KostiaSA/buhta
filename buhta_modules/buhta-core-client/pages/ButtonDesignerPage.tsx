
import * as React from "react";
import {LayoutContent} from "../components/LayoutContent";
import {ComponentDesignerLayout, IComponentDesignerLayoutProps} from "../layouts/ComponentDesignerLayout";
import {Div} from "../components/Div";
import {Span} from "../components/Span";
import {Component, IComponentProps} from "../components/Component";
import {Button, IButtonProps} from "../components/Button";
import {getRandomString} from "../utils/getRandomString";
import {Input} from "../inputs/Input";
import {observer} from "mobx-react";

export interface  IButtonDesignerPageProps extends IComponentProps {
    button: IButtonProps;
}

@observer
export class ButtonDesignerPage extends Component<IButtonDesignerPageProps> {

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
      //  console.log("ButtonDesignerPage",this.props.button);

        let layoutProps:IComponentDesignerLayoutProps={
            bindObject:this.props.button
        }

        return (
            <LayoutContent layout={ComponentDesignerLayout} layoutProps={layoutProps}>
                <Div layoutArea="title">это вставка в Title</Div>
                <Div layoutArea="main">это вставка в Main1 {this.props.button.text}</Div>
                <Input layoutArea="main" bindObj={this.props.button} bindProp="text"/>
                <Input layoutArea="main" bindObj={this.props.button} bindProp="text"/>
                <Div layoutArea="main">это вставка в Main3 {getRandomString()}</Div>
                <Button layoutArea="main">это вставка Button в Main</Button>
                <Span layoutArea="footer-left-buttons">это вставка в footer-left-buttons</Span>
            </LayoutContent>
        )
    };

}
