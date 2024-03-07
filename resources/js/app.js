require("./bootstrap");

import Vue from "vue";
import App from "./vue/app.vue";
import store from "./store";
import detailView from "./vue/detailView.vue";
import listView from "./vue/listView.vue";
import VueRouter from "vue-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusSquare, faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "",
            component: listView,
        },
        {
            path: "/item/:id",
            component: detailView,
            props: true,
        },
    ],
});

const app = new Vue({
    router,
    el: "#app",
    store,
    render: (h) => h(App),
});
