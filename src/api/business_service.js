import {fetch,del,patch,post } from './http'



export function getBusinessList(){
    return fetch('api/0.1/parkCommerceService/list')
}

export function addBusiness(form){
    return post('api/0.1/parkCommerceService/add',form)
}

export function delBusiness(data){
    return del('api/0.1/parkCommerceService/deleteMany',data)
}