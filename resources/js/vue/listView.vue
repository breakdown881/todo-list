<template>
    <div>
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form v-on:reloadlist="getList()" />
        </div>
        <div v-for="(item, index) in items" :keys="index">
            <list-item
                :item="item"
                class="item"
                v-on:itemchanged="$emit('reloadlist')"
            />
        </div>
        <p>Total: {{ total }}</p>
        <p>Completed: {{ completed }}</p>
        <p>Remaining: {{ remaining }}</p>
    </div>
</template>

<script>
import ListItem from "./listItem";
import addItemForm from "./addItemForm.vue";
import listItem from "./listItem.vue";

export default {
    components: {
        addItemForm,
        ListItem,
    },
    methods: {
        getList() {
            return this.$store.dispatch("fetchItems")
        },
    },
    computed: {
        items() {
            return this.$store.state.items;
        },
        total() {
            return this.$store.getters.totalItems;
        },
        completed() {
            return this.$store.getters.completedItems;
        },
        remaining() {
            return this.$store.getters.remainingItems;
        },
    },
    created() {
        this.getList();
    },
};
</script>

<style scoped>
.item {
    background-color: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
.heading {
    background-color: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
