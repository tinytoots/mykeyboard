import React, { useState } from 'react';
import './KbGbInfo.css';
import { Table, Input, Button, Space, Typography, Progress } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl'

const { Title, Paragraph, Text, Link } = Typography;

function progressCal(start, end) {
  var startDate = new Date(start); 
  var endDate = new Date(end); 
  var Difference_In_Time = endDate.getTime() - startDate.getTime(); 
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  // document.write("日期： <br>" +startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
  //           + Difference_In_Days); 

  var todayDate = new Date();
  var todayDate2 = todayDate.toLocaleDateString();
  // document.write("<br><br>今天日期为：" 
  //           + todayDate2); 

  var date3 = new Date(todayDate2);        
  var Difference_In_Time2 = date3.getTime() - startDate.getTime(); 
  var Difference_In_Days2 = Difference_In_Time2 / (1000 * 3600 * 24);
  // document.write("<br><br>日期： <br>" + startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
  //           + Difference_In_Days2); 

  var percent = Difference_In_Days2 / Difference_In_Days * 100;
  // document.write("<br><br>进度" + percent);
  return percent;
}

function delayCal(start, end) {
  var startDate = new Date(start); 
  var endDate = new Date(end); 
  var Difference_In_Time = endDate.getTime() - startDate.getTime(); 
  // 原计划总用时
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  // document.write("日期： <br>" +startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
  //           + Difference_In_Days); 

  var todayDate = new Date();
  var todayDate2 = todayDate.toLocaleDateString();
  // document.write("<br><br>今天日期为：" 
  //           + todayDate2); 

  var date3 = new Date(todayDate2);        
  var Difference_In_Time2 = date3.getTime() - startDate.getTime(); 
  // 目前总用时
  var Difference_In_Days2 = Difference_In_Time2 / (1000 * 3600 * 24);
  // document.write("<br><br>日期： <br>" + startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
  //           + Difference_In_Days2); 

  var percent2 = (Difference_In_Days2 - Difference_In_Days) / Difference_In_Days * 100;
  // document.write("<br><br>进度" + percent);
  return percent2;
}

var thermal_seq2 = progressCal("4/8/2021", "9/1/2022").toFixed(1);
var kara = progressCal("12/31/2020", "6/1/2021").toFixed(1);
var u80a_seq2 = progressCal("10/31/2020", "6/30/2021").toFixed(1);
var foundary_jules = progressCal("4/15/2020", "6/30/2021").toFixed(1);
var m50a = delayCal("5/31/2020", "12/31/2020").toFixed(1);
var iron165_r2 = progressCal("2/27/2021", "3/1/2022").toFixed(1);
var iron180 = progressCal("11/14/2020", "10/1/2021").toFixed(1);
var im = progressCal("9/1/2020", "9/1/2021").toFixed(1);
var matrix65 = progressCal("1/6/2021", "7/1/2021").toFixed(1);
var space80 = progressCal("5/10/2021", "11/31/2021").toFixed(1);
var box75 = progressCal("2/19/2021", "12/31/2021").toFixed(1);
var Andromeda = progressCal("10/31/2020", "6/30/2021").toFixed(1);
var mach80 = progressCal("4/30/2021", "8/31/2021").toFixed(1);
var leaf65 = progressCal("1/2/2021", "8/31/2021").toFixed(1);
var mini1800 = progressCal("5/10/2021", "8/10/2021").toFixed(1);
var master98 = progressCal("5/10/2021", "8/10/2021").toFixed(1);
var i104 = progressCal("5/15/2021", "6/30/2021").toFixed(1);
var salvation = progressCal("5/7/2021", "12/31/2021").toFixed(1);
var mini1800 = progressCal("5/10/2021", "8/10/2021").toFixed(1);
var cyberboard_r2 = progressCal("5/28/2021", "7/31/2021").toFixed(1);
var am_hatsu = progressCal("4/29/2021", "10/29/2021").toFixed(1);
var fuji65 = progressCal("3/16/2021", "2/15/2022").toFixed(1);
var piggy60 = progressCal("5/25/2021", "9/30/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2021").toFixed(1);
var ZENITH= delayCal("7/30/2020", "3/31/2021").toFixed(1);
var vega = progressCal("12/6/2020", "9/30/2021").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var Angle_Vertex = progressCal("6/6/2021", "7/31/2021").toFixed(1);
var Duo_S = progressCal("6/5/2021", "3/31/2022").toFixed(1);
var KANSAS = progressCal("4/16/2021", "7/31/2021").toFixed(1);
var BUFF67 = progressCal("6/13/2021", "8/31/2021").toFixed(1);
var BLADE = progressCal("6/20/2021", "7/31/2021").toFixed(1);
var Satisfaction75_R2 = progressCal("11/6/2020", "9/30/2021").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);


