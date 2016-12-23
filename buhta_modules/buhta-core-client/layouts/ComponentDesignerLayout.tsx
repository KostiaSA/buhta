import * as React from "react";
import * as ReactDOM from "react-dom";
import {BaseLayout, IBaseLayoutProps} from "../components/BaseLayout";
import {LayoutArea} from "../components/LayoutArea";
import * as EJSON from "ejson";
import {observer} from "mobx-react";
import {Container} from "../components/Container";
import {Row} from "../components/Row";
import {Column} from "../components/Column";

//export const ButtonComponent_Id = "t3m0id3lb5zdqbrj83au";

export interface  IComponentDesignerLayoutProps extends IBaseLayoutProps {
    bindObject: any;
}

@observer
export class ComponentDesignerLayout<P extends IComponentDesignerLayoutProps,S> extends BaseLayout<P,S> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }


    componentDidMount() {
        this.savedBindObject = EJSON.clone(this.props.bindObject);
    };

    // componentWillReceiveProps(nextProps: P) {
    //     console.log("componentWillReceiveProps", nextProps.bindObject.text);
    //     this.savedBindObject = EJSON.clone(nextProps.bindObject);
    // }

    savedBindObject: any;

    handleCancel = (): void => {
        for (var propName in this.savedBindObject) {
            if (!EJSON.equals(this.props.bindObject[propName], this.savedBindObject[propName]))
                this.props.bindObject[propName] = this.savedBindObject[propName];
        }
    }

    render() {

        // console.log("ComponentDesignerLayout",this.props.bindObject);

        return (
            <Container>
                <Row>
                    <Column width="1/1">
                        <h1>Это дизайнер компонента</h1>
                    </Column>
                </Row>
                <Row>
                    <Column width="3/4">
                        <LayoutArea id="title"></LayoutArea>
                        <LayoutArea id="main"></LayoutArea>
                    </Column>
                    <Column width="1/4">
                        <LayoutArea id="footer-left-buttons">
                        </LayoutArea>
                        <br/>
                        <button>сохранить</button>
                        <button onClick={this.handleCancel}>отмена</button>
                        <LayoutArea id="footer-right-buttons">
                        </LayoutArea>
                    </Column>
                </Row>
            </Container>
        );
    }

}
