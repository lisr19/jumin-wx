import {fetch,del,patch,post } from './http'



export function getMessageTypeList(){
    return fetch('api/0.1/messageType/list')
}

export function getMessageList(){
    return fetch('api/0.1/messageCenter/list')
}

