<template>
    <a :href="url" target="_blank">
        <icon :name="name" :scale="scale"></icon>
    </a>
</template>

<script>
export default {
    props: ['name', 'scale', 'url']
}
</script>

<style scoped>
a {
    color: #AAAAAA;
}
</style>