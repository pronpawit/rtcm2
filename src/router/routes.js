
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/alarms',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mails.vue') }
    ]
  },
  {
    path: '/nearme',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/nearme.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
