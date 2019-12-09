<template>
    <div style="padding: 10px;background: #f8f8f9">
        <h1>竞赛设置</h1>
        <div class="setting-panel">
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
        </div>
        <br>
        <div class="setting-panel">
        <h3>比赛设置</h3>
        <br>
        <Form  :label-width="80" ref="formInline" inline>
            <FormItem label="局时/秒">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..." clearable></Input>
            </FormItem>
            <FormItem label="加时局时/秒">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..." clearable></Input>
            </FormItem>
            <FormItem label="休息时间/秒">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="加时赛最大得分/秒">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="计时时间/秒">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="加时扣分">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="比赛局数">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="当前局">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="有效得分">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="当前时间">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="最大分差">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="青方护具号">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="裁判时差">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="红方护具号">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="得分区间">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="青方头盔号">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="扣分个数">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="红方头盔号">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
                <Button type="primary">保存</Button>
                <Button style="margin-left: 8px">重置</Button>
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
        const insertSQL = `INSERT INTO GAME_INFO (game_id,total_round,round_num,address,address_id,level,blue_id,blue_name,blue_unit,red_id,red_name,red_unit,status)
          VALUES ('${game_id}','${total_round}','${round_num}','${address}','${address_id}','${level}','${blue_id}','${blue_name}','${blue_unit}','${red_id}','${red_name}','${red_unit}','${status}')`;
        this.insertData(insertSQL);
      }
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
      this.$db.run('COMMIT');
      this.modalShow = false;
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
      this.$db.run('COMMIT');
    },
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
