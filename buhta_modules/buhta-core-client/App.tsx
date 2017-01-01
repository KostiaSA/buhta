import * as React from "react";
import * as ReactDOM from "react-dom";
import Socket = SocketIOClient.Socket;
import {callServer} from "./callServer";
import {Component} from "./components/Component";
import {IPingRequest} from "buhta-core-api/services/PingRequest";
import {PingRequest_Id} from "buhta-core-api/services/PingRequest";
import {IPingRequestAnswer} from "buhta-core-api/services/PingRequest";
import {IMongoFindRequest} from "buhta-core-api/services/MongoFindRequest";
import {MongoFindRequest_Id} from "buhta-core-api/services/MongoFindRequest";
import {IMongoFindRequestAnswer} from "buhta-core-api/services/MongoFindRequest";
import {ButtonDesignerPage} from "./pages/ButtonDesignerPage";
import {IButtonProps} from "./components/Button";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {ButtonDesigner} from "./designer/ButtonDesigner";
import {ContainerDesigner} from "./designer/ContainerDesigner";
import {IContainerProps} from "./components/Container";

let Sortable = (window as any)["Sortable"];

@observer
export class App extends React.Component<any,any> {


    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    socket: Socket;

    componentDidMount() {


        // var sortable = Sortable.create($('#sortable')[0], {group: "aaa", draggable: ".title"});
        // var sortable2 = Sortable.create($('#sortable2')[0], {group: "aaa"});
        //
        //
        // ($('#nestable') as any).nestable({
        //     group: 0
        // });
        // ($('#nestable2') as any).nestable({
        //     group: 0
        // });

        // window.addEventListener("resize", () => {
        //     appState.winWidth = $(window).width();
        //     appState.winHeight = $(window).height();
        //     this.forceUpdate();
        // });

        //this.socket = io.connect("http://localhost:4000", {transports: ['websocket']});
        // this.socket = io.connect("", {transports: ['websocket']});
        // console.log('didmount1');
        //
        // this.socket.on('connect', (connection: any) => {
        //     console.log('a user connected');
        //
        //     this.socket.on('disconnect', function () {
        //         console.log('user disconnected');
        //     });
        //
        //
        // });

    };

    handleClick = () => {
        //console.log("emit", this.socket);
        // this.socket.emit('event777', {my: 'data777'});
        //
        // this.socket.emit("a721nw5mqjemr9oxtwl1", {my11: 'data777'});

        let req: IPingRequest = {requestId: PingRequest_Id};


        for (let i = 0; i < 1; i++) {

            callServer<IPingRequest,IPingRequestAnswer>(req).then((ans: IPingRequestAnswer) => {
                console.log("serverTime " + i + ":", ans.serverTime);
            });
        }

        this.but = {text: "новая жопа!"};

    };

    handleCallProxy = () => {
        //console.log("emit", this.socket);
        // this.socket.emit('event777', {my: 'data777'});
        //
        // this.socket.emit("a721nw5mqjemr9oxtwl1", {my11: 'data777'});

        let req: IPingRequest = {requestId: PingRequest_Id};


        for (let i = 0; i < 1; i++) {

            callServer<IPingRequest,IPingRequestAnswer>(req).then((ans: IPingRequestAnswer) => {
                console.log("serverTime " + i + ":", ans.serverTime);
            });
        }

        this.but = {text: "новая жопа!"};

    };

    handleClickMongo1 = () => {

        let req: IMongoFindRequest = {
            requestId: MongoFindRequest_Id,
            collection: "SchemaObject",
            query: {}
        };


        for (let i = 0; i < 1; i++) {

            callServer<IMongoFindRequest,IMongoFindRequestAnswer>(req)
                .then((ans: IMongoFindRequestAnswer) => {
                    console.log("mongoFind " + i + ":", ans.objects);
                })
                .catch((err: any) => {
                    console.log("mongoFind Error" + i + ":", err);
                });
        }

    };


