<template>
    <div>
        <div id="tip">
            <p id="showMessage">message</p>
        </div>
        <Row>
            <Col span="16">
                <Row>
                    <Col span="24">
                        <Row style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;margin: 3px;}">
                            <Col span="6"><span><Icon type="clipboard"  ></Icon>&nbsp;&nbsp;场次：</span></Col>
                            <Col span="6"><span><Icon type="ios-paper" />&nbsp;&nbsp;轮次：</span></Col>
                            <Col span="6"><span><Icon type="grid" />&nbsp;&nbsp;局数：</span></Col>
                            <Col span="6"><span><Icon type="podium" />&nbsp;&nbsp;级别：</span></Col>
                        </Row>

                    </Col>
                </Row>
                <Row style="{display: block;padding: 5px;  background: #ffffff; border-radius: 5px;margin: 3px;height: 260px;}">
                    <Col span="4">
                        <div class="left-koufeng">
                           <p>扣&nbsp;&nbsp;&nbsp; 分&nbsp;&nbsp;<span><Tag color="gold">1</Tag></span></p>
                           <p>感应数&nbsp; &nbsp;<span><Tag color="gold">2</Tag></span></p>
                        </div>
                    </Col>
                    <Col span="5">
                        <div class="userName1">
                            <span>曾卫龙</span>
                        </div>
                        <div class="grade1">
                            6
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="vsSign"><p>VS</p></div>
                        <div class="timer">
                            <div class="clock_style"><Icon type="ios-time" /></div>
                            <div class="timer_time">
                                01:33:55
                            </div>
                        </div>
                    </Col>
                    <Col span="5">
                        <div class="userName2">
                            <span>张田静</span>
                        </div>
                        <div class="grade2">
                            1
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="left-koufeng">
                            <p>扣&nbsp;&nbsp;&nbsp; 分&nbsp;&nbsp;<span><Tag color="gold">1</Tag></span></p>
                            <p>感应数&nbsp; &nbsp;<span><Tag color="gold">2</Tag></span></p>
                        </div>
                    </Col>
                </Row>
                <Row style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;margin: 3px;}">
                    <Col span="11">
                        <Button>读秒</Button>
                        <Button>休息计时</Button>
                        <Button>下一局</Button>
                    </Col>
                    <Col span="4">
                        <Button type="primary" >开始</Button>
                    </Col>
                    <Col span="9">
                        <Button>加时</Button>
                        <Button>60s计时</Button>
                        <Button>结束</Button>
                    </Col>
                </Row>

            </Col>
            <Col span="7" style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;margin: 3px;height: 298px;}">
                <Row>
                    <Col span="24">
                        <Dropdown style="padding-bottom: 10px;">
                            <Button type="primary">
                                跆拳道场次信息选择&nbsp;&nbsp;&nbsp;
                                <Icon type="ios-arrow-down"></Icon>
                            </Button>
                            <DropdownMenu slot="list">
                                <DropdownItem>A场地</DropdownItem>
                                <DropdownItem>B场地</DropdownItem>
                                <DropdownItem disabled>C场地</DropdownItem>
                                <DropdownItem>D场地</DropdownItem>
                                <DropdownItem divided>E场地</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Table border :columns="columns1" :data="data1"></Table>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col span="16" style="{display: block;padding: 2px;  background: #fff; border-radius: 5px;margin-top: 2px;margin-left: 3px;height: 200px;}">
                <Row class="team_grade">
                    <Col span="11">
                        <div>
                            <Dropdown>
                                <Button type="primary">
                                    青方判胜
                                    <Icon type="ios-arrow-down"></Icon>
                                </Button>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="ptf">比分胜/PTF</DropdownItem>
                                    <DropdownItem name="ptg">分差优势胜/PTG</DropdownItem>
                                    <DropdownItem name="sdp">加时得分胜/SDP</DropdownItem>
                                    <DropdownItem name="sup">优势判定胜/SUP</DropdownItem>
                                    <DropdownItem name="rsc">终止比赛胜/RSC</DropdownItem>
                                    <DropdownItem name="pun">犯规胜/PUN</DropdownItem>
                                    <DropdownItem name="ko">击倒胜/K.O</DropdownItem>
                                    <DropdownItem name="wdp">弃权胜/WDR</DropdownItem>
                                    <DropdownItem name="dsq">失格胜/DSQ</DropdownItem>
                                    <DropdownItem name="wiw">体重胜/WIW</DropdownItem>
                                    <DropdownItem name="draw">平局结束/DRAW</DropdownItem>
                                    <DropdownItem name="cancel">取消</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div style="margin-top: 10px;">
                            <ButtonGroup >
                                <Button >
                                    -
                                    &nbsp;&nbsp;扣分
                                </Button>
                                <Button >
                                    加分&nbsp;&nbsp;
                                    +
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div style="margin-top: 10px;">
                            <Button type="warning">警告</Button>
                            <Button type="success">撤销警告</Button>
                        </div>
                    </Col>
                    <Col span="2"></Col>
                    <Col span="11">
                        <div style="float: right;width: 100%;">
                            <Dropdown style="margin-left: 177px">
                                <Button type="error">
                                    红方判胜
                                    <Icon type="ios-arrow-down"></Icon>
                                </Button>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="ptf">比分胜/PTF</DropdownItem>
                                    <DropdownItem name="ptg">分差优势胜/PTG</DropdownItem>
                                    <DropdownItem name="sdp">加时得分胜/SDP</DropdownItem>
                                    <DropdownItem name="sup">优势判定胜/SUP</DropdownItem>
                                    <DropdownItem name="rsc">终止比赛胜/RSC</DropdownItem>
                                    <DropdownItem name="pun">犯规胜/PUN</DropdownItem>
                                    <DropdownItem name="ko">击倒胜/K.O</DropdownItem>
                                    <DropdownItem name="wdp">弃权胜/WDR</DropdownItem>
                                    <DropdownItem name="dsq">失格胜/DSQ</DropdownItem>
                                    <DropdownItem name="wiw">体重胜/WIW</DropdownItem>
                                    <DropdownItem name="draw">平局结束/DRAW</DropdownItem>
                                    <DropdownItem name="cancel">取消</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div >
                        <div style="float: right;margin-top: 10px;">
                            <ButtonGroup >
                                <Button>-&nbsp;&nbsp;扣分</Button>
                                <Button >加分&nbsp;&nbsp;+</Button>
                            </ButtonGroup>
                        </div>
                        <br>
                        <div style="float: right;margin-top: 10px;">
                            <Button type="warning">警告</Button>
                            <Button type="success">撤销警告</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col span="7" style="{display: block;padding: 3px;  background: #fff; border-radius: 5px;margin-top: 2px;margin-left: 2px;height: 200px;}">col-6</Col>
        </Row>
        <br>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>

    </div>


