import {fetch,del,patch,post } from './http'

export function getProductList(){
    return fetch('api/0.1/productInfo/list')
}
