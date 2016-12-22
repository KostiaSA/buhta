import * as React from "react";
import * as ReactDOM from "react-dom";
import Socket = SocketIOClient.Socket;
import {callServer} from "./callServer";
import {Component} from "./components/component/component";
import {IPingRequest} from "buhta-core-api/services/PingRequest";
import {PingRequest_Id} from "buhta-core-api/services/PingRequest";
import {IPingRequestAnswer} from "buhta-core-api/services/PingRequest";
import {IMongoFindRequest} from "buhta-core-api/services/MongoFindRequest";
import {MongoFindRequest_Id} from "buhta-core-api/services/MongoFindRequest";
import {IMongoFindRequestAnswer} from "buhta-core-api/services/MongoFindRequest";
import {ButtonDesignerPage} from "./pages/ButtonDesignerPage";


export class App extends React.Component<any,any> {


    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
    }

    socket: Socket;

    componentDidMount() {
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

    render(): any {

        let but={};

        return (
            <div>
                Buhta client!
                <button onClick={this.handleClick}>emit</button>
                <br/>
                <button onClick={this.handleClickMongo1}>get schema objects</button>
                <br/>
                <ButtonDesignerPage button={but}>

                </ButtonDesignerPage>

            </div>
        );
    }

}

