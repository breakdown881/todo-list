<template>
    <div>
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
import listItem from "./listItem.vue";
export default {
    // props: ["items"],
    components: {
        ListItem,
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
};
</script>

<style scoped>
.item {
    background-color: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>
