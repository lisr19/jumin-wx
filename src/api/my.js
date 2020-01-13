import {fetch,del,patch,post } from './http'

export function signUp(form){
    return post('api/0.1/user/register',form)
}

export function login(form){
    return post('api/0.1/user/login',form)
}

export function submitAdvice(form){
    return post('api/0.1/suggestion/add',form)
}

export function contactUs(){
    return fetch('api/0.1/contactUs/list')
}