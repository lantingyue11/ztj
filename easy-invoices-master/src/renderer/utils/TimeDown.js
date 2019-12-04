/*
时间倒计时插件
TimeDown.js
*/
function TimeDown(id, diffTime) {
  //当前时间
  var nowDate = new Date();
  //相差的总秒数
  var totalSeconds = diffTime;
  //天数
  var days = Math.floor(totalSeconds / (60 * 60 * 24));
  //取模（余数）
  var modulo = totalSeconds % (60 * 60 * 24);
  //小时数
  var hours = Math.floor(modulo / (60 * 60));
  modulo = modulo % (60 * 60);
  //分钟
  var minutes = Math.floor(modulo / 60);
  //秒
  var seconds = modulo % 60;
  //输出到页面
  document.getElementById(id).innerHTML =  minutes + ":" + seconds;
  //延迟一秒执行自己
  setTimeout(function () {
    diffTime = diffTime-1;
    TimeDown(id, diffTime);
  }, 1000)
}
