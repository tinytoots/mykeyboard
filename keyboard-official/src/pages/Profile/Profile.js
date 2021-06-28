import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Typography, Divider, Progress, Space } from 'antd';
import './Profile.css'
import { FormattedMessage } from 'react-intl';             


const { Title, Paragraph, Text, Link } = Typography;

var customerEmail = "mykeyboardforfun@gmail.com";


const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

export default function Profile() {
    return (
        <div className="root">
            <Typography>
                <Text type="secondary"><FormattedMessage id="hint"/></Text>
                <Title><FormattedMessage id="intro"/></Title>
                <Paragraph>
                大家好，我叫小恐龙，是一名机械键盘玩家。平时在键盘群里和大家聊天发现，目前还没有工具可以直观的显示当前键盘团购的进度，所以决定自己写一个，这样大家正好能一起用，也算为我们的键盘社区贡献一点自己的力量。这个网站的每一条数据都是我逐个查询添加的，为了尽可能保证数据准确性，我会找到对应的官方团购贴进行核对，但即使这样，<Text mark>由于我个人所能投入的精力有限，难免会出现数据不准确的情况，请大家谅解。如果大家发现以上问题欢迎随时给我<a href={`mailto:${customerEmail}?subject=数据纠正`} >发邮件</a>，我会尽快更新</Text>。同时如果大家对网站有什么建议或者有趣的功能也欢迎<a href={`mailto:${customerEmail}?subject=键盘网站建议`} >发邮件</a>联系我。后续我会根据大家的需求逐步开发迭代，希望这个网站能成为我们玩家群体共同的客制化网站！
                </Paragraph> 
                <Paragraph>
                <Text st>如果你想要查询的套件或者键帽在网站中没有显示，欢迎<a href={`mailto:${customerEmail}?subject=数据添加`} >发邮件</a>告知我，我会尽快添加</Text>。请在邮件中标明正确且完整的套件或键帽名称，如果能附带官方团购贴的链接或截图更好，这样可以帮助我大大节省确认信息的工作量，感谢！
                </Paragraph>
                <Paragraph>
                关于网站域名，俗话说买的早不如买的巧，在买之前我并不知道有mykeyboard.eu这个网站，直到往网站里录数据时才发现这个vendor。。。由于域名和云服务均为自费，所以暂时就不更换了(主要是头脑一热域名一口气买了10年...)。如果mykeyboard.eu的所有者有所介意的话可以发邮件联系我，谢谢理解！
                </Paragraph>
                特别感谢 <Link href="https://matrixzj.github.io/docs/sa-keycaps" target="_blank">
                https://matrixzj.github.io/docs/sa-keycaps</Link> 这个网站的作者狗子哥，在我统计键帽数据中提供了非常大的帮助，欢迎大家访问！<br/><br/>感谢KeyboardDaily的作者 @苍云暮雪 将我的网站纳入客制化网站大全，苍老师的网站几乎囊括了你可能需要的所有客制化网站信息资源。他的网站在这里 <Link href="http://www.keyboarddaily.cn/mechaddress.html" target="_blank">
                http://www.keyboarddaily.cn/mechaddress.html</Link><br/><br/> 感谢 <Link href="https://www.zfrontier.com/app/user/3dZ8eEZZPdeM" target="_blank">
                @Xikii</Link> 为此网站提出很多宝贵的建议。<br/><br/>   

                <Paragraph>
                Hello everyone, my name is Chen. I am a mechanical keyboard enthusiast. I found that there is no convenient tool to visually display the progress of the keyboard group-buying, so I decided to build one so that we can all use it together. I hope to contribute a little to our keyboard community. Every piece of data on this site is searched and added by me one by one. In order to ensure the accuracy of the data as much as possible, I will find the corresponding official group-buying post to double check. But even so, <Text mark>due to the limited time and energy I can personally devote, inevitably there will be inaccurate data, please understanding.  If you find any of the above problems, please feel free to <a href={`mailto:${customerEmail}?subject=Data correction`} >send me an email</a> and I will update it as soon as possible</Text>. Also, if you have any suggestions or interesting features for this website, please feel free to <a href={`mailto:${customerEmail}?subject=Keyboard website suggestions`} >contact me by email</a>. I will develop it step by step according to your needs if these features can help more people, and I hope this website will become our customized website!
                </Paragraph>   
                <Paragraph>
                If the keyboard or keycap you want to search is not displayed on the website, please <a href={`mailto:${customerEmail}?subject=Data add`} >send an email</a> to let me know, and I will add it as soon as possible. Please indicate the correct and complete name of the keybaord or keycap in the email. It would be better if you can attach the link or screenshot of the official group-buying post. This can help me greatly save the workload of confirming the information, thanks!
                </Paragraph>
                <Paragraph>
                Special thanks: @狗子哥, @苍云暮雪 and @Xikii.
                </Paragraph>

                {/* <Paragraph>Email: mykeyboardforfun@gmail.com</Paragraph> */}
                <a href={`mailto:${customerEmail}`} >Send me an email and let's get in touch!</a> 
                <Divider />
                <Title level={2}><FormattedMessage id="aboutProgress"/></Title>
                <Paragraph>
                一个产品的进度是从截团那一天开始计算的，由于团购的具体发货时间即使是开团的作者本人也很难确定，所以网站中关于团购发货的默认值是优先取官方团购贴中预计发货时间的最晚时间计算。比如预计7月发货则默认为7月的最后一天发货。Q3发货则默认为9月的最后一天发货。预计6月或7月发货则默认为7月最后一天发货。这样计算的原因是想尽可能降低大家对于延期产生的负面情绪。另外，由于很多作者在团购贴中并未注明预计发货时间，所以我只能在不同的vendors里找，而<Text mark>不同的vendors在对同一个团购的截团时间和预计发货时间可能会出现不统一的情况</Text>，所以网站中的信息有可能与你所掌握的有些许出入，但总体来看对进度的影响不算大。<Text mark>当团购进度到达100%但没发货时，如果官方更新了延期进度，则进度条会进行相应更新，如果官方没有宣布延期进度，则进度条会从蓝色变为橙色，计算延期进度</Text>(AM HATSU由于特殊的团购模式，键盘进度是从开团日期计算的)
                </Paragraph>
                <Paragraph>
                The progress of a product is calculated from the day the GB ended. As the specific shipping time of the GB is difficult to determine even for the author, so the default value of the shipping time on the website is calculated by taking the latest time of the expected shipping time in the official GB post.  For example, if the expected shipping date is in July, the default value is the last day of July, and if the expected shipping time is in Q3, the default value is the last day of September. If the shipping time is in June or July, the default value is the last day of July. The reason for this calculation method is to minimize the negative emotions about the delay. In addition, because many authors in the GB post did not specify the estimated shipping time, so I can only find it in different vendors. But <Text mark>the GB end-time and estimated shipping time may inconsistent in different vendors in the same group-buying</Text>, so the information on the website may be slightly different from what you know. But in general, the impact on the progress is not significant. <Text mark>When the progress reaches 100% but not shipped, the progress bar will be updated accordingly if the official postponement progress is updated, and if not announced, the progress bar will change from blue to orange to calculate the postponement progress</Text> (Due to the special GB model, the keyboard progress of AM HATSU is calculated from the start date)
                </Paragraph>
                <Progress className={'point'} percent={19} /> &nbsp;&nbsp;&nbsp; 进度: 当前时间距离截团时间在从截团到预计发货总时间中所占比例。比如从截团到发货一共需要十天，今天是截团后的第二天，那么在今天结束后，进度为20%。(由于服务器原因，一天的结束以美国东部时间为准) Progress: The percentage of the total number of days from the end of the GB to today in the total number of days from the end of the GB to the expected shipping day.  For example, if it takes ten days from the GB ended to shipping, and today is the second day after the GB ended, then at the end of today, the progress is 20%. (EST)<br/>
                <Progress className={'point'} strokeColor="orange" percent={69} /> &nbsp;&nbsp;&nbsp; 延期: 当前时间距离原计划发货时间在从截团到预计发货总时间中所占比例 Delay: The percentage of the total days from the originally planned shipping date to today in the total days from the GB ended to the expected shipping date<br/>
                <Progress className={'point'} percent={100} /> &nbsp;&nbsp;&nbsp; 发货 Shipping <br/>
                <Progress className={'point'} strokeColor="red" percent={100} status="exception"/> &nbsp;&nbsp;&nbsp; 流团 The MOQ is not reached<br/><br/>
               
                <Title level={2}><FormattedMessage id="aboutPrice"/></Title>
                <Paragraph>
                价格排序中美元兑换人民币的比例均为1 : 6.5
                </Paragraph>
                <Paragraph>
                In the price ranking, the ratio of U.S. dollar to RMB is 1: 6.5
                </Paragraph>
                <Divider />
                <Paragraph>
                <FormattedMessage id="havefun"/>
                </Paragraph>
                <br/><br/><br/><br/>
            </Typography>
        </div>
    )
}
