import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [],
    },
    mutations: {
        SET_ITEMS(state, items) {
            Vue.set(state, "items", items);
        },
        ADD_ITEM(state, item) {
            state.items.push(item);
        },
        TOGGLE_ITEM(state, itemId) {
            const item = state.items.find((item) => item.id === itemId);
            item.completed = item.completed;
        },
        REMOVE_ITEM(state, itemId) {
            Vue.set(
                state,
                "items",
                state.items.filter((item) => item.id !== itemId)
            );
        },
        SET_TODO(state, item) {
            Vue.set(state, "todo", item);
        },
    },
    actions: {
        fetchItems(context) {
            axios
                .get("api/items")
                .then((response) => {
                    context.commit("SET_ITEMS", response.data);
                })
                .catch((error) => {
                    console.error("Error fetching items:", error);
                });
        },
        addItem(context, item) {
            axios
                .post("api/item/store", {
                    item: item,
                })
                .then((response) => {
                    context.commit("ADD_ITEM", response.data);
                })
                .catch((error) => {
                    console.error("Error adding item:", error);
                });
        },
        toggleItem(context, itemId, item) {
            axios
                .put(`api/item/${itemId}`)
                .then((response) => {
                    context.commit("TOGGLE_ITEM", response.data.id);
                })
                .catch((error) => {
                    console.error("Error toggling item:", error);
                });
        },
        removeItem(context, itemId) {
            axios
                .delete(`api/item/${itemId}`)
                .then(() => {
                    context.commit("REMOVE_ITEM", itemId);
                })
                .catch((error) => {
                    console.error("Error removing item:", error);
                });
        },
        getItem(context, itemId) {
            axios
                .get(`api/item/${itemId}`)
                .then((response) => {
                    context.commit("SET_TODO", response.data);
                })
                .catch((error) => {
                    console.error("Error fetching item:", error);
                });
        },
    },
    getters: {
        totalItems: (state) => state.items.length,
        completedItems: (state) =>
            state.items.filter((item) => item.completed).length,
        remainingItems: (state) =>
            state.items.filter((item) => !item.completed).length,
    },
});
