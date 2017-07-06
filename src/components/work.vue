<template>
    <div id="work">
        <h1>
            {{work.title}}
        </h1>
        <div v-for="item in work.list" class="work-item">
            <div class="period">
                {{item.period}} <span class="pointer"></span>
            </div>
            <div class="state">
                <div class="company">
                    {{item.company}}
                </div>
                <div class="detail">
                    {{item.department}} · {{item.job}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['work']
}
</script>

<style scoped>
#work {
    height: 270px;
    width: 900px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -160px;
    margin-left: -450px;
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

.work-item {
    height: 100px;
    overflow: hidden;
}

.period {
    margin: 30px 20px 30px 80px;
    height: 40px;
    line-height: 40px;
    width: 259px;
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
    width: 450px;
    height: 80px;
    float: right;
    padding: 20px 50px 0 0;
}

.company {
    font-size: 21px;
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