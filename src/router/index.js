import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
history: createWebHistory(),
routes:[
        //* Routes pour la page d'accueil

        {
            path: '/',
            alias: '/home',
            name: 'home',
            meta: {
                description: 'Accueil de la super-cours-vue'
            },
            component: () => import('../views/home.vue')
        },
            {
            path: '/battle',
            name: 'battle',
            meta: {
                description: 'page des combats'
            },
            component: () => import('../views/battle.vue')
        },

]
});

export default router;