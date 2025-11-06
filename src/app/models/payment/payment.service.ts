import type { IPayment } from "./payment.interface.js";
import { PaymentModel } from "./payment.model.js";


const CreatePaymentService = async(payLoad:IPayment) =>{
    const Payment = await PaymentModel.create(payLoad);
    return Payment
}

export const PaymentService = {
    CreatePaymentService,
}