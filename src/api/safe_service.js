import {fetch,del,patch,post } from './http'

export function getSafeList(){
    return fetch('api/0.1/parkSecurityService/list')
}
