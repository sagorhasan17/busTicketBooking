import type { IAdmin } from "./admin.interface.js";
import { AdminModel } from "./admin.model.js";


const CreateAdminService = async (payLoad: IAdmin) => {
    const booking = await AdminModel.create(payLoad);
    return booking
}

export const AdminService = {
    CreateAdminService,
}