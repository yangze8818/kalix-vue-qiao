import Blogroll from './blogroll'

const components = [
  Blogroll
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
