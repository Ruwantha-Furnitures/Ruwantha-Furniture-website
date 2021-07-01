import React from 'react';
import PaymentModal from './Payment';

function Checkout() {
    return (
        <div>
            <PaymentModal
                // Use a unique value for the orderId
                orderId={45896588}
                name="Just For You Mom Ribbon Cake"
                amount="4500"
            />
        </div>
    )
}

export default Checkout
