import {fetch,del,patch,post } from './http'


export function getExList(){
    return fetch('api/0.1/successCase/list')
}

export function delEx(data){
    return del('api/0.1/successCase/deleteMany',data)
}
