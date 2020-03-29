import fse from 'fs-extra';
import path from 'path';
import sq3 from 'sqlite3';
import logger from './logger';
import { docDir } from './settings';
// 将数据存至系统用户目录，防止用户误删程序
export const dbPath = path.join(docDir, 'data.sqlite3');
fse.ensureFileSync(dbPath);

const sqlite3 = sq3.verbose();
const db = new sqlite3.Database(dbPath);
db.serialize(() => {
  /**
   * 物品表 GOODS
   * name 品名
   * standard_buy_unit_price 标准进价
   * standard_sell_unit_price 标准售价
   * total_amount 总金额
   * total_count 总数量
   * remark 备注
   * create_time 创建时间
   * update_time 修改时间
   */
  db.run(`CREATE TABLE GOODS(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    standard_buy_unit_price DECIMAL(15,2) NOT NULL,
    standard_sell_unit_price DECIMAL(15,2) NOT NULL,
    total_amount DECIMAL(15,2) NOT NULL,
    total_count DECIMAL(15,3) NOT NULL,
    remark VARCHAR(255) NOT NULL,
    create_time INTEGER NOT NULL,
    update_time INTEGER NOT NULL
    )`, err => {
    logger(err);
  });

  /**
   * 进出明细表 GOODS_DETAIL_LIST
   * goods_id 物品id
   * count 计数（+加 -减）
   * actual_buy_unit_price 实际进价
   * actual_sell_unit_price 实际售价
   * amount 实际金额
   * remark 备注
   * latest 是否某物品最新一条记录（不是最新操作无法删除）（1是 0不是）
   * create_time 创建时间
   * update_time 修改时间
   */
  db.run(`CREATE TABLE GOODS_DETAIL_LIST(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    goods_id INTEGER NOT NULL, 
    count DECIMAL(15,3) NOT NULL,
    actual_sell_unit_price DECIMAL(15,2) NOT NULL,
    actual_buy_unit_price DECIMAL(15,2) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    remark VARCHAR(255) NOT NULL,
    latest INTEGER NOT NULL,
    create_time INTEGER NOT NULL,
    update_time INTEGER NOT NULL,
    FOREIGN KEY (goods_id) REFERENCES GOODS(id)
    )`, err => {
    logger(err);
  });
  /**
   * 比赛信息表 GAME_INFO
   */
  db.run(`CREATE TABLE GAME_INFO(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    game_id VARCHAR(25) NOT NULL,
    total_round INTEGER NOT NULL,
    round_num VARCHAR(25) NOT NULL,
    address VARCHAR(255) NOT NULL,
    address_id VARCHAR(20) NOT NULL,
    level VARCHAR(25) NOT NULL,
    blue_id VARCHAR(25),
    blue_name VARCHAR(255) NOT NULL,
    blue_unit VARCHAR(255),
    red_id VARCHAR(25),
    red_name VARCHAR(255) NOT NULL,
    red_unit VARCHAR(255),
    status VARCHAR(25) NOT NULL,
    winner VARCHAR(25),
    win_way VARCHAR(255),
    blue_score INTEGER,
    red_score INTEGER,
    blue_points INTEGER,
    red_points INTEGER,
    blue_score1 INTEGER,
    red_score1 INTEGER,
    blue_points1 INTEGER,
    red_points1 INTEGER,
    blue_score2 INTEGER,
    red_score2 INTEGER,
    blue_points2 INTEGER,
    red_points2 INTEGER,
    blue_score3 INTEGER,
    red_score3 INTEGER,
    blue_points3 INTEGER,
    red_points3 INTEGER,
    blue_score4 INTEGER,
    red_score4 INTEGER,
    blue_points4 INTEGER,
    red_points4 INTEGER,
    yijian INTEGER,
    erjian INTEGER,
    sanjian INTEGER,
    remark VARCHAR(255)
    )`, err => {
    logger(err);
  });

  /**
   * 当前状态值保存表 CURRENTSTATUS_INFO
   */
  db.run(`CREATE TABLE CURRENTSTATUS_INFO(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    game_id VARCHAR(25),
    total_round INTEGER,
    round_num VARCHAR(25),
    address VARCHAR(255),
    address_id VARCHAR(20),
    level VARCHAR(25),
    blue_name VARCHAR(255),
    red_name VARCHAR(255),
    status VARCHAR(25),
    blue_score INTEGER,
    red_score INTEGER,
    blue_grade VARCHAR(25),
    red_grade VARCHAR(25),
    blue_power VARCHAR(25),
    red_power VARCHAR(25),
    blue_casque_recation INTEGER,
    red_casque_recation  INTEGER,
    blue_reaction INTEGER,
    red_reaction INTEGER,
    blue_gam  INTEGER,
    red_gam  INTEGER,
    game_name VARCHAR(255),
    remark VARCHAR(255)
    )`, err => {
    logger(err);
  });
});

export default db;
