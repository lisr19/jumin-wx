import {fetch,del,patch,post } from './http'

export function getPaymentList(id,year=2019){
    const data={
        year,
        enterpriseId:id,
    }
    return fetch('api/0.1/payment/appList',data)
}

export function addPayment(form){
    return post('api/0.1/payment/add',form)
}

export function getArrearageList(id,year=2019){
    const data={
        enterpriseId:id,
        year,
    }
    return fetch('api/0.1/payment/appListNotPay',data)
}

export function getFixList(id){
    const data={
        enterpriseId:id
    }
    return fetch('api/0.1/enterpriseReportRepair/listByEnterpriseId',data)

}

export function addFixApply(form){
    return post('api/0.1/enterpriseReportRepair/add',form)
}