import Home from '../pages/home/Home.vue'
import News from '../pages/news/News.vue'
import IndustryPark from '../pages/industry_park/IndustryPark.vue'
import Investment from '../pages/investment/Investment.vue'
import InvestmentDetail from '../pages/investment_detail/InvestmentDetail.vue'
import ParkSupporting from '../pages/park_supporting/ParkSupporting.vue'
import EntryGuide from '../pages/entry_guide/EntryGuide.vue'
import EntryStep from '../pages/entry_step/EntryStep.vue'
import EntryRequirement from '../pages/entry_requirement/EntryRequirement.vue'
import EntryApply from '../pages/entry_apply/EntryApply.vue'
import OutstandingFirm from '../pages/outstanding_firm/OutstandingFirm.vue'
import OutstandingFirmDetail from '../pages/outstanding_firm_detail/OutstandingFirmDetail.vue'
import SettledEnterprises from '../pages/settled_enterprises/SettledEnterprises.vue'
import SettledFirmDetail from '../pages/settled_firm_detail/SettledFirmDetail.vue'
import IntroIndustry from '../pages/intro_park_industry/IntroIndustry.vue'
import IntroEnvironment from '../pages/intro_park_environment/IntroEnvironment.vue'
import BusinessService from '../pages/business_service/BusinessService.vue'
import BusinessServiceDetail from '../pages/business_service_detail/BusinessServiceDetail'
import SafeService from '../pages/safe_service/SafeService.vue'
import SafeServiceDetail from '../pages/safe_service_detail/SafeServiceDetail.vue'

export default [
    {
        path: '/',
        name: 'home',
        component:Home
    },
    {
        path:'/news/:id',
        name:'news',
        component:News
    },
    {
        path:'/industry_park',
        name:'industry_park',
        component:IndustryPark
    },
    {
        path:'/industry_park/intro_park_industry',
        name:'intro_park_industry',
        component:IntroIndustry
    },
    {
        path:'/industry_park/intro_park_environment',
        name:'intro_park_environment',
        component:IntroEnvironment
    },
    {
        path:'/settled_enterprises',
        name:'settled_enterprises',
        component:SettledEnterprises,
    },
    {
        path:'/settled_enterprises/firm_detail/:id',
        name:'settled_firm_detail',
        component:SettledFirmDetail,
    },
    {
        path:'/investment',
        name:'investment',
        component:Investment,
    },
    {
        path:'/investment_detail/:id',
        name:'investment_detail',
        component:InvestmentDetail
    },
    {
        path:'/park_supporting',
        name:'park_supporting',
        component:ParkSupporting
    },
    {
        path:'/entry_guide',
        name:'entry_guide',
        redirect:'/entry_guide/entry_step',
        component:EntryGuide,
        children:[
            {
                path:'entry_step',
                name:'entry_step',
                component:EntryStep,
            },
            {
                path:'entry_requirement',
                name:'entry_requirement',
                component:EntryRequirement,
            }
        ]
    },
    {
        path:'/entry_apply',
        name:'entry_apply',
        component:EntryApply,
    },
    {
        path:'/outstanding_firm',
        name:'outstanding_firm',
        component:OutstandingFirm,
    },
    {
        path:'/outstanding_firm_detail/:id',
        name:'outstanding_firm_detail',
        component:OutstandingFirmDetail
    },
    {
        path:'/business_service',
        name:'business_service',
        component:BusinessService
    },
    {
        path:'/business_service/:id',
        name:'business_service_detail',
        component:BusinessServiceDetail,
    },
    {
        path:'/safe_service',
        name:'safe_service',
        component:SafeService
    },
    {
        path:'/safe_service_detail/:id',
        name:'safe_service_detail',
        component:SafeServiceDetail
    }
]