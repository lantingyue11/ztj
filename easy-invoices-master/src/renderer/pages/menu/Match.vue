<template>
    <div>
        <Row>
            <Col span="18">
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
                <Row style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;margin: 3px;height: 260px;}">
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

            </Col>
            <Col span="5" style="{display: block;padding: 5px;  background: #fff; border-radius: 5px;margin: 3px;height: 298px;}">
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
            <Col span="7" style="{display: block;padding: 2px;  background: #fff; border-radius: 5px;margin-top: 5px;margin-left: 3px;height: 298px;}">
                <Row>
                    <Col span="24">
                        <h1 style="margin-top: 5px;margin-left: 20px;">手动修改分数</h1>
                    </Col>
                </Row>
                <Row class="team_grade">
                    <Col span="8">
                        <Button type="primary">曾伟龙队</Button>
                    </Col>
                    <Col span="16">
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
                    </Col>
                </Row>
                <Row class="team_grade">
                    <Col span="8">
                        <Button type="success"><Icon type="md-man" />张田静队</Button>
                    </Col>
                    <Col span="16">
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
                    </Col>
                </Row>
            </Col>
            <Col span="9" style="{display: block;padding: 2px;  background: #fff; border-radius: 5px;margin-top: 5px;margin-left: 2px;height: 298px;}">col-6</Col>
            <Col span="7" style="{display: block;padding: 3px;  background: #fff; border-radius: 5px;margin-top: 5px;margin-left: 2px;height: 298px;}">col-6</Col>
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
        background-color: #19be6b;
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
