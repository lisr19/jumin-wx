import {fetch,del,patch,post } from './http'


export function getBannerPics(){
    const data = {
        parkNewsId:1
    }
    return fetch('/api/0.1/parkNewsImg/list',data)
}

export function getNewsList(title=''){
    const data = {
        title,
    }
    return fetch('api/0.1/parkNews/list',data)
}

export function getNewsByName(){
    return fetch('api/0.1/parkNews/list')
}
