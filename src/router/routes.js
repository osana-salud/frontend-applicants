const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/users", component: () => import("pages/UsersPage.vue") },
      {
        path: "/users/github/:user",
        component: () => import("pages/UserGithubPage.vue")
      },
      {
        path: "/users/gitlab/:id",
        component: () => import("pages/UserGitlabPage.vue")
      },
      { path: "*", redirect: "/users" }
    ]
  }
];

export default routes;
