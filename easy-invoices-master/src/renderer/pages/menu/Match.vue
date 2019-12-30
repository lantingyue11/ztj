<template>
    <div>
        <Row>
            <Col span="16">
                <Row>
                    <Col span="24">
                        <Row style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;margin: 3px;}">
                            <Col span="6"><span><Icon type="clipboard"  ></Icon>&nbsp;&nbsp;场次：{{address}}</span></Col>
                            <Col span="6"><span><Icon type="ios-paper" />&nbsp;&nbsp;轮次：{{totalRound}}</span></Col>
                            <Col span="6"><span><Icon type="grid" />&nbsp;&nbsp;局数：{{roundNum}}</span></Col>
                            <Col span="6"><span><Icon type="podium" />&nbsp;&nbsp;级别：{{thisLevel}}</span></Col>
                        </Row>

                    </Col>
                </Row>
                <Row>
                    <Col span="24" id="tip" v-show="show">
                        <p id="showMessage">{{message}}</p>
                    </Col>
                </Row>
                <Row style="{padding: 1px;  background: #26292E; border-radius: 1px;margin: 0px;height: 340px;}">
                    <Col span="12" >
                        <div class="userName1" style="background: #232D3A;margin-top: -2px;line-height: 50px;border:0.5px solid #666666;">
                            <Avatar icon="ios-person" size="large" style="margin-left: -120px"/>
                            <span style="padding-left:80px">{{blueName}}</span>
                        </div>

                    </Col>
                    <Col span="12">
                        <div class="userName2" style="background:#33252A;color:white;margin-top: -2px;line-height: 50px;border:0.5px solid #666666;">
                            <span style="padding-right:90px">{{redName}}</span>
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
                            {{blueGrade}}
                        </div></Col>

                        <Col span="4" style="background: #26292E"><div class="vsSign"><p>VS</p></div>
                            <div class="timer" style="background: #3CB371;">
                                <div class="clock_style">Round 1</div>
                                <div class="timer_time"  style="color: black;" >
                                    {{timediff}}
                                </div>
                            </div></Col>
                        <Col span="6"><div class="grade2" id="red_grade" style="background:#B80000;color:white;">
                            {{redGrade}}
                        </div></Col>
                        <Col span="4" style="background: #521D20">
                            <div class="left-koufeng p" >
                                <p>扣&nbsp;&nbsp;&nbsp; 分&nbsp;&nbsp;<span><Tag color="#EEA2AD">1</Tag></span></p>
                                <p>感应数&nbsp; &nbsp;<span><Tag color="#EEA2AD">2</Tag></span></p>
                            </div>
                        </Col>
                    </Row>
              <!-- <row>

               </row>-->

                    <Col span="12" style="background: #1B3757;color:white;border: 1px solid #666666;margin-top: 30px;margin-top: 1px;height:75px; ">
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
                    <Col span="12" style="background:#521D20;color:white;border: 1px solid #666666;margin-top: 30px;margin-top: 1px;height:75px">
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
            <Col span="7" style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;margin: 3px;height: 425px;}">
                <Row>
                    <Col span="24">
                        <Form :label-width="90" inline >
                            <FormItem label="场地选择">
                                <Select v-model="currentAddress" style="width:150px;" placeholder="请选择场地过滤" @on-change="changeAddress" clearable
                                        filterable>
                                    <Option v-for="(item,index) in addressList" :value="item.address" :key="index">{{item.address}} 场次
                                    </Option>
                                </Select>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Table border :columns="columns1" :data="dataList" :loading="tableLoading" @on-row-dblclick="chooseLine"></Table>
                </Row>
                <Row style="margin-top: 40px;">
                    <Button type="warning" @click="showScreen">投屏</Button>
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
import SerialPort from 'serialport';
export default {
  data() {
    return {
      show: false,
      columns1: [
        {
          title: '序号',
          key: 'game_id',
        },
        {
          title: '状态',
          key: 'status',
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
      dataList: [],
      addressList: [],
      currentAddress: '',
      tableLoading: false,
      blueGrade: 0,
      redGrade: 0,
      blueName: '青队',
      redName: '红队',
      tempData: [],
      thisLevel: '',
      address: '',
      totalRound: '',
      roundNum: '',
    };
  },
  methods: {
    /*
     * 加分
     */
    addPoint(name) {
      if (name === 'blue') {
        this.blueGrade++;
        this.sendMessage(1, this.blueGrade);
      } else if (name === 'red') {
        this.redGrade++;
        this.sendMessage(2, this.redGrade);
      } else {
        this.$Notice.error({
          title: '加分遇到未知错误！',
        });
      }
    },
    // 减分
    devicePoint(name) {
      if (name === 'blue') {
        const newValue = this.blueGrade - 1;
        if (newValue < 0) {
          console.log('青方分数小于零');
        } else {
          this.sendMessage(1, newValue);
          this.blueGrade--;
        }
      } else if (name === 'red') {
        const newValue = this.redGrade - 1;
        if (newValue < 0) {
          console.log('青方分数小于零');
        } else {
          this.sendMessage(2, newValue);
          this.redGrade--;
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
        // need to enhance
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

    // 通过场地查找比赛信息
    getInitData(currentAddress) {
      this.tableLoading = true;
      const address = currentAddress;
      console.log('address = ' + address);
      const countSQL = `SELECT game_id,status from GAME_INFO WHERE address = '${address}' and blue_id <>'None' LIMIT 0, 5 `;
      this.$logger(countSQL);
      this.$db.all(countSQL, (err, res) => {
        if (err) {
          this.$logger(err);
          this.$Notice.error({
            title: '查询失败',
            desc: err,
          });
        } else {
          this.dataList = [];
          this.dataList = res;
        }
      });
      this.tableLoading = false;
    },

    // 初始化场次信息数据
    initData() {
      const countSQL = 'SELECT DISTINCT address from GAME_INFO ORDER BY address';
      this.$logger(countSQL);
      let address = '';
      this.$db.all(countSQL, (err, res) => {
        if (err) {
          this.$logger(err);
          this.$Notice.error({
            title: '查询失败',
            desc: err,
          });
        } else {
          this.addressList = res;
          this.currentAddress = res[0].address;
          address = res[0].address;
          this.getInitData(address);
        }
      });
    },
    // 获取场地信息
    getAddressInfo() {
      const countSQL = 'SELECT DISTINCT address from GAME_INFO ORDER BY address';
      this.$logger(countSQL);
      this.$db.all(countSQL, (err, res) => {
        if (err) {
          this.$logger(err);
          this.$Notice.error({
            title: '查询失败',
            desc: err,
          });
        } else {
          this.addressList = res;
          this.currentAddress = res[0].address;
        }
      });
    },

    // 选择场地方法
    changeAddress(name) {
      console.log('name=' + name);
      this.getInitData(name);
    },

    // 查询通用方法
    getDataBySql(Sql) {
      const countSQL = Sql;
      this.$logger(countSQL);
      this.$db.all(countSQL, (err, res) => {
        if (err) {
          this.$logger(err);
          this.$Notice.error({
            title: '查询失败',
            desc: err,
          });
        } else {
          console.log(res);
          this.blueName = res[0].blue_name;
          this.redName = res[0].red_name;
          this.thisLevel = res[0].level;
          this.address = res[0].address;
          this.totalRound = res[0].total_round;
          this.roundNum = res[0].round_num;
          this.blueGrade = 0;
          this.redGrade = 0;
        }
      });
    },

    // 选择表格某一行事件
    chooseLine(index) {
      const gameId = index.game_id;
      console.log(gameId);
      const querySQL = 'SELECT * from GAME_INFO where game_id = ' + gameId;
      this.getDataBySql(querySQL);
    },
    // 投屏
    showScreen() {
      this.$electron.ipcRenderer.send('showScreen', {
        person: 1,
      });
    },

    // 显示信息
    update() {
      this.$electron.ipcRenderer.on('update-message', (event, msg) => {
        const message = msg.message;
        const data = msg.data;
        switch (message) {
          case 'error':
            this.$Notice.error({
              title: '提示信息',
              desc: data,
            });
            break;
          default:
            console.log('default');
        }
      });
    },

    // 接受串口信息
    receivePortMsg(obj) {
      const that = obj;
      console.log('receivePortMsg');
      const serialPort = new SerialPort(
        'COM2', {
          baudRate: 115200,
          dataBits: 8,
          parity: 'even',
          stopBits: 1,
          flowControl: false,
        }, false);
      serialPort.on('data', function(data) {
        console.log(data);
        const newArray = that.transferToSixteen(data);
        console.log('newdata = ' + newArray);
        that.processNewData(newArray, that);
      });
    },

    // 十进制转16进制
    transferToSixteen(data) {
      console.log('start transfer to sisteen');
      const newArray = data.map(item => {
        return item.toString(16);
      });
      return newArray;
    },

    // 处理串口信息
    processNewData(data, that) {
      const address = data[1];
      console.log(address);
      const eq = data[2];
      console.log('eq = ' + eq);
      switch (eq) {
        case '01':
          break;
        case '2':
          that.redGrade = that.redGrade + 2;
          break;
        case '3':
          that.blueGrade = that.blueGrade + 2;
          break;
        case '04':
          break;
        case '05':
          break;
        case '06':
          break;
        case 7:
          that.redGrade = that.redGrade + 3;
          break;
        case '08':
          that.blueGrade = that.blueGrade + 3;
          break;
        default:
          console.log('get eq error, and eq = ' + eq);
          that.$Notice.error({
            title: '提示信息',
            desc: 'get eq error, and eq = ' + eq,
          });
      }

    },

  },
  created() {
    this.getAddressInfo();
    this.initData();
    this.update();
    this.receivePortMsg(this);
  },
};


</script>
<style >
    #tip{
        position: absolute;
        height: 340px;
        width: 100%;
        background: rgba(23, 23, 23, 0.5);
        z-index: 99999;
    }
    #tip #showMessage{
        margin-top:100px;
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
        font-size: 130px;
        color: #5b6270;
        text-align: center;
        padding-top: 20px;
    }
    .grade2{
        font-size: 130px;
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
        margin-top: 163px;
    }
    .left-koufeng p{
        color: white;
        font-size: 16px;
        text-align: center;
    }
    .team_grade{
        margin-left: 20px;
        margin-top: 40px;
    }
</style>
