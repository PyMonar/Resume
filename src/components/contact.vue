<template>
    <div id="contact">
        <h1>
            {{contact.title}}
        </h1>
    </div>
</template>

<script>
export default {
    props: ['contact']
}
</script>

<style scoped>
#contact {
    height: 200px;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -250px;
}

h1 {
    margin: 0px;
    height: 200px;
    line-height: 200px;
    font-size: 50px;
    color: #DDDDDD;
    text-align: center;
}
</style>