import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Articulo from './components/Articulo.vue'
import Contacto from './components/Contacto.vue'
import Post from './components/Post.vue'
import SobreMi from './components/SobreMi.vue'
import NotFound from './components/NotFound.vue'
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Inicio 
        },
        {
            path: '/articulo/:entrada',
            component: Articulo,
            children:[
                {
                    path: '/post',
                    component: Post
                },
            ]
        },
        {
            path: '/contacto',
            component: Contacto
        },
        
        {
            path: '/sobremi',
            component: SobreMi
        },
        {
            path: '/*',
            component: NotFound
        },
    ]
})