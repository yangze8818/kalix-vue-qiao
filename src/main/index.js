// cms
import Column from '../views/cms/column'
import Content from '../views/cms/content'
import Menu from '../views/cms/menu'
import Forum from '../views/cms/forum'
import Reply from '../views/cms/reply'
// gen
import Export from '../views/gen/export'
import Genealogy from '../views/gen/genealogy'
import Map from '../views/gen/map'
import Search from '../views/gen/search'
// sys
import Advert from '../views/sys/advert'
import Blogroll from '../views/sys/blogroll'
import Dict from '../views/sys/dict'
import District from '../views/sys/district'
import Setting from '../views/sys/setting'

const components = {
  install(Vue) {
    Column.install(Vue)
    Content.install(Vue)
    Menu.install(Vue)
    Forum.install(Vue)
    Reply.install(Vue)
    Export.install(Vue)
    Genealogy.install(Vue)
    Map.install(Vue)
    Search.install(Vue)
    Advert.install(Vue)
    Blogroll.install(Vue)
    Dict.install(Vue)
    District.install(Vue)
    Setting.install(Vue)
  }
}
export default components