</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Status',
          key: 'status',
        },
      ],
      data1: [
        {
          name: 'A0001',
          status: '已完成',
        },
        {
          name: 'A0002',
          status: '等待',
        },
        {
          name: 'A0003',
          status: '等待',
        },
      ],
    };
  },
};
</script>
<style >
    #tip{
        text-align: center;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(61, 61, 61, 0.5);
        z-index: 99999;
        display: none;
    }
    #tip #showMessage{
        margin-top:200px;
        font-size: 80px;
        font-weight: bold;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        text-align: center;
        color: white;
    }
    span{
      font-size: 15px;
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
        color: #ffffff;
        text-align: center;
    }

    .vsSign{
        font-size: 50px;
        font-weight: bold;
        color: #8391a5;
        text-align: center;
    }
    .userName1{
        margin-top: 20px;
        font-size: 30px;
        background-color: #2d8cf0;
        border-radius: 5px;
        color: #ffffff;
        line-height: 30px;
        text-align: center;
    }

    .userName2{
        margin-top: 20px;
        font-size: 30px;
        line-height: 30px;
        background-color: #ed4014;
        border-radius: 5px;
        color: #ffffff;
        text-align: center;
    }
    .grade1{
        font-size: 60px;
        color: #5b6270;
        text-align: center;
        padding-top: 20px;
    }
    .grade2{
        font-size: 60px;
        color: #5b6270;
        text-align: center;
        padding-top: 20px;
    }
    .timer_time{
        font-size: 30px;
        line-height: 40px;
        text-align: center;
        color: white;
        font-weight: bold;
        margin-top: -10px;
    }
    .left-koufeng{
        margin-top: 90px;
    }
    .left-koufeng p{
        font-size: 15px;
        text-align: center;
    }
    .team_grade{
        margin-left: 20px;
        margin-top: 40px;
    }
</style>
