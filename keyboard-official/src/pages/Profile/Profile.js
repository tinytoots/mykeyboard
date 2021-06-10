import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Typography, Divider, Progress, Space } from 'antd';
import './Profile.css'

const { Title, Paragraph, Text, Link } = Typography;

var customerEmail = "mykeyboardforfun@gmail.com";


const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

export default function Profile() {
    return (
        <div className="root">
            <Typography>
                {/* <Title>Introduction</Title> */}
                {/* <Paragraph>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties and
                duplication and reduce the efficiency of development.
                </Paragraph>
                <Paragraph>
                After massive project practice and summaries, Ant Design, a design language for background
                applications, is refined by Ant UED Team, which aims to
                <Text strong>
                    uniform the user interface specs for internal background projects, lower the unnecessary
                    cost of design differences and implementation and liberate the resources of design and
                    front-end development
                </Text>.
                </Paragraph>
                <Title level={2}>Guidelines and Resources</Title>
                <Paragraph>
                We supply a series of design principles, practical patterns and high quality design resources
                (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
                prototypes beautifully and efficiently.
                </Paragraph>

                <Paragraph>
                <ul>
                    <li>
                    <Link href="/docs/spec/proximity">Principles</Link>
                    </li>
                    <li>
                    <Link href="/docs/spec/overview">Patterns</Link>
                    </li>
                    <li>
                    <Link href="/docs/resources">Resource Download</Link>
                    </li>
                </ul>
                </Paragraph>

                <Paragraph>
                Press <Text keyboard>Esc</Text> to exit...
                </Paragraph> */}

                {/* <Divider /> */}
                {/* <h2 className="keycapTitle">键帽团购信息</h2> */}
                <Text type="secondary">手机横置或使用电脑，iPad等大屏设备浏览可对更多内容进行排序或搜索</Text>
                <Title>介绍</Title>
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
                http://www.keyboarddaily.cn/mechaddress.html</Link><br/><br/>
                <Paragraph>Email: mykeyboardforfun@gmail.com</Paragraph>
                <a href={`mailto:${customerEmail}`} >Send me an email and let's get in touch!</a> 
                <Divider />
                <Title level={2}>关于进度</Title>
                <Paragraph>
                一个产品的进度是从截团那一天开始计算的，由于团购的具体发货时间即使是开团的作者本人也很难确定，所以网站中关于团购发货的默认值是优先取官方团购贴中预计发货时间的最晚时间计算。比如预计7月发货则默认为7月的最后一天发货。Q3发货则默认为9月的最后一天发货。预计6月或7月发货则默认为7月最后一天发货。这样计算的原因是想尽可能降低大家对于延期产生的负面情绪。另外，由于很多作者在团购贴中并未注明预计发货时间，所以我只能在不同的vendors里找，而<Text mark>不同的vendors在对同一个团购的截团时间和预计发货时间可能会出现不统一的情况</Text>，所以网站中的信息有可能与你所掌握的有些许出入，但总体来看对进度的影响不算大。(AM HATSU由于特殊的团购模式，键盘进度是从开团日期计算的)
                </Paragraph>
                <Progress className={'point'} percent={19} /> &nbsp;&nbsp;&nbsp; 进度: 当前时间距离截团时间在从截团到预计发货总时间中所占比例 <br/>
                <Progress className={'point'} strokeColor="orange" percent={69} /> &nbsp;&nbsp;&nbsp; 延期: 当前时间距离原计划发货时间在从截团到预计发货总时间中所占比例 <br/>
                <Progress className={'point'} percent={100} /> &nbsp;&nbsp;&nbsp; 发货 <br/>
                <Progress className={'point'} strokeColor="red" percent={100} status="exception"/> &nbsp;&nbsp;&nbsp; 流团 <br/><br/>
                <Title level={2}>关于内容</Title>
                <Paragraph>
                所有的套件和键帽只有截团才会添加并开始追踪进度，键帽部分目前只录入了<Text code>GMK</Text>和<Text code>SP SA</Text>，之后会陆续添加其他品牌键帽。我已经添加了我能找到的所有已截团且尚未发货的GMK和SP SA键帽，如果你发现有所遗漏，请<a href={`mailto:${customerEmail}?subject=数据添加`} >发邮件</a>联系我，我会尽快补充。
                </Paragraph>
                <Paragraph>
                由于表格空间有限，GMK的价格仅显示Base价格，数量为Base数量。SP SA的价格仅为基础TKL的价格，数量为Alpha Kit的销售量。如果你想查看更详细的数据，可以在 <Link href="https://matrixzj.github.io/docs/sa-keycaps" target="_blank">
                https://matrixzj.github.io/docs/sa-keycaps</Link> 找到。
                </Paragraph>
                <Divider />
                <Paragraph>
                希望这个网站能成为你的好帮手，祝大家玩得开心！:)
                </Paragraph>
                <br/><br/><br/><br/>
            </Typography>
        </div>
    )
}
