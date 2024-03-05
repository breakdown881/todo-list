require("./bootstrap");

import Vue from "vue";
import App from "./vue/app.vue";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusSquare, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const app = new Vue({
    el: "#app",
    store,
    components: { App },
});
