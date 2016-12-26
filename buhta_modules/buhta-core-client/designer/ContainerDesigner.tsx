import * as React from "react";
import {Input} from "../inputs/Input";
import {observer} from "mobx-react";
import {BaseComponentDesigner, IBaseComponentDesignerProps} from "./BaseComponentDesigner";
import {IButtonProps} from "../components/Button";
import {IContainerProps, Container} from "../components/Container";

export interface  IContainerDesignerProps extends IBaseComponentDesignerProps {
    bindObject: IContainerProps;
}

@observer
export class ContainerDesigner extends BaseComponentDesigner<IContainerDesignerProps> {


    renderTitle(): JSX.Element[] {
        return [<h1 key="br986424my">Container</h1>];
    }

    renderEditors(): JSX.Element[] {
        return [
            ...super.renderEditors(),
            this.renderDesignedContainer()
        ];
    }

    renderDesignedContainer(): JSX.Element {

        // let props: IContainerProps = {
        //     ...this.props.bindObject,
        //     designMode: true
        // }

        return (
            <Container key="ulx6g95ax8" designMode={true} {...this.props.bindObject}></Container>
        );

    }

}
