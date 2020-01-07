import Vue from 'vue'
import App from './App'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

App.mpType = 'app'
// Vue.use(MintUI)
const app = new Vue({
    ...App
})
app.$mount()
