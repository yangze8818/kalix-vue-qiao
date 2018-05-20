import Forum from './forum.vue'

const components = [
  Forum
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
