import {fetch,del,patch,post } from './http'

export function getFirmList(){
    return fetch('api/0.1/enterpriseHonor/list')
}

export function getFirmPics(){
    return fetch('api/0.1/enterpriseHonorImg/list')
}
