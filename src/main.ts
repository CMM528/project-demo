import { createApp } from "vue";
import "./style.css";
import "@/css/common.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "@/router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Api from "@/api";
// import { initGlobalComponents } from "@/utils/global-components";

const app = createApp(App);
const pinia = createPinia();

// initGlobalComponents(app);
app.config.globalProperties.$api = Api;

app.use(pinia);
app.use(router);
app.use(ElementPlus);

app.mount("#app");

console.log(import.meta.env, "import.meta");
