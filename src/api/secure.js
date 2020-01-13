import {fetch,del,patch,post } from './http'

export function getSecure(){
    return fetch('api/0.1/secureCheckPlanManage/list')
}

export function addSecure(form){
    return post('api/0.1/secureCheckPlanManage/add',form)
}