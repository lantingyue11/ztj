import Goods from './pages/menu/Goods.vue';
import DetailList from './pages/menu/DetailList.vue';
import Match from './pages/menu/Match.vue';
import Setting from './pages/menu/Setting.vue';

const menu = [
 /* {
    icon: 'cube',
    title: '成绩录入',
    path: '/goods',
    component: Goods,
  },
  {
    icon: 'clipboard',
    title: '成绩查询',
    path: '/detailList',
    component: DetailList,
  },*/
  {
    icon: 'grid',
    title: '比赛',
    path: '/match',
    component: Match,
  },
  {
    icon: 'settings',
    title: '比赛设置',
    path: '/setting',
    component: Setting,
  },
];
export default menu;
