import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import News from '../views/News.vue'
import News1 from '../views/News/new1.vue'
import News2 from '../views/News/new2.vue'
import News3 from '../views/News/new3.vue'
import News4 from '../views/News/new4.vue'
import News5 from '../views/News/new5.vue'
import News6 from '../views/News/new6.vue'
import sport from '../views/หัวข้อข่าว/กีฬา.vue'
import seta from '../views/หัวข้อข่าว/เศรษฐกิจ.vue'
import bun from '../views/หัวข้อข่าว/บันเทิง.vue'
import world from '../views/หัวข้อข่าว/รอบโลก.vue'
import city from '../views/หัวข้อข่าว/การเมือง.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/news1',
            name: 'news1',
            component: News1
        },
        {
            path: '/news2',
            name: 'news2',
            component: News2
        },
        {
            path: '/news3',
            name: 'news3',
            component: News3
        },
        {
            path: '/news4',
            name: 'news4',
            component: News4
        },
        {
            path: '/news5',
            name: 'news5',
            component: News5
        },
        {
            path: '/news6',
            name: 'news6',
            component: News6
        },
        {
            path: '/sport',
            name: 'sport',
            component: sport
        },
        {
            path: '/seta',
            name: 'seta',
            component: seta
        },
        {
            path: '/bun',
            name: 'bun',
            component: bun
        },
        {
            path: '/world',
            name: 'world',
            component: world
        },
        {
            path: '/city',
            name: 'city',
            component: city
        }

    ]
})

export default router