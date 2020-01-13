<template>
    <div>
        <Row >
            <Col span="12">
                <Row>
                    <Col span="24">
                        <Row style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;}">
                            <Col span="5"><span><Icon type="clipboard"  ></Icon>&nbsp;场次：{{address}}</span></Col>
                            <Col span="5"><span><Icon type="ios-paper" />&nbsp;轮次：{{totalRound}}</span></Col>
                            <Col span="5"><span><Icon type="grid" />&nbsp;局数：{{roundNum}}</span></Col>
                            <Col span="7"><span><Icon type="podium" />&nbsp;级别：{{thisLevel}}</span></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span="24" id="tip" v-show="show">
                        <p id="showMessage">{{message}}</p>
                    </Col>
                </Row>
                <Row style="{padding: 1px;  background: #26292E; border-radius: 1px;height: 348px;}">
                    <Col span="12" >
                        <div class="userName1" style="background: #232D3A;margin-top: -2px;line-height: 50px;border:0.5px solid #666666;">
                            <Avatar icon="ios-person" size="large" style="margin-left: -90px"/>
                            <span style="padding-left:80px">{{blueName}}</span>
                        </div>
                    </Col>
                    <Col span="12">
                        <div class="userName2" style="background:#33252A;color:white;margin-top: -2px;line-height: 50px;border:0.5px solid #666666;">
                            <span style="padding-right:90px">{{redName}}</span>
                            <Avatar icon="ios-person" size="large" style="margin-right: -85px"/>
                        </div>

                    </Col>
                    <Row >
                        <Col span="4" style="background: #1B3757">
                            <div class="left-koufeng p" >
                                <p>感应数&nbsp;<Tag color="#5F9EA0">2</Tag></p>
                            </div>
                        </Col>
                        <Col span="6">
                            <div class="grade1" id="blue_grade" style="background:#0157B9;color:white;">
                            {{blueGrade}}
                            </div>
                            <div style="background:#0157B9;color:white;height: 25px">
                                <p style="text-align: center;font-size: 15px">45kg</p>
                            </div>
                        </Col>

                        <Col span="4" style="background: #26292E"><div class="vsSign"><p>VS</p></div>
                            <div class="timer" style="background: #3CB371;">
                                <div class="clock_style">Round 1</div>
                                <div class="timer_time"  style="color: white;margin-top: 7px" >
                                    {{timediff}}
                                </div>
                            </div>
                        </Col>
                        <Col span="6">
                            <div class="grade2" id="red_grade" style="background:#B80000;color:white;">
                            {{redGrade}}
                            </div>
                            <div style="background:#B80000;color:white;height: 25px">
                                <p style="text-align: center;font-size: 15px">45kg</p>
                            </div>
                        </Col>
                        <Col span="4" style="background: #521D20">
                            <div class="left-koufeng p" >
                                <p>感应数&nbsp;<span><Tag color="#EEA2AD">2</Tag></span></p>
                            </div>
                        </Col>
                    </Row>

                    <Col span="12" style="background: #1B3757;color:white;border: 1px solid #666666;margin-top: 30px;margin-top: 1px;height:75px; ">
                        <Row style="position: relative;">
                            <Col span="6">
                                <p style="text-align: center">GAM-JEOM</p>
                                <p style="text-align: center;font-size: 18px">{{blueGam}}</p>
                            </Col>
                            <Col span="6" style="font-size: 18px;"><span :style="{'background' : eqStatus === '01' ? '#fff' :eqStatus === '02' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 5px;left: 12px"></span><img class="round_bg" src='../../imgs/ltou.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">0</span></Col>
                            <Col span="6" style="font-size: 18px;"><span :style="{'background' : eqStatus === '01' ? '#fff' :eqStatus === '02' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 5px;left: 14px"></span><img class="round_bg" src='../../imgs/lshen.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">0</span></Col>
                            <Col span="6" style="font-size: 18px;"><span :style="{'background' : eqStatus === '01' ? '#fff' :eqStatus === '02' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 5px;left: 16px"></span><img class="round_bg" src='../../imgs/lshou.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">0</span></Col>
                        </Row>
                    </Col>
                    <Col span="12" style="background:#521D20;color:white;border: 1px solid #666666;margin-top: 30px;margin-top: 1px;height:75px">
                        <Row style="position: relative;" >
                            <Col span="6"><span :style="{'background' : eqStatus === '01' ? '#fff' :eqStatus === '02' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 8px;left: 18px"></span><img class="round_bg" src='../../imgs/tou.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">0</span></Col>
                            <Col span="6"><span :style="{'background' : eqStatus === '01' ? '#fff' :eqStatus === '02' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 8px;left: 18px"></span><img class="round_bg" src='../../imgs/shen.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">0</span></Col>
                            <Col span="6"><span :style="{'background' : eqStatus === '01' ? '#fff' :eqStatus === '02' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 8px;left: 20px"></span><img class="round_bg" src='../../imgs/shou.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">0</span></Col>
                            <Col span="6">
                                <p style="text-align: center">GAM-JEOM</p>
                                <p style="text-align: center;font-size: 18px">{{redGam}}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;}">
                    <Col span="11">
                        <Row style="text-align: center">
                            <Col span="6"><Button>读秒</Button></Col>
                            <Col span="10"> <Button @click="countdown('showMessage',10)">休息计时</Button></Col>
                            <Col span="8"><Button @click="nextMatch">下一局</Button></Col>
                        </Row>
                    </Col>
                    <Col span="3">
                        <Button type="primary" @click="created">{{startBtn}}</Button>
                    </Col>
                    <Col span="10">
                        <Row style="text-align: center">
                            <Col span="7"><Button>加时</Button></Col>
                            <Col span="10"><Button @click="countdown('showMessage',60)">60s计时</Button></Col>
                            <Col span="7"> <Button>结束</Button></Col>
                        </Row>

                    </Col>
                </Row>
            </Col>
            <Col span="12" style="{display: block;  background: #fff; border-radius:5px;height: 442px;}">
                <Row >
                    <Col span="24">
                        <Form :label-width="90" inline>
                            <FormItem label="场地选择" style="margin-bottom: 10px;margin-top: 5px;height: 42px;line-height: 42px">
                                <Select v-model="currentAddress" style="display: inline-block;width:36vw;padding: 0 5px;font-size: 20px" placeholder="请选择场地过滤" @on-change="changeAddress" clearable
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
            </Col>
        </Row>
        <Row >
            <Col span="12" style="{display: block;padding: 20px 2px;  background: #fff; border-radius: 5px;margin-top: 2px;margin-left: 3px;height: 200px;}">
                <Row style="text-align: center;">
                    <Col span="12">
                        <div>
                            <Dropdown @on-click="blueWinBth">
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
                        <row style="text-align: center;margin-top: 10px">
                            <Col span="6"><Button @click="addPoint('red')">+</Button></Col>
                            <Col span="12" style="background:#2d8cf0;height: 36px;line-height: 36px;color: white">扣分</Col>
                            <Col span="6"><Button @click="devicePoint('red')">-</Button></Col>
                        </row>
                        <row style="text-align: center;margin-top: 10px">
                            <Col span="6"><Button @click="addPoint('red')">+</Button></Col>
                            <Col span="12" style="background:#2d8cf0;height: 36px;line-height: 36px;color: white">加分</Col>
                            <Col span="6"><Button @click="devicePoint('red')">-</Button></Col>
                        </row>
                        <!--<div style="margin-top: 10px;">
                            <ButtonGroup >
                                <Button @click="devicePoint('blue')">
                                    -
                                    &nbsp;&nbsp;扣分
                                </Button>
                                <Button @click="addPoint('blue')">
                                    扣分&nbsp;&nbsp;
                                    +
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div style="margin-top: 10px;">
                            <Button type="warning"  @click="addWarning('blue')">警告</Button>
                            <Button type="success" @click="deleteWarning('blue')">撤销警告</Button>
                        </div>-->
                    </Col>
                    <Col span="12">
                        <div style="width: 100%;">
                            <Dropdown style="" @on-click="redWinBth">
                                <Button type="error" style="background: #F08080 !important;;border-color: #F08080 !important;">
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
                        <row style="text-align: center;margin-top: 10px">
                            <Col span="6"><Button @click="addPoint('red')">+</Button></Col>
                            <Col span="12" style="background: #F08080;height: 36px;line-height: 36px;color: white">扣分</Col>
                            <Col span="6"><Button @click="devicePoint('red')">-</Button></Col>
                        </row>

                        <row style="text-align: center;margin-top: 10px">
                            <Col span="6"><Button @click="addPoint('red')">+</Button></Col>
                            <Col span="12" style="background: #F08080;height: 36px;line-height: 36px;color: white">加分</Col>
                            <Col span="6"><Button @click="devicePoint('red')">-</Button></Col>

                        </row>
                    <!--    <div style="float: right;margin-top: 10px;">
                            <ButtonGroup >
                                <Button @click="addPoint('red')">&nbsp;&nbsp;+</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>扣分</span>
                               &lt;!&ndash; <Button @click="devicePoint('red')">-&nbsp;&nbsp;</Button>&ndash;&gt;
                            </ButtonGroup>
                        </div>-->
                      <!--  <br>
                        <div style="float: right;margin-top: 10px;">
                            <Button type="warning"  @click="addWarning('red')">警告</Button>
                            <Button type="success" @click="deleteWarning('red')">撤销警告</Button>
                        </div>-->
                    </Col>
                </Row>
                <row style="text-align: center;margin-top: 10px">
                    <Col span="12"><Button type="warning" @click="showScreen">投屏</Button></Col>
                    <Col span="12"><Button type="warning"  @click="test">连接测试</Button></Col>

                </row>
            </Col>
            <row style="height: 200px">
                <Layout>
                    <Header align="center" style="{display: block;padding: 3px; background: #04172a; margin-top: 2px;height:45px; line-height:45px;font-size: 15px;color: white;}">设备电量显示</Header>
                    <Footer style="height: 155px">
                        <Row style="font-size: 28px;margin-top: -22px;height: 40px">
                            <Col span="8"><span>设备名称</span></Col>
                            <Col span="12"><span>设备电量</span></Col>
                            <Col span="4"><span>设备状态</span></Col>
                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="8"><span>护具</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="eqElectric" :height="30"></Vbattery></Col>
                            <Col span="4"><span>正在运行</span></Col>
                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="8"><span>护具</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="eqElectric" :height="30"></Vbattery></Col>
                            <Col span="4"><span>正在运行</span></Col>
                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="8"><span>护具</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="eqElectric" :height="30"></Vbattery></Col>
                            <Col span="4"><span>正在运行</span></Col>
                        </Row>
                    </Footer>
                </Layout>

            </row>
        </Row>
        <Modal v-model="modalShow" :mask-closable="false" :title="modalTitle" @on-cancel="modalShow = false">
            <div>
                <Form ref="formVali"  label-position="right"
                      :label-width="130" >
                    <FormItem label="状态">
                        <Select style="width:200px;">
                            <Option value="等待中">等待中</Option>
                            <Option value="已完成">已完成</Option>
                        </Select>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer">
                <Button @click="modalShow = false">
                    取消
                </Button>
                <Button type="primary" @click="editConfirm" :loading="modalBtnLoading">确认
                </Button>
            </div>
        </Modal>
    </div>


