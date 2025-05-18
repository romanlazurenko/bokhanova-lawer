<template>
    <div>
        <h1 class="main-header">
            {{value}}
        </h1>
    </div>
</template>

<script setup>
defineProps({
    value: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.main-header {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 90px;
    line-height: 48px;
    letter-spacing: -1px;
    color: #2A2A2D;
}


</style>
