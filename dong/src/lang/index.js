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
<<<<<<< HEAD
  locale: Cookies.get('language') || 'zh',
=======
  locale: 'en',
>>>>>>> 1526677b5b3be0abe86722bdcd3d1049865be85a
  messages
})
export default i18n