import {fetch,del,patch,post } from './http'

export function getCompanyList(){
    return fetch('api/0.1/enterprise/list')
}

export function submitApply(form){
    form.parkId=2
    return post('api/0.1/parkEnterApplication/add',form)
}

export function getEntryGuide(){
    return fetch('api/0.1/parkEnterProcess/list')
}

export function getEntryQualification(){
    return fetch('api/0.1/parkQualification/list')
}

export function addEntryQualification(form){
    return post('api/0.1/parkQualification/add',form)
}

export function getDoc(){
    return fetch('api/0.1/parkEnterDoc/list')
}