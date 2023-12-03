import { type } from "os";

export default{
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [{
        name: 'name',
        type: 'string',
        title: 'Name of Product',
    },
    {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{type: 'image'}],
    },
    {
        name: 'description',
        type: 'text',
        title: 'Description of Product',
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
            source: 'name'
        }
    },
    {
        name: 'price',
        type: 'number',
        title: 'Price',
    },
    {
        name: 'price_id',
        type: 'string',
        title: 'Stripe Price Id',
    },
    {
        name: 'category',
        title: 'Product Category',
        type: 'reference',
        to: [
            {
                type: 'category'
            },
        ],
    },
],
}