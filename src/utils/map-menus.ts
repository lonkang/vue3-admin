import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = undefined
let firstRoute: RouteRecordRaw | undefined = undefined

export function mapMenusToRoutes(userMenus: any[]) {
  const routes: RouteRecordRaw[] = []
  console.log(userMenus)
  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstRoute && !firstMenu) {
          firstMenu = menu
          firstRoute = route
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export { firstMenu, firstRoute }
