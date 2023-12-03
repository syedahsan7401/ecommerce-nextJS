'use client'
import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from '@/app/lib/sanity';
import { ProductCart } from './AddToBag';


const CheckoutNow = ({currency, name, description, image, price, price_id}: ProductCart) => {
    const {checkoutSingleItem} = useShoppingCart();

    function buyNow(price_id: string) {
      checkoutSingleItem(price_id)
    }

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }

  return (
    <Button onClick={()=>{
      buyNow(product.price_id)
    }}>Add To Cart</Button>
  )
}

export default CheckoutNow