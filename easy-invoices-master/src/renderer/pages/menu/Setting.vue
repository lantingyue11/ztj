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
        <Form :model="formInline" :label-width="80" ref="formInline" :rules="ruleInline" inline>
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
            <FormItem label="最大时差">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="蓝方护具号">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="最大时差">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="蓝方护具号">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="最大时差">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="蓝方护具号">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="最大时差">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="蓝方护具号">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="最大时差">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="蓝方护具号">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="最大时差">
                <Input v-model="formItem.input" style="width: 203px" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="蓝方护具号">
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
        <h3>比赛文件设置</h3>
        <br>
        <Form :model="formItem" :label-width="80">
            <FormItem :label-width="10">
                <Button style="margin-left:5px;" type="primary" icon="plus-round" @click="add" title="创建"></Button>
                <Button style="margin-left:5px;" type="primary" icon="ios-upload-outline" @click="downloadExcel"
                        title="导出" :loading="downloadExcelLoading"></Button>
            </FormItem>
            <FormItem>
                <Button type="primary">保存</Button>
                <Button style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
    </div>
</template>

<script>
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
    };
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
