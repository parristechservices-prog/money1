export const featuredItems = [
  {
    title: 'Learning Path',
    description: 'Follow a practical Australian-first education path for personal finance, economics, investing and passive-income realism.',
    href: '/learning',
  },
  {
    title: 'Curriculum',
    description: 'Use a 30-day plan and a longer curriculum to build real money judgement without hype.',
    href: '/curriculum',
  },
  {
    title: 'Resource Library',
    description: 'Browse credible free courses, websites, podcasts and books chosen for the Australian context.',
    href: '/resources',
  },
  {
    title: 'Coach & Quizzes',
    description: 'Test your money judgment and get practical coaching prompts for better decision-making.',
    href: '/coach',
  },
];

export const learningPath = [
  {
    title: 'Phase 1: Stabilise cashflow',
    summary: 'Budget, emergency savings, debt review and basic insurance decisions.',
    details: ['Build a simple household budget', 'Set an emergency buffer', 'Review debts and high-interest accounts'],
  },
  {
    title: 'Phase 2: Australian basics',
    summary: 'Learn income tax, Medicare levy, HELP repayments, super and consumer protection.',
    details: ['Read ATO tax guides', 'Understand super contributions and caps', 'Review scam protection resources'],
  },
  {
    title: 'Phase 3: Economics foundations',
    summary: 'Understand scarcity, incentives, supply and demand, inflation and interest rates.',
    details: ['Learn the economic meaning of risk and opportunity cost', 'Study how interest rate changes affect mortgages and savings'],
  },
  {
    title: 'Phase 4: Investing foundations',
    summary: 'Learn risk/return, diversification, compounding, fees and behaviour.',
    details: ['Choose simple low-cost products', 'Understand tax drag and long-term investing', 'Avoid one-stock bets'],
  },
  {
    title: 'Phase 5: Passive income realism',
    summary: 'Separate true passive income from disguised active work and hype.',
    details: ['Use the reality checklist', 'Explore capital income and semi-passive digital assets', 'Evaluate creator claims carefully'],
  },
];

export const curriculumPlan30 = [
  {
    day: 'Days 1-5',
    focus: 'Cashflow and stability',
    actions: ['Create a budget', 'Build a one-month emergency buffer', 'List debts by interest rate', 'Check loan offset and repayment options'],
  },
  {
    day: 'Days 6-10',
    focus: 'Australian basics',
    actions: ['Read ATO resident tax rates', 'Understand the Medicare levy and HELP repayments', 'Review super contribution limits', 'Browse Scamwatch guidance'],
  },
  {
    day: 'Days 11-15',
    focus: 'Economics fundamentals',
    actions: ['Learn scarcity and opportunity cost', 'Study supply and demand', 'Read about inflation and interest rates', 'Explain how rising rates affect mortgages and savings'],
  },
  {
    day: 'Days 16-20',
    focus: 'Investing foundations',
    actions: ['Learn risk versus return', 'Understand diversification and fees', 'Study compounding and tax drag', 'Pick one low-cost diversified approach to research'],
  },
  {
    day: 'Days 21-25',
    focus: 'Passive income reality',
    actions: ['Compare capital income and semi-passive assets', 'Review the passive income red flags', 'Think through upfront labour versus ongoing support', 'Journal your own money values'],
  },
  {
    day: 'Days 26-30',
    focus: 'Judgement and action',
    actions: ['Review your learning progress', 'Build a small monthly routine', 'Use the influencer filter on one new money creator', 'Plan one realistic next step'],
  },
];

export const curriculumPlan90 = [
  {
    week: 'Weeks 1-4',
    focus: 'Build reliable foundations',
    details: ['Strengthen your budget', 'Finish basic Australian tax and super learning', 'Set up emergency savings and insurance checks'],
  },
  {
    week: 'Weeks 5-8',
    focus: 'Deepen economics and investing',
    details: ['Study incentives and opportunity cost', 'Learn more about diversification and compounding', 'Compare low-cost investing products'],
  },
  {
    week: 'Weeks 9-12',
    focus: 'Test your filters and systems',
    details: ['Evaluate online money advice with scepticism', 'Review your progress dashboard', 'Choose one low-risk improvement to implement'],
  },
];

