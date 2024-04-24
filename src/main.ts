import './styles/main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import DataTable from 'primevue/datatable';
import Tag from "primevue/tag";
import Column from "primevue/column";
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import ProgressBar from 'primevue/progressbar';
import Paginator from 'primevue/paginator';

import 'primeicons/primeicons.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.use(PrimeVue)
app.component('PrimeButton', Button);
app.component('PrimeDropdown', Dropdown);
app.component('PrimeDialog', Dialog);
app.component('PrimeIconField', IconField);
app.component('PrimeInputText', InputText);
app.component('PrimeInputIcon', InputIcon);
app.component('PrimeDataTable', DataTable);
app.component('PrimeTag', Tag);
app.component('PrimeColumn', Column);
app.component('PrimeTabPanel', TabPanel);
app.component('PrimeTabView', TabView);
app.component('PrimeAccordion', Accordion);
app.component('PrimeAccordionTab', AccordionTab);
app.component('PrimeProgressBar', ProgressBar);
app.component('PrimePaginator', Paginator);

app.mount('#app')
