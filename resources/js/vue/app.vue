<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form v-on:reloadlist="getList()" />
        </div>
        <list-view :items="items" v-on:reloadlist="getList()" />
    </div>
</template>

<script>
import addItemForm from "./addItemForm.vue";
import listView from "./listView.vue";

export default {
    components: {
        addItemForm,
        listView,
    },
    data: function () {
        return {
            items: [],
        };
    },
    methods: {
        getList() {
            return this.$store.dispatch("fetchItems")
        },
    },
    created() {
        this.getList();
    },
};
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}

.heading {
    background-color: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
