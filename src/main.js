import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/store'
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
import { i18n } from '@/plugins/i18n'


Vue.use(Element, { size: 'small', zIndex: 3000 });

// import el from "element-ui/src/locale/lang/el";


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    i18n,
    created() {
        this.$store.commit('setDefaultMaxId')
        this.$store.commit('loadPhoneList');
    }
}).$mount('#app')
