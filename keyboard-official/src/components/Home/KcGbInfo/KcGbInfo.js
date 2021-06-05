import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

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

var parcel = progressCal("5/31/2021", "6/30/2022").toFixed(1);
var arch = progressCal("5/30/2021", "6/30/2022").toFixed(1);
var sunset = progressCal("5/28/2021", "4/30/2022").toFixed(1);
var jelly = progressCal("5/28/2021", "6/30/2022").toFixed(1);
var zooted = progressCal("5/23/2021", "6/30/2022").toFixed(1);
var desko = progressCal("5/30/2021", "6/30/2022").toFixed(1);
var seafarer = progressCal("5/16/2021", "5/16/2022").toFixed(1);
var peaches = progressCal("5/15/2021", "6/30/2022").toFixed(1);
var Kouhai = progressCal("5/9/2021", "6/30/2022").toFixed(1);
var agent = progressCal("5/9/2021", "6/30/2022").toFixed(1);
var WasabiR2 = progressCal("5/4/2021", "3/31/2022").toFixed(1);
var Boulder = progressCal("5/3/2021", "3/31/2022").toFixed(1);
var Metropolis_R2 = progressCal("4/30/2021", "3/31/2022").toFixed(1);
var Fox = progressCal("4/30/2021", "3/31/2022").toFixed(1);
var Blueple = progressCal("4/30/2021", "6/30/2022").toFixed(1);
var Monarch = progressCal("4/23/2021", "6/30/2022").toFixed(1);
var Fuji = progressCal("4/15/2021", "3/31/2022").toFixed(1);
var Watermelon = progressCal("4/11/2021", "3/31/2022").toFixed(1);
var Serenity = progressCal("4/11/2021", "11/30/2021").toFixed(1);
var Hinokoku = progressCal("4/9/2021", "1/31/2022").toFixed(1);
var WOB_Shinethrough = progressCal("4/2/2021", "3/31/2022").toFixed(1);
var Red_Alert_R2 = progressCal("4/9/2021", "3/31/2022").toFixed(1);
var Colorchrome = progressCal("3/26/2021", "3/31/2022").toFixed(1);
var Astral_Light = progressCal("4/5/2021", "3/31/2022").toFixed(1);
var Nightshade = progressCal("4/3/2021", "3/31/2022").toFixed(1);
var Striker_R2 = progressCal("4/6/2021", "3/31/2022").toFixed(1);
var Yeeti = progressCal("4/2/2021", "3/31/2022").toFixed(1);
var Norse = progressCal("3/30/2021", "3/31/2022").toFixed(1);
var Cobalt = progressCal("3/31/2021", "3/31/2022").toFixed(1);
var Start = progressCal("3/31/2021", "2/28/2022").toFixed(1);
var Inukuma = progressCal("3/15/2021", "3/31/2022").toFixed(1);
var Iceberg = progressCal("3/15/2021", "3/31/2022").toFixed(1);
var Devoted = progressCal("3/12/2021", "3/31/2022").toFixed(1);
var Maestro = progressCal("3/14/2021", "3/31/2022").toFixed(1);
var Umka = progressCal("2/28/2021", "3/31/2022").toFixed(1);
var Dots_R2 = progressCal("2/26/2021", "3/31/2022").toFixed(1);
var Dandy = progressCal("3/3/2021", "3/31/2022").toFixed(1);
var Tuzi = progressCal("2/28/2021", "1/31/2022").toFixed(1);
var Sleeves_R2 = progressCal("2/26/2021", "3/31/2022").toFixed(1);
var Birch = progressCal("2/28/2021", "3/31/2022").toFixed(1);
var Gateway = progressCal("2/28/2021", "12/31/2021").toFixed(1);
var Civilizations = progressCal("2/28/2021", "3/31/2022").toFixed(1);
var Muted_R2 = progressCal("2/12/2021", "12/31/2021").toFixed(1);
var KATAKANA = progressCal("2/16/2021", "10/18/2021").toFixed(1);
var Storm = progressCal("2/12/2021", "12/31/2021").toFixed(1);
var Baltic = progressCal("2/3/2021", "12/31/2021").toFixed(1);
var Polybius = progressCal("2/3/2021", "3/31/2022").toFixed(1);
var Shanshui = progressCal("1/31/2021", "12/31/2021").toFixed(1);
var Cojiro = progressCal("1/31/2021", "12/31/2021").toFixed(1);
var Awaken = progressCal("1/31/2021", "12/31/2021").toFixed(1);
var Stealth = progressCal("1/16/2021", "12/31/2021").toFixed(1);
var Avanguardia = progressCal("1/15/2021", "12/31/2021").toFixed(1);
var Gregory = progressCal("1/18/2021", "12/31/2021").toFixed(1);
var Hanami_Dango = progressCal("1/26/2021", "11/30/2021").toFixed(1);
var gh80082 = progressCal("12/31/2020", "12/31/2021").toFixed(1);
var Serika_R2 = progressCal("1/7/2021", "9/30/2021").toFixed(1);
var Pink_on_Navy = progressCal("1/1/2021", "12/31/2021").toFixed(1);
var Aurora_Polaris = progressCal("12/31/2020", "10/31/2021").toFixed(1);
var Alpine = progressCal("1/12/2021", "10/31/2021").toFixed(1);
var Thai_Tea = progressCal("1/4/2021", "12/31/2021").toFixed(1);
var ThinkCaps = progressCal("12/31/2020", "11/30/2021").toFixed(1);
var Pixel = progressCal("12/12/2020", "10/1/2021").toFixed(1);
var Yuri_R2 = progressCal("12/14/2020", "11/30/2021").toFixed(1);
var Amethyst = progressCal("12/13/2020", "11/30/2021").toFixed(1);
var Fundamentals = progressCal("12/4/2020", "9/30/2021").toFixed(1);
var Pride = progressCal("12/4/2020", "9/30/2021").toFixed(1);
var Honor = progressCal("11/30/2020", "9/30/2021").toFixed(1);
var Hallyu = progressCal("12/1/2020", "9/30/2021").toFixed(1);
var Taegeukgi = progressCal("11/20/2020", "9/30/2021").toFixed(1);
var Red_Line = progressCal("11/13/2020", "9/30/2021").toFixed(1);
var Grand_Prix = progressCal("5/4/2021", "5/31/2021").toFixed(1);
var Mudbeam = progressCal("10/30/2020", "5/31/2021").toFixed(1);
var Retrocast = progressCal("11/6/2020", "10/31/2021").toFixed(1);
var Rainy_Day = progressCal("11/16/2020", "10/31/2021").toFixed(1);
var Noire = progressCal("11/4/2020", "10/31/2021").toFixed(1);
var Space_Cadet_R2 = progressCal("10/30/2020", "6/30/2021").toFixed(1);
var Red_Dragon = progressCal("11/1/2020", "9/30/2021").toFixed(1);
var Demon_Sword = progressCal("10/31/2020", "9/30/2021").toFixed(1);
var Sloth = progressCal("10/2/2020", "8/31/2021").toFixed(1);
var Monokai_Material = progressCal("10/4/2020", "5/31/2021").toFixed(1);
var Shorebound = progressCal("10/4/2020", "8/31/2021").toFixed(1);
var Red_Devils = progressCal("9/30/2020", "9/30/2021").toFixed(1);
var Yuru = progressCal("10/1/2020", "8/31/2021").toFixed(1);
var Posh = progressCal("10/2/2020", "8/31/2021").toFixed(1);
var Beta = progressCal("9/21/2020", "6/30/2021").toFixed(1);
var Shoko_R2 = progressCal("9/15/2020", "7/30/2021").toFixed(1);
var HammerHead = progressCal("7/31/2020", "5/31/2021").toFixed(1);
var OG_Spacekeys_R2 = progressCal("9/4/2020", "7/31/2021").toFixed(1);
var Bento_R2 = progressCal("8/31/2020", "3/31/2021").toFixed(1);
var Minimal_R2 = progressCal("9/2/2020", "7/31/2021").toFixed(1);
var Dolch_R5 = progressCal("9/4/2020", "7/31/2021").toFixed(1);
var Ishtar = progressCal("8/28/2020", "6/30/2021").toFixed(1);
var Evil_Dolch = progressCal("8/28/2020", "6/30/2021").toFixed(1);
var Pono = progressCal("8/14/2020", "6/30/2021").toFixed(1);
var Sumi = progressCal("8/15/2020", "4/30/2021").toFixed(1);
var Prepress = progressCal("8/28/2020", "4/30/2021").toFixed(1);
var Mecha_01 = progressCal("8/7/2020", "5/31/2021").toFixed(1);
var Nord = progressCal("7/10/2020", "4/30/2021").toFixed(1);
var Modern_Dolch_R2 = progressCal("7/2/2020", "7/11/2021").toFixed(1);
var Cyrillic_WoB_Beige = progressCal("6/1/2021", "6/30/2022").toFixed(1);
var Hazakura = progressCal("6/1/2021", "6/30/2022").toFixed(1);
var Skyriter = progressCal("8/28/2020", "3/31/2021").toFixed(1);
var Rocket = progressCal("8/26/2020", "6/30/2021").toFixed(1);
var Daisy = progressCal("9/30/2020", "6/30/2021").toFixed(1);
var Dual_Shot = progressCal("10/11/2020", "9/30/2021").toFixed(1);
var Jadeite = progressCal("10/16/2020", "8/31/2021").toFixed(1);
var Bliss_R2 = progressCal("10/15/2020", "12/31/2021").toFixed(1);
var Nightlight = progressCal("10/30/2020", "9/30/2021").toFixed(1);
var Carbon_R3 = progressCal("10/30/2020", "9/17/2021").toFixed(1);
var Biso = progressCal("10/31/2020", "6/30/2021").toFixed(1);
var Angel_Devil_Daisy = progressCal("11/15/2020", "6/30/2021").toFixed(1);
var Silent_Assassin = progressCal("12/23/2020", "11/30/2021").toFixed(1);
var Recall = progressCal("1/15/2021", "3/31/2022").toFixed(1);
var Laser_R2 = progressCal("3/2/2021", "4/11/2022").toFixed(1);
var Strong_Spirit_R2 = progressCal("3/20/2021", "3/31/2022").toFixed(1);
var sp_8010 = progressCal("4/3/2021", "9/30/2022").toFixed(1);
var Tatooine = progressCal("4/16/2021", "6/30/2022").toFixed(1);
var X_mas_Gift = progressCal("4/11/2021", "6/15/2022").toFixed(1);
var sp_Handarbeit = progressCal("5/1/2021", "6/24/2022").toFixed(1);
var Prism = progressCal("4/30/2021", "6/30/2022").toFixed(1);
var Oni = progressCal("9/1/2020", "7/31/2021").toFixed(1);
var Espresso = progressCal("5/14/2021", "6/14/2022").toFixed(1);
var Ramses = progressCal("5/14/2021", "9/30/2022").toFixed(1);
var Tang = progressCal("5/27/2021", "8/31/2022").toFixed(1);
// var Oni = progressCal("9/1/2020", "7/31/2021").toFixed(1);
// var Oni = progressCal("9/1/2020", "7/31/2021").toFixed(1);
// var Oni = progressCal("9/1/2020", "7/31/2021").toFixed(1);
// var Oni = progressCal("9/1/2020", "7/31/2021").toFixed(1);
// var Oni = progressCal("9/1/2020", "7/31/2021").toFixed(1);



