<template>
    <div id="app">
        <vue-particles
            color="#dedede"
            :particleOpacity="0.5"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.5"
            :linesDistance="170"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        ></vue-particles>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'carrousel',
    data() {
        return {
            swiperOption: {
                direction : 'vertical',
                pagination : '.swiper-pagination',
                paginationClickable :true,
                mousewheelControl : true,
                onlyExternal : true
            }
        }
    }
}
</script>

<style>
html, body{
    overflow: hidden;
    height: 100%;
}

#app {
    height: 100%;
}

#particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.swiper-container {
    height: 100%;
}

.swiper-slide {
    color: #000;
    font-size: 30px;
}
</style>
