import {fetch,del,patch,post } from './http'


export function getPolicyList(){
    return fetch('api/0.1/investPolicy/list')
}

export function getPolicyByName(name){
    const data = {
        title:name
    }
    return fetch('api/0.1/investPolicy/list',data)
}
