import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
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
  locale: 'zh',
  messages
})
export default i18n