// document.write("<br><br>进度" + u80a_seq2);

const data = [
    {
      key: '1',
      name: 'Parcel',
      brand: 'GMK',
      quantity: '未知',
      price: '$120',
      time: '2021-05-31',
      progress: <Progress percent={parcel} />,
    },
    {
      key: '2',
      name: 'Arch',
      brand: 'GMK',
      quantity: '未知',
      price: '$128',
      time: '2021-05-30',
      progress: <Progress percent={arch} />,
    },
    {
      key: '3',
      name: 'Sunset Surfing',
      brand: 'GMK',
      quantity: '未知',
      price: '$149.99',
      time: '2021-05-28',
      progress: <Progress percent={sunset} />,
    },
    {
      key: '4',
      name: 'Jelly Delights',
      brand: 'GMK',
      quantity: '未知',
      price: '$145',
      time: '2021-05-28',
      progress: <Progress percent={jelly} />,
    },
    {
      key: '5',
      name: 'Zooted',
      brand: 'GMK',
      quantity: '未知',
      price: '$135',
      time: '2021-05-23',
      progress: <Progress percent={zooted} />,
    },
    {
      key: '6',
      name: 'Modern Japanese Desko',
      brand: 'GMK',
      quantity: '未知',
      price: '$135',
      time: '2021-05-19',
      progress: <Progress percent={desko} />,
    },
    {
      key: '7',
      name: 'Seafarer',
      brand: 'GMK',
      quantity: '未知',
      price: '$125',
      time: '2021-05-16',
      progress: <Progress percent={seafarer} />,
    },
    {
      key: '8',
      name: 'Peaches n Create Lite',
      brand: 'GMK',
      quantity: '未知',
      price: '$110',
      time: '2021-05-15',
      progress: <Progress percent={peaches} />,
    },
    {
      key: '9',
      name: 'Kouhai',
      brand: 'GMK',
      quantity: '未知',
      price: '$135',
      time: '2021-05-09',
      progress: <Progress percent={Kouhai} />,
    },
    {
      key: '10',
      name: 'Agent 01',
      brand: 'GMK',
      quantity: '未知',
      price: '$135',
      time: '2021-05-09',
      progress: <Progress percent={agent} />,
    },
    {
      key: '11',
      name: 'Wasabi R2',
      brand: 'GMK',
      quantity: '未知',
      price: '$125',
      time: '2021-05-04',
      progress: <Progress percent={WasabiR2} />,
    },
    {
      key: '12',
      name: 'Boulder',
      brand: 'GMK',
      quantity: '未知',
      price: '$141.99',
      time: '2021-05-03',
      progress: <Progress percent={Boulder} />,
    },
    {
      key: '13',
      name: 'Metropolis R2',
      brand: 'GMK',
      quantity: '未知',
      price: '$120',
      time: '2021-04-30',
      progress: <Progress percent={Metropolis_R2} />,
    },
    {
      key: '14',
      name: 'Fox',
      brand: 'GMK',
      quantity: '未知',
      price: '$139.99',
      time: '2021-04-30',
      progress: <Progress percent={Fox} />,
    },
    {
      key: '15',
      name: 'Blueple',
      brand: 'GMK',
      quantity: '未知',
      price: '$119.99',
      time: '2021-04-30',
      progress: <Progress percent={Blueple} />,
    },
    {
      key: '16',
      name: 'Monarch',
      brand: 'GMK',
      quantity: '未知',
      price: '$134.99',
      time: '2021-04-23',
      progress: <Progress percent={Monarch} />,
    },
    {
      key: '17',
      name: 'Fuji',
      brand: 'GMK',
      quantity: '未知',
      price: '$129.99',
      time: '2021-04-15',
      progress: <Progress percent={Fuji} />,
    },
    {
      key: '18',
      name: 'Watermelon',
      brand: 'GMK',
      quantity: '未知',
      price: '$135',
      time: '2021-04-11',
      progress: <Progress percent={Watermelon} />,
    },
    {
      key: '19',
      name: 'Serenity',
      brand: 'GMK',
      quantity: '未知',
      price: '$120',
      time: '2021-04-11',
      progress: <Progress percent={Serenity} />,
    },
    {
      key: '20',
      name: 'Hinokoku',
      brand: 'GMK',
      quantity: '未知',
      price: '$149.99',
      time: '2021-04-09',
      progress: <Progress percent={Hinokoku} />,
    },
    {
      key: '21',
      name: 'WOB Shinethrough',
      brand: 'GMK',
      quantity: '1035',
      price: '$35',
      time: '2021-04-02',
      progress: <Progress percent={WOB_Shinethrough} />,
    },
    {
      key: '22',
      name: 'Red Alert R2',
      brand: 'GMK',
      quantity: '未知',
      price: '$134.99',
      time: '2021-04-09',
      progress: <Progress percent={Red_Alert_R2} />,
    },
    {
      key: '23',
      name: 'Colorchrome',
      brand: 'GMK',
      quantity: '未知',
      price: '$120',
      time: '2021-03-26',
      progress: <Progress percent={Colorchrome} />,
    },
    {
      key: '24',
      name: 'Astral Light',
      brand: 'GMK',
      quantity: '未知',
      price: '$129',
      time: '2021-04-05',
      progress: <Progress percent={Astral_Light} />,
    },
    {
      key: '25',
      name: 'Nightshade',
      brand: 'GMK',
      quantity: '未知',
      price: '$140',
      time: '2021-04-03',
      progress: <Progress percent={Nightshade} />,
    },
    {
      key: '26',
      name: 'Striker R2',
      brand: 'GMK',
      quantity: '未知',
      price: '$110',
      time: '2021-04-06',
      progress: <Progress percent={Striker_R2} />,
    },
    {
      key: '27',
      name: 'Yeeti',
      brand: 'GMK',
      quantity: '未知',
      price: '$139.99',
      time: '2021-04-02',
      progress: <Progress percent={Yeeti} />,
    },
    {
      key: '28',
      name: 'Norse',
      brand: 'GMK',
      quantity: '未知',
      price: '$119.99',
      time: '2021-03-30',
      progress: <Progress percent={Norse} />,
    },
    {
      key: '29',
      name: 'Cobalt',
      brand: 'GMK',
      quantity: '未知',
      price: '$140',
      time: '2021-03-31',
      progress: <Progress percent={Cobalt} />,
    },
    {
      key: '30',
      name: 'Star',
      brand: 'GMK',
      quantity: '270',
      price: '$145',
      time: '2021-03-31',
      progress: <Progress percent={Start} />,
    },
    {
      key: '31',
      name: 'Inukuma',
      brand: 'GMK',
      quantity: '828',
      price: '$135',
      time: '2021-03-15',
      progress: <Progress percent={Inukuma} />,
    },
    {
      key: '32',
      name: 'Iceberg',
      brand: 'GMK',
      quantity: '1500',
      price: '$135',
      time: '2021-03-15',
      progress: <Progress percent={Iceberg} />,
    },
    {
      key: '33',
      name: 'Devoted',
      brand: 'GMK',
      quantity: '754',
      price: '$134.99',
      time: '2021-03-12',
      progress: <Progress percent={Devoted} />,
    },
    {
      key: '34',
      name: 'Maestro',
      brand: 'GMK',
      quantity: '未知',
      price: '$135',
      time: '2021-03-14',
      progress: <Progress percent={Maestro} />,
    },
    {
      key: '35',
      name: 'Umka',
      brand: 'GMK',
      quantity: '173',
      price: '$129',
      time: '2021-02-28',
      progress: <Progress percent={Umka} />,
    },
    {
      key: '36',
      name: 'Dots R2',
      brand: 'GMK',
      quantity: '7382 Dark 4322 Light',
      price: '$130',
      time: '2021-02-26',
      progress: <Progress percent={Dots_R2} />,
    },
    {
      key: '37',
      name: 'Dandy',
      brand: 'GMK',
      quantity: 'Cream 1097 Green 1097',
      price: '$140',
      time: '2021-03-03',
      progress: <Progress percent={Dandy} />,
    },
    {
      key: '38',
      name: 'Tuzi',
      brand: 'GMK',
      quantity: '3332',
      price: '$119.99',
      time: '2021-02-28',
      progress: <Progress percent={Tuzi} />,
    },
    {
      key: '39',
      name: 'Mr. Sleeves R2',
      brand: 'GMK',
      quantity: '未知',
      price: '$70',
      time: '2021-02-26',
      progress: <Progress percent={Sleeves_R2} />,
    },
    {
      key: '40',
      name: 'Birch',
      brand: 'GMK',
      quantity: '2374',
      price: '$134.99',
      time: '2021-02-28',
      progress: <Progress percent={Birch} />,
    },
    {
      key: '41',
      name: 'Gateway',
      brand: 'GMK',
      quantity: '387',
      price: '$144.99',
      time: '2021-02-28',
      progress: <Progress percent={Gateway} />,
    },
    {
      key: '42',
      name: 'Civilizations',
      brand: 'GMK',
      quantity: '1192',
      price: '$125',
      time: '2021-02-28',
      progress: <Progress percent={Civilizations} />,
    },
    {
      key: '43',
      name: 'Muted R2',
      brand: 'GMK',
      quantity: '3534',
      price: '$130',
      time: '2021-02-12',
      progress: <Progress percent={Muted_R2} />,
    },
    {
      key: '44',
      name: 'WoB KATAKANA',
      brand: 'GMK',
      quantity: '750',
      price: '$120',
      time: '2021-02-16',
      progress: <Progress percent={KATAKANA} />,
    },
    {
      key: '45',
      name: 'Storm',
      brand: 'GMK',
      quantity: '692',
      price: '$154.99',
      time: '2021-02-12',
      progress: <Progress percent={Storm} />,
    },
    {
      key: '46',
      name: 'Baltic',
      brand: 'GMK',
      quantity: '未知',
      price: '$134.99',
      time: '2021-02-03',
      progress: <Progress percent={Baltic} />,
    },
    {
      key: '47',
      name: 'Polybius',
      brand: 'GMK',
      quantity: '1515',
      price: '$135',
      time: '2021-02-03',
      progress: <Progress percent={Polybius} />,
    },
    {
      key: '48',
      name: 'Shanshui',
      brand: 'GMK',
      quantity: 'Inkstone 633 Old Path 719',
      price: '$134.99',
      time: '2021-01-31',
      progress: <Progress percent={Shanshui} />,
    },
    {
      key: '49',
      name: 'Cojiro',
      brand: 'GMK',
      quantity: '1000',
      price: '$134.99',
      time: '2021-01-31',
      progress: <Progress percent={Cojiro} />,
    },
    {
      key: '50',
      name: 'Awaken',
      brand: 'GMK',
      quantity: 'Mainframe 1500 Neo 3401',
      price: '$120',
      time: '2021-01-31',
      progress: <Progress percent={Awaken} />,
    },
    {
      key: '51',
      name: 'Stealth',
      brand: 'GMK',
      quantity: '2138',
      price: '$100',
      time: '2021-01-16',
      progress: <Progress percent={Stealth} />,
    },
    {
      key: '52',
      name: 'Avanguardia',
      brand: 'GMK',
      quantity: '736',
      price: '$120',
      time: '2021-01-15',
      progress: <Progress percent={Avanguardia} />,
    },
    {
      key: '53',
      name: 'Gregory',
      brand: 'GMK',
      quantity: '1000',
      price: '$134.99',
      time: '2021-01-18',
      progress: <Progress percent={Gregory} />,
    },
    {
      key: '54',
      name: 'Hanami Dango',
      brand: 'GMK',
      quantity: '2785',
      price: '$134.99',
      time: '2021-01-26',
      progress: <Progress percent={Hanami_Dango} />,
    },
    {
      key: '55',
      name: '80082',
      brand: 'GMK',
      quantity: '未知',
      price: '$99.99',
      time: '2020-12-31',
      progress: <Progress percent={gh80082} />,
    },
    {
      key: '56',
      name: 'Serika R2',
      brand: 'GMK',
      quantity: '未知',
      price: '$110',
      time: '2021-01-07',
      progress: <Progress percent={Serika_R2} />,
    },
    {
      key: '57',
      name: 'Pink on Navy',
      brand: 'GMK',
      quantity: '1002',
      price: '$134.99',
      time: '2021-01-01',
      progress: <Progress percent={Pink_on_Navy} />,
    },
    {
      key: '58',
      name: 'Aurora Polaris',
      brand: 'GMK',
      quantity: '1515',
      price: '$134.99',
      time: '2020-12-31',
      progress: <Progress percent={Aurora_Polaris} />,
    },
    {
      key: '59',
      name: 'Alpine',
      brand: 'GMK',
      quantity: '750',
      price: '$139.99',
      time: '2021-01-12',
      progress: <Progress percent={Alpine} />,
    },
    {
      key: '60',
      name: 'Thai Tea',
      brand: 'GMK',
      quantity: '573',
      price: '$135',
      time: '2021-01-04',
      progress: <Progress percent={Thai_Tea} />,
    },
    {
      key: '61',
      name: 'ThinkCaps',
      brand: 'GMK',
      quantity: '937',
      price: '$110',
      time: '2020-12-31',
      progress: <Progress percent={ThinkCaps} />,
    },
    {
      key: '62',
      name: 'Pixel',
      brand: 'GMK',
      quantity: '949',
      price: '$120',
      time: '2020-12-12',
      progress: <Progress percent={Pixel} />,
    },
    {
      key: '63',
      name: 'Yuri R2 ',
      brand: 'GMK',
      quantity: 'Base 304 Skydate Base 76',
      price: '$120',
      time: '2020-12-14',
      progress: <Progress percent={Yuri_R2} />,
    },
    {
      key: '64',
      name: 'Amethyst',
      brand: 'GMK',
      quantity: 'Base 1561 Dark Base 605',
      price: '$139.99',
      time: '2020-12-13',
      progress: <Progress percent={Amethyst} />,
    },
    {
      key: '65',
      name: 'Fundamentals',
      brand: 'GMK',
      quantity: '647',
      price: '$115',
      time: '2020-12-04',
      progress: <Progress percent={Fundamentals} />,
    },
    {
      key: '66',
      name: 'Pride',
      brand: 'GMK',
      quantity: '未知',
      price: '$142.99',
      time: '2020-12-04',
      progress: <Progress percent={Pride} />,
    },
    {
      key: '67',
      name: 'Honor',
      brand: 'GMK',
      quantity: 'Dark 3141 Light 3568',
      price: '$95',
      time: '2020-11-30',
      progress: <Progress percent={Honor} />,
    },
    {
      key: '68',
      name: 'Hallyu',
      brand: 'GMK',
      quantity: '$2188',
      price: '$129.99',
      time: '2020-12-01',
      progress: <Progress percent={Hallyu} />,
    },
    {
      key: '69',
      name: 'Taegeukgi',
      brand: 'GMK',
      quantity: '503',
      price: '$142.99',
      time: '2020-11-20',
      progress: <Progress percent={Taegeukgi} />,
    },
    {
      key: '70',
      name: 'Red Line',
      brand: 'GMK',
      quantity: '3445',
      price: '$104.99',
      time: '2020-11-13',
      progress: <Progress percent={Red_Line} />,
    },
    {
      key: '71',
      name: 'Grand Prix',
      brand: 'GMK',
      quantity: '2000',
      price: '$125',
      time: '2020-10-30',
      progress: <Progress percent={Grand_Prix} />,
    },
    {
      key: '72',
      name: 'Mudbeam',
      brand: 'GMK',
      quantity: '765',
      price: '$135',
      time: '2020-10-30',
      progress: <Progress percent={Mudbeam} />,
    },
    {
      key: '73',
      name: 'Retrocast',
      brand: 'GMK',
      quantity: '1006',
      price: '$134.99',
      time: '2020-11-06',
      progress: <Progress percent={Retrocast} />,
    },
    {
      key: '74',
      name: 'Rainy Day',
      brand: 'GMK',
      quantity: '3124',
      price: '$134.99',
      time: '2020-11-16',
      progress: <Progress percent={Rainy_Day} />,
    },
    {
      key: '75',
      name: 'Noire',
      brand: 'GMK',
      quantity: '1765',
      price: '$140',
      time: '2020-11-04',
      progress: <Progress percent={Noire} />,
    },
    {
      key: '76',
      name: 'Space Cadet R2',
      brand: 'GMK',
      quantity: '未知',
      price: '$120',
      time: '2020-10-30',
      progress: <Progress percent={Space_Cadet_R2} />,
    },
    {
      key: '77',
      name: 'Red Dragon',
      brand: 'GMK',
      quantity: '1372',
      price: '$134.99',
      time: '2020-11-01',
      progress: <Progress percent={Red_Dragon} />,
    },
    {
      key: '78',
      name: 'Demon Sword',
      brand: 'GMK',
      quantity: '1112',
      price: '$134.99',
      time: '2020-10-31',
      progress: <Progress percent={Demon_Sword} />,
    },
    {
      key: '79',
      name: 'Sloth',
      brand: 'GMK',
      quantity: '1104',
      price: '$125',
      time: '2020-10-02',
      progress: <Progress percent={Sloth} />,
    },
    {
      key: '80',
      name: 'Monokai Material',
      brand: 'GMK',
      quantity: '未知',
      price: '$135',
      time: '2020-10-04',
      progress: <Progress percent={Monokai_Material} />,
    },
    {
      key: '81',
      name: 'Shorebound',
      brand: 'GMK',
      quantity: '未知',
      price: '$140',
      time: '2020-10-04',
      progress: <Progress percent={Shorebound} />,
    },
    {
      key: '82',
      name: 'Red Devils',
      brand: 'GMK',
      quantity: '567',
      price: '$135',
      time: '2020-09-30',
      progress: <Progress percent={Red_Devils} />,
    },
    {
      key: '83',
      name: 'Yuru',
      brand: 'GMK',
      quantity: 'Latin 673 Hiragana 1072',
      price: '$134.99',
      time: '2020-10-01',
      progress: <Progress percent={Yuru} />,
    },
    {
      key: '84',
      name: 'Posh',
      brand: 'GMK',
      quantity: '760',
      price: '$139.99',
      time: '2020-10-02',
      progress: <Progress percent={Posh} />,
    },
    {
      key: '85',
      name: 'Beta',
      brand: 'GMK',
      quantity: 'Beta 501 JS 1083',
      price: '$138',
      time: '2020-09-21',
      progress: <Progress percent={Beta} />,
    },
    {
      key: '86',
      name: 'Shoko R2',
      brand: 'GMK',
      quantity: '4142',
      price: '$134.99',
      time: '2020-09-15',
      progress: <Progress percent={Shoko_R2} />,
    },
    {
      key: '87',
      name: 'HammerHead',
      brand: 'GMK',
      quantity: 'Dark 2216 Light 1156',
      price: '$125',
      time: '2020-07-31',
      progress: <Progress percent={HammerHead} />,
    },
    {
      key: '88',
      name: 'OG Spacekeys R2',
      brand: 'GMK',
      quantity: '1615',
      price: '$25',
      time: '2020-09-04',
      progress: <Progress percent={OG_Spacekeys_R2} />,
    },
    {
      key: '89',
      name: 'Oni',
      brand: 'GMK',
      quantity: '1520',
      price: '$135',
      time: '2020-09-01',
      progress: <Progress percent={Oni} />,
    },
    {
      key: '90',
      name: 'Bento R2',
      brand: 'GMK',
      quantity: 'Traditional 5001 Revival 1083',
      price: '$125',
      time: '2020-08-31',
      progress: <Progress percent={Bento_R2} />,
    },
    {
      key: '91',
      name: 'Minimal R2',
      brand: 'GMK',
      quantity: '5043',
      price: '$99.99',
      time: '2020-09-02',
      progress: <Progress percent={Minimal_R2} />,
    },
    {
      key: '92',
      name: 'Dolch_R5',
      brand: 'GMK',
      quantity: '1020',
      price: '$135',
      time: '2020-09-04',
      progress: <Progress percent={Dolch_R5} />,
    },
    {
      key: '93',
      name: 'Ishtar',
      brand: 'GMK',
      quantity: '1021',
      price: '$144.99',
      time: '2020-08-28',
      progress: <Progress percent={Ishtar} />,
    },
    {
      key: '94',
      name: 'Evil Dolch',
      brand: 'GMK',
      quantity: '1000',
      price: '$129.99',
      time: '2020-08-28',
      progress: <Progress percent={Evil_Dolch} />,
    },
    {
      key: '95',
      name: 'Pono',
      brand: 'GMK',
      quantity: '2041',
      price: '$124.99',
      time: '2020-08-14',
      progress: <Progress percent={Pono} />,
    },
    {
      key: '96',
      name: 'Sumi',
      brand: 'GMK',
      quantity: '3647',
      price: '$135',
      time: '2020-08-15',
      progress: <Progress percent={Sumi} />,
    },
    {
      key: '97',
      name: 'Prepress',
      brand: 'GMK',
      quantity: '317',
      price: '$149.99',
      time: '2020-08-28',
      progress: <Progress percent={Prepress} />,
    },
    {
      key: '98',
      name: 'Mecha-01',
      brand: 'GMK',
      quantity: '2592',
      price: '$125',
      time: '2020-08-07',
      progress: <Progress percent={Mecha_01} />,
    },
    {
      key: '99',
      name: 'Nord',
      brand: 'GMK',
      quantity: '1040',
      price: '$125',
      time: '2020-07-10',
      progress: <Progress percent={Nord} />,
    },
    {
      key: '100',
      name: 'Modern Dolch R2',
      brand: 'GMK',
      quantity: 'Standard 7107 Mist 1502',
      price: '$99.99',
      time: '2020-07-02',
      progress: <Progress percent={Modern_Dolch_R2} />,
    },
    {
      key: '101',
      name: 'Cyrillic WoB Beige',
      brand: 'GMK',
      quantity: '未知',
      price: '$120',
      time: '2021-06-01',
      progress: <Progress percent={Cyrillic_WoB_Beige} />,
    },
    {
      key: '102',
      name: 'Hazakura',
      brand: 'GMK',
      quantity: '未知',
      price: '$135',
      time: '2021-06-01',
      progress: <Progress percent={Hazakura} />,
    },
    {
      key: '103',
      name: 'Skyriter',
      brand: 'Signature Plastics',
      quantity: '594',
      price: '$130',
      time: '2020-08-28',
      progress: <Progress percent={Skyriter} />,
    },
    {
      key: '104',
      name: 'Rocket',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$105',
      time: '2020-08-26',
      progress: <Progress percent={Rocket} />,
    },
    {
      key: '105',
      name: 'Daisy',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '¥823',
      time: '2020-09-30',
      progress: <Progress percent={Daisy} />,
    },
    {
      key: '106',
      name: 'Dual Shot',
      brand: 'Signature Plastics',
      quantity: '1002',
      price: '$125',
      time: '2020-10-11',
      progress: <Progress percent={Dual_Shot} />,
    },
    {
      key: '107',
      name: 'Jadeite',
      brand: 'Signature Plastics',
      quantity: '507',
      price: '$120',
      time: '2020-10-16',
      progress: <Progress percent={Jadeite} />,
    },
    {
      key: '108',
      name: 'Bliss R2',
      brand: 'Signature Plastics',
      quantity: 'grey 1193 pink 1109',
      price: '$130',
      time: '2020-10-15',
      progress: <Progress percent={Bliss_R2} />,
    },
    {
      key: '109',
      name: 'Nightlight',
      brand: 'Signature Plastics',
      quantity: '436',
      price: '$90',
      time: '2020-10-30',
      progress: <Progress percent={Nightlight} />,
    },
    {
      key: '110',
      name: 'Carbon R3',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$130',
      time: '2020-10-30',
      progress: <Progress percent={Carbon_R3} />,
    },
    {
      key: '111',
      name: 'Biso',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$140',
      time: '2020-10-31',
      progress: <Progress percent={Biso} />,
    },
    {
      key: '112',
      name: 'Angel/Devil Daisy',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '¥1098', 
      time: '2020-11-15',
      progress: <Progress percent={Angel_Devil_Daisy} />,
    },
    {
      key: '113',
      name: 'Silent Assassin',
      brand: 'Signature Plastics',
      quantity: '436',
      price: '¥912',
      time: '2020-12-23',
      progress: <Progress percent={Silent_Assassin} />,
    },
    {
      key: '114',
      name: 'Recall',
      brand: 'Signature Plastics',
      quantity: '287',
      price: '$130',
      time: '2021-01-15',
      progress: <Progress percent={Recall} />,
    },
    {
      key: '115',
      name: 'Laser R2',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$125',
      time: '2021-03-02',
      progress: <Progress percent={Laser_R2} />,
    },
    {
      key: '116',
      name: 'Strong Spirit R2',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$130',
      time: '2021-03-20',
      progress: <Progress percent={Strong_Spirit_R2} />,
    },
    {
      key: '117',
      name: '8010',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$140',
      time: '2021-04-03',
      progress: <Progress percent={sp_8010} />,
    },
    {
      key: '118',
      name: 'Tatooine',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$250',
      time: '2021-04-16',
      progress: <Progress percent={Tatooine} />,
    },
    {
      key: '119',
      name: 'X-mas Gift',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '¥699',
      time: '2021-04-11',
      progress: <Progress percent={X_mas_Gift} />,
    },
    {
      key: '120',
      name: 'Handarbeit',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$130',
      time: '2021-05-01',
      progress: <Progress percent={sp_Handarbeit} />,
    },
    {
      key: '121',
      name: 'Prism',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '¥1190',
      time: '2021-04-30',
      progress: <Progress percent={Prism} />,
    },
    {
      key: '122',
      name: 'Espresso',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$120',
      time: '2021-05-14',
      progress: <Progress percent={Espresso} />,
    },
    {
      key: '123',
      name: 'Ramses',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '$140',
      time: '2021-05-14',
      progress: <Progress percent={Ramses} />,
    },
    {
      key: '124',
      name: 'Tang',
      brand: 'Signature Plastics',
      quantity: '未知',
      price: '¥1380',
      time: '2021-05-27',
      progress: <Progress percent={Tang} />,
    },
    
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
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.name.localeCompare(b.name)},
        width: '15%',
      },
      {
        title: '品牌',
        dataIndex: 'brand',
        key: 'brand',
        defaultSortOrder: 'descend',
        ...this.getColumnSearchProps('brand'),
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.brand.localeCompare(b.brand)},
        width: '15%',
      },
      {
        title: '数量',
        dataIndex: 'quantity',
        key: 'quantity',
        width: '15%',
      },
      {
        title: 'Base价格',
        key: 'price',
        dataIndex: 'price',
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.price.localeCompare(b.price)},
        width: '15%',
      },
      {
        title: '截团时间',
        key: 'time',
        dataIndex: 'time',
        sorter: (a, b) =>{return a.time.localeCompare(b.time)},
        width: '20%',
      },
      {
        title: '进度',
        dataIndex: 'progress',
        key: 'progress',
        width: '20%',
        sortDirections: ['ascend', 'descend', 'ascend'],
      },
    ];
    return (
        <div>
            <h2>键帽团购进度</h2>
            <Table className={'table'} columns={columns} dataSource={data} 
            pagination={{ defaultPageSize: 30}} />
        </div>
    )
  }

    
}


// pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}} />