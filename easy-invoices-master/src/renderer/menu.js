import Goods from './pages/menu/Goods.vue';
import DetailList from './pages/menu/DetailList.vue';

const menu = [
  {
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
  },
];
export default menu;
