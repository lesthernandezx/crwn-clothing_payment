import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss'

const StripeCheckoutButton = ({price}) =>{

    const priceForStripe = price * 100;
    const publishsablekey = 'pk_test_2QJyorfGYLj9YYBSilx9weGJ006NeKqVCt';


    const onToken = token =>{
        console.log(token);
        alert('Payment Succesful')

    }
    return (
        <StripeCheckout
            label='Pay Now'
            name= 'CRWN Clothing Ltd'
            billingAddress
            shippingAddressimage= 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey= {publishsablekey}
        />

    )
}

export default StripeCheckoutButton