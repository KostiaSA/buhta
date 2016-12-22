import {IBaseRequest} from "buhta-core-api/services/BaseRequest";
import {IBaseRequestAnswer} from "buhta-core-api/services/BaseRequest";

type ServiceFunction=(req: IBaseRequest) => Promise<IBaseRequestAnswer>;

export let registeredServices: {[serviceId: string]: ServiceFunction} = {};

export function registerService(serviceId: string, handler: ServiceFunction) {
    if (registeredServices[serviceId])
        throw `сервис с id "${serviceId}" уже был зарегистрирован`;
    registeredServices[serviceId] = handler;
}