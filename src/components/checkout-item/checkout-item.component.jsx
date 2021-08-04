import React from 'react';

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div src={imageUrl} className='image-container'>
            <img alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#1005;</div>

    </div>
)

export default CheckoutItem;