export const recommendedSources = [
  {
    category: 'Australian foundations',
    items: [
      { title: 'MoneySmart budget and saving tools', url: 'https://moneysmart.gov.au/budgeting/budget-planner' },
      { title: 'ATO tax rates, super and HELP guidance', url: 'https://www.ato.gov.au/rates/' },
      { title: 'Scamwatch consumer protection and scams', url: 'https://www.scamwatch.gov.au/' },
    ],
  },
  {
    category: 'Economics and money thinking',
    items: [
      { title: 'RBA education for inflation and rates', url: 'https://www.rba.gov.au/education/' },
      { title: 'Khan Academy finance and economics', url: 'https://www.khanacademy.org/economics-finance-domain' },
      { title: 'Marginal Revolution University', url: 'https://mru.org/' },
    ],
  },
  {
    category: 'Practical investing',
    items: [
      { title: 'The Plain Bagel investing explanations', url: 'https://www.youtube.com/c/ThePlainBagel' },
      { title: 'Ben Felix evidence-based finance', url: 'https://www.youtube.com/c/BenFelix' },
      { title: 'Equity Mates Australian investing', url: 'https://www.equitymates.com/' },
    ],
  },
  {
    category: 'Passive income learning',
    items: [
      { title: 'Passive Investing Australia', url: 'https://passiveinvestingaustralia.com/' },
      { title: 'Lemon Squeezy creator resources', url: 'https://www.lemonsqueezy.com/' },
      { title: 'Gumroad creator learning', url: 'https://gumroad.com/learn' },
    ],
  },
];

export const resources = [
  ...recommendedSources,
  {
    category: 'Books and further reading',
    items: [
      { title: 'The Barefoot Investor', url: 'https://www.anz.com.au/personal/banking/barefoot-investor/' },
      { title: 'Invested by Phil Town', url: 'https://www.philtown.com/' },
      { title: 'The Psychology of Money', url: 'https://www.penguinrandomhouse.com/books/597155/the-psychology-of-money-by-morgan-housel/' },
    ],
  },
];

export const quizzes = [
  {
    id: 'passive-check',
    question: 'Which of these is the best sign that an income claim may be hype?',
    options: [
      'The creator explains the capital, time and risk involved',
      'The content promises easy monthly income with little effort',
      'The advice links to government or regulator sources',
    ],
    answerIndex: 1,
    feedback: 'Hype often focuses on easy money without showing the work, capital or risk behind the result.',
  },
  {
    id: 'economics-basics',
    question: 'Opportunity cost is best described as:',
    options: [
      'The benefits of a decision once it is made',
      'The next best use of time or money you gave up',
      'The tax payable on a given investment',
    ],
    answerIndex: 1,
    feedback: 'Opportunity cost is the value of the option you did not choose.',
  },
  {
    id: 'investing-safety',
    question: 'For low-risk passive income in Australia, which option is usually most realistic?',
    options: [
      'High-risk crypto trading bots',
      'Broad diversified ETFs and super contributions',
      'Buying a single stock based on a viral recommendation',
    ],
    answerIndex: 1,
    feedback: 'Broad diversification and long-term saving are usually more reliable than high-risk, single-product bets.',
  },
];

export const influencerChecklist = [
  'Does the creator explain trade-offs, risk and effort?',
  'Does the content rely on Australian regulatory or tax context?',
  'Does the advice avoid promising guaranteed returns?',
  'Does it warn about scams, legal risk or platform change?',
  'Is the resource backed by credible public sources?',
];

export const passiveIncomeReality = {
  intro: 'Most reliable passive income comes from capital working for you, past labour packaged into an asset, or a business system that can scale with low ongoing effort. Beware of disguised active income and influencer hype.',
  categories: [
    {
      title: 'True passive capital income',
      items: ['Savings interest', 'Term deposits', 'ETF dividends', 'Super growth', 'Mortgage offset savings'],
      note: 'Needs capital, low ongoing effort, returns scale with money invested.',
    },
    {
      title: 'Semi-passive asset income',
      items: ['Digital products', 'Ebooks', 'Templates', 'Online courses', 'Royalties'],
      note: 'Requires upfront work and distribution. May become semi-passive once the product is live.',
    },
    {
      title: 'Disguised active income',
      items: ['YouTube channels', 'Coaching', 'Consulting', 'Subscription SaaS', 'Local business operations'],
      note: 'Can be profitable, but still requires ongoing labour and support.',
    },
  ],
  redFlags: [
    'Promises easy income with little or no effort',
    'Shows only winners and no failures',
    'Requires payment for the “secret method”',
    'Relies on trading, crypto, or unregulated schemes',
    'Avoids or dismisses government and regulator sources',
  ],
};
