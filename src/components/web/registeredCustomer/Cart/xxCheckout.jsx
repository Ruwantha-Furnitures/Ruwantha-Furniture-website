import React from 'react';
import PaymentModal from './PaymentButton';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";

function Checkout() {
    return (
        <div>
            <Navigation></Navigation>                                                    
            <PaymentModal
                // Use a unique value for the orderId
                orderId={45896588}
                name="Canton Dining Suite"
                amount="72975"
            />
            <Footer></Footer>
        </div>
    )
}

export default Checkout
