import {
  ArrowUpRight,
  CalendarDays,
  Check,
  CodeXml,
  Languages,
  Moon,
  Network,
  PackageOpen,
  Sun,
  Trophy,
  Wrench,
} from 'lucide-react';
import { useEffect, useState } from 'react';

type Locale = 'zh' | 'en';
type Theme = 'light' | 'dark';

const charterUrl = 'https://bxup9uklfcb.feishu.cn/wiki/Dx4Bwd6D1i3GfHkajQCcF7SznEd';
const registrationUrl =
  'https://bxup9uklfcb.feishu.cn/share/base/form/shrcnWUMlgpbwHaXgzV7HmNhNhg';

const withBasePath = (path: string) =>
  path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;

const copy = {
  zh: {
    brand: '黑客松',
    heroTitle: '黑客松',
    nav: [
      ['参赛流程', '#process'],
      ['奖励机制', '#awards'],
      ['方向与验收', '#directions'],
      ['赛事组织', '#organization'],
    ],
    eventTag: '2026 · 线上开源赛事',
    titleTop: '用 MoonBit 与 AI，',
    titleBottom: '把真实需求做成开源软件。',
    description:
      '面向所有开发者的线上开源黑客松。使用 MoonBit 与 AI 编程工具，把一个真实需求做成可运行、可测试、可维护的软件项目。',
    primaryAction: '查看参赛方式',
    secondaryAction: '查看赛事章程',
    periodLabel: '本期赛程',
    currentRound: '当前赛期：九月赛',
    period: '9 月第一周 — 9 月 24 日',
    panelTitle: '这不是提示词比赛',
    panelBody:
      '我们更关注工程边界、测试质量、开源合规和可维护性。AI 可以参与开发，但最终成果必须由参赛者理解并负责。',
    qrFloat: {
      eyebrow: '报名与交流群',
      title: '扫码入口',
      description: '支持新项目与已有项目实质新增。',
      pending: '二维码待更新',
      registrationAction: '点击报名',
      groupRequirement: '参赛选手必须加入赛事交流群，否则将影响奖金发放。',
      note: '请以赛事官方发布为准',
      slots: [
        [
          '飞书报名',
          '扫码或点击提交参赛信息',
          '/feishu-registration-qr.png',
          registrationUrl,
        ],
        [
          '赛事群',
          '扫码或点击加入 · 关联奖金发放',
          '/wechat-event-group-qr.png',
          'https://work.weixin.qq.com/gm/5b6b92c8677d0555f3fb6a3f1a081399',
        ],
        [
          '赛事小助手',
          '赛事群无法进入等所有赛事问题，请联系小助手。',
          '/wechat-event-assistant-qr.png',
          'https://u.wechat.com/EA2rUlkjobqjS4EeOCKuKdY',
        ],
      ],
    },
    process: {
      eyebrow: '参赛流程',
      title: '从一个清晰的目标，走到可验收的成果。',
      description: '赛程在线完成。每一步都围绕公开仓库展开，让开发过程和最终质量都可追踪。',
      items: [
        ['01', '报名申报', '报名开放后', '提交参赛信息、公开仓库与一页项目说明。'],
        ['02', '资格审核', '滚动审核', '确认选题、工作范围与参赛信息，通过后进入本期开发。'],
        ['03', '集中开发', '9 月第一周—24 日', '公开持续提交，保留 Issues、PR 与更新记录。'],
        ['04', '项目验收', '9 月 24 日（截止报名）', '提交代码、README、测试与可复现的演示说明。'],
        [
          '05',
          '季度优秀项目评选',
          '每季度统一评选',
          '汇总当季度已通过验收的新项目，以及主动报名季度评选的社区项目。详细逻辑见下方。',
        ],
      ],
      quarterly: {
        eyebrow: '季度评选逻辑',
        title: '两条路径，进入同一个季度评选池。',
        description:
          '季度评选既覆盖当季度完成并通过验收的新项目，也为持续建设 MoonBit 生态的社区项目保留独立报名入口。',
        items: [
          [
            '01',
            '月度新项目',
            '参加当季度月度赛事的新项目，完成开发并通过项目验收后，纳入当季度优秀项目评选范围。',
          ],
          [
            '02',
            '社区维护项目',
            '已参与 MoonBit 生态建设的开发者可主动报名，并继续维护已有社区项目；项目不要求当季新建，也不要求由个人独立完成。',
          ],
          [
            '03',
            '统一评选与奖励',
            '两类项目按季度统一评选。月度启动支持在申报审核通过后发放，完成支持在开发完成并通过本期审核后发放；季度、半年度和年度奖金分别评定，可叠加获得。',
          ],
        ],
        note: '具体评选时间、形式及结果发布安排，以赛事官方通知为准。',
      },
    },
    directions: {
      eyebrow: '比赛方向',
      title: '从基础软件出发，解决一个真实问题。',
      description: '以下方向用于启发选题，不构成限制。原创项目与成熟生态库的 MoonBit 移植均可参与。',
      items: [
        ['工具库', '通用工具库、协议库与可复用的基础组件。'],
        ['数据处理', '数据处理、数据库、分析与内容处理工具。'],
        ['AI 应用', '结合 AI 能力，解决真实需求的开源应用。'],
        ['开发者工具', '解释器、运行时、LSP、CLI 与开发体验工具。'],
      ],
      note: '不确定选题是否合适？优先选择边界清晰、能够在一个月内交付并验证的项目。',
    },
    awards: {
      eyebrow: '奖励机制',
      title: '月度项目支持，多周期奖金可叠加。',
      description: '季度、半年度和年度奖金可叠加获得，单人最高可获约 7.5 万元。奖金分别评定，互不冲突，具体详情以正式章程为准。',
      stackingTitle: '季度、半年度和年度奖金可叠加获得',
      stackingValue: '单人最高可获约 7.5 万元',
      stackingNote: '奖金分别评定，互不冲突，具体详情以正式章程为准。',
      cyclesLabel: '奖励评选周期',
      cycles: [
        ['月度', '月度项目支持', '150 + 350 元', '启动支持 + 完成支持'],
        ['季度', '季度一等奖', '12,000 元', '季度奖金'],
        ['半年度', '半年度一等奖', '24,000 元', '半年度奖金'],
        ['年度', '年度一等奖', '36,000 元', '年度奖金'],
      ],
      monthlyLabel: '月度项目支持',
      monthlyItems: [
        ['150 元', '启动支持', '申报审核通过后发放启动支持'],
        ['350 元', '完成支持', '开发完成并通过本期审核后发放完成支持'],
      ],
      referralLabel: '推荐奖励',
      referralValue: '50 元 / 人',
      referralBody: '每人最多推荐 5 位有效参赛者，具体发放以审核结果为准。',
      referralRulesTitle: '推荐奖励规则',
      referralRules: [
        '推荐人必须是已报名成功的参赛者。',
        '被推荐人提交项目申报时，需在「推荐人」字段准确填写推荐人的 GitHub ID。',
        '被推荐人报名成功并经赛事组审核确认后，按 50 元 / 人计发；每位推荐人最多 5 人，具体发放以审核结果为准。',
      ],
      mvpTitle: 'MoonBit MVP 计划',
      mvpSubtitle: 'Most Valuable Professional',
      mvpEligibility: '晋级季度决赛的选手可获得 MVP 免笔试资格',
      mvpWorkLabel: '工作内容',
      mvpWork: '扩大 MoonBit 技术声量，为 MoonBit 生态贡献代码等。',
      mvpBenefits: [
        ['补贴 2k–5k / 月', '优秀者可提高'],
        ['MoonBit MVP', '荣誉证明'],
        ['可远程', '参与工作'],
      ],
      quarterlyLabel: '季度优秀项目',
      quarterlyPoolLabel: '季度奖金池',
      quarterlyPool: '总计 80000 元',
      quarterly: [
        ['一等奖', '12,000 元', '1–2 名'],
        ['二等奖', '6,000 元', '3–4 名'],
        ['三等奖', '3,000 元', '5 名'],
      ],
      extra: '季度赛事结束后统一发放；获奖项目可获得荣誉证书与实习直通车机会。如无优秀作品，一、二、三等奖名额均可空缺。季度、半年度和年度奖金可叠加获得；具体评选安排以正式章程和官方通知为准。',
    },
    requirements: {
      eyebrow: '验收标准',
      title: '验收看得见，也跑得起来。',
      items: [
        ['MoonBit 为主', '以 MoonBit 作为项目主要实现语言。'],
        ['仓库公开', '保留连续、可追踪的提交与开发记录。'],
        ['能够运行', '提供清晰 README、可运行示例与必要测试。'],
        ['工作有效', '已有项目必须包含本期完成的实质新增工作。'],
        ['开源合规', '使用认可的开源许可证，并说明移植或参考来源。'],
        ['AI 可解释', '可以使用 AI 辅助，但目标、路径与质量必须由参赛者掌握。'],
      ],
      warning: '重复提交、拆分项目或仅做简单修改，不计入验收与奖励。',
    },
    notice: {
      eyebrow: '注意事项',
      title: '报名、开发、验收前先确认这些关键信息。',
      description: '以下为本期黑客松的参赛必读信息，最终执行口径以正式赛事章程和官方通知为准。',
      badge: '参赛必读',
      listTitle: '重要信息清单',
      items: [
        '本期项目验收为 9 月 24 日，同时截止报名；报名需提交参赛信息、公开仓库与一页项目说明。',
        '开发过程需在公开仓库持续提交，并保留 commits、Issues、PR 与更新记录。',
        '验收项目需以 MoonBit 为主要实现语言，并提供清晰 README、可运行示例与必要测试。',
        '原创、移植或已有项目均可参与；已有项目须包含本期实质新增工作，移植项目须说明来源与许可证。',
        '参赛选手必须加入赛事交流群，否则将影响奖金发放。',
        '月度支持为 150 元启动支持与 350 元完成支持；季度、半年度和年度奖金分别评定，可叠加获得，单人最高可获约 7.5 万元。',
      ],
      action: '项目申报',
    },
    organization: {
      eyebrow: '大赛组织',
      title: '组织单位与赛事荣誉评委',
      description: '以下信息用于官网展示，具体组织信息以后续正式章程和官方公告为准。',
      rows: [
        {
          label: '指导单位',
          items: [['河套福保园区党群服务中心', '']],
        },
        {
          label: '主办单位',
          items: [
            ['中国计算机学会', '/organization/org-ccf.png'],
            ['粤港澳大湾区数字经济研究院（IDEA）', '/organization/org-idea.png'],
            ['MoonBit', '/organization/org-moonbit-logo.png'],
          ],
        },
        {
          label: '联合高校',
          items: [
            ['香港科技大学（广州）', '/organization/org-hkustgz.png'],
            ['中山大学软件工程学院', '/organization/org-sysu.png'],
            ['深圳大学电子与信息工程学院', '/organization/org-szu.png'],
          ],
        },
        {
          label: '合作社区',
          items: [
            ['METAx', '/organization/org-metax.jpg'],
            ['百度｜文心大模型｜飞桨', '/organization/org-baidu-ernie-paddle.jpg'],
            ['CSDN', '/organization/org-csdn.png'],
          ],
        },
      ],
      judgesLabel: '大赛荣誉评委',
      judgesNote: '按姓氏笔画排序',
      videoLabel: '荣誉评委寄语视频',
      judges: [
        {
          name: '沈向洋',
          description: '粤港澳大湾区数字经济研究院创院理事长',
          video: 'https://www.moonbitlang.cn/videos/shenxiangyang.mp4',
        },
        {
          name: '赵琛',
          description: '中国科学院软件研究所，所长',
          video: 'https://www.moonbitlang.cn/videos/zhaozhen.mp4',
        },
        {
          name: '倪明选',
          description: 'IEEE 终身会士、香港工程科学院院士、香港科技大学（广州）创校校长',
          video: 'https://www.moonbitlang.cn/videos/nimingxuan.mp4',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: '常见问题',
      items: [
        ['谁可以参加？', '赛事面向所有对 MoonBit、AI 编程、开源生态和基础软件感兴趣的开发者，不限学生或社会人士。'],
        ['可以使用 AI 写代码吗？', '可以。AI 可参与代码生成、接口设计、测试和文档，但参赛者必须能够解释技术选择并对最终质量负责。'],
        ['可以提交已有项目吗？', '可以，但验收只计算本期新增的实质工作；重复、拆分或简单修改不符合要求。'],
        ['项目必须做得很大吗？', '不必。比起堆叠功能，我们更看重清晰边界、可靠测试、完整文档和真实可用性。'],
        ['奖金可以叠加获得吗？', '可以。季度、半年度和年度奖金分别评定，可叠加获得，单人最高可获约 7.5 万元。季度一等奖 12,000 元、半年度一等奖 24,000 元、年度一等奖 36,000 元，具体详情以正式章程为准。'],
        ['报名入口在哪里？', '点击页面中的「点击报名」或扫描飞书报名二维码，提交项目与参赛信息。参赛选手必须加入赛事交流群，否则将影响奖金发放。'],
      ],
    },
    footer: 'MoonBit 黑客松',
    footerNote: '当前页面为正式版 · 赛事信息以正式赛事章程为准',
    switchLanguage: 'Switch to English',
    switchTheme: '切换明暗模式',
  },
  en: {
    brand: 'Hackathon',
    heroTitle: 'Hackathon',
    nav: [
      ['Process', '#process'],
      ['Awards', '#awards'],
      ['Directions & acceptance', '#directions'],
      ['Organization', '#organization'],
    ],
    eventTag: '2026 · ONLINE OPEN SOURCE HACKATHON',
    titleTop: 'Use MoonBit and AI to ',
    titleBottom: 'turn real needs into open-source software.',
    description:
      'An online open-source hackathon for every developer. Use MoonBit and AI programming tools to turn a real need into usable, tested, maintainable software.',
    primaryAction: 'How to participate',
    secondaryAction: 'Event charter',
    periodLabel: 'September round',
    currentRound: 'Current round: September',
    period: 'First week of Sep — Sep 24',
    panelTitle: 'Not a prompting contest',
    panelBody:
      'We care about engineering boundaries, test quality, open-source compliance, and maintainability. AI may help build it, but participants must understand and own the result.',
    qrFloat: {
      eyebrow: 'REGISTRATION & COMMUNITY',
      title: 'Scan to join',
      description: 'New projects and substantial additions to existing projects are welcome.',
      pending: 'QR coming soon',
      registrationAction: 'Register now',
      groupRequirement: 'All participants must join the event group, or prize payment will be affected.',
      note: 'Please follow official event announcements',
      slots: [
        [
          'Feishu registration',
          'Scan or tap to submit your entry',
          '/feishu-registration-qr.png',
          registrationUrl,
        ],
        [
          'Event group',
          'Scan or tap to join · required for prize payment',
          '/wechat-event-group-qr.png',
          'https://work.weixin.qq.com/gm/5b6b92c8677d0555f3fb6a3f1a081399',
        ],
        [
          'Event assistant',
          'For group access issues or any event questions, please contact the event assistant.',
          '/wechat-event-assistant-qr.png',
          'https://u.wechat.com/EA2rUlkjobqjS4EeOCKuKdY',
        ],
      ],
    },
    process: {
      eyebrow: 'PROCESS',
      title: 'From a clear goal to an accepted result.',
      description: 'The hackathon runs online. Every step centers on a public repository so both progress and quality stay traceable.',
      items: [
        ['01', 'Apply', 'When registration opens', 'Submit participant details, a public repo, and a one-page proposal.'],
        ['02', 'Eligibility review', 'Rolling review', 'Confirm the topic, scope, and entry details before development.'],
        ['03', 'Build in public', 'First week—Sep 24', 'Keep commits, Issues, PRs, and updates visible.'],
        ['04', 'Acceptance', 'Sep 24 (registration closes)', 'Submit code, README, tests, and a reproducible demo.'],
        [
          '05',
          'Quarterly selection',
          'One review each quarter',
          'The quarterly pool combines accepted new projects with registered community-maintenance projects. See the logic below.',
        ],
      ],
      quarterly: {
        eyebrow: 'QUARTERLY SELECTION',
        title: 'Two routes into one quarterly selection pool.',
        description:
          'The quarterly selection covers newly accepted projects from monthly rounds and provides a separate entry route for ongoing MoonBit community projects.',
        items: [
          [
            '01',
            'New monthly projects',
            'New projects from the quarter enter the quarterly selection after completing development and passing monthly acceptance.',
          ],
          [
            '02',
            'Community projects',
            'Developers already contributing to the MoonBit ecosystem may register an existing project for continued maintenance. It need not be created during the quarter or completed by one person.',
          ],
          [
            '03',
            'Review and rewards',
            'Both routes are reviewed together each quarter. Monthly kickoff support follows application approval; completion support follows development and acceptance. Quarterly, half-year, and annual prizes are assessed separately and can be combined.',
          ],
        ],
        note: 'The exact review date, format, and result-announcement plan will follow official event notices.',
      },
    },
    directions: {
      eyebrow: 'DIRECTIONS',
      title: 'Start with infrastructure. Solve a real problem.',
      description: 'These directions are prompts, not limits. Both original work and MoonBit ports of mature ecosystem libraries are welcome.',
      items: [
        ['Libraries', 'Utility libraries, protocol libraries, and reusable foundations.'],
        ['Data processing', 'Data processing, databases, analytics, and content tools.'],
        ['AI applications', 'Open-source applications that use AI to solve real needs.'],
        ['Developer tools', 'Interpreters, runtimes, LSPs, CLIs, and developer experience.'],
      ],
      note: 'Unsure about your topic? Prefer a clear scope that can be built and verified within one month.',
    },
    awards: {
      eyebrow: 'AWARDS',
      title: 'Monthly support. Awards across multiple cycles.',
      description: 'Quarterly, half-year, and annual prizes can be combined, with up to approximately RMB 75,000 per person. Awards are assessed separately; see the official charter for details.',
      stackingTitle: 'Quarterly, half-year, and annual prizes can be combined',
      stackingValue: 'Up to approx. RMB 75,000 per person',
      stackingNote: 'Awards are assessed separately. See the official charter for details.',
      cyclesLabel: 'Award cycles',
      cycles: [
        ['Monthly', 'Monthly project support', 'RMB 150 + 350', 'Kickoff + completion support'],
        ['Quarterly', 'Quarterly first prize', 'RMB 12,000', 'Quarterly awards'],
        ['Half-year', 'Half-year first prize', 'RMB 24,000', 'Half-year awards'],
        ['Annual', 'Annual first prize', 'RMB 36,000', 'Annual awards'],
      ],
      monthlyLabel: 'Monthly project support',
      monthlyItems: [
        ['RMB 150', 'Kickoff support', 'Issued after the project application is approved'],
        ['RMB 350', 'Completion support', 'Issued after development is completed and the project passes review'],
      ],
      referralLabel: 'Referral reward',
      referralValue: 'RMB 50 / person',
      referralBody: 'Up to five valid referrals per participant; payment is subject to review.',
      referralRulesTitle: 'Referral reward rules',
      referralRules: [
        'The referrer must already be a successfully registered participant.',
        'When submitting the project application, the referee must accurately enter the referrer’s GitHub ID in the “Referrer” field.',
        'After the referee’s registration is confirmed by the organizers, the reward is RMB 50 per person, with up to five valid referrals per referrer; final payment is subject to review.',
      ],
      mvpTitle: 'MoonBit MVP Program',
      mvpSubtitle: 'Most Valuable Professional',
      mvpEligibility:
        'Participants who advance to the quarterly finals are eligible for the MVP written-test waiver.',
      mvpWorkLabel: 'What you will do',
      mvpWork: 'Grow MoonBit’s technical visibility and contribute code to the MoonBit ecosystem.',
      mvpBenefits: [
        ['RMB 2k–5k / month', 'Higher support for outstanding contributors'],
        ['MoonBit MVP', 'Recognition certificate'],
        ['Remote-friendly', 'Participate from anywhere'],
      ],
      quarterlyLabel: 'Quarterly excellence awards',
      quarterlyPoolLabel: 'Quarterly prize pool',
      quarterlyPool: 'Total RMB 80,000',
      quarterly: [
        ['First prize', 'RMB 12,000', '1–2 projects'],
        ['Second prize', 'RMB 6,000', '3–4 projects'],
        ['Third prize', 'RMB 3,000', '5 projects'],
      ],
      extra: 'Quarterly prizes are issued after the quarter ends. Winners may receive certificates and fast-track internship opportunities. Any prize tier may remain unfilled if no work meets the bar. Quarterly, half-year, and annual prizes can be combined. Review arrangements follow the official charter and announcements.',
    },
    requirements: {
      eyebrow: 'ACCEPTANCE',
      title: 'Visible progress. Reproducible results.',
      items: [
        ['MoonBit first', 'Use MoonBit as the project’s primary implementation language.'],
        ['Public repository', 'Keep continuous, traceable commits and development history.'],
        ['Runnable output', 'Include a clear README, runnable examples, and essential tests.'],
        ['Meaningful work', 'Existing projects must contain substantial new work from this round.'],
        ['Open-source compliance', 'Use a recognized license and disclose ports or referenced sources.'],
        ['Explainable AI use', 'AI is allowed, but participants must own the goals, path, and quality.'],
      ],
      warning: 'Duplicate entries, split projects, or superficial edits do not qualify for acceptance or rewards.',
    },
    notice: {
      eyebrow: 'IMPORTANT NOTES',
      title: 'Confirm these details before applying, building, and submitting.',
      description: 'These are the essentials for this hackathon round. The official charter and organizer announcements remain authoritative.',
      badge: 'MUST READ',
      listTitle: 'Important information',
      items: [
        'Project acceptance is on September 24, when registration also closes. Submit participant details, a public repository, and a one-page proposal.',
        'Build in public with continuous commits, and retain Issues, pull requests, and update records.',
        'MoonBit must be the primary implementation language. Include a clear README, runnable examples, and essential tests.',
        'Original, ported, and existing projects are welcome. Existing projects need substantial new work; ports must disclose their source and license.',
        'All participants must join the event group, or prize payment will be affected.',
        'Monthly support includes RMB 150 for kickoff and RMB 350 for completion. Quarterly, half-year, and annual prizes are assessed separately and can be combined, with up to approximately RMB 75,000 per person.',
      ],
      action: 'Apply now',
    },
    organization: {
      eyebrow: 'ORGANIZATION',
      title: 'Organizers and honorary judges',
      description: 'The following is for website display. Final organization details are subject to the official rules and announcements.',
      rows: [
        {
          label: 'Advising organization',
          items: [['Hetao-Fubao Park Party-Masses Service Center', '']],
        },
        {
          label: 'Hosts',
          items: [
            ['China Computer Federation', '/organization/org-ccf.png'],
            ['IDEA Research', '/organization/org-idea.png'],
            ['MoonBit', '/organization/org-moonbit-logo.png'],
          ],
        },
        {
          label: 'Universities',
          items: [
            ['The Hong Kong University of Science and Technology (Guangzhou)', '/organization/org-hkustgz.png'],
            ['School of Software Engineering, Sun Yat-sen University', '/organization/org-sysu.png'],
            ['College of Electronics and Information Engineering, Shenzhen University', '/organization/org-szu.png'],
          ],
        },
        {
          label: 'Community partners',
          items: [
            ['METAx', '/organization/org-metax.jpg'],
            ['Baidu | ERNIE Bot | PaddlePaddle', '/organization/org-baidu-ernie-paddle.jpg'],
            ['CSDN', '/organization/org-csdn.png'],
          ],
        },
      ],
      judgesLabel: 'Honorary Judges',
      judgesNote: 'Ordered by Chinese surname stroke count',
      videoLabel: 'honorary judge message video',
      judges: [
        {
          name: 'Harry Shum',
          description: 'Founding chairman of the International Digital Economy Academy',
          video: 'https://www.moonbitlang.cn/videos/shenxiangyang.mp4',
        },
        {
          name: 'Zhao Chen',
          description: 'Director of the Institute of Software, Chinese Academy of Sciences',
          video: 'https://www.moonbitlang.cn/videos/zhaozhen.mp4',
        },
        {
          name: 'Lionel Ni',
          description: 'IEEE Life Fellow; Fellow of the Hong Kong Academy of Engineering Sciences; founding president of HKUST(GZ)',
          video: 'https://www.moonbitlang.cn/videos/nimingxuan.mp4',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        ['Who can participate?', 'The hackathon is open to anyone interested in MoonBit, AI programming, open source, and infrastructure software—students and professionals alike.'],
        ['Can I use AI to write code?', 'Yes. AI may help with code, APIs, tests, and docs, but participants must explain technical choices and own the final quality.'],
        ['Can I submit an existing project?', 'Yes, but only substantial work completed during this round counts. Duplicates, split entries, and superficial edits do not qualify.'],
        ['Does the project need to be large?', 'No. Clear scope, reliable tests, complete docs, and real usefulness matter more than feature count.'],
        ['Can prizes be combined?', 'Yes. Quarterly, half-year, and annual prizes are assessed separately and can be combined, with up to approximately RMB 75,000 per person. First prizes are RMB 12,000, RMB 24,000, and RMB 36,000 respectively. See the official charter for details.'],
        ['Where is the registration form?', 'Click Register now or scan the Feishu QR code to submit your project and participant details. All participants must join the event group, or prize payment will be affected.'],
      ],
    },
    footer: 'MoonBit Hackathon',
    footerNote: 'Official event website · Please refer to the official event rules',
    switchLanguage: '切换到中文',
    switchTheme: 'Toggle color theme',
  },
} as const;

function LogoImage() {
  // oxlint-disable-next-line next/no-img-element -- avoids a vinext dev runtime conflict
  return <img src={withBasePath('/moonbit-logo.png')} alt="MoonBit" width="44" height="44" />;
}

function OrganizationLogo({ src, name }: { src: string; name: string }) {
  // oxlint-disable-next-line next/no-img-element -- local event assets are rendered consistently across Vinext targets
  return <img className="organization-logo" src={withBasePath(src)} alt={name} loading="lazy" />;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>('zh');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedLocale = localStorage.getItem('synthesis-locale') === 'en' ? 'en' : 'zh';
    const savedTheme = localStorage.getItem('synthesis-theme') === 'dark' ? 'dark' : 'light';
    const frame = requestAnimationFrame(() => {
      setLocale(savedLocale);
      setTheme(savedTheme);
      document.documentElement.lang = savedLocale === 'zh' ? 'zh-CN' : 'en';
      document.documentElement.dataset.theme = savedTheme;
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleLocale = () => {
    const next = locale === 'zh' ? 'en' : 'zh';
    setLocale(next);
    localStorage.setItem('synthesis-locale', next);
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('synthesis-theme', next);
    document.documentElement.dataset.theme = next;
  };

  const t = copy[locale];
  const isPreview = new URLSearchParams(window.location.search).get('preview') === '1';
  const directionIcons = [CodeXml, Network, PackageOpen, Wrench];

  return (
    <main className="challenge-site site--with-qr" data-locale={locale} data-theme={theme}>
      {isPreview && (
        <div className="preview-notice" role="status">
          {locale === 'zh' ? '预览版 · 奖励规则已按新海报更新，待确认后正式上线' : 'Preview · Updated award rules, awaiting approval for launch'}
        </div>
      )}
      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="brand" href="#top" aria-label={t.brand}>
            <span className="brand-mark">
              <LogoImage />
            </span>
            <span className="brand-copy">
              <strong>MOONBIT</strong>
              <small>{t.brand}</small>
            </span>
          </a>

          <nav aria-label={locale === 'zh' ? '页面导航' : 'Page navigation'}>
            {t.nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              aria-label={t.switchLanguage}
              title={t.switchLanguage}
              onClick={toggleLocale}
            >
              <Languages aria-hidden="true" />
              <span className="control-text">{locale === 'zh' ? 'EN' : '中'}</span>
            </button>
            <button
              type="button"
              aria-label={t.switchTheme}
              title={t.switchTheme}
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="site-shell">
          <div className="hero-banner">
            <div className="hero-banner-copy">
              <div className="hero-partner"><span>MoonBit</span><i aria-hidden="true" /><img src={withBasePath('/csdn-logo.png')} alt="CSDN" /></div>
              <span className="hero-kicker">{t.eventTag}</span>
              <h1>
                <span className="hero-wordmark">MoonBit</span>
                <strong>{t.heroTitle}</strong>
              </h1>
              <div className="hero-current-round">
                <CalendarDays aria-hidden="true" />
                <span>{t.currentRound}</span>
              </div>
              <p className="hero-tagline">
                {t.titleTop}
                <strong>{t.titleBottom}</strong>
              </p>
            </div>
          </div>

          <a className="hero-award-highlight" href="#awards">
            <div><span>{t.awards.stackingTitle}</span><strong>{t.awards.stackingValue}</strong></div>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="hero-cta-row">
            <div className="hero-cta-copy">
              <strong>
                <CalendarDays aria-hidden="true" />
                {t.periodLabel} · {t.period}
              </strong>
              <p>{t.description}</p>
            </div>
            <div className="hero-cta-actions">
              <a className="button primary" href="#process">
                {t.primaryAction}
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="button secondary"
                href={charterUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.secondaryAction}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <aside className="registration-float" aria-label={t.qrFloat.title}>
        <div className="registration-float-head">
          <span>{t.qrFloat.eyebrow}</span>
          <strong>{t.qrFloat.title}</strong>
          <p>{t.qrFloat.description}</p>
        </div>
        <div className="registration-qr-grid">
          {t.qrFloat.slots.map(([label, description, image, href], index) => (
            <article className="registration-qr-item" key={label}>
              {image && href ? (
                <a
                  className="registration-qr-link"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={locale === 'zh' ? `打开${label}` : `Open ${label}`}
                >
                  <img
                    className="registration-qr-image"
                    src={withBasePath(image)}
                    alt={locale === 'zh' ? `${label}二维码` : `${label} QR code`}
                    width="220"
                    height="220"
                  />
                </a>
              ) : (
                <div className="registration-qr-placeholder" aria-label={`${label}：${t.qrFloat.pending}`}>
                  <span>{t.qrFloat.pending}</span>
                </div>
              )}
              <div className="registration-qr-copy">
                <strong>{label}</strong>
                <small>{description}</small>
                {index === 0 && href ? (
                  <a
                    className="registration-action"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.qrFloat.registrationAction}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <p className="registration-float-alert">{t.qrFloat.groupRequirement}</p>
        <p className="registration-float-note">{t.qrFloat.note}</p>
      </aside>

      <section className="content-section process-section" id="process">
        <div className="site-shell">
          <div className="section-head">
            <span className="section-eyebrow">{t.process.eyebrow}</span>
            <h2>{t.process.title}</h2>
            <p>{t.process.description}</p>
          </div>

          <div className="process-table-shell">
            <table className="process-table">
              <caption className="sr-only">{t.process.title}</caption>
              <thead>
                <tr>
                  <th>{locale === 'zh' ? '阶段' : 'Stage'}</th>
                  <th>{locale === 'zh' ? '时间' : 'Timing'}</th>
                  <th>{locale === 'zh' ? '说明' : 'What happens'}</th>
                </tr>
              </thead>
              <tbody>
                {t.process.items.map(([number, title, date, description]) => (
                  <tr key={number}>
                    <td className="process-table-title">
                      <span>{number}</span>
                      <strong>{title}</strong>
                    </td>
                    <td className="process-table-time">{date}</td>
                    <td>{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="quarterly-logic">
            <div className="quarterly-logic-head">
              <span>{t.process.quarterly.eyebrow}</span>
              <div>
                <h3>{t.process.quarterly.title}</h3>
                <p>{t.process.quarterly.description}</p>
              </div>
            </div>
            <div className="quarterly-logic-grid">
              {t.process.quarterly.items.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className="quarterly-logic-note">{t.process.quarterly.note}</p>
          </div>
        </div>
      </section>

      <section className="content-section awards-section" id="awards">
        <div className="site-shell awards-shell">
          <div className="section-head">
            <span className="section-eyebrow">{t.awards.eyebrow}</span>
            <h2>{t.awards.title}</h2>
            <p>{t.awards.description}</p>
          </div>

          <div className="award-cycles" aria-label={t.awards.cyclesLabel}>
            <h3>{t.awards.cyclesLabel}</h3>
            <div className="award-cycle-grid">
              {t.awards.cycles.map(([period, label, value, note]) => (
                <article key={period}>
                  <span className="award-cycle-period">{period}</span>
                  <h4>{label}</h4>
                  <strong>{value}</strong>
                  <p>{note}</p>
                </article>
              ))}
            </div>
            <p className="award-cycle-note">{t.awards.stackingNote}</p>
          </div>
          <div className="awards-grid">
            <article className="monthly-award">
              <div className="award-card-head">
                <span>{t.awards.monthlyLabel}</span>
              </div>
              <div className="monthly-parts">
                {t.awards.monthlyItems.map(([value, label, description]) => (
                  <div key={value}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
              <div className="referral-award">
                <div>
                  <span>{t.awards.referralLabel}</span>
                  <strong>{t.awards.referralValue}</strong>
                </div>
                <p>{t.awards.referralBody}</p>
              </div>
            </article>

            <article className="quarterly-award">
              <div className="award-card-head">
                <span>{t.awards.quarterlyLabel}</span>
                <div className="quarterly-pool">
                  <div>
                    <span>{t.awards.quarterlyPoolLabel}</span>
                    <strong>{t.awards.quarterlyPool}</strong>
                  </div>
                  <Trophy aria-hidden="true" />
                </div>
              </div>
              <div className="quarterly-table">
                {t.awards.quarterly.map(([name, value, slots]) => (
                  <div key={name}>
                    <span>{name}</span>
                    <strong>{value}</strong>
                    <small>{slots}</small>
                  </div>
                ))}
              </div>
              <p className="award-extra">{t.awards.extra}</p>
            </article>
          </div>

          <div className="referral-rules">
            <div className="referral-rules-head">
              <span>{t.awards.referralRulesTitle}</span>
              <strong>{t.awards.referralValue}</strong>
            </div>
            <ul>
              {t.awards.referralRules.map((rule, index) => (
                <li key={rule}>
                  <span>0{index + 1}</span>
                  <p>{rule}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mvp-plan">
            <div className="mvp-plan-head">
              <div>
                <span>{t.awards.mvpSubtitle}</span>
                <h3>{t.awards.mvpTitle}</h3>
              </div>
              <strong>{t.awards.mvpEligibility}</strong>
            </div>
            <div className="mvp-work">
              <span>{t.awards.mvpWorkLabel}</span>
              <p>{t.awards.mvpWork}</p>
            </div>
            <div className="mvp-benefits">
              {t.awards.mvpBenefits.map(([title, description], index) => (
                <div key={title}>
                  <span>0{index + 1}</span>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section directions-requirements-section" id="directions">
        <div className="site-shell">
          <div className="section-head">
            <span className="section-eyebrow">{t.directions.eyebrow}</span>
            <h2>{t.directions.title}</h2>
            <p>{t.directions.description}</p>
          </div>

          <div className="directions-grid">
            {t.directions.items.map(([title, description], index) => {
              const Icon = directionIcons[index];
              return (
                <article key={title}>
                  <div className="direction-topline">
                    <Icon aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="direction-signal" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                </article>
              );
            })}
          </div>
          <p className="directions-note">{t.directions.note}</p>

          <div className="combined-section-divider" aria-hidden="true" />

          <div className="section-head requirements-head" id="requirements">
            <span className="section-eyebrow">{t.requirements.eyebrow}</span>
            <h2>{t.requirements.title}</h2>
          </div>

          <div className="requirements-list">
            {t.requirements.items.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <Check aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
            <p className="requirements-warning">{t.requirements.warning}</p>
          </div>
        </div>
      </section>

      <section className="content-section organization-section" id="organization">
        <div className="site-shell">
          <div className="notice-block">
            <div className="section-head notice-head">
              <span className="section-eyebrow">{t.notice.eyebrow}</span>
              <h2>{t.notice.title}</h2>
              <p>{t.notice.description}</p>
            </div>

            <div className="notice-panel">
              <div className="notice-panel-head">
                <span>{t.notice.badge}</span>
                <h3>{t.notice.listTitle}</h3>
              </div>
              <ul>
                {t.notice.items.map((item, index) => (
                  <li key={item}>
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <a
                className="button button-primary notice-action"
                href={registrationUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.notice.action}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="notice-organization-divider" aria-hidden="true" />

          <div className="section-head">
            <span className="section-eyebrow">{t.organization.eyebrow}</span>
            <h2>{t.organization.title}</h2>
            <p>{t.organization.description}</p>
          </div>

          <div className="organization-panel">
            <div className="organization-list">
              {t.organization.rows.map((row) => (
                <article className="organization-row" key={row.label}>
                  <h3>{row.label}</h3>
                  <div className="organization-logo-wall">
                    {row.items.map(([name, src]) => (
                      <div
                        className={`organization-logo-card${src ? '' : ' organization-logo-card-text'}`}
                        key={name}
                      >
                        {src ? (
                          <OrganizationLogo src={src} name={name} />
                        ) : (
                          <strong>{name}</strong>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="organization-judges">
              <div className="organization-judges-head">
                <h3>{t.organization.judgesLabel}</h3>
                <span>{t.organization.judgesNote}</span>
              </div>
              <div className="judge-grid">
                {t.organization.judges.map((judge) => (
                  <article className="judge-card" key={judge.name}>
                    {/* oxlint-disable-next-line jsx-a11y/media-has-caption -- the legacy event videos do not publish caption tracks */}
                    <video
                      className="judge-video"
                      src={judge.video}
                      controls
                      preload="metadata"
                      playsInline
                      aria-label={`${judge.name} ${t.organization.videoLabel}`}
                    />
                    <div>
                      <strong>{judge.name}</strong>
                      <p>{judge.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section faq-section" id="faq">
        <div className="site-shell">
          <div className="section-head">
            <span className="section-eyebrow">{t.faq.eyebrow}</span>
            <h2>{t.faq.title}</h2>
          </div>

          <div className="faq-list">
            {t.faq.items.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  <span>{question}</span>
                </summary>
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="site-shell footer-inner">
          <div>
            <strong>{t.footer}</strong>
            <p>{isPreview ? (locale === 'zh' ? '预览版 · 待确认后正式上线' : 'Preview · Awaiting approval for launch') : t.footerNote}</p>
          </div>
          <a href="#top">
            TOP
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