</template>
<script>
import SerialPort from 'serialport';
import Caspanel from "iview/src/components/cascader/caspanel";
import Vbattery from './../../components/battery.vue';
export default {
    components: {Caspanel,Vbattery},
    data() {
    return {
      showImg: false,
      show: false,
      columns1: [
        {
          title: '编号',
          key: 'game_id',
          width: 90,
        },
        {
          title: '参赛方',
          key: 'people',
          width: 150,
        },
        {
          title: '进程',
          key: 'round_num',
          width: 70,
        },
        {
          title: '比赛项目',
          key: 'level',
          width: 100,
        },
        {
          title: '状态',
          key: 'status',
          width: 100,
        },
        {
          title: '操作',
          key: 'action',
          width: 90,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
                  icon: 'edit',
                },
                attrs: {
                  title: '修改状态',
                },
                style: {
                  'margin-left': '5px',
                },
                on: {
                  click: () => {
                    this.edit(params.row);
                  },
                },
              }),
            ]);
          },
        },
      ],
      modalBtnLoading: false,
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
      currentGameId: '',
      // 设备电量
      eqElectric: null,
      // 设备状态
      eqStatus:'01',
      // 定时刷新
      timer: null,
      modalShow: false,
    };
  },

  computed: {
    modalTitle() {
      return '修改状态';
    },
  },
  methods: {
    /*
     * 加分
     */
    addPoint(name) {
      if (name === 'blue') {
        this.blueGrade++;
        this.sendMessage('grade', 'blue', this.blueGrade);
      } else if (name === 'red') {
        this.redGrade++;
        this.sendMessage('grade', 'red', this.redGrade);
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
          this.sendMessage('grade', 'blue', newValue);
          this.blueGrade--;
        }
      } else if (name === 'red') {
        const newValue = this.redGrade - 1;
        if (newValue < 0) {
          console.log('青方分数小于零');
        } else {
          this.sendMessage('grade', 'red', newValue);
          this.redGrade--;
        }
      } else {
        this.$Notice.error({
          title: '减分遇到未知错误！',
        });
      }
    },
    // 发送分数信息
    sendMessage(type1, who, value1) {
      this.$electron.ipcRenderer.send('updateIndexGrade', {
        type: type1,
        person: who,
        value: value1,
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
      const countSQL = `SELECT game_id,round_num, blue_name||'vs'||red_name as people,level,status from GAME_INFO  WHERE address = '${address}' and blue_id <>'None' LIMIT 0, 6 `;
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
          this.currentGameId = res[0].game_id;
        }
      });
    },

    // 编辑
    edit(row) {
      this.$refs.formVali.resetFields();
      const ganme_id = row.game_id;
      console.log(game_id);
      this.modalParams = {
        id: row.id,
        name: row.name,
        standard_buy_unit_price: row.standard_buy_unit_price,
        standard_sell_unit_price: row.standard_sell_unit_price,
        remark: row.remark,
      };
      this.modalShow = true;
    },
    editConfirm() {

    },
    // 选择表格某一行事件
    chooseLine(index) {
      const gameId = index.game_id;
      console.log(gameId);
      const querySQL = 'SELECT * from GAME_INFO where game_id = ' + gameId;
      this.getDataBySql(querySQL);
    },

    // 点击下一场
    nextMatch() {
      this.initMessage();
      const gameId = this.currentGameId;
      const querySQL = `SELECT * from GAME_INFO where game_id >'${gameId}' and blue_id <>'None' limit 1`;
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

    // 红方胜利按钮
    redWinBth(name) {
      console.log(name);
      if(name === 'cancel') {
        this.initMessage();
      }else{
        this.show = true;
        this.message = '红方胜利/ ' + name;
      }
    },

    // 蓝方胜利按钮
    blueWinBth(name) {
      console.log(name);
      if(name === 'cancel') {
       this.initMessage();
      }else{
        this.show = true;
        this.message = '青方胜利/ ' + name;
      }
    },

    initMessage() {
      this.show = false;
      this.message = '';
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
      // 测试设备链接状态
      testConnectt(obj) {
          const that = obj;
          alert("测试设备");
          const serialPort = new SerialPort(
              'COM2', {
                  baudRate: 115200,
                  dataBits: 8,
                  parity: 'even',
                  stopBits: 1,
                  flowControl: false,
              }, false);
          serialPort.open(function(error){
              if(error){
                  alert("打开端口"+portName+"错误："+error);
              }else{
                  alert("打开端口成功，正在监听数据中");
                  serialPort.on('data',function(data){
                      console.log(data);
                      const newArray = that.transferToSixteen(data);
                      console.log('newdata = ' + newArray);
                      that.processNewData(newArray, that);
                  })
              }
          });

      },

      test (obj) {
        // 重复刷新设备连接信息
        this.timer = setInterval(()=>{
              const net = require('net');
              const that =obj;
              //创建一个tcp服务
              //参数一表示创建服务的一些配置
              //参数二表示 事件 'connection' 监听回调函数
              let server = net.createServer({
                  //表示是否允许一个半开的TCP连接，默认为false
                  allowHalfOpen: false,
                  //一旦来了连接，是否暂停套接字，默认为false
                  pauseOnConnect: false
              });
              console.log('1111');
              server.listen(8080);

              //一个新的连接建立时触发 'connection' 事件
              server.on('connection', function (socket) {
                  //注意这里的socket是一个流，既可以读，也可以写
                  //当我们监听 'data' 事件后，系统就会不断的从流中读取数据
                  socket.on('data', function (data) {
                      console.log(data);
                      let array = [];

                      for (let i = 0; i < data.byteLength; i++) {
                          array[i] = data[i];
                      }
                      console.log(array);
                      const newArray = that.transferToSixteen(array);
                      // console.log(value);
                      console.log(newArray);
                  });
              });

              //服务调用 server.listen() 监听后就会触发该事件
              server.on('listening', function () {
                  // address() 方法返回服务器地址信息对象
                  let addr = server.address();
                  console.log(`服务器监听 : ${addr.port} 端口`);
              });

              //服务关闭时触发，如果还有连接存在，则直到所有连接结束才会触发该事件
              server.on('close', function () {
                  console.log('服务关闭');
              });

              //出现错误时触发
              server.on('error', function (err) {
                  console.log(err);
              });
          },15000);
          this.$once('hook:beforeDestroy', () => { clearInterval(this.timer); })


      },

        //字符出转hex
     stringToHex(data) {
        let strs = data;
         const ar = [];
         for (let i = 0; i < strs.length; i++) {
             let a = '';
             a = strs.charCodeAt(i).toString(16);
             ar.push(a);
         }
         strs = ar.join("");
     //    console.log(strs);
          return strs;
    },

// 十进制转16进制
    transferToSixteen(data) {
      console.log('start transfer to sisteen');
      const newArray = data.map(item => {
        return item.toString(16);
      });
      return newArray;
    },
    // 16进制转化为10进制
    transformTen(data) {
      console.log(parseInt('3D', 16));
      const newArray = data.map(item => {
        return item.parseInt(data, 16);
      });
      return newArray;
    },
    // 处理串口信息
    processNewData(data, that) {
      const address = data[5];
      console.log(address);
      const eq = data[6];
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
      const object = data[7];
      const power1 = data[8];
      const power2 = data[9];
      const power3 = power2 + power1;
      // 护具受力值
      const power = that.transformTen(power3);
      // 目的
      const purpose = data[10];
        if (purpose === '01') {
            console.log('心跳');
        } else if (purpose === '02') {
            console.log('按键按下');
        }
      // 设备电量
      const electric = parseInt(that.transformTen(data[11])/20);
        this.eqElectric = electric;
        if ( object === '01') {
            console.log('脚套芯片电量');
        }else if ( object === '02') {
            console.log('青方护具电量');
        }else if ( object === '03'){
            console.log('红方护具电量');
        }else if ( object === '04') {
            console.log('1号打分器');
        }else if ( object === '05') {
            console.log('2号打分器');
        }else if ( object === '06') {
            console.log('3号打分器');
        }else if ( object === '07') {
            console.log('青方头盔');
        }else if ( object === '08') {
            console.log('红方头盔');
        }

      // 护具受力值
        if (object === '02') {
            const bluePower = power / 10;
            console.log(bluePower);
        } else if (object === '03') {
            const redPower = power / 10;
            console.log(redPower);
        }
        // 青方头盔是否被击打
        if (object === '07' && power2 === '01') {
            console.log('青方被击打');
        } else if (object === '07' && power2 === '00') {
            console.log('青方头盔空闲，发送心跳');
        }
        // 红方头盔是否被击打
        if (object === '08' && power2 === '01') {
            console.log('红方被击打');
        } else if (object === '08' && power2 === '00') {
            console.log('红方头盔空闲，发送心跳');
        }
        // 1号打分器
        if (object === '04' && power1 === '01' && power2 === '02') {
            console.log('1号打分器按下青方一分按键');
        } else if (object === '04' && power1 === '02' && power2 === '02') {
            console.log('1号打分器按下青方旋转追加按键');
        } else if (object === '04' && power1 === '00' && power2 === '02') {
            console.log('1号打分器心跳包');
        } else if (object === '04' && power1 === '01' && power2 === '03') {
            console.log('1号打分器按下红方一分按键');
        } else if (object === '04' && power1 === '02' && power2 === '03') {
            console.log('1号打分器按下红方旋转追加按键');
        } else if (object === '04' && power1 === '00' && power2 === '03') {
            console.log('1号打分器心跳包');
        }
        // 2号打分器
        if (object === '05' && power1 === '01' && power2 === '02') {
            console.log('1号打分器按下青方一分按键');
        } else if (object === '04' && power1 === '02' && power2 === '02') {
            console.log('1号打分器按下青方旋转追加按键');
        } else if (object === '05' && power1 === '00' && power2 === '02') {
            console.log('1号打分器心跳包');
        } else if (object === '05' && power1 === '01' && power2 === '03') {
            console.log('1号打分器按下红方一分按键');
        } else if (object === '05' && power1 === '02' && power2 === '03') {
            console.log('1号打分器按下红方旋转追加按键');
        } else if (object === '05' && power1 === '00' && power2 === '03') {
            console.log('1号打分器心跳包');
        }
        // 3号打分器
        if (object === '06' && power1 === '01' && power2 === '02') {
            console.log('1号打分器按下青方一分按键');
        } else if (object === '06' && power1 === '02' && power2 === '02') {
            console.log('1号打分器按下青方旋转追加按键');
        } else if (object === '06' && power1 === '00' && power2 === '02') {
            console.log('1号打分器心跳包');
        } else if (object === '06' && power1 === '01' && power2 === '03') {
            console.log('1号打分器按下红方一分按键');
        } else if (object === '06' && power1 === '02' && power2 === '03') {
            console.log('1号打分器按下红方旋转追加按键');
        } else if (object === '06' && power1 === '00' && power2 === '03') {
            console.log('1号打分器心跳包');
        }
        // 设备状态
        const  status = data[12];
     //   const  status = '01';
        this.eqStatus = status;
        if (status === '01') {
            console.log('设备空闲，未接入护具');
        } else if (status === '02') {
            console.log('接入护具');
        } else if (status === '03') {
            console.log('异常');
        }
    },


  },
  created() {
    this.showImg = true;
    this.getAddressInfo();
    this.initData();
    this.update();
    this.receivePortMsg(this);
    this.eqElectric = 3;
  //this.testConnect();
  //  this.test(this);
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
        margin-top: 194px;
    }
    .left-koufeng p{
        color: white;
        font-size: 13px;
        text-align: center;
        padding:10px 0px;
    }

</style>
