<template>
    <div style="padding: 10px;background: #f8f8f9">
        <h1>竞赛设置</h1>
       <!-- <div class="setting-panel">
            <h3>比赛队伍设置</h3>
            <br>
            <Form :model="formItem" :label-width="80">
                <FormItem label="场地">
                    <Select v-model="formItem.select">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="场次">
                    <Select v-model="formItem.select">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="级别">
                    <Input v-model="formItem.input" placeholder="选择级别"></Input>
                </FormItem>
                <FormItem label="队伍一颜色">
                    <Select v-model="formItem.select">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                    </Select>
                </FormItem>
                <FormItem label="队伍一单位">
                    <Input v-model="formItem.input" placeholder="填写单位"></Input>
                </FormItem>
                <FormItem label="队伍二颜色">
                    <Select v-model="formItem.select">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                    </Select>
                </FormItem>
                <FormItem label="队伍二单位">
                    <Input v-model="formItem.input" placeholder="填写单位"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary">保存</Button>
                    <Button style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>
        </div>-->
        <br>
        <div class="setting-panel">
        <h3>比赛设置</h3>
        <br>
        <Form  :label-width="80" ref="formMatchSetting" :model="matchSetting" :rules="ruleValidate" inline>
            <FormItem label="局时/秒" prop="inning">
                <Input v-model="matchSetting.inning" style="width: 203px" placeholder="请输入..." ></Input>
            </FormItem>
            <FormItem label="加时局时/秒" prop="overTimeInning">
                <Input v-model="matchSetting.overTimeInning" style="width: 203px" placeholder="请输入..." ></Input>
            </FormItem>
            <FormItem label="休息时间/秒" prop="restTime">
                <Input v-model="matchSetting.restTime" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="加时赛最大得分/秒" prop="maxGradeInOT">
                <Input v-model="matchSetting.maxGradeInOT" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="计时时间/秒"  prop="timingGrade">
                <Input v-model="matchSetting.timingGrade" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="加时扣分" prop="overtimePoints">
                <Input v-model="matchSetting.overtimePoints" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="比赛局数" prop="gameInning">
                <Input v-model="matchSetting.gameInning" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="当前局" prop="currentInning">
                <Input v-model="matchSetting.currentInning" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="有效得分" prop="effectiveScore">
                <Input v-model="matchSetting.effectiveScore" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="当前时间" prop="currentTime">
                <Input v-model="matchSetting.currentTime" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="最大分差" prop="maxGap">
                <Input v-model="matchSetting.maxGap" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="青方护具号" prop="blueGear">
                <Input v-model="matchSetting.blueGear" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="裁判时差" prop="jetLag">
                <Input v-model="matchSetting.jetLag" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="红方护具号" prop="redGear">
                <Input v-model="matchSetting.redGear" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="得分区间" prop="scoreInterval">
                <Input v-model="matchSetting.scoreInterval" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="青方头盔号" prop="blueHead">
                <Input v-model="matchSetting.blueHead" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="扣分个数" prop="pointNum">
                <Input v-model="matchSetting.pointNum" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="红方头盔号" prop="redHead">
                <Input v-model="matchSetting.redHead" style="width: 203px" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="saveSetting">保存</Button>
                <Button style="margin-left: 8px" @click="resetSetting">重置</Button>
            </FormItem>
        </Form>
    </div>
    <br>
    <div class="setting-panel">
        <h3>比赛文件上传</h3>
        <br>
        <Form :model="formItem" :label-width="80">
            <FormItem :label-width="10">
                <input type="file"  id="file" :accept="SheetJSFT" ref="file" />

            </FormItem>
            <FormItem>
                <Button type="primary" @click="getFile">保存</Button>
                <Button style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
    </div>
</template>

<script>
import XLSX from 'xlsx';

const fs = require("fs");
const url = require('url');
const path = require('path');


const _SheetJSFT = [
  'xlsx', 'xlsb', 'xlsm', 'xls', 'xml', 'csv',
].map(function(x) {
  return '.' + x;
})
  .join(',');

