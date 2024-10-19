import { Entity, model, property } from "@loopback/repository";


@model({settings: {hiddenProperties: 'id'}})
export class Product extends Entity {
    @property({
        type: 'string',
        required: true,
        id: true,
    })
    productId?: string;

    @property({
        type: 'string',
        required: true,
    })
    productName?: string;

    @property({
        type: 'number',
        required: true,
    })
    price?: number;

    @property({
        type: 'string',
    })
    descriptopm?: string;

    constructor(data?: Partial<Product>){
        super(data);
    }




}

export interface ProductRelations {

}

export type ProductRelations = Product & ProductRelations