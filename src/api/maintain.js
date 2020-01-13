import {fetch,del,patch,post } from './http'


export function getMaintainList(id){
    const data = {
        enterpriseId:id
    }
    return fetch('api/0.1/operationInfo/listByEnterpriseId',data)
}

export function addMaintain(form){
    return post('api/0.1/operationInfo/add',form)
}