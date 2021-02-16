import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/Home.vue';
import Post from "@/view/Post.vue";

//based on damncorwell's code

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/post/:id',
        //path: '/post',
        name: 'Post',
        component: Post,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router