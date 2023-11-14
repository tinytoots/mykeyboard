import React, { useState } from 'react';
import { Table, Input, Button, Space, Typography, Progress } from 'antd';
import './KcGbInfo.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import { progressCal, delayCal } from '../calculations';

const { Title, Paragraph, Text, Link } = Typography;

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
var Serika_R2 = delayCal("1/7/2021", "9/30/2021").toFixed(1);
var Pink_on_Navy = progressCal("1/1/2021", "12/31/2021").toFixed(1);
var Aurora_Polaris = progressCal("12/31/2020", "10/31/2021").toFixed(1);
var Alpine = progressCal("1/12/2021", "10/31/2021").toFixed(1);
var Thai_Tea = progressCal("1/4/2021", "12/31/2021").toFixed(1);
var ThinkCaps = progressCal("12/31/2020", "11/30/2021").toFixed(1);
var Pixel = progressCal("12/12/2020", "10/1/2021").toFixed(1);
var Yuri_R2 = progressCal("12/14/2020", "11/30/2021").toFixed(1);
var Amethyst = progressCal("12/13/2020", "11/30/2021").toFixed(1);
var Fundamentals = delayCal("12/4/2020", "9/30/2021").toFixed(1);
var Pride = delayCal("12/4/2020", "9/30/2021").toFixed(1);
var Honor = delayCal("11/30/2020", "9/30/2021").toFixed(1);
var Hallyu = delayCal("12/1/2020", "9/30/2021").toFixed(1);
var Taegeukgi = delayCal("11/20/2020", "9/30/2021").toFixed(1);
var Red_Line = delayCal("11/13/2020", "9/30/2021").toFixed(1);
var Grand_Prix = delayCal("5/4/2021", "9/30/2021").toFixed(1);
var Mudbeam = delayCal("10/30/2020", "9/30/2021").toFixed(1);
var Retrocast = progressCal("11/6/2020", "10/31/2021").toFixed(1);
var Rainy_Day = progressCal("11/16/2020", "10/31/2021").toFixed(1);
var Noire = progressCal("11/4/2020", "10/31/2021").toFixed(1);
var Space_Cadet_R2 = delayCal("10/30/2020", "6/30/2021").toFixed(1);
var Red_Dragon = delayCal("11/1/2020", "9/30/2021").toFixed(1);
var Demon_Sword = delayCal("10/31/2020", "9/30/2021").toFixed(1);
var Sloth = delayCal("10/2/2020", "8/31/2021").toFixed(1);
var Monokai_Material = delayCal("10/4/2020", "8/31/2021").toFixed(1);
var Shorebound = delayCal("10/4/2020", "8/31/2021").toFixed(1);
var Red_Devils = delayCal("9/30/2020", "9/30/2021").toFixed(1);
var Yuru = delayCal("10/1/2020", "8/31/2021").toFixed(1);
var Posh = delayCal("10/2/2020", "8/31/2021").toFixed(1);
var Beta = delayCal("9/21/2020", "6/30/2021").toFixed(1);
var Shoko_R2 = delayCal("9/15/2020", "9/30/2021").toFixed(1);
var HammerHead = progressCal("7/30/2020", "9/30/2021").toFixed(1);
var OG_Spacekeys_R2 = delayCal("9/4/2020", "7/30/2021").toFixed(1);
var Bento_R2 = progressCal("8/31/2020", "12/31/2021").toFixed(1);
var Minimal_R2 = progressCal("9/2/2020", "1/31/2022").toFixed(1);
var Dolch_R5 = delayCal("9/4/2020", "7/30/2021").toFixed(1);
var Ishtar = delayCal("8/28/2020", "6/30/2021").toFixed(1);
var Evil_Dolch = delayCal("8/28/2020", "6/30/2021").toFixed(1);
var Pono = progressCal("8/14/2020", "1/31/2022").toFixed(1);
var Sumi = delayCal("8/15/2020", "4/30/2021").toFixed(1);
var Prepress = delayCal("8/28/2020", "8/31/2021").toFixed(1);
var Mecha_01 = progressCal("8/7/2020", "11/30/2021").toFixed(1);
var Nord = progressCal("7/10/2020", "3/31/2022").toFixed(1);
var Modern_Dolch_R2 = progressCal("7/2/2020", "11/30/2021").toFixed(1);
var Cyrillic_WoB_Beige = progressCal("6/1/2021", "6/30/2022").toFixed(1);
var Hazakura = progressCal("6/1/2021", "6/30/2022").toFixed(1);
var Skyriter = progressCal("8/28/2020", "6/31/2021").toFixed(1);
var Rocket = delayCal("8/26/2020", "6/30/2021").toFixed(1);
var Daisy = delayCal("9/30/2020", "6/30/2021").toFixed(1);
var Dual_Shot = progressCal("10/11/2020", "9/30/2021").toFixed(1);
var Jadeite = delayCal("10/16/2020", "8/31/2021").toFixed(1);
var Bliss_R2 = progressCal("10/15/2020", "12/31/2021").toFixed(1);
var Nightlight = delayCal("10/30/2020", "9/30/2021").toFixed(1);
var Carbon_R3 = progressCal("10/30/2020", "9/17/2021").toFixed(1);
var Biso = delayCal("10/31/2020", "6/30/2021").toFixed(1);
var Angel_Devil_Daisy = delayCal("11/15/2020", "6/30/2021").toFixed(1);
var Silent_Assassin = progressCal("12/23/2020", "11/30/2021").toFixed(1);
var Recall = progressCal("1/15/2021", "3/31/2022").toFixed(1);
var Laser_R2 = progressCal("3/2/2021", "4/11/2022").toFixed(1);
var Strong_Spirit_R2 = progressCal("3/20/2021", "3/31/2022").toFixed(1);
var sp_8010 = progressCal("4/3/2021", "9/30/2022").toFixed(1);
var Tatooine = progressCal("4/16/2021", "6/30/2022").toFixed(1);
var X_mas_Gift = progressCal("4/11/2021", "6/15/2022").toFixed(1);
var sp_Handarbeit = progressCal("5/1/2021", "6/24/2022").toFixed(1);
var Prism = progressCal("4/30/2021", "6/30/2022").toFixed(1);
var Oni = delayCal("9/1/2020", "9/30/2021").toFixed(1);
var Espresso = progressCal("5/14/2021", "6/14/2022").toFixed(1);
var Ramses = progressCal("5/14/2021", "9/30/2022").toFixed(1);
var Tang = progressCal("5/27/2021", "8/31/2022").toFixed(1);
var Sparta = progressCal("6/5/2021", "3/31/2022").toFixed(1);
var Deepwell = progressCal("6/4/2021", "6/30/2022").toFixed(1);
var Moai = progressCal("6/4/2021", "6/30/2022").toFixed(1);
var Handarbeit_Nachtarbeit = progressCal("6/3/2021", "5/31/2022").toFixed(1);
var Dualshot_R2 = progressCal("6/4/2021", "6/30/2022").toFixed(1);
var Lazurite = progressCal("6/5/2021", "6/30/2022").toFixed(1);
var Apollo = delayCal("3/25/2020", "5/31/2021").toFixed(1);
var Lunar = progressCal("4/3/2020", "12/31/2021").toFixed(1);
var Wild = delayCal("5/6/2020", "6/30/2021").toFixed(1);
var Yu = progressCal("4/20/2021", "10/31/2021").toFixed(1);
var Salmon = progressCal("7/5/2021", "1/5/2022").toFixed(1);
var Girl_Hood = progressCal("6/10/2021", "10/31/2022").toFixed(1);
var Spectra = progressCal("6/25/2021", "12/31/2022").toFixed(1);
var Copper = progressCal("6/28/2021", "12/31/2022").toFixed(1);
var UwU = progressCal("6/15/2021", "3/31/2022").toFixed(1);
var Patisserie = progressCal("6/13/2021", "6/30/2022").toFixed(1);
var Haku = progressCal("6/18/2021", "6/30/2022").toFixed(1);
var Blue_Samurai = progressCal("6/30/2020", "8/31/2021").toFixed(1);
var Deku = delayCal("8/7/2020", "8/31/2021").toFixed(1);
var Frost_Witch = delayCal("5/24/2020", "2/28/2021").toFixed(1);
var Dracula = delayCal("10/31/2019", "8/31/2021").toFixed(1);
var Moonlight = progressCal("6/26/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var Lavender = progressCal("6/30/2021", "12/31/2022").toFixed(1);
var Sixes = progressCal("6/30/2021", "5/31/2022").toFixed(1);
var Analog_Dreams_R2 = progressCal("6/25/2021", "6/30/2022").toFixed(1);
var Boho = progressCal("7/9/2021", "9/30/2022").toFixed(1);
var Lime_R2 = progressCal("7/9/2021", "4/29/2022").toFixed(1);
var Symbiote = progressCal("7/9/2021", "9/30/2022").toFixed(1);
var Twilight = progressCal("7/16/2021", "6/30/2022").toFixed(1);
var Lychee = progressCal("7/17/2021", "9/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);
var British_Racing_Green = progressCal("6/30/2021", "6/30/2022").toFixed(1);


// document.write("<br><br>进度" + u80a_seq2);

const data = [
    {
      key: '1',
      name: 'Parcel',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-05-31',
      shipping: 'Q2 2022',
      progress: <Progress percent={parcel} />,
      progressInt: parcel,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Parcel/" target="_blank">
      https://parcel</Link> 
    },
    {
      key: '2',
      name: 'Arch',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$128',
      priceInt: 128,
      time: '2021-05-30',
      shipping: 'Q2 2022',
      progress: <Progress percent={arch} />,
      progressInt: arch,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Arch/" target="_blank">
      https://arch</Link> 
    },
    {
      key: '3',
      name: 'Sunset Surfing',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$149.99',
      priceInt: 149.99,
      time: '2021-05-28',
      shipping: 'Apr. 2022',
      progress: <Progress percent={sunset} />,
      progressInt: sunset,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sunset-Surfing/" target="_blank">
      https://sunset</Link> 
    },
    {
      key: '4',
      name: 'Jelly Delights',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$145',
      priceInt: 145,
      time: '2021-05-28',
      shipping: 'Q2 2022',
      progress: <Progress percent={jelly} />,
      progressInt: jelly,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Jelly-Delights/" target="_blank">
      https://jelly</Link> 
    },
    {
      key: '5',
      name: 'Zooted',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$135',
      priceInt: 135,
      time: '2021-05-23',
      shipping: 'Q2 2022',
      progress: <Progress percent={zooted} />,
      progressInt: zooted,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Zooted/" target="_blank">
      https://zooted</Link> 
    },
    {
      key: '6',
      name: 'Modern Japanese Desko',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$135',
      priceInt: 135,
      time: '2021-05-19',
      shipping: 'Q2 2022',
      progress: <Progress percent={desko} />,
      progressInt: desko,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Modern-Japanese-Desko/" target="_blank">
      https://modern-japanese</Link> 
    },
    {
      key: '7',
      name: 'Seafarer',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$125',
      priceInt: 125,
      time: '2021-05-16',
      shipping: '12个月',
      progress: <Progress percent={seafarer} />,
      progressInt: seafarer,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Seafarer/" target="_blank">
      https://seafarer</Link> 
    },
    {
      key: '8',
      name: 'Peaches n Create Lite',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$110',
      priceInt: 110,
      time: '2021-05-15',
      shipping: 'Q2 2022',
      progress: <Progress percent={peaches} />,
      progressInt: peaches,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Peaches-n-Create-Lite/" target="_blank">
      https://peaches</Link> 
    },
    {
      key: '9',
      name: 'Kouhai',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$135',
      priceInt: 135,
      time: '2021-05-09',
      shipping: 'Q2 2022',
      progress: <Progress percent={Kouhai} />,
      progressInt: Kouhai,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Kouhai/" target="_blank">
      https://kouhai</Link> 
    },
    {
      key: '10',
      name: 'Agent 01',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$135',
      priceInt: 135,
      time: '2021-05-09',
      shipping: 'Q2 2022',
      progress: <Progress percent={agent} />,
      progressInt: agent,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Agent-01/" target="_blank">
      https://agent-01</Link> 
    },
    {
      key: '11',
      name: 'Wasabi R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$125',
      priceInt: 125,
      time: '2021-05-04',
      shipping: 'Q1 2022',
      progress: <Progress percent={WasabiR2} />,
      progressInt: WasabiR2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Wasabi-R2/" target="_blank">
      https://wasabi-r2</Link> 
    },
    {
      key: '12',
      name: 'Boulder',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$141.99',
      priceInt: 141.99,
      time: '2021-05-03',
      shipping: 'Q1 2022',
      progress: <Progress percent={Boulder} />,
      progressInt: Boulder,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Boulder/" target="_blank">
      https://boulder</Link> 
    },
    {
      key: '13',
      name: 'Metropolis R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-04-30',
      shipping: 'Q1 2022',
      progress: <Progress percent={Metropolis_R2} />,
      progressInt: Metropolis_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Metropolis-R2/" target="_blank">
      https://metropolis-r2</Link> 
    },
    {
      key: '14',
      name: 'Fox',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$139.99',
      priceInt: 139.99,
      time: '2021-04-30',
      shipping: 'Q1 2022',
      progress: <Progress percent={Fox} />,
      progressInt: Fox,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Fox/" target="_blank">
      https://fox</Link> 
    },
    {
      key: '15',
      name: 'Blueple',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$119.99',
      priceInt: 119.99,
      time: '2021-04-30',
      shipping: 'Q2 2022',
      progress: <Progress percent={Blueple} />,
      progressInt: Blueple,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Blueple/" target="_blank">
      https://blueple</Link> 
    },
    {
      key: '16',
      name: 'Monarch',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-04-23',
      shipping: 'Q2 2022',
      progress: <Progress percent={Monarch} />,
      progressInt: Monarch,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Monarch/" target="_blank">
      https://monarch</Link> 
    },
    {
      key: '17',
      name: 'Fuji',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$129.99',
      priceInt: 129.99,
      time: '2021-04-15',
      shipping: 'Q1 2022',
      progress: <Progress percent={Fuji} />,
      progressInt: Fuji,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Fuji/" target="_blank">
      https://fuji</Link> 
    },
    {
      key: '18',
      name: 'Watermelon',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$135',
      priceInt: 135,
      time: '2021-04-11',
      shipping: 'Q1 2022',
      progress: <Progress percent={Watermelon} />,
      progressInt: Watermelon,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Watermelon/" target="_blank">
      https://watermelon</Link> 
    },
    {
      key: '19',
      name: 'Serenity',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-04-11',
      shipping: 'Nov. 2022',
      progress: <Progress percent={Serenity} />,
      progressInt: Serenity,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Serenity/" target="_blank">
      https://serenity</Link> 
    },
    {
      key: '20',
      name: 'Hinokoku',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$149.99',
      priceInt: 149.99,
      time: '2021-04-09',
      shipping: 'Jan. 2022',
      progress: <Progress percent={Hinokoku} />,
      progressInt: Hinokoku,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Hinokoku/" target="_blank">
      https://hinokoku</Link> 
    },
    {
      key: '21',
      name: 'WOB Shinethrough',
      brand: 'GMK',
      quantity: '1035',
      price: '$35',
      priceInt: 35,
      time: '2021-04-02',
      shipping: 'Q1 2022',
      progress: <Progress percent={WOB_Shinethrough} />,
      progressInt: WOB_Shinethrough,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/WOB-Shinethrough/" target="_blank">
      https://shinethrough</Link>,
    },
    {
      key: '22',
      name: 'Red Alert R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-04-09',
      shipping: 'Q1 2022',
      progress: <Progress percent={Red_Alert_R2} />,
      progressInt: Red_Alert_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Red-Alert-R2/" target="_blank">
      https://red-alert-r2</Link>,
    },
    {
      key: '23',
      name: 'Colorchrome',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-03-26',
      shipping: 'Q1 2022',
      progress: <Progress percent={Colorchrome} />,
      progressInt: Colorchrome,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Colorchrome/" target="_blank">
      https://colorchrome</Link>,
    },
    {
      key: '24',
      name: 'Astral Light',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$129',
      priceInt: 129,
      time: '2021-04-05',
      shipping: 'Q1 2022',
      progress: <Progress percent={Astral_Light} />,
      progressInt: Astral_Light,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Astral-Light/" target="_blank">
      https://astral</Link>,
    },
    {
      key: '25',
      name: 'Nightshade',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$140',
      priceInt: 140,
      time: '2021-04-03',
      shipping: 'Q1 2022',
      progress: <Progress percent={Nightshade} />,
      progressInt: Nightshade,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Nightshade/" target="_blank">
      https://nightshade</Link>,
    },
    {
      key: '26',
      name: 'Striker R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$110',
      priceInt: 110,
      time: '2021-04-06',
      shipping: 'Q1 2022',
      progress: <Progress percent={Striker_R2} />,
      progressInt: Striker_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Striker-R2/" target="_blank">
      https://striker-r2</Link>,
    },
    {
      key: '27',
      name: 'Yeeti',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$139.99',
      priceInt: 139.99,
      time: '2021-04-02',
      shipping: 'Q1 2022',
      progress: <Progress percent={Yeeti} />,
      progressInt: Yeeti,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Yeeti/" target="_blank">
      https://yeeti</Link>,
    },
    {
      key: '28',
      name: 'Norse',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$119.99',
      priceInt: 119.99,
      time: '2021-03-30',
      shipping: 'Q1 2022',
      progress: <Progress percent={Norse} />,
      progressInt: Norse,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/norse/" target="_blank">
      https://norse</Link>,
    },
    {
      key: '29',
      name: 'Cobalt',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$140',
      priceInt: 140,
      time: '2021-03-31',
      shipping: 'Q1 2022',
      progress: <Progress percent={Cobalt} />,
      progressInt: Cobalt,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Cobalt/" target="_blank">
      https://cobalt</Link>,
    },
    {
      key: '30',
      name: 'Star',
      brand: 'GMK',
      quantity: '270',
      price: '$145',
      priceInt: 145,
      time: '2021-03-31',
      shipping: 'Feb. 2022',
      progress: <Progress percent={Start} />,
      progressInt: Start,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Star/" target="_blank">
      https://star</Link>,
    },
    {
      key: '31',
      name: 'Inukuma',
      brand: 'GMK',
      quantity: '828',
      price: '$135',
      priceInt: 135,
      time: '2021-03-15',
      shipping: 'Q1 2022',
      progress: <Progress percent={Inukuma} />,
      progressInt: Inukuma,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Inukuma/" target="_blank">
      https://inukuma</Link>,
    },
    {
      key: '32',
      name: 'Iceberg',
      brand: 'GMK',
      quantity: '1500',
      price: '$135',
      priceInt: 135,
      time: '2021-03-15',
      shipping: 'Q1 2022',
      progress: <Progress percent={Iceberg} />,
      progressInt: Iceberg,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Iceberg/" target="_blank">
      https://iceberg</Link>,
    },
    {
      key: '33',
      name: 'Devoted',
      brand: 'GMK',
      quantity: '754',
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-03-12',
      shipping: 'Q1 2022',
      progress: <Progress percent={Devoted} />,
      progressInt: Devoted,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Devoted/" target="_blank">
      https://devoted</Link>,
    },
    {
      key: '34',
      name: 'Maestro',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$135',
      priceInt: 135,
      time: '2021-03-14',
      shipping: 'Q1 2022',
      progress: <Progress percent={Maestro} />,
      progressInt: Maestro,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Maestro/" target="_blank">
      https://maestro</Link>,
    },
    {
      key: '35',
      name: 'Umka',
      brand: 'GMK',
      quantity: '173',
      price: '$129',
      priceInt: 129,
      time: '2021-02-28',
      shipping: 'Q1 2022',
      progress: <Progress percent={Umka} />,
      progressInt: Umka,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Umka/" target="_blank">
      https://umka</Link>,
    },
    {
      key: '36',
      name: 'Dots R2',
      brand: 'GMK',
      quantity: '7382 Dark 4322 Light',
      price: '$130',
      priceInt: 130,
      time: '2021-02-26',
      shipping: 'Q1 2022',
      progress: <Progress percent={Dots_R2} />,
      progressInt: Dots_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Dots-R2/" target="_blank">
      https://dots-r2</Link>,
    },
    {
      key: '37',
      name: 'Dandy',
      brand: 'GMK',
      quantity: 'Cream 1097 Green 1097',
      price: '$140',
      priceInt: 140,
      time: '2021-03-03',
      shipping: 'Q1 2022',
      progress: <Progress percent={Dandy} />,
      progressInt: Dandy,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Dandy/" target="_blank">
      https://dandy</Link>,
    },
    {
      key: '38',
      name: 'Tuzi',
      brand: 'GMK',
      quantity: '3332',
      price: '$119.99',
      priceInt: 119.99,
      time: '2021-02-28',
      shipping: 'Jan. 2022',
      progress: <Progress percent={Tuzi} />,
      progressInt: Tuzi,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Tuzi/" target="_blank">
      https://tuzi</Link>,
    },
    {
      key: '39',
      name: 'Mr. Sleeves R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$70',
      priceInt: 70,
      time: '2021-02-26',
      shipping: 'Q1 2022',
      progress: <Progress percent={Sleeves_R2} />,
      progressInt: Sleeves_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Mr-Sleeves-R2/" target="_blank">
      https://mr-sleeves-r2</Link>,
    },
    {
      key: '40',
      name: 'Birch',
      brand: 'GMK',
      quantity: '2374',
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-02-28',
      shipping: 'Q1 2022',
      progress: <Progress percent={Birch} />,
      progressInt: Birch,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Birch/" target="_blank">
      https://birch</Link>,
    },
    {
      key: '41',
      name: 'Gateway',
      brand: 'GMK',
      quantity: '387',
      price: '$144.99',
      priceInt: 144.99,
      time: '2021-02-28',
      shipping: 'Q4 2021',
      progress: <Progress percent={Gateway} />,
      progressInt: Gateway,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Gateway/" target="_blank">
      https://gateway</Link>,
    },
    {
      key: '42',
      name: 'Civilizations',
      brand: 'GMK',
      quantity: '1192',
      price: '$125',
      priceInt: 125,
      time: '2021-02-28',
      shipping: 'Q1 2022',
      progress: <Progress percent={Civilizations} />,
      progressInt: Civilizations,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Civilizations/" target="_blank">
      https://civilizations</Link>,
    },
    {
      key: '43',
      name: 'Muted R2',
      brand: 'GMK',
      quantity: '3534',
      price: '$130',
      priceInt: 130,
      time: '2021-02-12',
      shipping: 'Q4 2021',
      progress: <Progress percent={Muted_R2} />,
      progressInt: Muted_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Muted-R2/" target="_blank">
      https://muted-r2</Link>,
    },
    {
      key: '44',
      name: 'WoB KATAKANA',
      brand: 'GMK',
      quantity: '750',
      price: '$120',
      priceInt: 120,
      time: '2021-02-16',
      shipping: '2021-10-18',
      progress: <Progress percent={KATAKANA} />,
      progressInt: KATAKANA,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/WoB-KATAKANA/" target="_blank">
      https://katakana</Link>,
    },
    {
      key: '45',
      name: 'Storm',
      brand: 'GMK',
      quantity: '692',
      price: '$154.99',
      priceInt: 154.99,
      time: '2021-02-12',
      shipping: 'Q4 2021',
      progress: <Progress percent={Storm} />,
      progressInt: Storm,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Storm/" target="_blank">
      https://storm</Link>,
    },
    {
      key: '46',
      name: 'Baltic',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-02-03',
      shipping: 'Q4 2021',
      progress: <Progress percent={Baltic} />,
      progressInt: Baltic,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Baltic/" target="_blank">
      https://baltic</Link>,
    },
    {
      key: '47',
      name: 'Polybius',
      brand: 'GMK',
      quantity: '1515',
      price: '$135',
      priceInt: 135,
      time: '2021-02-03',
      shipping: 'Q1 2022',
      progress: <Progress percent={Polybius} />,
      progressInt: Polybius,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Polybius/" target="_blank">
      https://polybius</Link>,
    },
    {
      key: '48',
      name: 'Shanshui',
      brand: 'GMK',
      quantity: 'Inkstone 633 Old Path 719',
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-01-31',
      shipping: 'Q4 2021',
      progress: <Progress percent={Shanshui} />,
      progressInt: Shanshui,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Shanshui/" target="_blank">
      https://shanshui</Link>,
    },
    {
      key: '49',
      name: 'Cojiro',
      brand: 'GMK',
      quantity: '1000',
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-01-31',
      shipping: 'Q4 2021',
      progress: <Progress percent={Cojiro} />,
      progressInt: Cojiro,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Cojiro/" target="_blank">
      https://cojiro</Link>,
    },
    {
      key: '50',
      name: 'Awaken',
      brand: 'GMK',
      quantity: 'Mainframe 1500 Neo 3401',
      price: '$120',
      priceInt: 120,
      time: '2021-01-31',
      shipping: 'Q4 2021',
      progress: <Progress percent={Awaken} />,
      progressInt: Awaken,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Awaken/" target="_blank">
      https://awaken</Link>,
    },
    {
      key: '51',
      name: 'Stealth',
      brand: 'GMK',
      quantity: '2138',
      price: '$100',
      priceInt: 100,
      time: '2021-01-16',
      shipping: 'Q4 2021',
      progress: <Progress percent={Stealth} />,
      progressInt: Stealth,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Stealth/" target="_blank">
      https://stealth</Link>,
    },
    {
      key: '52',
      name: 'Avanguardia',
      brand: 'GMK',
      quantity: '736',
      price: '$120',
      priceInt: 120,
      time: '2021-01-15',
      shipping: 'Q4 2021',
      progress: <Progress percent={Avanguardia} />,
      progressInt: Avanguardia,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Avanguardia/" target="_blank">
      https://avanguardia</Link>,
    },
    {
      key: '53',
      name: 'Gregory',
      brand: 'GMK',
      quantity: '1000',
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-01-18',
      shipping: 'Q4 2021',
      progress: <Progress percent={Gregory} />,
      progressInt: Gregory,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Gregory/" target="_blank">
      https://gregory</Link>,
    },
    {
      key: '54',
      name: 'Hanami Dango',
      brand: 'GMK',
      quantity: '2785',
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-01-26',
      shipping: 'Nov. 2021',
      progress: <Progress percent={Hanami_Dango} />,
      progressInt: Hanami_Dango,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Hanami-Dango/" target="_blank">
      https://hanami-dango</Link>,
    },
    {
      key: '55',
      name: '80082',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$99.99',
      priceInt: 99.99,
      time: '2020-12-31',
      shipping: 'Q4 2021',
      progress: <Progress percent={gh80082} />,
      progressInt: gh80082,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/80082/" target="_blank">
      https://80082</Link>,
    },
    {
      key: '56',
      name: 'Serika R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$110',
      priceInt: 110,
      time: '2021-01-07',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Serika_R2} />,
      progressInt: 100 + Serika_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Serika-R2/" target="_blank">
      https://serika-r2</Link>,
    },
    {
      key: '57',
      name: 'Pink on Navy',
      brand: 'GMK',
      quantity: '1002',
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-01-01',
      shipping: 'Q4 2021',
      progress: <Progress percent={Pink_on_Navy} />,
      progressInt: Pink_on_Navy,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Pink-on-Navy/" target="_blank">
      https://pink-on-navy</Link>,
    },
    {
      key: '58',
      name: 'Aurora Polaris',
      brand: 'GMK',
      quantity: '1515',
      price: '$134.99',
      priceInt: 134.99,
      time: '2020-12-31',
      shipping: 'Oct. 2021',
      progress: <Progress percent={Aurora_Polaris} />,
      progressInt: Aurora_Polaris,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Aurora-Polaris/" target="_blank">
      https://aurora-polaris</Link>,
    },
    {
      key: '59',
      name: 'Alpine',
      brand: 'GMK',
      quantity: '750',
      price: '$139.99',
      priceInt: 134.99,
      time: '2021-01-12',
      shipping: 'Oct. 2021',
      progress: <Progress percent={Alpine} />,
      progressInt: Alpine,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Alpine/" target="_blank">
      https://alpine</Link>,
    },
    {
      key: '60',
      name: 'Thai Tea',
      brand: 'GMK',
      quantity: '573',
      price: '$135',
      priceInt: 135,
      time: '2021-01-04',
      shipping: 'Q4 2021',
      progress: <Progress percent={Thai_Tea} />,
      progressInt: Thai_Tea,detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Thai-Tea/" target="_blank">
      https://thai-tea</Link>,
    },
    {
      key: '61',
      name: 'ThinkCaps',
      brand: 'GMK',
      quantity: '937',
      price: '$110',
      priceInt: 110,
      time: '2020-12-31',
      shipping: 'Nov. 2021',
      progress: <Progress percent={ThinkCaps} />,
      progressInt: ThinkCaps,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/ThinkCaps/" target="_blank">
      https://thinkcaps</Link>,
    },
    {
      key: '62',
      name: 'Pixel',
      brand: 'GMK',
      quantity: '949',
      price: '$120',
      priceInt: 120,
      time: '2020-12-12',
      shipping: 'Q3 2021',
      progress: <Progress percent={Pixel} />,
      progressInt: Pixel,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Pixel/" target="_blank">
      https://pixel</Link>,
    },
    {
      key: '63',
      name: 'Yuri R2 ',
      brand: 'GMK',
      quantity: 'Base 304 Skydate Base 76',
      price: '$120',
      priceInt: 120,
      time: '2020-12-14',
      shipping: 'Nov. 2021',
      progress: <Progress percent={Yuri_R2} />,
      progressInt: Yuri_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Yuri-R2/" target="_blank">
      https://yuri-r2</Link>,
    },
    {
      key: '64',
      name: 'Amethyst',
      brand: 'GMK',
      quantity: 'Base 1561 Dark Base 605',
      price: '$139.99',
      priceInt: 139.99,
      time: '2020-12-13',
      shipping: 'Nov. 2021',
      progress: <Progress percent={Amethyst} />,
      progressInt: Amethyst,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Amethyst/" target="_blank">
      https://amethyst</Link>,
    },
    {
      key: '65',
      name: 'Fundamentals',
      brand: 'GMK',
      quantity: '647',
      price: '$115',
      priceInt: 115,
      time: '2020-12-04',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Fundamentals} />,
      progressInt: 100 + Fundamentals,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Fundamentals/" target="_blank">
      https://fundamentals</Link>,
    },
    {
      key: '66',
      name: 'Pride',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$142.99',
      priceInt: 142.99,
      time: '2020-12-04',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Pride} />,
      progressInt: 100 + Pride,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Pride/" target="_blank">
      https://pride</Link>,
    },
    {
      key: '67',
      name: 'Honor',
      brand: 'GMK',
      quantity: 'Dark 3141 Light 3568',
      price: '$95',
      priceInt: 95,
      time: '2020-11-30',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Honor} />,
      progressInt: 100 + Honor,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Honor/" target="_blank">
      https://honor</Link>,
    },
    {
      key: '68',
      name: 'Hallyu',
      brand: 'GMK',
      quantity: '$2188',
      price: '$129.99',
      priceInt: 129.99,
      time: '2020-12-01',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Hallyu} />,
      progressInt: 100 + Hallyu,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Hallyu/" target="_blank">
      https://hallyu</Link>,
    },
    {
      key: '69',
      name: 'Taegeukgi',
      brand: 'GMK',
      quantity: '503',
      price: '$142.99',
      priceInt: 142.99,
      time: '2020-11-20',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Taegeukgi} />,
      progressInt: 100 + Taegeukgi,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Taegeukgi/" target="_blank">
      https://taegeukgi</Link>,
    },
    {
      key: '70',
      name: 'Red Line',
      brand: 'GMK',
      quantity: '3445',
      price: '$104.99',
      priceInt: 104.99,
      time: '2020-11-13',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Red_Line} />,
      progressInt: 100 + Red_Line,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Red-Line/" target="_blank">
      https://red-line</Link>,
    },
    {
      key: '71',
      name: 'Grand Prix',
      brand: 'GMK',
      quantity: '2000',
      price: '$125',
      priceInt: 125,
      time: '2020-10-30',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Grand_Prix} />,
      progressInt: 100 + Grand_Prix,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Grand-Prix/" target="_blank">
      https://grand-prix</Link>,
    },
    {
      key: '72',
      name: 'Mudbeam',
      brand: 'GMK',
      quantity: '765',
      price: '$135',
      priceInt: 135,
      time: '2020-10-30',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Mudbeam} />,
      progressInt: 100 + Mudbeam,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Mudbeam/" target="_blank">
      https://mudbeam</Link>,
    },
    {
      key: '73',
      name: 'Retrocast',
      brand: 'GMK',
      quantity: '1006',
      price: '$134.99',
      priceInt: 134.99,
      time: '2020-11-06',
      shipping: 'Oct. 2021',
      progress: <Progress percent={Retrocast} />,
      progressInt: Retrocast,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Retrocast/" target="_blank">
      https://retrocast</Link>,
    },
    {
      key: '74',
      name: 'Rainy Day',
      brand: 'GMK',
      quantity: '3124',
      price: '$134.99',
      priceInt: 134.99,
      time: '2020-11-16',
      shipping: 'Oct. 2021',
      progress: <Progress percent={Rainy_Day} />,
      progressInt: Rainy_Day,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Rainy-Day/" target="_blank">
      https://rainy-day</Link>,
    },
    {
      key: '75',
      name: 'Noire',
      brand: 'GMK',
      quantity: '1765',
      price: '$140',
      priceInt: 140,
      time: '2020-11-04',
      shipping: 'Oct. 2021',
      progress: <Progress percent={Noire} />,
      progressInt: Noire,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Noire/" target="_blank">
      https://noire</Link>,
    },
    {
      key: '76',
      name: 'Space Cadet R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2020-10-30',
      shipping: 'Q2 2021',
      progress: <Progress strokeColor="orange" percent={Space_Cadet_R2} />,
      progressInt: 100 + Space_Cadet_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Space-Cadet-R2/" target="_blank">
      https://space-cadet-r2</Link>,
    },
    {
      key: '77',
      name: 'Red Dragon',
      brand: 'GMK',
      quantity: '1372',
      price: '$134.99',
      priceInt: 134.99,
      time: '2020-11-01',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Red_Dragon} />,
      progressInt: 100 + Red_Dragon,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Red-Dragon/" target="_blank">
      https://red-dragon</Link>,
    },
    {
      key: '78',
      name: 'Demon Sword',
      brand: 'GMK',
      quantity: '1112',
      price: '$134.99',
      priceInt: 134.99,
      time: '2020-10-31',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Demon_Sword} />,
      progressInt: 100 + Demon_Sword,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Demon-Sword/" target="_blank">
      https://demon-sword</Link>,
    },
    {
      key: '79',
      name: 'Sloth',
      brand: 'GMK',
      quantity: '1104',
      price: '$125',
      priceInt: 125,
      time: '2020-10-02',
      shipping: 'Aug. 2021',
      progress: <Progress strokeColor="orange" percent={Sloth} />,
      progressInt: 100 + Sloth,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sloth/" target="_blank">
      https://sloth</Link>,
    },
    {
      key: '80',
      name: 'Monokai Material',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$135',
      priceInt: 135,
      time: '2020-10-04',
      shipping: 'Aug. 2021',
      progress: <Progress strokeColor="orange" percent={Monokai_Material} />,
      progressInt: 100 + Monokai_Material,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Monokai-Material/" target="_blank">
      https://monokai-material</Link>,
    },
    {
      key: '81',
      name: 'Shorebound',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$140',
      priceInt: 140,
      time: '2020-10-04',
      shipping: 'Aug. 2021',
      progress: <Progress strokeColor="orange" percent={Shorebound} />,
      progressInt: 100 + Shorebound,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Shorebound/" target="_blank">
      https://shorebound</Link>,
    },
    {
      key: '82',
      name: 'Red Devils',
      brand: 'GMK',
      quantity: '567',
      price: '$135',
      priceInt: 135,
      time: '2020-09-30',
      shipping: 'Q3 2021',
      progress: <Progress strokeColor="orange" percent={Red_Devils} />,
      progressInt: 100 + Red_Devils,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Red-Devils/" target="_blank">
      https://red-devils</Link>,
    },
    {
      key: '83',
      name: 'Yuru',
      brand: 'GMK',
      quantity: 'Latin 673 Hiragana 1072',
      price: '$134.99',
      priceInt: 134.99,
      time: '2020-10-01',
      shipping: 'Aug. 2021',
      progress: <Progress strokeColor="orange" percent={Yuru} />,
      progressInt: 100 + Yuru,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Yuru/" target="_blank">
      https://yuru</Link>,
    },
    {
      key: '84',
      name: 'Posh',
      brand: 'GMK',
      quantity: '760',
      price: '$139.99',
      priceInt: 139.99,
      time: '2020-10-02',
      shipping: 'Aug. 2021',
      progress: <Progress strokeColor="orange" percent={Posh} />,
      progressInt: 100 + Posh,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Posh/" target="_blank">
      https://posh</Link>,
    },
    {
      key: '85',
      name: 'Beta',
      brand: 'GMK',
      quantity: 'Beta 501 JS 1083',
      price: '$138',
      priceInt: 138,
      time: '2020-09-21',
      shipping: 'Q2 2021',
      progress: <Progress strokeColor="orange" percent={Beta} />,
      progressInt: 100 + Beta,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Beta/" target="_blank">
      https://beta</Link>,
    },
    {
      key: '86',
      name: 'Shoko R2',
      brand: 'GMK',
      quantity: '4142',
      price: '$134.99',
      priceInt: 134.99,
      time: '2020-09-15',
      // shipping: 'July 2021',
      shipping: 'Q3 2021',
      updateDate: '2021-07-29',
      progress: <Progress strokeColor="orange" percent={Shoko_R2} />,
      progressInt: 100 + Shoko_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Shoko-R2/" target="_blank">
      https://shoko-r2</Link>,
    },
    {
      key: '87',
      name: 'HammerHead',
      brand: 'GMK',
      quantity: 'Dark 2216 Light 1156',
      price: '$125',
      priceInt: 125,
      time: '2020-07-31',
      shipping: 'Q3 2021',
      progress: <Progress percent={HammerHead} />,
      progressInt: HammerHead,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/HammerHead/" target="_blank">
      https://hammerhead</Link>,
    },
    {
      key: '88',
      name: 'OG Spacekeys R2',
      brand: 'GMK',
      quantity: '1615',
      price: '$25',
      priceInt: 25,
      time: '2020-09-04',
      shipping: 'July 2021',
      progress: <Progress strokeColor="orange" percent={OG_Spacekeys_R2} />,
      progressInt: 100 + OG_Spacekeys_R2,
      updateDate: '2021-07-31',
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/OG-Spacekeys-R2/" target="_blank">
      https://spacekeys-r2</Link>,
    },
    {
      key: '89',
      name: 'Oni',
      brand: 'GMK',
      quantity: '1520',
      price: '$135',
      priceInt: 135,
      time: '2020-09-01',
      shipping: 'Q3 2021',
      // shipping: 'July 2021',
      progress: <Progress strokeColor="orange" percent={Oni} />,
      updateDate: '2021-07-29',
      progressInt: 100 + Oni,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Oni/" target="_blank">
      https://oni</Link>,
    },
    {
      key: '90',
      name: 'Bento R2',
      brand: 'GMK',
      quantity: 'Traditional 5001 Revival 1083',
      price: '$125',
      priceInt: 125,
      time: '2020-08-31',
      shipping: 'Dec. 2021',
      progress: <Progress percent={Bento_R2} />,
      updateDate: '2021-07-29',
      progressInt: Bento_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Bento-R2/" target="_blank">
      https://bento-r2</Link>,
    },
    {
      key: '91',
      name: 'Minimal R2',
      brand: 'GMK',
      quantity: '5043',
      price: '$99.99',
      priceInt: 99.99,
      time: '2020-09-02',
      shipping: 'Jan, 2022',
      progress: <Progress percent={Minimal_R2} />,
      progressInt: Minimal_R2,
      updateDate: '2021-07-02',
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Minimal-R2/" target="_blank">
      https://minimal-r2</Link>,
    },
    {
      key: '92',
      name: 'Dolch_R5',
      brand: 'GMK',
      quantity: '1020',
      price: '$135',
      priceInt: 135,
      time: '2020-09-04',
      updateDate: '2021-07-31',
      shipping: 'July 2021',
      progress: <Progress strokeColor="orange" percent={Dolch_R5} />,
      progressInt: 100 + Dolch_R5,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Dolch-R5/" target="_blank">
      https://dolch-r5</Link>,
    },
    {
      key: '93',
      name: 'Ishtar',
      brand: 'GMK',
      quantity: '1021',
      price: '$144.99',
      priceInt: 144.99,
      time: '2020-08-28',
      shipping: 'Q2 2021',
      progress: <Progress strokeColor="orange" percent={Ishtar} />,
      progressInt: 100 + Ishtar,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Ishtar/" target="_blank">
      https://Ishtar</Link>,
    },
    {
      key: '94',
      name: 'Evil Dolch',
      brand: 'GMK',
      quantity: '1000',
      price: '$129.99',
      priceInt: 129.99,
      time: '2020-08-28',
      shipping: 'Q2 2021',
      progress: <Progress strokeColor="orange" percent={Evil_Dolch} />,
      progressInt: 100 + Evil_Dolch,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Evil-Dolch/" target="_blank">
      https://evil-dolch</Link>,
    },
    {
      key: '95',
      name: 'Pono',
      brand: 'GMK',
      quantity: '2041',
      price: '$124.99',
      priceInt: 124.99,
      time: '2020-08-14',
      shipping: 'Jan, 2022',
      progress: <Progress percent={Pono} />,
      progressInt: Pono,
      updateDate: '2021-07-02',
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Pono/" target="_blank">
      https://pono</Link>,
    },
    {
      key: '96',
      name: 'Sumi',
      brand: 'GMK',
      quantity: '3647',
      price: '$135',
      priceInt: 135,
      time: '2020-08-15',
      shipping: 'Apr. 2021',
      progress: <Progress strokeColor="orange" percent={Sumi} />,
      progressInt: 100 + Sumi,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sumi/" target="_blank">
      https://sumi</Link>,
    },
    {
      key: '97',
      name: 'Prepress',
      brand: 'GMK',
      quantity: '317',
      price: '$149.99',
      priceInt: 149.99,
      time: '2020-08-28',
      shipping: 'Aug. 2021',
      progress: <Progress strokeColor="orange" percent={Prepress} />,
      progressInt: 100 + Prepress,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Prepress/" target="_blank">
      https://prepress</Link>,
    },
    {
      key: '98',
      name: 'Mecha-01',
      brand: 'GMK',
      quantity: '2592',
      price: '$125',
      priceInt: 125,
      time: '2020-08-07',
      shipping: 'Nov. 2021',
      progress: <Progress percent={Mecha_01} />,
      progressInt: Mecha_01,
      updateDate: '2021-07-02',
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Mecha-01/" target="_blank">
      https://mecha-01</Link>,
      // 延期
    },
    {
      key: '99',
      name: 'Nord',
      brand: 'GMK',
      quantity: '1040',
      price: '$125',
      priceInt: 125,
      time: '2020-07-10',
      shipping: 'Q1 2022',
      progress: <Progress percent={Nord} />,
      progressInt: Nord,
      updateDate: '2021-07-08',
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Nord/" target="_blank">
      https://nord</Link>,
      // 延期
    },
    {
      key: '100',
      name: 'Modern Dolch R2',
      brand: 'GMK',
      quantity: 'Standard 7107 Mist 1502',
      price: '$99.99',
      priceInt: 99.99,
      time: '2020-07-02',
      shipping: 'Nov. 2021',
      progress: <Progress percent={Modern_Dolch_R2} />,
      progressInt: Modern_Dolch_R2,
      updateDate: '2021-07-02',
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Modern-Dolch-R2/" target="_blank">
      https://modo2</Link>,
    },
    {
      key: '101',
      name: 'Cyrillic WoB Beige',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-06-01',
      shipping: 'Q2 2022',
      progress: <Progress percent={Cyrillic_WoB_Beige} />,
      progressInt: Cyrillic_WoB_Beige,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Cyrillic-WoB-Beige/" target="_blank">
      https://beige</Link> 
    },
    {
      key: '102',
      name: 'Hazakura',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$135',
      priceInt: 135,
      time: '2021-06-01',
      shipping: 'Q2 2022',
      progress: <Progress percent={Hazakura} />,
      progressInt: Hazakura,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Hazakura/" target="_blank">
      https://hazakura</Link>,
    },
    {
      key: '103',
      name: 'Skyriter',
      brand: 'Signature Plastics',
      quantity: '594',
      price: '$130',
      priceInt: 130,
      time: '2020-08-28',
      shipping: 'Q2 2021',
      progress: <Progress percent={100} />,
      progressInt: 100,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Skyriter/" target="_blank">
      https://skyriter</Link>,
    },
    {
      key: '104',
      name: 'Rocket',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$105',
      priceInt: 105,
      time: '2020-08-26',
      shipping: 'Apr. 2021n',
      progress: <Progress percent={100} />,
      progressInt: 100,
      delayTotalDays: '3 months',
      updateDate: '2021-07-23',
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Rocket/" target="_blank">
      https://rocket</Link>,
    },
    {
      key: '105',
      name: 'Daisy',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '¥823',
      priceInt: 823 / 6.5,
      time: '2020-09-30',
      shipping: 'Q2 2021',
      progress: <Progress percent={Daisy} />,
      progressInt: 100,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Daisy/" target="_blank">
      https://daisy</Link>,
    },
    {
      key: '106',
      name: 'Dual Shot',
      brand: 'Signature Plastics',
      quantity: '1002',
      price: '$125',
      priceInt: 125,
      time: '2020-10-11',
      shipping: 'Q3 2021',
      progress: <Progress percent={Dual_Shot} />,
      progressInt: Dual_Shot,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Dual-Shot/" target="_blank">
      https://dual-shot</Link>,
    },
    {
      key: '107',
      name: 'Jadeite',
      brand: 'Signature Plastics',
      quantity: '507',
      price: '$120',
      priceInt: 120,
      time: '2020-10-16',
      shipping: 'Aug. 2021',
      progress: <Progress strokeColor="orange" percent={Jadeite} />,
      progressInt: 100 + Jadeite,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Jadeite/" target="_blank">
      https://jadeite</Link>,
    },
    {
      key: '108',
      name: 'Bliss R2',
      brand: 'Signature Plastics',
      quantity: 'grey 1193 pink 1109',
      price: '$130',
      priceInt: 130,
      time: '2020-10-15',
      shipping: 'Q4 2021',
      progress: <Progress percent={Bliss_R2} />,
      progressInt: Bliss_R2,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Bliss-R2/" target="_blank">
      https://bliss-r2</Link>,
    },
    {
      key: '109',
      name: 'Nightlight',
      brand: 'Signature Plastics',
      quantity: '436',
      price: '$90',
      priceInt: 90,
      time: '2020-10-30',
      shipping: 'Q3 2021',
      progress: <Progress percent={Nightlight} />,
      progressInt: Nightlight,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Nightlight/" target="_blank">
      https://nightlight</Link>,
    },
    {
      key: '110',
      name: 'Carbon R3',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$130',
      priceInt: 130,
      time: '2020-10-30',
      shipping: '2021-09-17',
      progress: <Progress percent={Carbon_R3} />,
      progressInt: Carbon_R3,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Carbon-R3/" target="_blank">
      https://carbon-r3</Link>,
    },
    {
      key: '111',
      name: 'Biso',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$140',
      priceInt: 140,
      time: '2020-10-31',
      shipping: 'Q2 2021',
      progress: <Progress strokeColor="orange" percent={Biso} />,
      progressInt: 100 + Biso,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Biso/" target="_blank">
      https://biso</Link>,
    },
    {
      key: '112',
      name: 'Angel/Devil Daisy',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '¥1098', 
      priceInt: 1098 / 6.5,
      time: '2020-11-15',
      shipping: 'Q2 2021',
      progress: <Progress percent={Angel_Devil_Daisy} />,
      progressInt: 100,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Angel-Devil-Daisy/" target="_blank">
      https://angel-devil-daisy</Link>,
    },
    {
      key: '113',
      name: 'Silent Assassin',
      brand: 'Signature Plastics',
      quantity: '436',
      price: '¥912',
      priceInt: 912 / 6.5,
      time: '2020-12-23',
      shipping: 'Nov. 2021',
      progress: <Progress percent={Silent_Assassin} />,
      progressInt: Silent_Assassin,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Silent-Assassin/" target="_blank">
      https://silent-assassin</Link>,
    },
    {
      key: '114',
      name: 'Recall',
      brand: 'Signature Plastics',
      quantity: '287',
      price: '$130',
      priceInt: 130,
      time: '2021-01-15',
      shipping: 'Q1 2022',
      progress: <Progress percent={Recall} />,
      progressInt: Recall,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Recall/" target="_blank">
      https://recall</Link>,
    },
    {
      key: '115',
      name: 'Laser R2',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$125',
      priceInt: 125,
      time: '2021-03-02',
      shipping: '2022-04-11',
      progress: <Progress percent={Laser_R2} />,
      progressInt: Laser_R2,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Laser-R2/" target="_blank">
      https://laser-r2</Link>,
    },
    {
      key: '116',
      name: 'Strong Spirit R2',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$130',
      priceInt: 130,
      time: '2021-03-20',
      shipping: 'Q1 2022',
      progress: <Progress percent={Strong_Spirit_R2} />,
      progressInt: Strong_Spirit_R2,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Strong-Spirit-R2/" target="_blank">
      https://strong-spirit-r2</Link>,
    },
    {
      key: '117',
      name: '8010',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$140',
      priceInt: 140,
      time: '2021-04-03',
      shipping: 'Q3 2022',
      progress: <Progress percent={sp_8010} />,
      progressInt: sp_8010,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/8010/" target="_blank">
      https://8010</Link>,
    },
    {
      key: '118',
      name: 'Tatooine',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$250',
      priceInt: 250,
      time: '2021-04-16',
      shipping: 'Q2 2022',
      progress: <Progress percent={Tatooine} />,
      progressInt: Tatooine,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Tatooine/" target="_blank">
      https://tatooine</Link>,
    },
    {
      key: '119',
      name: 'X-mas Gift',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '¥699',
      priceInt: 699/6.5,
      time: '2021-04-11',
      shipping: 'June 2022',
      progress: <Progress percent={X_mas_Gift} />,
      progressInt: X_mas_Gift,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/X-mas-Gift/" target="_blank">
      https://xmas</Link>,
    },
    {
      key: '120',
      name: 'Handarbeit',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$130',
      priceInt: 130,
      time: '2021-05-01',
      shipping: '2022-06-24',
      progress: <Progress percent={sp_Handarbeit} />,
      progressInt: sp_Handarbeit,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Handarbeit/" target="_blank">
      https://handarbeit</Link>,
    },
    {
      key: '121',
      name: 'Prism',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '¥1190',
      priceInt: 1190 / 6.5,
      time: '2021-04-30',
      shipping: 'Q2 2022',
      progress: <Progress percent={Prism} />,
      progressInt: Prism,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Prism/" target="_blank">
      https://prism</Link>,
    },
    {
      key: '122',
      name: 'Espresso',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-05-14',
      shipping: 'June 2022',
      progress: <Progress percent={Espresso} />,
      progressInt: Espresso,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Espresso/" target="_blank">
      https://espresso</Link>,
    },
    {
      key: '123',
      name: 'Ramses',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$140',
      priceInt: 140,
      time: '2021-05-14',
      shipping: 'Q3 2022',
      progress: <Progress percent={Ramses} />,
      progressInt: Ramses,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Ramses/" target="_blank">
      https://ramses</Link>,
    },
    {
      key: '124',
      name: 'Tang',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '¥1380',
      priceInt: 1380 / 6.5,
      time: '2021-05-27',
      shipping: 'Aug. 2022',
      progress: <Progress percent={Tang} />,
      progressInt: Tang,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Tang/" target="_blank">
      https://tang</Link>,
    },
    {
      key: '125',
      name: 'Sparta',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-06-05',
      shipping: 'Mar. 2022',
      progress: <Progress percent={Sparta} />,
      progressInt: Sparta,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sparta/" target="_blank">
      https://sparta</Link> 
    },
    {
      key: '126',
      name: 'Deepwell',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$125',
      priceInt: 125,
      time: '2021-06-04',
      shipping: 'Q2 2022',
      progress: <Progress percent={Deepwell} />,
      progressInt: Deepwell,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Deepwell/" target="_blank">
      https://deepwell</Link> 
    },
    {
      key: '127',
      name: 'Moai',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-06-04',
      shipping: 'Q2 2022',
      progress: <Progress percent={Moai} />,
      progressInt: Moai,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Moai/" target="_blank">
      https://moai</Link> 
    },
    {
      key: '128',
      name: 'Handarbeit R2 & Nachtarbeit',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-06-03',
      shipping: '2022-05-31',
      progress: <Progress percent={Handarbeit_Nachtarbeit} />,
      progressInt: Handarbeit_Nachtarbeit,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Handarbeit-R2-%26-Nachtarbeit/" target="_blank">
      https://handarbeit</Link> 
    },
    {
      key: '129',
      name: 'Dualshot R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$119.99',
      priceInt: 119.99,
      time: '2021-06-04',
      shipping: 'Q2 2022',
      progress: <Progress percent={Dualshot_R2} />,
      progressInt: Dualshot_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Dualshot-R2/" target="_blank">
      https://dualshot-r2/</Link> 
    }, 
    {
      key: '130',
      name: 'Lazurite',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$126',
      priceInt: 126,
      time: '2021-06-05',
      shipping: 'Q2 2022',
      progress: <Progress percent={Lazurite} />,
      progressInt: Lazurite,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Lazurite/" target="_blank">
      https://lazurite</Link> 
    },
    {
      key: '131',
      name: 'Apollo',
      brand: 'GMK',
      quantity: '1313',
      price: '$120',
      priceInt: 120,
      time: '2020-03-25',
      shipping: 'Dec. 2020',
      progress: <Progress percent={100} />,
      progressInt: 100,
      delayTotalDays: "8 months",
      updateDate: "2021-08-20",
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Apollo/" target="_blank">
      https://apollo</Link> 
    }, 
    {
      key: '132',
      name: 'Lunar',
      brand: 'GMK',
      quantity: '380',
      price: '$160',
      priceInt: 160,
      time: '2020-04-03',
      shipping: 'Q4 2021',
      progress: <Progress percent={Lunar} />,
      progressInt: Lunar,
      updateDate: '2021-07-08',
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Lunar/" target="_blank">
      https://lunar</Link> 
      // 延期 Jul 2021 
    },
    {
      key: '133',
      name: 'Wild',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '¥1488',
      priceInt: 1488 / 6.5,
      time: '2020-05-06',
      shipping: 'June 2021完成生产',
      progress: <Progress percent={100} />,
      updateDate: '2021-08-26',
      delayTotalDays: '7 months',
      progressInt: 100,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Wild/" target="_blank">
      https://wild</Link> 
    }, 
    {
      key: '136',
      name: '渔',
      brand: 'MelGeek',
      quantity: <FormattedMessage id="unknown"/>,
      price: '¥599',
      priceInt: 599 / 6.5,
      time: '2021-04-20',
      shipping: '六个月',
      progress: <Progress percent={Yu} />,
      progressInt: Yu,
      detail: <Link href="https://www.zfrontier.com/app/flow/2dA7RZB9aRqE" target="_blank">
      https://yu</Link> 
    },
    {
      key: '137',
      name: 'Salmon',
      brand: 'MelGeek',
      quantity: <FormattedMessage id="unknown"/>,
      price: '¥599',
      priceInt: 599 / 6.5,
      time: '2021-07-05',
      shipping: '六个月',
      progress: <Progress percent={Salmon} />,
      progressInt: Salmon,
      updateDate: '2021-07-06',
      detail: <Link href="https://www.zfrontier.com/app/flow/2Edlpabjz8Qw" target="_blank">
      https://salmon</Link> 
    }, 
    {
      key: '138',
      name: 'Girl Hood 粉蜜',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '¥699',
      priceInt: 699 / 6.5,
      time: '2021-06-10',
      shipping: 'Oct. 2022',
      progress: <Progress percent={Girl_Hood} />,
      progressInt: Girl_Hood,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Girl-Hood/" target="_blank">
      https://girl-hood</Link> 
    },
    {
      key: '139',
      name: 'Spectra',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$142',
      priceInt: 142,
      time: '2021-06-25',
      shipping: 'Q4 2022',
      progress: <Progress percent={Spectra} />,
      progressInt: Spectra,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Spectra/" target="_blank">
      https://spectra</Link> 
    },
    {
      key: '140',
      name: 'Copper',
      brand: 'Signature Plastics',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-06-28',
      shipping: 'Q4 2022',
      progress: <Progress percent={Copper} />,
      progressInt: Copper,
      detail: <Link href="https://matrixzj.github.io/docs/sa-keycaps/Copper/" target="_blank">
      https://copper</Link> 
    },
    {
      key: '141',
      name: 'Beige WoB uwu Add-on',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$36.99',
      priceInt: 36.99,
      time: '2021-06-15',
      shipping: 'Q1 2022',
      progress: <Progress percent={UwU} />,
      progressInt: UwU,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Beige-WoB-uwu-Add-on/" target="_blank">
      https://uwu</Link> 
    },
    {
      key: '142',
      name: 'Patisserie',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$134.99',
      priceInt: 134.99,
      time: '2021-06-13',
      shipping: 'Q2 2022',
      progress: <Progress percent={Patisserie} />,
      progressInt: Patisserie,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Patisserie/" target="_blank">
      https://patisserie</Link> 
    },
    {
      key: '143',
      name: 'Haku',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$129.99',
      priceInt: 129.99,
      time: '2021-06-18',
      shipping: 'Q2 2022',
      progress: <Progress percent={Haku} />,
      progressInt: Haku,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Haku/" target="_blank">
      https://haku</Link> 
    },
    {
      key: '144',
      name: 'Blue Samurai 蓝武士',
      brand: 'GMK',
      quantity: 1058,
      price: '$125',
      priceInt: 125,
      time: '2020-06-30',
      shipping: 'Aug. 2021',
      updateDate: '2021-08-09',
      delayTotalDays: '9 months',
      progress: <Progress percent={100} />,
      progressInt: 100,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Blue-Samurai/" target="_blank">
      https://blue-samurai</Link> 
    },
    {
      key: '145',
      name: 'Red Samurai R2 红武士R2',
      brand: 'GMK',
      quantity: 648,
      price: '$125',
      priceInt: 125,
      time: '2020-06-30',
      shipping: 'Aug. 2021',
      updateDate: '2021-08-09',
      delayTotalDays: '9 months',
      progress: <Progress percent={100} />,
      progressInt: 100,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Red-Samurai-R2/" target="_blank">
      https://red-samurai-r2</Link> 
    },
    {
      key: '146',
      name: 'Deku',
      brand: 'GMK',
      quantity: 1503,
      price: '$120',
      priceInt: 120,
      time: '2020-08-07',
      shipping: 'Aug. 2021',
      updateDate: '2021-07-03',
      progress: <Progress strokeColor="orange" percent={Deku} />,
      progressInt: 100 + Deku,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Deku/" target="_blank"> 
      https://deku</Link> 
    },
    {
      key: '147',
      name: 'Frost Witch',
      brand: 'GMK',
      quantity: 1030,
      price: '$115',
      priceInt: 115,
      time: '2020-05-24',
      updateDate: '2021-09-01',
      delayTotalDays: '6 months',
      shipping: 'Feb. 2021',
      progress: <Progress percent={100} />,
      progressInt: 100,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Frost-Witch/" target="_blank">
      https://frost-witch</Link> 
    },
    {
      key: '148',
      name: 'Dracula 德古拉',
      brand: 'GMK',
      quantity: 3006,
      price: '$130',
      priceInt: 130,
      time: '2019-10-31',
      shipping: 'Aug. 2021',
      progress: <Progress percent={Dracula} />,
      progressInt: 100,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Dracula/" target="_blank">
      https://dracula</Link> 
    },
    {
      key: '149',
      name: 'Moonlight',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$135',
      priceInt: 135,
      time: '2021-06-26',
      shipping: 'Q2 2022',
      progress: <Progress percent={Moonlight} />,
      progressInt: Moonlight,
      updateDate: '2021-07-17',
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Moonlight/" target="_blank">
      https://moonlight/</Link> 
    },
    {
      key: '150',
      name: 'British Racing Green',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$129.99',
      priceInt: 129.99,
      time: '2021-06-30',
      shipping: 'Q2 2022',
      updateDate: '2021-07-17',
      progress: <Progress percent={British_Racing_Green} />,
      progressInt: British_Racing_Green,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/British-Racing-Green/" target="_blank">
      https://British_Racing_Green</Link> 
    },
    {
      key: '151',
      name: 'Lavender',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$110',
      priceInt: 110,
      time: '2021-06-30',
      shipping: 'Q4 2022',
      updateDate: '2021-07-17',
      progress: <Progress percent={Lavender} />,
      progressInt: Lavender,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Lavender/" target="_blank">
      https://lavender</Link> 
    },
    {
      key: '152',
      name: 'Sixes',
      brand: 'GMK',
      quantity: 500,
      price: '$110',
      priceInt: 110,
      time: '2021-06-04',
      shipping: 'Q2 2022',
      updateDate: '2021-06-30',
      progress: <Progress percent={Sixes} />,
      progressInt: Sixes,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sixes/" target="_blank">
      https://sixes</Link> 
    },
    {
      key: '153',
      name: 'Analog Dreams R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$125',
      priceInt: 125,
      time: '2021-06-25',
      shipping: 'Q2 2022',
      updateDate: '2021-07-29',
      progress: <Progress percent={Analog_Dreams_R2} />,
      progressInt: Analog_Dreams_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Analog-Dreams-R2/" target="_blank">
      https://analog_dreams_r2</Link> 
    },
    {
      key: '154',
      name: 'Boho',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$124.99',
      priceInt: 124.99,
      time: '2021-07-09',
      shipping: 'Q3 2022',
      updateDate: '2021-07-29',
      progress: <Progress percent={Boho} />,
      progressInt: Boho,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Boho/" target="_blank">
      https://boho</Link> 
    },
    {
      key: '155',
      name: 'Lime R2',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$120',
      priceInt: 120,
      time: '2021-07-09',
      updateDate: '2021-07-29',
      shipping: '2022-04-29',
      progress: <Progress percent={Lime_R2} />,
      progressInt: Lime_R2,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Lime-R2/" target="_blank">
      https://Lime_R2</Link> 
    },
    {
      key: '156',
      name: 'Symbiote',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$124.99',
      priceInt: 124.99,
      time: '2021-07-09',
      updateDate: '2021-07-29',
      shipping: 'Q3 2022',
      progress: <Progress percent={Symbiote} />,
      progressInt: Symbiote,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Symbiote/" target="_blank">
      https://symbiote</Link> 
    },
    {
      key: '157',
      name: 'Twilight',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$149.99',
      priceInt: 149.99,
      time: '2021-07-16',
      updateDate: '2021-07-29',
      shipping: 'June 2022',
      progress: <Progress percent={Twilight} />,
      progressInt: Twilight,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Twilight/" target="_blank">
      https://twilight</Link> 
    },
    {
      key: '158',
      name: 'Lychee 荔枝',
      brand: 'GMK',
      quantity: <FormattedMessage id="unknown"/>,
      price: '$130',
      priceInt: 130,
      time: '2021-07-17',
      updateDate: '2021-07-29',
      shipping: 'Q3 2022',
      progress: <Progress percent={Lychee} />,
      progressInt: Lychee,
      detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Lychee/" target="_blank">
      https://lychee</Link> 
    },
    // {
    //   key: '125',
    //   name: 'Sparta',
    //   brand: 'GMK',
    //   quantity: <FormattedMessage id="unknown"/>,
    //   price: '$120',
    //   priceInt: 120,
    //   time: '2021-06-04',
    //   shipping: 'Q2 2022',
    //   progress: <Progress percent={Sparta} />,
    //   progressInt: Sparta,
    //   detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sparta/" target="_blank">
    //   https://matrixzj.github.io/docs/gmk-keycaps/Sparta/</Link> 
    // },
    // {
    //   key: '125',
    //   name: 'Sparta',
    //   brand: 'GMK',
    //   quantity: <FormattedMessage id="unknown"/>,
    //   price: '$120',
    //   priceInt: 120,
    //   time: '2021-06-04',
    //   shipping: 'Q2 2022',
    //   progress: <Progress percent={Sparta} />,
    //   progressInt: Sparta,
    //   detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sparta/" target="_blank">
    //   https://matrixzj.github.io/docs/gmk-keycaps/Sparta/</Link> 
    // },
    // {
    //   key: '125',
    //   name: 'Sparta',
    //   brand: 'GMK',
    //   quantity: <FormattedMessage id="unknown"/>,
    //   price: '$120',
    //   priceInt: 120,
    //   time: '2021-06-04',
    //   shipping: 'Q2 2022',
    //   progress: <Progress percent={Sparta} />,
    //   progressInt: Sparta,
    //   detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sparta/" target="_blank">
    //   https://matrixzj.github.io/docs/gmk-keycaps/Sparta/</Link> 
    // },
    // {
    //   key: '125',
    //   name: 'Sparta',
    //   brand: 'GMK',
    //   quantity: <FormattedMessage id="unknown"/>,
    //   price: '$120',
    //   priceInt: 120,
    //   time: '2021-06-04',
    //   shipping: 'Q2 2022',
    //   progress: <Progress percent={Sparta} />,
    //   progressInt: Sparta,
    //   detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sparta/" target="_blank">
    //   https://matrixzj.github.io/docs/gmk-keycaps/Sparta/</Link> 
    // },
    // {
    //   key: '125',
    //   name: 'Sparta',
    //   brand: 'GMK',
    //   quantity: <FormattedMessage id="unknown"/>,
    //   price: '$120',
    //   priceInt: 120,
    //   time: '2021-06-04',
    //   shipping: 'Q2 2022',
    //   progress: <Progress percent={Sparta} />,
    //   progressInt: Sparta,
    //   detail: <Link href="https://matrixzj.github.io/docs/gmk-keycaps/Sparta/" target="_blank">
    //   https://matrixzj.github.io/docs/gmk-keycaps/Sparta/</Link> 
    // },
  ];



  // 'https://matrixzj.github.io/docs/gmk-keycaps/Sparta/'











  

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
            esetddd
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
        // defaultSortOrder: 'descend',
        ...this.getColumnSearchProps('brand'),
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.brand.localeCompare(b.brand)},
        width: '16%',
        responsive: ['sm']
      },
      {
        title: <FormattedMessage id="gbQuantity"/>,
        dataIndex: 'quantity',
        key: 'quantity',
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
            <h2 className="keycapTitle"><FormattedMessage id="kcTitle"/></h2>
            <Table className={'table'} columns={columns} dataSource={data} 
            expandable={{
              expandedRowRender: record => <p style={{ margin: 0 }}>
                <FormattedMessage id="kbBrand"/>： {record.brand}<br/>
                <FormattedMessage id="gbQuantity"/>： {record.quantity}<br/>
                <FormattedMessage id="gbPrice"/>： {record.price}<br/>
                <FormattedMessage id="gbEnd"/>： {record.time}<br/>
                <FormattedMessage id="shipping"/>： {record.shipping}<br/>
                <FormattedMessage id="detail"/>： {record.detail}<br/>
                <FormattedMessage id="update"/>： {record.updateDate}<br/>
                <FormattedMessage id="delayTotal"/>： {record.delayTotalDays}<br/>
                {record.progress} <br/>
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#1890FF"/> <FormattedMessage id="gbProgress"/> &nbsp;
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#FAAD14"/> <FormattedMessage id="gbDelay"/> &nbsp;
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#52C41A"/> <FormattedMessage id="gbShipping"/> &nbsp;
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#FF4D4F"/> <FormattedMessage id="gbFailure"/>
                </p>,
              rowExpandable: record => record.name !== 'Not Expandable',
            }}
            pagination={{ defaultPageSize: 30}} />
        </div>
    )
  }

    
}


// pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}} />