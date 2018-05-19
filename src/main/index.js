// cms
import Column from '../views/cms/column/column'
import Content from '../views/cms/content/content'
import Menu from '../views/cms/menu/menu'
// sys
import Advertising from '../views/sys/advertising/advertising'
import Blogroll from '../views/sys/blogroll/blogroll'
import Dictionaries from '../views/sys/dictionaries/dictionaries'
import Information from '../views/sys/information/information'

const components = [Column, Content, Menu, Advertising, Blogroll, Dictionaries, Information]

const qiao = {
  install: function (Vue, opts) {
    opts = opts | {}
    components.map(function(component) {
      Vue.component(component.name, component)
    })
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(qiao)
}
export default qiao
