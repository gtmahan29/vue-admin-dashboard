import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faTableColumns, faEllipsisVertical, faPenToSquare, faUsers, faChartLine} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faEllipsisVertical, faTableColumns, faPenToSquare, faUsers, faChartLine)


const app = createApp(App)

app.use(router)
app.use(VueApexCharts);

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
