import { SD_Status } from "../../common/SD";
import { cartItemModel } from "../../interfaces";

export interface orderSummaryProps {
    data: {
        id?: number;
        userId?: string;
        cartItems?: cartItemModel[];
        cartTotal?: number;
        stripePaymentIntentId?: string;
        status?: SD_Status;
    };
    userInput: {
        name: string;
        email: string;
        phoneNumber: string;
    };
    clientSecret? : any;
    payment? : boolean;
}