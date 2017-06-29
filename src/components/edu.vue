<template>
    <div id="edu">
        <h1>
            {{edu.title}}
        </h1>
        <div class="edu-item">
            <div class="period">
                2013-2016
            </div>
            <div class="state">
                <div class="school">
                    BeiHang University
                </div>
                <div class="detail">
                    <span class="major">
                        Software Engineering
                    </span>
                    <span class="degree">
                        Master Degree
                    </span>
                </div>
            </div>
        </div>
        <div class="edu-item">
            <div class="period">
                2013-2016
            </div>
            <div class="state">
                <div class="school">
                    BeiHang University
                </div>
                <div class="detail">
                    <span class="major">
                        Software Engineering
                    </span>
                    <span class="degree">
                        Master Degree
                    </span>
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
    margin-top: -135px;
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
    margin: 30px 0;
    height: 40px;
    line-height: 40px;
    width: 249px;
    float: left;
    border-right: 1px solid #DDDDDD;
    text-align: center;
    font-size: 25px;
}

.state {
    width: 350px;
    height: 80px;
    float: right;
    padding: 20px 50px 0 50px;
}

.school {
    font-size: 30px;
    display:table-cell; 
    vertical-align: bottom;
}

.detail {
    height: 40px;
    line-height: 40px;
    overflow: hidden;
}

.major {
    float: left;
}

.degree {
    float: right;
}
</style>