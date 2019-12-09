<template>
    <div>
        <div id="tip" v-show="show">
            <p id="showMessage">{{message}}</p>
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
                        <div class="grade1" id="blue_grade">
                            0
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="vsSign"><p>VS</p></div>
                        <div class="timer">
                            <div class="clock_style">Round 1</div>
                            <div class="timer_time">
                                {{timediff}}
                            </div>
                        </div>
                    </Col>
                    <Col span="5">
                        <div class="userName2">
                            <span>张田静</span>
                        </div>
                        <div class="grade2" id="red_grade">
                            0
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="left-koufeng">
                            <p>扣&nbsp;&nbsp;&nbsp; 分&nbsp;&nbsp;<span><Tag color="gold">1</Tag></span></p>
                            <p>感应数&nbsp; &nbsp;<span><Tag color="gold">2</Tag></span></p>
                        </div>
                    </Col>
                    <Col span="12" style="border: 1px solid #cccccc;margin-top: 30px">
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
                    <Col span="12" style="border: 1px solid #cccccc;margin-top: 30px">
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
                <Row style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;margin: 3px;}">
                    <Col span="11">
                        <Button>读秒</Button>
                        <Button @click="countdown('showMessage',10)">休息计时</Button>
                        <Button>下一局</Button>
                    </Col>
                    <Col span="4">
                        <Button type="primary" @click="created">{{startBtn}}</Button>
                    </Col>
                    <Col span="9">
                        <Button>加时</Button>
                        <Button @click="countdown('showMessage',60)">60s计时</Button>
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
                                <Button @click="devicePoint('blue')">
                                    -
                                    &nbsp;&nbsp;扣分
                                </Button>
                                <Button @click="addPoint('blue')">
                                    加分&nbsp;&nbsp;
                                    +
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div style="margin-top: 10px;">
                            <Button type="warning"  @click="addWarning('blue')">警告</Button>
                            <Button type="success" @click="deleteWarning('blue')">撤销警告</Button>
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
                                <Button @click="devicePoint('red')">-&nbsp;&nbsp;扣分</Button>
                                <Button @click="addPoint('red')">加分&nbsp;&nbsp;+</Button>
                            </ButtonGroup>
                        </div>
                        <br>
                        <div style="float: right;margin-top: 10px;">
                            <Button type="warning"  @click="addWarning('red')">警告</Button>
                            <Button type="success" @click="deleteWarning('red')">撤销警告</Button>
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
      show: false,
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
      timer: null,
      message: '',
      timeValue: 0,
      timediff: '01:30',
      startBtn: '开始',
      pause: 0,
      currentCount: 90,
      blueGam: 0,
      redGam: 0,
    };
  },
  methods: {
    /*
     * 加分
     */
    addPoint(name) {
      if (name === 'blue') {
        const value = parseInt(document.getElementById('blue_grade').innerText);
        const newValue = value + 1;
        document.getElementById('blue_grade').innerText = newValue;
        this.sendMessage(1, newValue);
      } else if (name === 'red') {
        const value = parseInt(document.getElementById('red_grade').innerText);
        const newValue = value + 1;
        document.getElementById('red_grade').innerText = newValue;
        this.sendMessage(2, newValue);
      } else {
        this.$Notice.error({
          title: '加分遇到未知错误！',
        });
      }
    },
    // 减分
    devicePoint(name) {
      if (name === 'blue') {
        const value = parseInt(document.getElementById('blue_grade').innerText);
        const newValue = value - 1;
        if (newValue < 0) {
          console.log('青方分数小于零');
        } else {
          this.sendMessage(1, newValue);
          document.getElementById('blue_grade').innerText = newValue;
        }
      } else if (name === 'red') {
        const value = parseInt(document.getElementById('red_grade').innerText);
        const newValue = value - 1;
        if (newValue < 0) {
          console.log('青方分数小于零');
        } else {
          this.sendMessage(2, newValue);
          document.getElementById('red_grade').innerText = newValue;
        }
      } else {
        this.$Notice.error({
          title: '减分遇到未知错误！',
        });
      }
    },
    // 发送分数信息
    sendMessage(who, grade) {
      this.$electron.ipcRenderer.send('updateIndexGrade', {
        person: who,
        point: grade,
      });
    },
    // 计数
    countdown(id, count) {
      if (!this.timer) {
        this.show = true;
        this.timeValue = count;
        this.timer = setInterval(() => {
          if (this.timeValue > 0 && this.timeValue <= count) {
            this.message = this.timeValue + ' S';
            console.log(this.message);
            this.timeValue--;
          } else {
            this.show = false;
            clearInterval(this.timer);
            this.timer = null;
            this.message = '';
          }
        }, 1000);
      }
    },
    // 计时
    countTime(diffTime) {
      if (!this.timer) {
        let value = diffTime;
        this.timer = setInterval(() => {
          if (value > 0 && value <= diffTime && this.pause === 0) {
            let modulo = value % (60 * 60 * 24);
            modulo = modulo % (60 * 60);
            // 分钟
            const minutes = Math.floor(modulo / 60);
            const seconds = modulo % 60;
            this.timediff = minutes + ':' + seconds;
            console.log(this.message);
            value--;
            this.currentCount = value;
          } else {
            if (this.pause === 0) {
              this.timediff = '00:00';
            }
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    // 开始按钮
    created() {
      if (this.startBtn === '开始') {
        this.startBtn = '暂停';
        this.countTime(this.currentCount);
        this.pause = 0;
      } else {
        this.pause = 1;
        this.startBtn = '开始';
      }
    },

    // 警告
    addWarning(name) {
      if (name === 'blue') {
        this.blueGam++;
      } else {
        this.redGam++;
      }
    },

    // 撤销警告
    deleteWarning(name) {
      if (name === 'blue') {
        this.blueGam--;
      } else {
        this.redGam--;
      }
    },
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
        display: block;
    }
    #tip #showMessage{
        margin-top:200px;
        font-size: 80px;
        font-weight: bold;
        font-family: Arial;
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
        font-size: 25px;
        line-height: 50px;
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
        line-height: 60px;
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
