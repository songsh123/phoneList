import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/store'
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });

// import el from "element-ui/src/locale/lang/el";


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        this.$store.commit('setDefaultMaxId')
        this.$store.commit('loadPhoneList');
    }
}).$mount('#app')
