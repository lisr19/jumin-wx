import {fetch,del,patch,post } from './http'

export function getShareList(){
    return fetch('/api/0.1/millitaryCivilianShareResource/list')
}
