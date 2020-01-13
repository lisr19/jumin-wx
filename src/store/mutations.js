import * as types from './mutation-types'

const mutations = {
    [types.SET_FOOTER_STATE](state,index){
        if(index===1){
            state.showFooter = true
        }else{
            state.showFooter = false
        }
    },
    [types.CHANGE_LOGIN](state,user){
        state.token = user.token
        state.username = user.userInfo.username
        localStorage.setItem('token',user.token)
        localStorage.setItem('username',user.userInfo.username)
    },
    [types.CHANGE_SIGN_OUT](state){
        state.token = ''
        state.username = ''
        localStorage.setItem('token','')
        localStorage.setItem('username','')
    },
    [types.INIT](state,localstorage){
        state.token = localstorage.token
        state.username = localstorage.username
    }
}

export default mutations
