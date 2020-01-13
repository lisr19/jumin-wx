import {fetch,del,patch,post } from './http'

export function getOnlineList(){
    const data={
        size:100,
    }
    return fetch('api/0.1/trainCourse/list',data)
}

export function getProList(){
    return fetch('api/0.1/trainCourse/listIsReviewAndIsShowTrainingType1')
}

export function getQualiList(){
    return fetch('api/0.1/trainCourse/listIsReviewAndIsShowTrainingType2')
}

export function getMyCourse(id){
    const data={
        UserId:id
    }
    return fetch('api/0.1/trainCourse/listByUserId',data)
}

export function getKnowledge(){
    return fetch('api/0.1/knowledgeBase/listIsShowAndIsReview')
}

export function getCourse(name){
    const data = {
        name
    }
    return fetch('api/0.1/trainCourse/listByName',data)
}


export function enrollCourse(form){
    return post('api/0.1/trainCourseRegister/add',form)
}
