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

                <Title>介绍</Title>
                <Paragraph>
                大家好，我是小恐龙，也是一名机械键盘爱好者。我写这个网站的原因是之前在键盘群里和大家聊天发现目前还没有什么工具可以直观的显示当前键盘团购的进度，所以想了一下决定自己写一个，这样大家也能用，我也能为我们的键盘社区贡献一份自己的力量。这个网站的每一条数据都是我一个个找的，为了尽可能的保证准确性，我会找到对应的官方团购贴进行核对，但即使这样，<Text mark>由于我个人所能投入的精力有限，难免会出现数据不准确的情况，请大家谅解。如果大家发现数据不准确的情况请随时给我<a href={`mailto:${customerEmail}?subject=数据纠正`} >发邮件</a>，我会尽快的修正错误</Text>。同时如果大家对网站有什么建议也欢迎大家<a href={`mailto:${customerEmail}?subject=键盘网站建议`} >发邮件</a>给我，我会尽量改进。
                </Paragraph>
                <Paragraph>
                <Text mark>如果你想要的套件或者键帽没有显示，欢迎<a href={`mailto:${customerEmail}?subject=数据添加`} >发邮件</a>提醒我，我会尽快添加</Text>。请在邮件中标明正确且完整的套件或键帽名称，如果能附带官方团购贴的链接或贴图更好，这样可以帮助我大大节省确认信息的工作量，感谢！
                </Paragraph>
                特别感谢 <Link href="https://matrixzj.github.io/docs/sa-keycaps" target="_blank">
                https://matrixzj.github.io/docs/sa-keycaps</Link> 这个网站的作者，在我统计键帽数据中提供了非常大的帮助，欢迎大家访问。<br/><br/>
                <a href={`mailto:${customerEmail}`} >Send me an email and let's get in touch!</a>
                <Divider />
                <Title level={2}>关于进度</Title>
                <Paragraph>
                一个产品的进度是从截团那一天开始计算的，由于团购的具体发货时间即使是开团的作者本人也很难确定，所以网站中关于团购发货的默认值是优先取官方团购贴中预计发货时间的最晚时间计算。比如预计7月发货则默认为7月的最后一天发货。Q3发货则默认为9月的最后一天发货。预计6月或7月发货则默认为7月最后一天发货。这样计算的原因是想尽可能降低大家对于延期产生的负面情绪。另外，由于很多作者在团购贴中并未注明预计发货时间，所以我只能在不同的vendors里找，而不同的vendors在对同一个团购的预计发货时间可能会出现不统一的情况，所以网站中的信息有可能与你所掌握的有些许出入，但总体来看对进度的影响不算大。
                </Paragraph>
                <Progress className={'point'} percent={61} /> &nbsp;&nbsp;&nbsp; 进度: 当前时间距离截团时间在从截团到发货总时间中所占比例 <br/>
                <Progress className={'point'} strokeColor="orange" percent={31} /> &nbsp;&nbsp;&nbsp; 延期: 当前时间距离原计划发货时间在从截团到发货总时间中所占比例 <br/>
                <Progress className={'point'} percent={100} /> &nbsp;&nbsp;&nbsp; 发货 <br/>
                <Progress className={'point'} strokeColor="red" percent={100} status="exception"/> &nbsp;&nbsp;&nbsp; 流团 <br/><br/>
                <Title level={2}>关于内容</Title>
                <Paragraph>
                所有的套件和键帽只有截团才会添加并开始追踪进度，键帽部分目前只录入了<Text code>GMK</Text>和<Text code>SP SA</Text>，之后会陆续添加其他品牌键帽。我已经添加了我能找到的所有尚未发货的GMK和SP SA键帽，如果你的键帽尚未发货且此网站没有记录，请<a href={`mailto:${customerEmail}?subject=数据添加`} >发邮件</a>联系我，我会尽快补充。
                </Paragraph>
                <Paragraph>
                由于表格空间有限，GMK的价格仅显示Base价格，数量为Base数量。SP SA的价格仅为基础TKL的价格，数量为Alpha kit的销售量。更详细的数据可以在<Link href="https://matrixzj.github.io/docs/sa-keycaps" target="_blank">
                https://matrixzj.github.io/docs/sa-keycaps</Link>找到。
                </Paragraph>
            </Typography>
        </div>
    )
}
