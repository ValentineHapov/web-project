import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/Home.vue';
import Post from "@/view/Post.vue";
import SignIn from "@/view/SignIn.vue";

//based on damncorwell's code

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        //path: '/post/:url',
        path: '/post',
        name: 'Post',
        component: Post
    },

    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
        meta: {
            layout: 'login-layout'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router