    @observable but: IButtonProps = {text: "жми сюда"};

    // render(): any {
    //
    //     return (
    //         <div style={{marginLeft:50}}>
    //             Buhta client!
    //             <button onClick={this.handleClick}>emit</button>
    //             <br/>
    //             <button onClick={this.handleClickMongo1}>get schema objects</button>
    //             <br/>
    //             <div>text:{this.but.text}</div>
    //             <ButtonDesignerPage button={this.but}>
    //
    //             </ButtonDesignerPage>
    //
    //             <span id="sortable">
    //                 <span className="title"> item 1</span>
    //                 <span className="title" style={{height:30, width:200, border:"2px solid red"}}>span item 2</span>
    //                 <span className="title">item 3</span>
    //             </span>
    //
    //             <ul id="sortable2">
    //                 <li>item 11</li>
    //                 <li>item 22</li>
    //                 <li>item 33</li>
    //                 <li>item 44</li>
    //             </ul>
    //
    //
    //             <div className="dd" id="nestable">
    //                 <ol className="dd-list">
    //                     <li className="dd-item" data-id="1">
    //                         <div className="dd-handle">Item 1</div>
    //                     </li>
    //                     <li className="dd-item" data-id="2">
    //                         <div className="dd-handle">Item 2</div>
    //                         <ol className="dd-list">
    //                             <li className="dd-item" data-id="3">
    //                                 <div className="dd-handle">Item 3</div>
    //                             </li>
    //                             <li className="dd-item" data-id="4">
    //                                 <div className="dd-handle">Item 4</div>
    //                             </li>
    //                             <li className="dd-item" data-id="5">
    //                                 <div className="dd-handle">Item 5</div>
    //                                 <ol className="dd-list">
    //                                     <li className="dd-item" data-id="6">
    //                                         <div className="dd-handle">Item 6</div>
    //                                     </li>
    //                                     <li className="dd-item" data-id="7">
    //                                         <div style={{height:50, width:50}} className="dd-handle">
    //                                             item7
    //                                         </div>
    //                                         <div className="dd-nodrag" onClick={this.handleClick}>
    //                                             /////////////////////
    //
    //                                             /////////////////////
    //
    //                                         </div>
    //                                     </li>
    //                                     <li className="dd-item" data-id="8">
    //                                         <div className="dd-handle">Item 8</div>
    //                                     </li>
    //                                 </ol>
    //                             </li>
    //                             <li className="dd-item" data-id="9">
    //                                 <div className="dd-handle">Item 9</div>
    //                             </li>
    //                             <li className="dd-item" data-id="10">
    //                                 <div className="dd-handle">Item 10</div>
    //                             </li>
    //                         </ol>
    //                     </li>
    //                     <li className="dd-item" data-id="11">
    //                         <div className="dd-handle">Item 11</div>
    //                     </li>
    //                     <li className="dd-item" data-id="12">
    //                         <div className="dd-handle">Item 12</div>
    //                     </li>
    //                 </ol>
    //             </div>
    //         </div>
    //     );
    // }

    cont: IContainerProps;

    render(): any {

        if (!this.cont) {
            this.cont = {
                rows: [
                    {
                        columns: [
                            {width: "1/3"},
                            {width: "1/3"},
                            {width: "1/3"}
                        ]
                    },
                    {
                        columns: [
                            {width: "1/4"},
                            {width: "1/4"},
                            {width: "1/4"},
                            {width: "1/4"},
                        ]
                    }
                ]
            }
        }


        return (
            <div style={{marginLeft:50}}>
                Buhta client 2!
                <button onClick={this.handleClick}>emit</button>
                <button onClick={this.handleCallProxy}>call proxy</button>
                <ButtonDesigner bindObject={this.but}>

                </ButtonDesigner>
                <ContainerDesigner bindObject={this.cont}>

                </ContainerDesigner>
            </div>

        );
    }

}

