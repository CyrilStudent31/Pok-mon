<template>
    <div id="container-buttons">
        <button type="button" class="btn btn-primary">ATK</button>
        <button type="button" class="btn btn-warning">ATK SPECIAL</button>
        <button type="button" class="btn btn-success">SOIN</button>
        <button type="button" class="btn btn-danger">ABANDONNER</button>
    </div>
</template>

<script setup>


</script>

<style scoped>
    #container-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    button {
        margin: 10px;
    }
</style>