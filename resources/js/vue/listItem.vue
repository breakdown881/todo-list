<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
        />
        <span :class="[item.completed ? 'completed' : '', 'itemText']">
            <router-link
                class="todo"
                :to="'/item/' + item.id"
                v-on:reloaditem="getItem()"
            >
                {{ item.name }}
            </router-link>
        </span>
        <button @click="removeItem()" class="trashcan">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>

<script>
export default {
    props: ["item"],
    methods: {
        updateCheck() {
            this.$store.dispatch("toggleItem", this.item.id);
        },
        removeItem() {
            this.$store.dispatch("removeItem", this.item.id);
        },
        getItem() {
            this.$store.dispatch("getItem", this.item.id);
        },
    },
};
</script>

<style scoped>
.completed {
    text-decoration: line-through;
    color: #999999;
}

.itemText {
    width: 100%;
    margin-left: 20px;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.trashcan {
    background-color: #e6e6e6;
    border: none;
    color: #ff0000;
    outline: none;
}

.todo:hover {
    color: #0056b3;
}
</style>
