import My from '../pages/my/My.vue'
import Advice from '../pages/advice/Advice.vue'
import PropertyManagement from '../pages/property_management/PropertyManagement.vue'
import PaymentRecord from '../pages/payment_record/PaymentRecord.vue'
import Arrearage from '../pages/arrearage/Arrearage.vue'
import Fix from '../pages/fix/fix.vue'
import MyCourse from '../pages/my_course/MyCourse.vue'
import Login from '../pages/login/Login.vue'
import SignUp from '../pages/signup/SignUp.vue'
import Pay from '../pages/pay/Pay.vue'
import ContactUs from '../pages/contact/ContactUs.vue'

export default [
    {
        path:'/my',
        name:'my',
        component:My
    },
    {
        path:'/advice',
        name:'advice',
        component:Advice
    },
    {
        path:'/property_management',
        name:'property_management',
        redirect:'/property_management/payment_record',
        component:PropertyManagement,
        children:[
            {
                path:'payment_record',
                name:'payment_record',
                component:PaymentRecord
            },
            {
                path:'arrearage',
                name:'arrearage',
                component:Arrearage,
            },
            {
                path:'fix',
                name:'fix',
                component:Fix,
            }
        ]
    },
    {
        path:'/pay',
        name:'pay',
        component:Pay
    },
    {
        path:'/my_course',
        name:'my_course',
        component:MyCourse
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/sign_up',
        name:'sign_up',
        component:SignUp
    },
    {
        path:'/contact',
        name:'contact',
        component:ContactUs
    }
]