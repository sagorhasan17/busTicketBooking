import type { IBus } from "./bus.interface.js";
import { BusModel } from "./bus.model.js";


const CreateBusService = async(payLoad:IBus) =>{
    const bus = await BusModel.create(payLoad);
    return bus
}

export const BusService = {
    CreateBusService,
}