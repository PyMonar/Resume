<template>
    <div id="intro">
        <h1>
            {{intro.title}}
        </h1>
        <div id="desc">
            {{intro.desc}}
        </div>
        <ul id="urls">
            <li>
                <icon-link name="github" scale="2.5" :url="intro.github"></icon-link>
            </li>
            <li>
                <icon-link name="twitter" scale="2.5" :url="intro.twitter"></icon-link>
            </li>
            <li>
                <icon-link name="weibo" scale="2.5" :url="intro.weibo"></icon-link>
            </li>
            <li>
                <icon-link name="chrome" scale="2.5" :url="intro.zhihu"></icon-link>
            </li>
        </ul>
    </div>
</template>

<script>
import iconLink from './common/iconLink.vue';

export default {
    props: ['intro'],
    components: {
        iconLink
    }
}
</script>

<style scoped>
#intro {
    height: 300px;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -170px;
    margin-left: -250px;
    color: #AAA;
}

h1 {
    margin: 0px;
    height: 150px;
    line-height: 150px;
    font-size: 50px;
    text-align: center;
}

#desc {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-top: 1px solid;
    border-bottom: 1px solid;
}

#urls {
    padding: 0px;
    margin: 0px;
    height: 100px;
    overflow: hidden;
}

#urls li {
    width: 125px;
    height: 100px;
    line-height: 120px;
    float: left;
    list-style-type: none;
    text-align: center;
}
</style>