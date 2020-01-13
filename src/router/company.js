import CompanyManagement from '../pages/company_management/CompanyManagement.vue'
import Maintain from '../pages/maintain/Maintain.vue'
import Resident from '../pages/resident/Resident.vue'
import Safe from '../pages/safe/Safe.vue'
import Requirement from '../pages/requirement/Requirement.vue'
import RequirementDetail from '../pages/requirement_detail/RequirementDetail.vue'
import MilitaryProduct from '../pages/military_product/MilitaryProduct.vue'
import ScientificResearch from '../pages/scientific_research/ScientificResearch.vue'
import Cooperation from '../pages/cooperation/Cooperation.vue'
import Example from '../pages/example/Example.vue'
import ExampleDetail from '../pages/example_detail/ExampleDetail.vue'
import ProductShow from '../pages/product_show/ProductShow.vue'
import ProductDetail from '../pages/product_detail/ProductDetail.vue'
import Message from '../pages/message/Message.vue'
import MessageDetail from '../pages/message_detail/MessageDetail.vue'
import MilitaryProductMessage from '../pages/military_product_message/MilitaryProductMessage.vue'
import ScientificResearchMessage from '../pages/scientific_research_message/ScientificResearchMessage.vue'
import CooperationMessage from '../pages/cooperation_message/CooperationMessage.vue'
import PoliticalService from '../pages/political_service/PoliticalService.vue'
import PolicyDetail from '../pages/policy_detail/PolicyDetail.vue'
import PolicyApply from '../pages/policy_apply/PolicyApply.vue'
import MyPoliticalApply from '../pages/my_political_apply/MyPoliticalApply.vue'
import ExampleCenter from '../pages/example_center/ExampleCenter.vue'
import Share from '../pages/share/Share.vue'
import ShareDetail from '../pages/share_detail/ShareDetail.vue'
import CustomerService from '../pages/customer_service/CustomerService.vue'



export default [
    {
        path:'/company',
        name:'company',
        component:CompanyManagement,
    },
    {
        path:'/maintain',
        name:'maintain',
        component:Maintain,
    },
    {
        path:'/resident',
        name:'resident',
        component:Resident,
    },
    {
        path:'/safe',
        name:'safe',
        component:Safe
    },
    {
        path:'/requirement',
        name:'requirement',
        component:Requirement,
        redirect:'/requirement/military_product',
        children:[
            {
                path:'military_product',
                name:'military_product',
                component:MilitaryProduct
            },
            {
                path:'cooperation',
                name:'cooperation',
                component:Cooperation
            },
            {
                path:'scientific_research',
                name:'scientific_research',
                component:ScientificResearch
            }
        ]
    },
    {
        path:'/requirement_detail/:id',
        name:'requirement_detail',
        component:RequirementDetail
    },
    {
        path:'/example',
        name:'example',
        component:Example
    },
    {
        path:'/example_detail/:id',
        name:'example_detail',
        component:ExampleDetail
    },
    {
        path:'/product_show',
        name:'product_show',
        component:ProductShow
    },
    {
        path:'/product_detail/:id',
        name:'product_detail',
        component:ProductDetail
    },
    {
        path:'/message',
        name:'message',
        component:Message,
        redirect:'/message/military_product_message',
        children:[
            {
                path:'military_product_message',
                name:'military_product_message',
                component:MilitaryProductMessage
            },
            {
                path:'cooperation_message',
                name:'cooperation_message',
                component:CooperationMessage
            },
            {
                path:'scientific_research_message',
                name:'scientific_research_message',
                component:ScientificResearchMessage
            }
        ]
    },
    {
        path:'/message_detail/:id',
        name:'message_detail',
        component:MessageDetail
    },
    {
        path:'/political_service',
        name:'political_service',
        component:PoliticalService
    },
    {
        path:'/policy_detail/:id',
        name:'policy_detail',
        component:PolicyDetail,
    },
    {
        path:'/my_political_apply',
        name:'my_political_apply',
        component:MyPoliticalApply
    },
    {
        path:'/policy_apply',
        name:'policy_apply',
        component:PolicyApply
    },
    {
        path:'/example_center',
        name:'example_center',
        component:ExampleCenter
    },
    {
        path:'/share',
        name:'share',
        component:Share
    },
    {
        path:'/share_detail/:id',
        name:'share_detail',
        component:ShareDetail
    },
    {
        path:'/customer_service',
        name:'customer_service',
        component:CustomerService
    }
]