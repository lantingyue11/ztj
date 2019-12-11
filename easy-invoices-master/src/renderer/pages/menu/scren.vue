<template>
    <Row style="{display: block;padding: 1px;  background: #26292E; border-radius: 1px;margin: 0px;height: 100%;}">
        <Col span="12" >
            <div class="userName1" style="background: #232D3A;margin-top: -2px;line-height: 50px;border:0.5px solid #666666;">
                <Avatar icon="ios-person" size="large" style="margin-left: -120px"/>
                <span style="padding-left:80px">曾炜龙</span>
            </div>

        </Col>
        <Col span="12">
            <div class="userName2" style="background:#33252A;color:white;margin-top: -2px;line-height: 50px;border:0.5px solid #666666;">
                <span style="padding-right:90px">张田静</span>
                <Avatar icon="ios-person" size="large" style="margin-right: -110px"/>
            </div>

        </Col>

        <Row >
            <Col span="4" style="background: #1B3757">
                <div class="left-koufeng">
                    <p>扣&nbsp;&nbsp;&nbsp; 分&nbsp;&nbsp;<span><Tag color="#5F9EA0">1</Tag></span></p>
                    <p>感应数&nbsp; &nbsp;<span><Tag color="#5F9EA0">2</Tag></span></p>
                </div>
            </Col>
            <Col span="6"> <div class="grade1" id="blue_grade" style="background:#0157B9;color:white;">
                0
            </div></Col>

            <Col span="4" style="background: #26292E"><div class="vsSign"><p>VS</p></div>
                <div class="timer" style="background: #3CB371;">
                    <div class="clock_style">Round 1</div>
                    <div class="timer_time"  style="color: black;" >
                        {{timediff}}
                    </div>
                </div></Col>
            <Col span="6"><div class="grade2" id="red_grade" style="background:#B80000;color:white;">
                0
            </div></Col>
            <Col span="4" style="background: #521D20">
                <div class="left-koufeng p" >
                    <p>扣&nbsp;&nbsp;&nbsp; 分&nbsp;&nbsp;<span><Tag color="#EEA2AD">1</Tag></span></p>
                    <p>感应数&nbsp; &nbsp;<span><Tag color="#EEA2AD">2</Tag></span></p>
                </div>
            </Col>
        </Row>
        <Col span="12" style="background: #1B3757;color:white;border: 1px solid #666666;margin-top: 1px;height:110px; ">
            <Row>
                <Col span="6">
                    <p style="text-align: center">GAM-JEOM</p>
                    <p style="text-align: center">{{blueGam}}</p>
                </Col>
                <Col span="6">
                    头部
                </Col>
                <Col span="6">
                    身体
                </Col>
                <Col span="6">
                    手部
                </Col>
            </Row>
        </Col>
        <Col span="12" style="background:#521D20;color:white;border: 1px solid #666666;margin-top: 1px;height:110px">
            <Row>
                <Col span="6">a</Col>
                <Col span="6">b</Col>
                <Col span="6">c</Col>
                <Col span="6">
                    <p style="text-align: center">GAM-JEOM</p>
                    <p style="text-align: center">{{redGam}}</p>
                </Col>
            </Row>
        </Col>
    </Row>
</template>

<script>

</script>

<style >
    #tip #showMessage{
        margin-top:200px;
        font-size: 80px;
        font-weight: bold;
        font-family: Arial;
        text-align: center;
        color: white;
    }
    span{
        font-size: 30px;
    }
    span i{
        color: #077bbe;
    }
    .timer{
        height: 100px;
        background-color: #ff9900;
    }
    .clock_style{
        font-size: 40px;
        line-height: 50px;
        color: #ffffff;
        text-align: center;
    }

    .vsSign{
        font-size: 94px;
        font-weight: bold;
        color: #8391a5;
        text-align: center;
    }
    .userName1{
        margin-top: 50px;
        font-size: 100px;
        background-color: #2d8cf0;
        border-radius: 5px;
        color: #ffffff;
        line-height: 40px;
        text-align: center;
    }

    .userName2{
        margin-top: 50px;
        font-size: 100px;
        line-height: 40px;
        background-color: #ed4014;
        border-radius: 5px;
        color: #ffffff;
        text-align: center;
    }
    .grade1{
        font-size: 250px;
        color: #5b6270;
        text-align: center;
        padding-top: 20px;
    }
    .grade2{
        font-size: 250px;
        color: #5b6270;
        text-align: center;
        padding-top: 20px;
    }
    .timer_time{
        font-size: 30px;
        line-height: 60px;
        text-align: center;
        color: white;
        font-weight: bold;
        margin-top: -10px;
    }
    .left-koufeng{
        margin-top: 305px;
    }
    .left-koufeng p{
        color: white;
        font-size: 30px;
        text-align: center;
    }
    .team_grade{
        margin-left: 20px;
        margin-top: 40px;
    }
</style>
<script>
    export default {
        name : 'v-scren',
        props:{
            ifPage:{
                type:Boolean,
                default:false
            },
        }

    }
</script>
