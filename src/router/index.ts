import { createRouter, createWebHistory, type Router } from "vue-router"

// let routes = []
// const modules = import.meta.glob("@/pages/**/*.vue")
// console.log(modules)
// Object.entries(modules).forEach(([path, module]) => {
//   // console.log(path, module)
//   // console.log(path.lastIndexOf("/"))
//   const childrenPath = path.slice(0, path.lastIndexOf("/"))
//   // console.log(childrenPath, "childrenPath")
//   let name = path.slice(path.lastIndexOf("/") + 1, path.length - 4)
//   if (name === "index") {
//     // name = childrenPath.slice(childrenPath.lastIndexOf)
//     name = childrenPath.slice(
//       childrenPath.lastIndexOf("/") + 1,
//       childrenPath.length
//     )
//   }
//   console.log(name)
//   routes.push({
//     path: `/${name}`,
//     component: module,
//     name: name,
//   })
// })

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/pages/login.vue"),
      name: "login",
    },
    {
      path: "/home",
      component: () => import("@/pages/home.vue"),
      name: "home",
    },
  ],
})

export default router
