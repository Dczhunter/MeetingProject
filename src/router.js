import VueRouter from 'vue-router'
import MainWindown from './components/MainWindown.vue'
import Login from './components//Login.vue'
import Md_DutyThings from './components/MeetingModule/Md_DutyThings.vue'
import Md_MeetingManagement from './components/MeetingModule/Md_MeetingManagement.vue'
import Md_SubmitThings from './components/MeetingModule/Md_SubmitThings.vue'
import Md_TOPThings from './components/MeetingModule/Md_TOPThings.vue'

var router =new VueRouter({
    routes:[
        {path:'/',redirect:'/Login'},
        {path:'/Login',component:Login},
        {path:'/MainWindown',component:MainWindown,
        children:[
            /* 会议模块 */
            {//会议管理
                path:'/MeetingManagement',
                name:'MeetingManagement',
                component:Md_MeetingManagement,
                meta:{
                    // resourceID:'0a6e1c1a-6c31-4518-aa10-3b8a14c94d50'
                }
            },
            {//责任事件
                path:'/DutyThings',
                name:'DutyThings',
                component:Md_DutyThings,
                meta:{
                    // resourceID:'0a6e1c1a-6c31-4518-aa10-3b8a14c94d50'
                }
            },
            {//事件提交
                path:'/SubmitThings',
                name:'SubmitThings',
                component:Md_SubmitThings,
                meta:{
                    // resourceID:'0a6e1c1a-6c31-4518-aa10-3b8a14c94d50'
                }
            },
            {//TOP管理
                path:'/TOPThings',
                name:'TOPThings',
                component:Md_TOPThings,
                meta:{
                    // resourceID:'0a6e1c1a-6c31-4518-aa10-3b8a14c94d50'
                }
            }

        ]
    }
    ],
    linkActiveClass:'link-active'//覆盖默认的路由高亮样式
})
export default router