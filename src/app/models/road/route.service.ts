import type { IRoute } from "./route.interface.js";
import { RouteModel } from "./route.model.js";


const CreateRouteService = async(payLoad:IRoute) =>{
    const route = await RouteModel.create(payLoad);
    return route
}

export const RouteService = {
    CreateRouteService,
}