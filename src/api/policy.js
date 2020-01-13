import {fetch,del,patch,post } from './http'

export function getPolicyList(){
    return fetch('api/0.1/policy/list')
}

export function getPolicyApply(id){
    const data = {
        enterpriseId:id
    }
    return fetch('api/0.1/policyApply/list',data)
}

export function submitApply(form){
    return post('api/0.1/policyApply/add',form)
}

export function getPolicyListByName(name){
    const data = {
        name
    }
    return fetch('api/0.1/policy/list',data)
}