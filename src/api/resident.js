import {fetch,del,patch,post } from './http'

export function getResidentList(id){
    const data = {
        enterpriseId:id
    }
    return fetch('api/0.1/stationingService/listByEnterpriseId',data)
}

export function addResident(form){
    form.enterpriseId = 16
    return post('api/0.1/stationingService/add',form)
}