import type { IRoute } from "./route.interface.js";
import { RouteModel } from "./route.model.js";


const CreateRouteService = async(payLoad:IRoute) =>{
    const bus = await RouteModel.create(payLoad);
    return bus
}

export const RouteService = {
    CreateRouteService,
}