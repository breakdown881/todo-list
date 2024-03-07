<template>
    <div>
        <h2>{{ todo.name }}</h2>
        <p>Completed: {{ todo.completed ? "True" : "False" }}</p>
        <p>
            Created At:
            {{ todo.created_at ? formatTimestamp(todo.created_at) : "" }}
        </p>
        <p>
            Completed At:
            {{ todo.completed_at ? formatTimestamp(todo.completed_at) : "" }}
        </p>
        <button class="btn-back" @click="goBack()">Back to Todo List</button>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("getItem", this.$route.params.id);
    },
    computed: {
        todo() {
            return this.$store.state.todo;
        },
    },
    methods: {
        getItem(itemId) {
            return this.$store.dispatch("getItem", itemId);
        },
        formatTimestamp(timestamp) {
            const date = new Date(timestamp);
            return `${date.getFullYear()}-${
                date.getMonth() + 1
            }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        },
        goBack() {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.btn-back {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-back:hover {
    background-color: #0056b3;
}
</style>