// document.write("<br><br>进度" + u80a_seq2);

const data = [
    {
      key: '1',
      name: 'THERMAL SEQ2',
      brand: 'RAMA WORKS',
      type: <FormattedMessage id="unlimited"/>,
      price: '$360',
      priceInt: 360,
      time: '2021-04-08',
      shipping: 'Q3 2022',
      progressInt: thermal_seq2,
      progress: <Progress percent={thermal_seq2} />,
      detail: <Link href="https://ramaworks.store/products/thermal-seq2?variant=32876632735822" target="_blank">
      https://thermal-seq2</Link> 
    },
    {
      key: '2',
      name: 'KARA',
      brand: 'RAMA WORKS',
      type: <FormattedMessage id="unlimited"/>,
      price: '$160',
      priceInt: 160,
      time: '2021-12-31',
      shipping: 'Q2 2021',
      progressInt: 100,
      progress: <Progress percent={100} />,
      detail: <Link href="https://ramaworks.store/products/kara" target="_blank">
      https://kara</Link> 
    },
    {
      key: '3',
      name: 'U80-A SEQ2',
      brand: 'RAMA WORKS',
      type: <FormattedMessage id="unlimited"/>,
      price: '$400',
      priceInt: 400,
      time: '2020-10-31',
      shipping: 'Q2 2021',
      progressInt: u80a_seq2,
      progress: <Progress percent={u80a_seq2} />,
      detail: <Link href="https://ramaworks.store/products/u80-a-seq2" target="_blank">
      https://u80-a-seq2</Link> 
    },
    {
      key: '4',
      name: 'FOUNDRY JULES',
      brand: 'RAMA WORKS',
      type: <FormattedMessage id="unlimited"/>,
      price: '$400',
      priceInt: 400,
      time: '2020-04-15',
      shipping: 'Q2 2021',
      progressInt: 100,
      progress: <Progress percent={100} />,
      detail: <Link href="https://ramaworks.store/products/jules" target="_blank">
      https://jules</Link> 
    },
    {
      key: '5',
      name: 'M50-A GRID',
      brand: 'RAMA WORKS',
      type: <FormattedMessage id="unlimited"/>,
      price: '$300',
      priceInt: 300,
      time: '2020-05-31',
      shipping: 'Dec 2020',
      progressInt: 100 + m50a,
      progress: <Progress strokeColor="orange" percent={m50a} />,
      detail: <Link href="http://www.mechgroupbuys.com/keyboards/RAMA%20M50-A%20GRID" target="_blank">
      http://m50</Link> 
    },
    {
      key: '6',
      name: 'IRON165 R2',
      brand: 'Smith + Rune',
      type: <FormattedMessage id="ironType"/>,
      price: '$424',
      priceInt: 424,
      time: '2021-02-27',
      shipping: 'Mar 2022',
      progressInt: iron165_r2,
      progress: <Progress percent={iron165_r2} />,
      detail: <Link href="https://geekhack.org/index.php?topic=110985.0" target="_blank">
      https://iron165-r2</Link> 
    },
    {
      key: '7',
      name: 'IRON180',
      brand: 'Smith + Rune',
      type: <FormattedMessage id="ironType2"/>,
      price: '$585',
      priceInt: 585,
      time: '2020-11-14',
      shipping: 'Q3 2021',
      progressInt: iron180,
      progress: <Progress percent={iron180} />,
      detail: <Link href="https://geekhack.org/index.php?topic=105245.0" target="_blank">
      https://iron180</Link> 
    },
    {
      key: '8',
      name: 'IM+',
      brand: 'Matrix Lab',
      type: <FormattedMessage id="matrix"/>,
      price: '¥2599',
      priceInt: 2599 / 6.5,
      time: '2020-09-01',
      shipping: 'Q3 2021',
      progressInt: im,
      progress: <Progress percent={im} />,
      detail: '请访问Matrix Lab QQ群'
    },
    {
      key: '9',
      name: 'Matrix Lab 65%',
      brand: 'Matrix Lab',
      type: <FormattedMessage id="matrix"/>,
      price: '¥2699',
      priceInt: 2699 / 6.5,
      time: '2021-01-06',
      shipping: 'Q2 2021',
      progressInt: 100,
      progress: <Progress percent={100} />,
      detail: '请访问Matrix Lab QQ群'
    },
    {
      key: '10',
      name: 'Space80: Apollo',
      brand: 'Gray Studio',
      type: <FormattedMessage id="unlimited"/>,
      price: '¥2699',
      priceInt: 2699 / 6.5,
      time: '2021-05-10',
      shipping: '2021-11-15',
      progressInt: space80,
      progress: <Progress percent={space80} />,
      detail: <Link href="https://www.zfrontier.com/app/flow/4KoRoAg8Qdd5" target="_blank">
      https://space80</Link> 
    },
    {
      key: '11',
      name: 'BOX75',
      brand: 'Lin Design Studio',
      type: <FormattedMessage id="unlimited"/>,
      price: '$550',
      priceInt: 550,
      time: '2021-02-19',
      shipping: '2021年底',
      progressInt: box75,
      progress: <Progress percent={box75} />,
      detail: <Link href="https://www.zfrontier.com/app/flow/4bJOWrJoYrRo" target="_blank">
      https://box75</Link> 
    },
    {
      key: '12',
      name: 'Andromeda 仙女座',
      brand: 'ai03',
      type: <FormattedMessage id="limi100"/>,
      price: '¥4999',
      priceInt: 4999 / 6.5,
      time: '2020-10-31',
      shipping: 'June 2021',
      progressInt: Andromeda,
      progress: <Progress percent={Andromeda} />,
      detail: <Link href="https://cannonkeys.com/products/gb-andromeda-keyboard-by-ai03-reference" target="_blank">
      https://andromeda</Link> 
    },
    {
      key: '13',
      name: 'Mach80',
      brand: 'MelGeek',
      type: <FormattedMessage id="limi4h"/>,
      price: '¥3299',
      priceInt: 3299 / 6.5,
      time: '2021-04-30',
      shipping: '4个月',
      progressInt: mach80,
      progress: <Progress percent={mach80} />,
      detail: <Link href="https://www.zfrontier.com/app/flow/D6MNdX0Ep0K5" target="_blank">
      https://mach80</Link> 
    },
    {
      key: '14',
      name: 'Leaf 65',
      brand: 'Fox Lab',
      type: <FormattedMessage id="unlimited"/>,
      price: '¥2551',
      priceInt: 2551 / 6.5,
      time: '2021-01-02',
      shipping: 'Q3 2021',
      progressInt: leaf65,
      progress: <Progress percent={leaf65} />,
      detail: <Link href="https://www.zfrontier.com/app/flow/45aqZ63Yn85J" target="_blank">
      https://leaf65</Link> 
    },
    {
      key: '15',
      name: '1800mini',
      brand: 'Xikii',
      type: <FormattedMessage id="unlimited"/>,
      price: '¥2499',
      priceInt: 2499 / 6.5,
      time: '2021-05-10',
      shipping: '三个月',
      progressInt: mini1800,
      progress: <Progress percent={mini1800} />,
      detail: <Link href="https://www.zfrontier.com/app/flow/2aVbAwVW8r8d" target="_blank">
      https://1800mini</Link> 
    },
    {
      key: '16',
      name: 'Master98',
      brand: 'Xikii',
      type: <FormattedMessage id="unlimited"/>,
      price: '¥3670',
      priceInt: 3670 / 6.5,
      time: '2021-05-10',
      shipping: '三个月',
      progressInt: master98,
      progress: <Progress percent={master98} />,
      detail: <Link href="https://www.zfrontier.com/app/flow/2aVbAwVW8r8d" target="_blank">
      https://master98</Link> 
    },
    {
      key: '17',
      name: 'i104 大爽',
      brand: 'Xikii',
      type: <FormattedMessage id="limit80"/>,
      price: '¥2980',
      priceInt: 2980 / 6.5,
      time: '2021-05-15开团，售完为止',
      shipping: 'June 2021',
      progressInt: i104,
      progress: <Progress percent={i104} />,
      detail: <Link href="https://www.zfrontier.com/app/flow/2JKxrvL3YlyO" target="_blank">
      https://i104</Link> 
    },
    {
      key: '18',
      name: 'WILBA.TECH SALVATION',
      brand: 'WILBA.TECH X Salvun',
      type: <FormattedMessage id="unlimited"/>,
      price: '¥2285',
      priceInt: 2285 / 6.5,
      time: '2021-05-07',
      shipping: 'Dec. 2021',
      progressInt: salvation,
      progress: <Progress percent={salvation} />,
      detail: <Link href="https://www.zfrontier.com/app/mch/1kwQEapmnrM1" target="_blank">
      https://salvation</Link> 
    },
    {
      key: '19',
      name: 'CYBERBOARD R2',
      brand: 'Angry Miao',
      type: <FormattedMessage id="unknown"/>,
      price: '¥3700',
      priceInt: 3700 / 6.5,
      time: '2021-05-28',
      shipping: 'July 2021',
      progressInt: cyberboard_r2,
      progress: <Progress percent={cyberboard_r2} />,
      detail: <Link href="https://www.angrymiao.com/cyberboard-r2/" target="_blank">
      https://cyberboard-r2/</Link> 
    },
    {
      key: '20',
      name: 'AM HATSU',
      brand: 'Angry Miao',
      type: <FormattedMessage id="unlimited"/>,
      price: '$1600',
      priceInt: 1600,
      time: '2021-07-29',
      shipping: '2021-10-29',
      progressInt: am_hatsu,
      progress: <Progress percent={am_hatsu} />,
      detail: <Link href="https://www.angrymiao.com/am-hatsu/" target="_blank">
      https://am-hatsu</Link> 
    },
    {
      key: '21',
      name: 'Fuji65',
      brand: 'Sakura Studio',
      type: <FormattedMessage id="unlimited"/>,
      price: '¥1399',
      priceInt: 1399 / 6.5,
      time: '2020-10-20',
      shipping: '已发货',
      progressInt: 100,
      progress: <Progress percent={100} />,
      detail: <Link href="https://www.zfrontier.com/app/flow/epZ0136PqQmE" target="_blank">
      https://fuji65</Link> 
    },
    {
      key: '22',
      name: 'Hidari',
      brand: 'MONOKEI x Thesiscamper',
      type: <FormattedMessage id="unlimited"/>,
      price: '$419',
      priceInt: 419,
      time: '2021-04-30',
      shipping: 'Q4 2021',
      progressInt: hidari,
      progress: <Progress percent={hidari} />,
      detail: <Link href="https://monokei.co/products/hidari" target="_blank">
      https://hidari</Link> 
    },
    {
      key: '23',
      name: 'Piggy60',
      brand: 'Jacky Lab',
      type: <FormattedMessage id="unlimited"/>,
      price: '$428',
      priceInt: 428,
      time: '2021-05-25',
      shipping: 'Sept 2021',
      progressInt: piggy60,
      progress: <Progress percent={piggy60} />,
      detail: <Link href="https://jackylab.com/collections/piggy-60-gb" target="_blank">
      https://piggy</Link> 
    },
    {
      key: '24',
      name: 'FOUNDRY ZENITH KEYBOARD',
      brand: 'RAMA WORKS',
      type: <FormattedMessage id="unlimited"/>,
      price: '$450',
      priceInt: 450,
      time: '2020-07-30',
      shipping: 'Q1 2021',
      progressInt: 100 + ZENITH,
      progress: <Progress strokeColor="orange" percent={ZENITH} />,
      detail: <Link href="https://ramaworks.store/products/zenith-keyboard?_pos=2%26_sid=3de98b01f%26_ss=r" target="_blank">
      https://zenith</Link> 
    },
    {
      key: '25',
      name: 'Vega',
      brand: 'ai03',
      type: <FormattedMessage id="unlimited"/>,
      price: '¥2299',
      priceInt: 2299 / 6.5,
      time: '2020-12-06',
      shipping: 'Sept. 2021',
      progress: <Progress percent={vega} />,
      progressInt: vega,
      detail: <Link href="https://geekhack.org/index.php?topic=106983.0&fbclid=IwAR10CxE9FGg4f_GluCTE6TgCxML9_P0thWUZ7_vd5wHJlEz6IJmD6-uTwoA" target="_blank">
      https://vega</Link> 
    },
    {
      key: '26',
      name: 'Angle-Vertex',
      brand: 'AvalonKeyboardStudio',
      type: <FormattedMessage id="limit170"/>,
      price: '¥2850',
      priceInt: 2850 / 6.5,
      time: '2021-06-06开团',
      shipping: 'July 2021',
      progress: <Progress percent={Angle_Vertex} />,
      progressInt: Angle_Vertex,
      detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
      https://angle-vertex</Link> 
    },
    {
      key: '27',
      name: 'Duo-S',
      brand: 'Duo Foundry',
      type: '<=300',
      price: '¥2450',
      priceInt: 2450 / 6.5,
      time: '2021-06-05',
      shipping: 'Q1 2021',
      progress: <Progress percent={Duo_S} />,
      progressInt: Duo_S,
      detail: <Link href="https://www.zfrontier.com/app/flow/2agrqXpyqQ6m" target="_blank">
      https://duo-s</Link> 
    },
    {
      key: '28',
      name: 'KANSAS 65',
      brand: 'Jerry studio',
      type: <FormattedMessage id="unlimited"/>,
      price: '¥1999',
      priceInt: 1999 / 6.5,
      time: '2021-04-16',
      shipping: 'July 2021',
      progress: <Progress percent={KANSAS} />,
      progressInt: KANSAS,
      detail: <Link href="https://www.zfrontier.com/app/flow/296WzdolNV98" target="_blank">
      https://kansas</Link> 
    },
    {
      key: '29',
      name: 'BUFF67 V2',
      brand: 'BUFF67 LAB',
      type: <FormattedMessage id="limi100"/>,
      price: '¥998',
      priceInt: 998 / 6.5,
      time: '2021-06-13',
      shipping: 'Aug. 2021',
      progress: <Progress percent={BUFF67} />,
      progressInt: BUFF67,
      detail: <Link href="https://www.zfrontier.com/app/flow/2E8BJAjZgV1L" target="_blank">
      https://buffer67-v2</Link> 
    },
    {
      key: '30',
      name: 'BLADE',
      brand: 'KBDfans',
      type: <FormattedMessage id="unlimited"/>,
      price: '¥529',
      priceInt: 529 / 6.5,
      time: '2021-06-20',
      shipping: 'July 2021',
      progress: <Progress percent={BLADE} />,
      progressInt: BLADE,
      detail: <Link href="https://kbdfans.com/products/icblade-aluminum-60-keyboard-case" target="_blank">
      https://blade</Link> 
    },
    {
      key: '31',
      name: 'Satisfaction75 Round 2',
      brand: 'Cannonkeys',
      type: <FormattedMessage id="unlimited"/>,
      price: '$480',
      priceInt: 480,
      time: '2020-11-06',
      shipping: 'Q3 2021',
      progress: <Progress percent={Satisfaction75_R2} />,
      progressInt: Satisfaction75_R2,
      detail: <Link href="https://cannonkeys.com/blogs/updates/satisfaction75-round-2?_pos=3&_sid=c7975ee1b&_ss=r" target="_blank">
      https://satisfaction75-r2</Link> 
    },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
    // {
    //   key: '26',
    //   name: 'Angle-Vertex',
    //   brand: 'AvalonKeyboardStudio',
    //   type: '限量170',
    //   price: '¥2850',
    //   time: '2021-06-06开团',
    //   shipping: 'July 2021',
    //   progress: <Progress percent={Angle_Vertex} />,
    //   progressInt: Angle_Vertex,
    //   detail: <Link href="https://www.zfrontier.com/app/flow/DAxrwKEjvmGr" target="_blank">
    //   https://angle-vertex</Link> 
    // },
 






  ];




  



  

