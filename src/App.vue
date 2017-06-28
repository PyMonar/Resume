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
        <span class="change-lang" @click="changeLang">
            <icon name="globe" scale="2"></icon>
        </span>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <intro :intro="resume.intro"></intro>
            </swiper-slide>
            <swiper-slide>
                <edu :edu="resume.edu"></edu>
            </swiper-slide>
            <swiper-slide>
                <work :work="resume.work"></work>
            </swiper-slide>
            <swiper-slide>
                <skill :skill="resume.skill"></skill>
            </swiper-slide>
            <swiper-slide>
                <about :about="resume.about"></about>
            </swiper-slide>
            <swiper-slide>
                <contact :contact="resume.contact"></contact>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import Intro from './components/intro.vue';
import Edu from './components/edu.vue';
import Work from './components/work.vue';
import Skill from './components/skill.vue';
import About from './components/about.vue';
import Contact from './components/contact.vue';

import data from './data.zh.json';

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
            },
            resume: data
        }
    },
    methods: {
        changeLang: function() {
            console.log('This is btn');
        }
    },
    components: {
        'intro': Intro,
        'edu': Edu,
        'work': Work,
        'skill': Skill,
        'about': About,
        'contact': Contact
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
    position: relative;
    color: #dedede;
}

#particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

span.change-lang {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 32px;
    height: 32px;
    z-index: 999;
    cursor: pointer;
}

.swiper-container {
    height: 100%;
}

.swiper-slide {
    color: #000;
    font-size: 30px;
}
</style>