export default {
  name: 'Setting',
  data() {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [ 20, 50 ],
        textarea: '',
      },
      SheetJSFT: _SheetJSFT,
      matchSetting: {
        inning: '',
        overTimeInning: '',
        restTime: '',
        maxGradeInOT:'',
        timingGrade: '',
        overtimePoints: '',
        gameInning: '',
        currentInning: '',
        effectiveScore: '',
        currentTime: '',
        maxGap:'',
        blueGear: '',
        jetLag: '',
        redGear: '',
        scoreInterval: '',
        blueHead: '',
        pointNum: '',
        redHead: ''
      },
        gamaName:'',
      ruleValidate: {
        inning: [
          { required: true, message: '请输入内容' }
        ],
        overTimeInning: [
          { required: true, message: '请输入内容' }
        ],
        restTime: [
          { required: true, message: '请输入内容' }
        ],
        maxGradeInOT:[
          { required: true, message: '请输入内容' }
        ],
        timingGrade: [
          { required: true, message: '请输入内容' }
        ],
        overtimePoints: [
          { required: true, message: '请输入内容' }
        ],
        gameInning: [
          { required: true, message: '请输入内容' }
        ],
        currentInning: [
          { required: true, message: '请输入内容' }
        ],
        effectiveScore: [
          { required: true, message: '请输入内容' }
        ],
        currentTime: [
          { required: true, message: '请输入内容' }
        ],
        maxGap:[
          { required: true, message: '请输入内容' }
        ],
        blueGear: [
          { required: true, message: '请输入内容' }
        ],
        jetLag: [
          { required: true, message: '请输入内容' }
        ],
        redGear: [
          { required: true, message: '请输入内容' }
        ],
        scoreInterval: [
          { required: true, message: '请输入内容' }
        ],
        blueHead: [
          { required: true, message: '请输入内容' }
        ],
        pointNum: [
          { required: true, message: '请输入内容' }
        ],
        redHead: [
          { required: true, message: '请输入内容' }
        ]
      },

    };
  },
  methods: {
    getFile() {
      const files = this.$refs.file.files;
      if (files && files[0]) {
        this._file(files[0]);
      }
    },
    _file(file) {
      /* Boilerplate to set up FileReader */
      const reader = new FileReader();
      reader.onload = e => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        this.gamaName = wsname;
        console.log(this.gamaName);
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        /* Update state */
        this.getDataIntoDb(data);
      };
      reader.readAsBinaryString(file);
    },
    getDataIntoDb(data) {
      this.deleteAllData();
      console.log(data);
      for (let i = 1; i < data.length; i++) {
        const game_id = data[i][0];
        const total_round = parseInt(data[i][1]);
        const round_num = data[i][2];
        const address = data[i][3];
        const address_id = data[i][4];
        const level = data[i][5];
        const blue_id = data[i][7];
        const blue_name = data[i][8];
        const blue_unit = data[i][9];
        const red_id = data[i][10];
        const red_name = data[i][11];
        const red_unit = data[i][12];
        const status = data[i][13];
        const remark = this.gamaName;
        const insertSQL = `INSERT INTO GAME_INFO (game_id,total_round,round_num,address,address_id,level,blue_id,blue_name,blue_unit,red_id,red_name,red_unit,status,remark)
          VALUES ('${game_id}','${total_round}','${round_num}','${address}','${address_id}','${level}','${blue_id}','${blue_name}','${blue_unit}','${red_id}','${red_name}','${red_unit}','${status}','${remark}')`;
        this.insertData(insertSQL);
      }
      this.$db.run('COMMIT');
      this.$Message.success({
        content: '导入成功',
      });
    },
    insertData(sql) {
      this.$logger(sql);
      this.$db.run(sql, err => {
        if (err) {
          this.$logger(err);
          this.$Notice.error({
            title: '新增失败',
            desc: err,
          });
          this.$db.run('ROLLBACK');
        }
      });
    },
    deleteAllData() {
      const sql = 'DELETE FROM GAME_INFO';
      this.$logger(sql);
      this.$db.run(sql, err => {
        if (err) {
          this.$logger(err);
          this.$Notice.error({
            title: '删除失败',
            desc: err,
          });
          this.$db.run('ROLLBACK');
        }
      });
    },

    // 保存比赛设置
    saveSetting() {
      console.log("satrt saveSetting");
      this.$refs.formMatchSetting.validate(valid => {
        if(valid){
          const newFile_path = path.join(__dirname, '../../setting.json').replace(/\\/g, "\/");
          let result = JSON.parse(fs.readFileSync(newFile_path));
          const matchSetting = this.matchSetting;
          const value = "current";
          let newResult = this.initSetData(result,value,matchSetting);
          let newData = JSON.stringify(newResult,null,4);
          fs.writeFile(newFile_path, newData, (error) => {
            if (error) {
              console.error(error);
            }
            this.$Notice.success({
              title: '通知',
              desc: '保存成功',
            });
          });
        }
      });

    },

    // 重置比赛设置
    resetSetting() {
      console.log("satrt resetSetting");
      const newFile_path = path.join(__dirname, '../../setting.json').replace(/\\/g, "\/");
      console.log(newFile_path);
      let result = JSON.parse(fs.readFileSync(newFile_path));
      const defaultValue = "default";
      const matchSetting = result[defaultValue];
      const value = "current";
      let newResult = this.initSetData(result,value,matchSetting);
      let newData = JSON.stringify(newResult,null,4);
      fs.writeFile(newFile_path, newData, (error) => {
        if (error) {
          console.error(error);
        }
        this.$Notice.success({
          title: '通知',
          desc: '重置成功',
        });
        this.initSetting(this);
      });

    },

    // 初始化比赛设置
    initSetting(obj) {
      const that = obj;
      console.log("satrt initSetting");
      const newFile_path = path.join(__dirname, '../../setting.json').replace(/\\/g, "\/");
      console.log(newFile_path);
      let result = JSON.parse(fs.readFileSync(newFile_path));
      const  value ="current";
      console.log(result[value].inning);
      that.matchSetting.inning = result[value].inning;
      that.matchSetting.overTimeInning = result[value].overTimeInning;
      that.matchSetting.restTime = result[value].restTime;
      that.matchSetting.maxGradeInOT = result[value].maxGradeInOT;
      that.matchSetting.timingGrade = result[value].timingGrade;
      that.matchSetting.overtimePoints = result[value].overtimePoints;
      that.matchSetting.gameInning = result[value].gameInning;
      that.matchSetting.currentInning = result[value].currentInning;
      that.matchSetting.effectiveScore = result[value].effectiveScore;
      that.matchSetting.currentTime = result[value].currentTime;
      that.matchSetting.maxGap = result[value].maxGap;
      that.matchSetting.blueGear = result[value].blueGear;
      that.matchSetting.jetLag = result[value].jetLag;
      that.matchSetting.redGear = result[value].redGear;
      that.matchSetting.scoreInterval = result[value].scoreInterval;
      that.matchSetting.blueHead = result[value].blueHead;
      that.matchSetting.pointNum = result[value].pointNum;
      that.matchSetting.redHead = result[value].redHead;
    },

    //initSetData() {
    initSetData(result,value,matchSetting) {
      result[value].inning = matchSetting.inning;
      result[value].overTimeInning = matchSetting.overTimeInning;
      result[value].restTime = matchSetting.restTime;
      result[value].maxGradeInOT = matchSetting.maxGradeInOT;
      result[value].timingGrade = matchSetting.timingGrade;
      result[value].overtimePoints = matchSetting.overtimePoints;
      result[value].gameInning = matchSetting.gameInning;
      result[value].currentInning = matchSetting.currentInning;
      result[value].effectiveScore = matchSetting.effectiveScore;
      result[value].currentTime = matchSetting.currentTime;
      result[value].maxGap = matchSetting.maxGap;
      result[value].blueGear = matchSetting.blueGear;
      result[value].jetLag = matchSetting.jetLag;
      result[value].redGear = matchSetting.redGear;
      result[value].scoreInterval = matchSetting.scoreInterval;
      result[value].blueHead = matchSetting.blueHead;
      result[value].pointNum = matchSetting.pointNum;
      result[value].redHead = matchSetting.redHead;
      return result;
    }
  },

  created() {
    this.initSetting(this);
  },
};

</script>

<style>
   .setting-panel{
       width: 80%;
       margin: auto;
       border: 1px solid rgba(131, 145, 165, 0.5);
       padding: 30px;
       background-color: white;
       border-radius: 5px;
   }

</style>
