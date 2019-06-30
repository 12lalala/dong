import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
import Cookies from 'js-cookie'
const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh',
  messages
})
export default i18n