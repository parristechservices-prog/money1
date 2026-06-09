export const modules = [
  ["foundations","01","Stabilise first","Money foundations","Build a clear cashflow map, buffer and simple system before investing.",["Budgeting","Emergency funds","Debt repayment","Mortgage offset","Insurance"],"List one month of income, essential costs, debts and savings."],
  ["australia","02","Know the rules","The Australian money system","Learn practical tax, HELP, super, consumer law and side-income basics.",["Income tax","Medicare levy","HECS/HELP","Superannuation","CGT","Hobby vs business"],"Bookmark the ATO pages you would check before a material decision."],
  ["economics","03","See the trade-offs","Economics foundations","Use scarcity, incentives, inflation and rates to make the news less mysterious.",["Scarcity","Opportunity cost","Incentives","Inflation","Interest rates","Productivity"],"Write down the opportunity cost of one current commitment."],
  ["investing","04","Principles before products","Investing foundations","Understand risk, diversification, compounding, fees and behaviour without product picks.",["Risk and return","Diversification","Asset allocation","Compounding","Fees","Behaviour"],"Write three rules your future self should follow during a market fall."],
  ["behaviour","05","Protect your judgement","Behaviour and scams","Recognise FOMO, survivorship bias, influencer incentives and scam pressure.",["FOMO","Loss aversion","Lifestyle creep","Survivorship bias","Finfluencers","Scams"],"Run one recent money claim through the claim checker."],
  ["passive","06","Find the hidden work","Passive income realism","Separate capital income, packaged labour, active business and speculation.",["Capital income","Packaged labour","Digital products","Platform risk","Unit economics","Distribution"],"Score one idea for setup, ongoing work, risk and stress."],
  ["vibe","07","Build small, validate early","Vibe-coded income","Learn why tiny digital products may fit a busy life better than subscription software.",["Validation","Digital products","Micro-apps","Low-support design","Distribution","Privacy risk"],"Ask three likely buyers about one specific problem."],
] as const;

export const resources = [
  ["MoneySmart","ASIC","Government","The core Australian hub for budgeting, debt, investing, super and scams.","https://moneysmart.gov.au/","Truth source"],
  ["Budget planner","MoneySmart","Calculator","Map income and expenses before bigger decisions.","https://moneysmart.gov.au/budgeting/budget-planner","Truth source"],
  ["Compound interest calculator","MoneySmart","Calculator","Explore how time and regular saving affect an estimate.","https://moneysmart.gov.au/budgeting/compound-interest-calculator","Truth source"],
  ["How to invest","MoneySmart","Government","Goals, risk, diversification and investing-plan foundations.","https://moneysmart.gov.au/how-to-invest","Truth source"],
  ["Australian resident tax rates","ATO","Government","Current tax-rate information from the authority.","https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents","Truth source"],
  ["RBA Education","Reserve Bank of Australia","Course","Clear explainers on inflation, rates and monetary policy.","https://www.rba.gov.au/education/","Truth source"],
  ["Scamwatch","National Anti-Scam Centre","Government","Recognise, avoid and report scams in Australia.","https://www.scamwatch.gov.au/","Truth source"],
  ["Business or hobby?","business.gov.au","Government","A starting point for side-income obligations.","https://business.gov.au/planning/new-businesses/difference-between-a-business-and-a-hobby","Truth source"],
  ["Personal finance","Khan Academy","Course","Friendly global foundations; pair with Australian sources.","https://www.khanacademy.org/college-careers-more/personal-finance","Supplement"],
  ["Microeconomics","Marginal Revolution University","Course","Short lessons and practice questions on economic fundamentals.","https://mru.org/principles-economics-microeconomics","Supplement"],
  ["The Plain Bagel","Richard Coffin","YouTube","Sober finance explanations; verify Australian rules.","https://www.youtube.com/theplainbagel","Supplement"],
  ["Passive Investing Australia","PIA","Article","Australian-focused investing concepts; verify material decisions.","https://passiveinvestingaustralia.com/","Supplement"],
] as const;

export const incomeOptions = [
  ["Mortgage offset","Cost saving","green","Low","Very low","Simple and low-maintenance if your loan has a genuine offset. Compare rules and fees.","Loan feature checks and opportunity cost."],
  ["High-interest savings","Capital income","green","Low","Very low","Low effort, but rates and conditions change. Returns scale with capital.","Rate chasing, conditions and tax on interest."],
  ["Diversified investing","Capital income","amber","Medium","Low","Can be low-maintenance after learning, but values fluctuate and outcomes are not guaranteed.","Education, tax records and behaviour during falls."],
  ["Digital product","Packaged labour","amber","High","Medium","A realistic small experiment only after validating demand. Distribution is the hard part.","Research, marketing, support, refunds and updates."],
  ["Micro-SaaS","Active business","amber","High","High","Often becomes another job. Keep scope tiny and prove buyers exist first.","Uptime, support, billing, security and churn."],
  ["Rental property","Leveraged asset","amber","High","Medium","Not passive in the simple sense. Requires careful independent advice and stress testing.","Vacancy, repairs, rates, management and financing."],
  ["Trading bot / AI trading app","Speculation","red","High","High","Avoid for now. Complexity does not remove market risk, fees or scam risk.","Monitoring, failures, tax, losses and platform risk."],
  ["Crypto yield","Speculation","red","Medium","Medium","High volatility and counterparty risk. Yield compensates for risks that may be hard to see.","Custody, hacks, tax records and platform failure."],
] as const;

export const quiz = [
  ["What is the strongest first step before comparing investments?",["Choose the highest recent return","Map cashflow, goals and risk","Copy a creator's portfolio"],1,"Goals, time horizon, cashflow and capacity for loss come before products."],
  ["Which best describes most passive income?",["It needs no work or capital","It is guaranteed after setup","It uses capital or past labour packaged into an asset"],2,"The work is done by capital, an owned asset, a system, or earlier labour."],
  ["A creator shows one huge success story. What bias should you check?",["Survivorship bias","Diversification","Compound interest"],0,"Visible winners can hide the much larger group that earned little or lost money."],
  ["For current Australian tax rules, what should be checked first?",["A viral video","The ATO","An overseas podcast"],1,"Tax rules change and the ATO is the Australian authority."],
] as const;
