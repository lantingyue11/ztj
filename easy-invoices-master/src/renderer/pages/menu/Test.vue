<template>
    <div>
        <Row >
            <Col span="12">
                <Row>
                    <Col span="24">
                        <Row style="{display: block;padding: 1px;height: 5px;font-size: 12px}">
                            <Col span="12" style="background: #232D3A;color: white"><span>LOGO</span></Col>
                            <Col span="12" style="background:#33252A;color: white"><span style="text-align:right;display: block;">{{thisLevel}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{roundNum}}</span></Col>
                        </Row>
                        <Row style="{display: block;padding: 1px;height: 10px;font-size: 20px;margin-top: 5px}">
                            <Col span="12" style="background: #232D3A;color: #232D3A"><span>logo</span></Col>
                            <Col span="12" style="background:#33252A;color: white"><span style="margin-left: -95px;font-size: 21px">{{gameName}}</span></Col>
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
                            <Avatar icon="ios-person" size="large" style="margin-left: -100px"/>
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
                        <Col span="4" style="background: #1B3757;">
                            <div style="color: white;text-align: center"> <span style="font-size: 12px;">丹枫小学</span>
                            </div>
                            <div class="left-koufeng" v-for="(item, index) in countPointArryl" :key="index">
                                <span :style="colorFun(item.num1)" style="display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>
                                <span :style="colorFun(item.num2)" style="display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                                <span :style="colorFun(item.num3)" style="display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                            </div>
                            <!--<div style="margin-top: 10px;margin-left: 28px">
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                            </div>
                            <div style="margin-top: 10px;margin-left: 28px">
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                            </div>
                            <div style="margin-top: 10px;margin-left: 28px">
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                            </div>
                            <div style="margin-top: 10px;margin-left: 28px">
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>
                            </div>-->
                            <div style="height: 45px"></div>
                        </Col>
                        <Col span="6"> <div class="grade1" id="blue_grade" style="background:#0157B9;color:white;">
                            {{blueGrade}}
                        </div>
                            <div style="background:#0157B9;color:white;height: 25px">
                                <Progress :percent="bluePower" :stroke-width="20" style="width: 153px" status="active" text-inside />
                            </div>
                        </Col>

                        <Col span="4" style="background: #26292E"><div class="vsSign"><p>VS</p></div>
                            <div class="timer" style="background: #3CB371;">
                                <div class="clock_style">Round {{totalRound}}</div>
                                <div class="timer_time"  style="color: black;" >
                                    {{timediff}}
                                </div>
                            </div>
                            <div style="color: white;text-align: center;margin-top: 12px;">
                                <span style="font-size: 14px">MATCH</span>
                                <span style="font-size: 20px">{{currentAddress+currentGameId}}</span>
                            </div>
                        </Col>
                        <Col span="6"><div class="grade2" id="red_grade" style="background:#B80000;color:white;">
                            {{redGrade}}
                        </div>
                            <div style="background:#B80000;color:white;height: 25px;">
                                <Progress :percent="redPower" :stroke-width="20" style="width: 153px;" status="active" text-inside />
                            </div>
                        </Col>
                        <Col span="4" style="background: #521D20">
                            <div style="color: white;text-align: center"> <span style="font-size: 12px;">阳光小学</span>
                            </div>
                            <div class="left-koufeng p" v-for="(item, index) in countPointArryr" :key="index">
                                <span :style="colorFun(item.num1)" style="display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>
                                <span :style="colorFun(item.num2)" style="display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>
                                <span :style="colorFun(item.num3)" style="display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>

                            </div>
                            <!--                            <div class="left-koufeng p" >-->
                            <!--                                <span :style="colorFun(1)" style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                            </div>-->
                            <!--                            <div style="margin-left: 28px;margin-top: 10px" >-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                            </div>-->
                            <!--                            <div style="margin-left: 28px;margin-top: 10px" >-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                            </div>-->
                            <!--                            <div style="margin-left: 28px;margin-top: 10px" >-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                            </div>-->
                            <!--                            <div style="margin-left: 28px;margin-top: 10px" >-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white;"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                                <span style="background: white;display: inline-block;width: 10px;height: 10px;border-radius: 50%;border-color: white"></span>-->
                            <!--                            </div>-->
                            <div style="height: 45px"></div>
                        </Col>
                    </Row>

                    <Col span="12" style="background: #1B3757;color:white;border: 1px solid #666666;margin-top: 30px;margin-top: 1px;height:75px; ">
                        <Row style="position: relative;">
                            <Col span="6">
                                <p style="text-align: center">GAM-JEOM</p>
                                <p style="text-align: center;font-size: 18px">{{blueGam}}</p>
                            </Col>
                            <Col span="6" style="font-size: 18px;"><span :style="{'background' : buleCasqueStatus === '1' ? '#fff' :buleCasqueStatus === '2' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 5px;left: 12px"></span><img class="round_bg" src='../../imgs/ltou.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">{{buleCasqueRecation}}</span></Col>
                            <Col span="6" style="font-size: 18px;"><span :style="{'background' : buleCasqueStatus === '1' ? '#fff' :buleCasqueStatus === '2' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 5px;left: 14px"></span><img class="round_bg" src='../../imgs/lshen.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">{{blueReaction}}</span></Col>
                            <Col span="6" style="font-size: 18px;"><span :style="{'background' : eqStatus === '1' ? '#fff' :eqStatus === '02' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 5px;left: 16px"></span><img class="round_bg" src='../../imgs/lshou.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">0</span></Col>
                        </Row>
                    </Col>
                    <Col span="12" style="background:#521D20;color:white;border: 1px solid #666666;margin-top: 30px;margin-top: 1px;height:75px">
                        <Row style="position: relative;" >
                            <Col span="6"><span :style="{'background' : redCasqueStatus === '1' ? '#fff' :redCasqueStatus === '2' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 8px;left: 18px"></span><img class="round_bg" src='../../imgs/tou.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">{{redCasqueRecation}}</span></Col>
                            <Col span="6"><span :style="{'background' : redCasqueStatus === '1' ? '#fff' :redCasqueStatus === '2' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 8px;left: 18px"></span><img class="round_bg" src='../../imgs/shen.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">{{redReaction}}</span></Col>
                            <Col span="6"><span :style="{'background' : eqStatus === '1' ? '#fff' :eqStatus === '2' ? 'green' : 'red'}" style="background: white;display: inline-block;width: 8px;height: 8px;border-radius: 50%;position: absolute;top: 8px;left: 20px"></span><img class="round_bg" src='../../imgs/shou.png' style="margin-top:10px;"><span style="margin-top:24px;position: absolute;font-size: 18px;">0</span></Col>
                            <Col span="6">
                                <p style="text-align: center">GAM-JEOM</p>
                                <p style="text-align: center;font-size: 18px">{{redGam}}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;}">
                    <Col span="24">
                        <Row style="text-align: center">
                            <Col span="6"><Button type="info" @click="created">{{startBtn}}</Button></Col>
                            <Col span="6"><Button type="info" @click="countdown('showMessage',60)">60s计时</Button></Col>
                            <Col span="6"><Button type="info" @click="showScreen">投屏</Button></Col>
                            <!--<Col span="6"><Button type="info"  @click="toTestInfo">连接测试</Button></Col>-->
                            <Col span="6"><router-link tag = 'Button' class="ivu-btn ivu-btn-info" to="/test">连接测试</router-link></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span="12" style="{display: block;  background: #fff; border-radius: 5px;height: 425px;}">
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
        <Row>
            <Col span="12" style="{display: block;padding: 20px 2px;  background: #fff; border-radius: 5px;margin-top: 2px;height: 235px;}">
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
                            <Col span="6"><Button @click="addPoint('blue')">+</Button></Col>
                            <Col span="12" style="background:#2d8cf0;height: 36px;line-height: 36px;color: white">加分</Col>
                            <Col span="6"><Button @click="devicePoint('blue')">-</Button></Col>
                        </row>
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
                            <Col span="6"><Button @click="addPoint('blue')">+</Button></Col>
                            <Col span="12" style="background: #F08080;height: 36px;line-height: 36px;color: white">扣分</Col>
                            <Col span="6"><Button @click="devicePoint('blue')">-</Button></Col>
                        </row>

                        <row style="text-align: center;margin-top: 10px">
                            <Col span="6"><Button @click="addPoint('red')">+</Button></Col>
                            <Col span="12" style="background: #F08080;height: 36px;line-height: 36px;color: white">加分</Col>
                            <Col span="6"><Button @click="devicePoint('red')">-</Button></Col>

                        </row>
                    </Col>
                </Row>
                <row style="text-align: center;margin-top: 25px">
                    <Col span="12"><Button type="primary" @click="deviceReaction('blue')">护具感应减一</Button></Col>
                    <Col span="12"><Button  @click="deviceReaction('red')" style="background: #F08080;color: white">护具感应减一</Button></Col>
                </row>
            </Col>
            <Col span="12" style="height: 235px">
                <Layout>
                    <Header align="center" style="{display: block;padding: 3px; background: #04172a; margin-top: 2px;height:45px; line-height:45px;font-size: 15px;color: white;}">设备电量显示</Header>
                    <Footer style="height: 190px;overflow-y:auto">
                        <Row style="font-size: 28px;margin-top: -22px;height: 40px">
                            <Col span="12"><span>设备名称</span></Col>
                            <Col span="12"><span>设备电量</span></Col>

                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="12"><span>青方护具</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="blueProtectElectric" :height="30"></Vbattery></Col>
                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="12"><span>红方护具</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="redProtectElectric" :height="30"></Vbattery></Col>
                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="12"><span>青方头盔</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="buleCasqueElectric" :height="30"></Vbattery></Col>
                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="12"><span>红方头盔</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="redCasqueElectric" :height="30"></Vbattery></Col>
                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="12"><span>1号打分器</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="gradeElectric1" :height="30"></Vbattery></Col>
                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="12"><span>2号打分器</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="gradeElectric2" :height="30"></Vbattery></Col>
                        </Row>
                        <Row style="margin-top: 5px">
                            <Col span="12"><span>3号打分器</span></Col>
                            <Col span="12"><Vbattery v-if="showImg" :img="gradeElectric3" :height="30"></Vbattery></Col>
                        </Row>

                    </Footer>
                </Layout>
                <Modal
                        v-model="modalShow"
                        title="状态选择"
                        @on-ok="editConfirm"
                        @on-cancel="cancel">
                    <Select v-model="model1" @change="" style="width:480px">
                        <Option v-for="item in statusList" :value="item.value" :key="item.value">{{item.value}}</Option>
                    </Select>
                </Modal>
            </Col>
        </Row>
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
                countPointArryr: [
                    {
                        num1: 1,
                        num2: 1,
                        num3: 2
                    },
                    {
                        num1: 1,
                        num2: 2,
                        num3: 1
                    },
                    {
                        num1: 2,
                        num2: 1,
                        num3: 2
                    },
                    {
                        num1: 2,
                        num2: 1,
                        num3: 2
                    },
                    {
                        num1: 2,
                        num2: 1,
                        num3: 2
                    }
                ],
                countPointArryl: [
                    {
                        num1: 1,
                        num2: 1,
                        num3: 2
                    },
                    {
                        num1: 1,
                        num2: 2,
                        num3: 1
                    },
                    {
                        num1: 2,
                        num2: 1,
                        num3: 2
                    },
                    {
                        num1: 2,
                        num2: 1,
                        num3: 2
                    },
                    {
                        num1: 2,
                        num2: 1,
                        num3: 2
                    }
                ],
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
                                            this.modalShow = true;
                                            this.edit(params.row);

                                        },
                                    },
                                }),
                            ]);
                        },
                    },
                ],
                statusList: [
                    {
                        value: '已完成',
                        label: '已完成'
                    },
                    {
                        value: '等待中',
                        label: '等待中'
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
                //扣分次数
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
                modalParams: {
                    gameId: '',

                },
                model1:'',
                editGameId:'',
                //青方护具感应数
                blueReaction:0,
                //红方护具感应数
                redReaction:0,
                //青方力量值
                bluePower:0,
                //红方力量值
                redPower:0,
                //比赛名称
                gameName:'',
                //青方头盔感应数
                buleCasqueRecation:0,
                //红方头盔感应数
                redCasqueRecation:0,
                //打分器设备状态
                gradeStatus1:'',
                gradeStatus2:'',
                gradeStatus3:'',
                //青方头盔状态
                buleCasqueStatus:'',
                //红方头盔状态
                redCasqueStatus:'',
                //青方头盔电量
                buleCasqueElectric:null,
                //红方头盔电量
                redCasqueElectric:null,
                //脚套状态
                podothecaStatus:'',
                //1号打分器电量
                gradeElectric1:null,
                //2号打分器电量
                gradeElectric2:null,
                //3号打分器电量
                gradeElectric3:null,
                //脚套电量
                podothecaElectric:null,
                //青方护具状态
                bluePtotectStatus:'',
                //红方护具状态
                redPtotectStatus:'',
                //青方护具电量
                blueProtectElectric:null,
                //红方护具电量
                redProtectElectric:null,


            };
        },
        computed: {
            modalTitle() {
                return '修改状态';
            },
            colorFun() {
                return (val) =>{
                    return val === 1 ? 'background: #fff' : 'background: green';
                }
            }
        },
        methods: {
            /*
             * 加分
             */
            addPoint(name) {
                if (name === 'blue') {
                    this.blueGrade++;
                    this.redGam++;
                    this.sendMessage('grade', 'blue', this.blueGrade);
                } else if (name === 'red') {
                    this.redGrade++;
                    this.blueGam++;
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
                        this.redGam--;

                    }
                } else if (name === 'red') {
                    const newValue = this.redGrade - 1;
                    if (newValue < 0) {
                        console.log('红方分数小于零');
                    } else {
                        this.sendMessage('grade', 'red', newValue);
                        this.redGrade--;
                        this.blueGam--;

                    }
                } else {
                    this.$Notice.error({
                        title: '遇到未知错误！',
                    });
                }
            },
            //感应数减1
            deviceReaction(name) {
                if (name === 'blue') {
                    const newValue = this.blueReaction - 1;
                    if (newValue < 0) {
                        console.log('青方感应数数小于零');
                    } else {
                        this.sendMessage('grade', 'blue', newValue);
                        this.blueReaction--;
                    }
                } else if (name === 'red') {
                    const newValue = this.redReaction - 1;
                    if (newValue < 0) {
                        console.log('红方感应数小于零');
                    } else {
                        this.sendMessage('grade', 'red', newValue);
                        this.redReaction--;
                    }
                } else {
                    this.$Notice.error({
                        title: '遇到未知错误！',
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


            // 通过场地查找比赛信息
            getInitData(currentAddress) {
                this.tableLoading = true;
                const address = currentAddress;
                console.log('address = ' + address);
                const countSQL = `SELECT game_id,round_num, blue_name||'vs'||red_name as people,level,status,remark from GAME_INFO  WHERE address = '${address}' and blue_id <>'None' LIMIT 0, 6 `;
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
                        this.gameName = res[0].remark;
                    }
                });
            },

            // 编辑
            edit(row) {
                const game_id = row.game_id;
                this.editGameId = game_id;
                console.log(this.editGameId);
                this.modalParams = {
                    gameId: row.game_id,
                };
                this.modalShow = true;
            },
            editConfirm() {
                console.log("你选中了",this.model1);
                this.modalBtnLoading = true;
                // 检测该场次比赛是否存在
                const SQL = `SELECT status from GAME_INFO WHERE game_id = '${this.editGameId}'`;
                console.log(SQL);
                this.$db.get(SQL, (err, res) => {
                    if (err) {
                        this.$logger(err);
                        this.$Notice.error({
                            title: '搜索失败',
                            desc: err,
                        });
                    } else {
                        const SQL = `UPDATE GAME_INFO SET
          status='${this.model1}'
          WHERE game_id = ${this.editGameId}`;
                        this.$logger(SQL);
                        this.$db.run(SQL, err => {
                            if (err) {
                                this.$logger(err);
                                this.$Notice.error({
                                    title: '编辑失败',
                                    desc: err,
                                });
                            } else {
                                this.modalShow = false;
                                this.$Message.success({
                                    content: '编辑成功',
                                });
                                this.initData();
                            }
                            this.modalBtnLoading = false;
                        });
                    }
                });

            },
            cancel () {
                this.$Message.info('已取消选择');
            },

            // 选择表格某一行事件
            chooseLine(index) {
                this.show = false;
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
                    // 检测该场次比赛是否存在
                    const SQL = `SELECT status from GAME_INFO WHERE game_id = '${this.currentGameId}'`;
                    console.log(SQL);
                    this.$db.get(SQL, (err, res) => {
                        if (err) {
                            this.$logger(err);
                            this.$Notice.error({
                                title: '搜索失败',
                                desc: err,
                            });
                        } else {
                            const SQL = `UPDATE GAME_INFO SET
          status='已完成'
          WHERE game_id = ${this.currentGameId}`;
                            this.$logger(SQL);
                            this.$db.run(SQL, err => {
                                if (err) {
                                    this.$logger(err);
                                    this.$Notice.error({
                                        title: '编辑失败',
                                        desc: err,
                                    });
                                } else {
                                    this.modalShow = false;
                                    this.$Message.success({
                                        content: '编辑成功',
                                    });
                                    this.initData();
                                }

                            });
                        }
                    });

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
                    // 检测该场次比赛是否存在
                    const SQL = `SELECT status from GAME_INFO WHERE game_id = '${this.currentGameId}'`;
                    console.log(SQL);
                    this.$db.get(SQL, (err, res) => {
                        if (err) {
                            this.$logger(err);
                            this.$Notice.error({
                                title: '搜索失败',
                                desc: err,
                            });
                        } else {
                            const SQL = `UPDATE GAME_INFO SET
          status='已完成'
          WHERE game_id = ${this.currentGameId}`;
                            this.$logger(SQL);
                            this.$db.run(SQL, err => {
                                if (err) {
                                    this.$logger(err);
                                    this.$Notice.error({
                                        title: '编辑失败',
                                        desc: err,
                                    });
                                } else {
                                    this.modalShow = false;
                                    this.$Message.success({
                                        content: '编辑成功',
                                    });
                                    this.initData();
                                }

                            });
                        }
                    });
                }
            },

            initMessage() {
                this.show = false;
                this.message = '';
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
                    server.listen(8080);

                    //一个新的连接建立时触发 'connection' 事件
                    server.on('connection', function (socket) {
                        //获取当前服务器的连接数
                        server.getConnections(function (error, count) {
                            console.log('当前服务器的连接数 : ', count);
                        });
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


            // 十进制转16进制
            transferToSixteen(data) {
                const newArray = data.map(item => {
                    return item.toString(16);
                });
                return newArray;
            },
            // 16进制转化为10进制
            transformTen(data) {
                const newArray = data.map(item => {
                    return item.parseInt(data, 16);
                });
                return newArray;
            },

            // 处理串口信息
            processNewData(data, that) {
                //第5位为场地号
                const address = data[5];
                //设备型号
                const eq = data[6];
                //第十位表示设备电量
                const electricTen = parseInt(data[10], 16);
                const electric = parseInt(electricTen/20);
                console.log(electric);
                //   this.eqElectric = electric;
                //第七位和第八位共同表示击打力值
                const power1 = data[7];
                const power2 = data[8];
                const power3 = power2 + power1;
                // 护具受力值
                const power = parseInt(power3,16);
                console.log(power);
                //第九位表示目的
                const purpose = data[9];
                // 第十一位设备状态
                const  status = data[11];
                var buleGradeCount = 0;
                //    this.eqStatus = status;
                switch (eq) {
                    //脚套芯片(电量和状态)
                    case '1':
                        this.podothecaStatus = status;
                        if(status === '2'){
                            this.podothecaElectric = electric;
                        }
                        break;
                    //青方护具（力度值,被击打,电量,状态,感应数）
                    case '2':
                        this.bluePtotectStatus = status;

                        if(status === '2'){
                            this.blueProtectElectric = electric;
                            if(power === 0){
                                console.log("青方护具心跳");
                            }else {
                                this.bluePower = power/10;
                                console.log(this.redPower);
                                if(this.bluePower>=5){
                                    that.redGrade = that.redGrade + 2;
                                    blueReaction++;
                                }else {
                                    blueReaction++;
                                }

                            }
                        }
                        break;
                    // 红方护具(力度值，被打击,电量,状态,感应数)
                    case '3':
                        this.redPtotectStatus = status;
                        if(status === '2'){
                            this.redProtectElectric = electric;
                            if(power === 0){
                                console.log("红方护具心跳");
                            }else {
                                this.redPower = power/10;
                                console.log(this.redPower);
                                if(this.redPower >= 5){
                                    that.blueGrade = that.blueGrade + 2;
                                    redReaction++;
                                }else {
                                    redReaction++;
                                }
                            }
                        }
                        break;
                    //1号打分器(状态，电量，按键种类)
                    case '4':
                        this.gradeStatus1 = status;
                        this.gradeElectric1 = electric;
                        if(status === '2'){
                            if(power2 === '2'){
                                buleGradeCount++;
                                console.log("给青方加分");
                            }else {
                                redGradeCount++;
                                console.log("给红方加分");
                            }
                        }else if(status === '3'){
                            console.log("1号打分器心跳包显示按键异常");
                        }else if(status === '1'){
                            console.log("1号打分器心跳包");
                        }
                        break;
                    //2号打分器
                    case '5':
                        this.gradeStatus2 = status;
                        if(status === '2'){
                            this.gradeElectric2 = electric;
                            if(power2 === '2'){
                                buleGradeCount++;
                                console.log("给青方加分");
                            }else {
                                let redGradeCount = 0;
                                redGradeCount++;
                                console.log("给红方加分");
                            }
                        }else if(status === '3'){
                            console.log("2号打分器心跳包显示按键异常");
                        }else if(status === '1'){
                            console.log("2号打分器心跳包");
                        }
                        break;
                    //3号打分器
                    case '6':
                        this.gradeStatus3 = status;
                        if(status === '2'){
                            this.gradeElectric3 = electric;
                            if(power2 === '2'){
                                buleGradeCount ++;
                                console.log("给青方加1分");
                            }else {
                                let redGradeCount = 0;
                                redGradeCount++;
                                console.log("给红方加1分");
                            }
                        }else if(status === '3'){
                            console.log("3号打分器心跳包显示按键异常");
                        }else if(status === '1'){
                            console.log("3号打分器心跳包");
                        }
                        break;
                    //青方头盔
                    case '7':
                        this.buleCasqueStatus = status;
                        if(status === '2'){
                            this.buleCasqueElectric = electric;
                            if(power2 === '1'){
                                that.redGrade = that.redGrade + 3;
                                buleCasqueRecation++;
                            }else {
                                console.log("青方头盔空闲");
                            }
                        }
                        break;
                    //红方头盔
                    case '8':
                        this.redCasqueStatus = status;
                        if(status === '2'){
                            this.redCasqueElectric = electric;
                            if(power === '1'){
                                that.blueGrade = that.blueGrade + 3;
                                redCasqueRecation++;
                            }else {
                                console.log("红方头盔空闲");
                            }
                        }
                        break;
                    default:
                        console.log('get eq error, and eq = ' + eq);
                        that.$Notice.error({
                            title: '提示信息',
                            desc: 'get eq error, and eq = ' + eq,
                        });
                }
            },

            toTestInfo(){
                this.$router.push({
                    path: '/test',
                })

            },

            // 处理串口信息
            processTestData() {
                const data=["14","0","0","0","aa","11","3","f4","1","1","25","3","39","ff","71","6","41","55","31","32","39","32","8","57"];
                //第5位为场地号
                const address = data[5];
                //设备型号
                const eq = data[6];
                console.log(eq);
                //第十位表示设备电量
                //  const electric = parseInt(that.transformTen(data[10])/20);
                const electricTen = parseInt(data[10], 16);
                const electric = parseInt(electricTen/20);
                console.log(electric);
                //第七位和第八位共同表示击打力值
                const power1 = data[7];
                const power2 = data[8];
                const power3 = power2 + power1;
                // 护具受力值
                const power = parseInt(power3,16);
                console.log(power);
                //第九位表示目的
                const purpose = data[9];
                // 第十一位设备状态
                const  status = data[11];
                var buleGradeCount = 0;
                //    this.eqStatus = status;
                switch (eq) {
                    //脚套芯片(电量和状态)
                    case '1':
                        this.podothecaStatus = status;
                        if(status === '2'){
                            this.podothecaElectric = electric;
                        }
                        break;
                    //青方护具（力度值,被击打,电量,状态,感应数）
                    case '2':
                        this.bluePtotectStatus = status;

                        if(status === '2'){
                            this.blueProtectElectric = electric;
                            if(power === 0){
                                console.log("青方护具心跳");
                            }else {
                                this.bluePower = power/10;
                                console.log(this.redPower);
                                if(this.bluePower>=5){
                                    that.redGrade = that.redGrade + 2;
                                    blueReaction++;
                                }else {
                                    blueReaction++;
                                }

                            }
                        }
                        break;
                    // 红方护具(力度值，被打击,电量,状态,感应数)
                    case '3':
                        this.redPtotectStatus = status;
                        if(status === '2'){
                            this.redProtectElectric = electric;
                            console.log(this.redProtectElectric);
                            if(power === 0){
                                console.log("红方护具心跳");
                            }else {
                                this.redPower = power/10;
                                console.log(this.redPower);
                                if(this.redPower >= 5){
                                    that.blueGrade = that.blueGrade + 2;
                                    redReaction++;
                                }else {
                                    redReaction++;
                                }
                            }
                        }
                        break;
                    //1号打分器(状态，电量，按键种类)
                    case '4':
                        this.gradeStatus1 = status;
                        this.gradeElectric1 = electric;
                        if(status === '2'){
                            if(power2 === '2'){
                                buleGradeCount++;
                                console.log("给青方加分");
                            }else {
                                redGradeCount++;
                                console.log("给红方加分");
                            }
                        }else if(status === '3'){
                            console.log("1号打分器心跳包显示按键异常");
                        }else if(status === '1'){
                            console.log("1号打分器心跳包");
                        }
                        break;
                    //2号打分器
                    case '5':
                        this.gradeStatus2 = status;
                        if(status === '2'){
                            this.gradeElectric2 = electric;
                            if(power2 === '2'){
                                buleGradeCount++;
                                console.log("给青方加分");
                            }else {
                                let redGradeCount = 0;
                                redGradeCount++;
                                console.log("给红方加分");
                            }
                        }else if(status === '3'){
                            console.log("2号打分器心跳包显示按键异常");
                        }else if(status === '1'){
                            console.log("2号打分器心跳包");
                        }
                        break;
                    //3号打分器
                    case '6':
                        this.gradeStatus3 = status;
                        if(status === '2'){
                            this.gradeElectric3 = electric;
                            if(power2 === '2'){
                                buleGradeCount ++;
                                console.log("给青方加1分");
                            }else {
                                let redGradeCount = 0;
                                redGradeCount++;
                                console.log("给红方加1分");
                            }
                        }else if(status === '3'){
                            console.log("3号打分器心跳包显示按键异常");
                        }else if(status === '1'){
                            console.log("3号打分器心跳包");
                        }
                        break;
                    //青方头盔
                    case '7':
                        this.buleCasqueStatus = status;
                        if(status === '2'){
                            this.buleCasqueElectric = electric;
                            if(power2 === '1'){
                                that.redGrade = that.redGrade + 3;
                                buleCasqueRecation++;
                            }else {
                                console.log("青方头盔空闲");
                            }
                        }
                        break;
                    //红方头盔
                    case '8':
                        this.redCasqueStatus = status;
                        if(status === '2'){
                            this.redCasqueElectric = electric;
                            if(power === '1'){
                                that.blueGrade = that.blueGrade + 3;
                                redCasqueRecation++;
                            }else {
                                console.log("红方头盔空闲");
                            }
                        }
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
            this.showImg = true;
            this.getAddressInfo();
            this.initData();
            this.update();
            //this.receivePortMsg(this);
            this.eqElectric = 0;
            this.processTestData();
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
        font-size: 22px;
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
        padding-top: 25.5px;
    }
    .grade2{
        font-size: 130px;
        color: #5b6270;
        text-align: center;
        padding-top: 25.5px;
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
        margin-top: 18.5px;
        margin-left: 28px;
    }
    .left-koufeng p{
        color: white;
        font-size: 13px;
        text-align: center;
    }

</style>
