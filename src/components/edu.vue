<template>
    <div id="edu">
        <h1>
            {{edu.title}}
        </h1>
        <div v-for="item in edu.list" class="edu-item">
            <div class="period">
                {{item.period}} <span class="pointer"></span>
            </div>
            <div class="state">
                <div class="school">
                    {{item.school}}
                </div>
                <div class="detail">
                    {{item.major}} · {{item.degree}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['edu']
}
</script>

<style scoped>
#edu {
    height: 270px;
    width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -160px;
    margin-left: -350px;
}

h1 {
    margin: 0px;
    height: 50px;
    line-height: 50px;
    font-size: 50px;
    color: #DDDDDD;
    text-align: center;
    border-bottom: 1px solid #DDDDDD;
    padding-bottom: 20px;
}

.edu-item {
    height: 100px;
    overflow: hidden;
}

.period {
    margin: 30px 20px 30px 80px;
    height: 40px;
    line-height: 40px;
    width: 209px;
    float: left;
    border-right: 1px solid #DDDDDD;
    text-align: center;
    font-size: 25px;
    color: #FFFFFF;
    background: #DDDDDD;
    border-radius: 5px;
}

.pointer {
    float: right;
    border-left: 10px solid #DDD;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    margin-right: -20px;
    margin-top: 10px;
}

.state {
    width: 300px;
    height: 80px;
    float: right;
    padding: 20px 50px 0 0;
}

.school {
    font-size: 30px;
    display:table-cell; 
    vertical-align: bottom;
    font-weight: bold;
}

.detail {
    height: 40px;
    line-height: 40px;
    overflow: hidden;
}
</style>