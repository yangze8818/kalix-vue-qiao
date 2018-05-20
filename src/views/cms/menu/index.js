import Menu from './menu.vue'

const components = [
  Menu
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
