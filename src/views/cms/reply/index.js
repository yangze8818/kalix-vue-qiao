import Reply from './reply.vue'

const components = [
  Reply
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
