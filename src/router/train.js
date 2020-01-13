import Train from '../pages/train/Train.vue'
import OnlineTrain from '../pages/online_train/OnlineTrain.vue'
import TrainResources from '../pages/train_resources/TrainResources.vue'
import QualificationTrain from '../pages/qualification_train/QualificationTrain.vue'
import ProfessionTrain from '../pages/profession_train/ProfessionTrain.vue'
import CourseDetail from '../pages/course_detail/CourseDetail.vue'
import BriefInfo from '../pages/brief_info/BriefInfo.vue'
import CourseIndex from '../pages/course_index/CourseIndex.vue'

export default [
    {
        path:'/train',
        name:'train',
        redirect:'/train/online',
        component:Train,
        children:[
            {
                path:'online',
                name:'online-train',
                component:OnlineTrain
            },
            {
                path:'profession',
                name:'profession-train',
                component:ProfessionTrain
            },
            {
                path:'qualification',
                name:'qualification-train',
                component:QualificationTrain
            },
            {
                path:'resources',
                name:'train-resources',
                component:TrainResources
            }
        ]
    },
    {
        path:'/course_detail/:id',
        name:'course_detail',
        component:CourseDetail,
        redirect:'/course_detail/:id/brief_info',
        children:[
            {
                path:'brief_info',
                name:'brief_info',
                component:BriefInfo
            },
            {
                path:'course_index',
                name:'course_index',
                component:CourseIndex
            }
        ]
    },
]