export default class KbGbInfo extends React.Component {

  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: <FormattedMessage id="kbName"/>,
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.name.localeCompare(b.name)},
        width: '16%',
        responsive: ['sm', 'xs']
      },
      {
        title: <FormattedMessage id="kbBrand"/>,
        dataIndex: 'brand',
        key: 'brand',
        // defaultSortOrder: 'escend',
        ...this.getColumnSearchProps('brand'),
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.brand.localeCompare(b.brand)},
        width: '16%',
        responsive: ['sm']
      },
      {
        title: <FormattedMessage id="gbType"/>,
        dataIndex: 'type',
        key: 'type',
        width: '16%',
        responsive: ['sm']
      },
      {
        title: <FormattedMessage id="gbPrice"/>,
        key: 'price',
        dataIndex: 'price',
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.priceInt - b.priceInt},
        width: '12%',
        responsive: ['sm']
      },
      {
        title: <FormattedMessage id="gbEnd"/>,
        key: 'time',
        dataIndex: 'time',
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.time.localeCompare(b.time)},
        width: '20%',
        responsive: ['sm']
      },
      {
        title: <FormattedMessage id="gbProgress"/>,
        dataIndex: 'progress',
        key: 'progress',
        width: '35%',
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.progressInt - b.progressInt},
        responsive: ['sm', 'xs']
      },
    ];
    return (
        <div>
            <h2 className="keyboardTitle"><FormattedMessage id="kbTitle"/></h2> 
            <Table className={'table'} columns={columns} dataSource={data} 
            expandable={{
              expandedRowRender: record => <p style={{ margin: 0 }}>
                <FormattedMessage id="kbBrand"/>： {record.brand}<br/>
                <FormattedMessage id="gbType"/>： {record.type}<br/>
                <FormattedMessage id="gbPrice"/>： {record.price}<br/>
                <FormattedMessage id="gbEnd"/>： {record.time}<br/>
                <FormattedMessage id="shipping"/>： {record.shipping}<br/>
                <FormattedMessage id="detail"/>： {record.detail}<br/>
                {record.progress} <br/>
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#1890FF"/> <FormattedMessage id="gbProgress"/> &nbsp;
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#FAAD14"/> <FormattedMessage id="gbDelay"/> &nbsp;
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#52C41A"/> <FormattedMessage id="gbShipping"/> &nbsp;
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#FF4D4F"/> <FormattedMessage id="gbFailure"/>
                </p>,
              rowExpandable: record => record.name !== 'Not Expandable',
              responsive: ['sm', 'xs'],
            }}
            pagination={{ defaultPageSize: 30}} />
        </div>
    )
  }

    
}


// pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}} />