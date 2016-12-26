import * as React from "react";
import {observer} from "mobx-react";
import {Component} from "../components/Component";
import {IComponentProps} from "../components/Component";

//export const ButtonComponent_Id = "t3m0id3lb5zdqbrj83au";

export interface  IInputProps extends IComponentProps {
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    bindObj: any;
    bindProp: string;
}

@observer
export class Input extends Component<IInputProps> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    value: any;

    render() {
        return (
            <input type="text"
                   className="form-control"
                   placeholder={this.props.placeholder}
                   required={this.props.required}
                   disabled={this.props.disabled}
                   value={this.props.bindObj[this.props.bindProp]}
                   onChange={(e:any)=>{this.props.bindObj[this.props.bindProp]=e.target.value}}
            />
        );
    }

}
