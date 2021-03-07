import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/js/jquery.ztree.core.min.js";
import "./assets/js/jquery.ztree.excheck.min.js";


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),

}).$mount('#app')