import * as React from "react";
import * as ReactDOM from "react-dom";
import {BaseLayout, IBaseLayoutProps} from "../components/BaseLayout";
import {LayoutArea} from "../components/LayoutArea";
import * as EJSON from "ejson";
import {observer} from "mobx-react";
import {Container} from "../components/Container";
import {Row} from "../components/Row";
import {Column} from "../components/Column";
import {Component} from "../components/Component";

//export const ButtonComponent_Id = "t3m0id3lb5zdqbrj83au";

export interface  IBaseComponentDesignerProps extends IBaseLayoutProps {
    bindObject: any;
}

@observer
export class BaseComponentDesigner<P extends IBaseComponentDesignerProps> extends Component<P> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    protected afterMount() {
        super.afterMount();
        this.savedBindObject = EJSON.clone(this.props.bindObject);
    }


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

    renderTitle(): JSX.Element[] {
        return [<h1>Это дизайнер компонента</h1>];
    }

    renderEditors(): JSX.Element[] {
        return [<div key="unzf2ac12g">едиторы:</div>];
    }


    render() {

        // console.log("BaseComponentDesigner",this.props.bindObject);

        return (
            <Container>
                <Row>
                    <Column width="1/1">
                        {this.renderTitle()}
                    </Column>
                </Row>
                <Row>
                    <Column width="3/4">
                        {this.renderEditors()}
                    </Column>
                    <Column width="1/4">
                        <button className="btn btn-default">сохранить</button>
                        <button className="btn btn-default" onClick={this.handleCancel}>отмена</button>
                    </Column>
                </Row>
            </Container>
        );
    }

}
