export type Lesson = {
  title: string;
  time: string;
  summary: string;
  sections: { heading: string; body: string; example?: string; caution?: string }[];
  takeaways: string[];
  source: { label: string; url: string };
};

export type ModuleCourse = {
  why: string;
  reflection: string;
  lessons: Lesson[];
  check: { question: string; answers: string[]; correct: number; explanation: string }[];
};

export const courses: Record<string, ModuleCourse> = {
  foundations: {
    why: "A stable base gives you time to think. Without it, every surprise can become expensive debt or a rushed decision.",
    reflection: "Which single financial surprise would create the most stress for your household?",
    lessons: [
      {
        title: "Build a cashflow map", time: "8 min", summary: "A budget is not punishment. It is a map of what your money is already doing.",
        sections: [
          { heading: "Start with reality", body: "Use actual bank transactions from a typical month. Separate income, essential commitments, flexible spending, debt payments and saving. Annual bills should be divided into monthly amounts so they stop being surprises.", example: "A $1,200 annual insurance bill is really a $100 monthly commitment, even when the payment occurs once." },
          { heading: "Use a simple surplus number", body: "Income minus all spending equals your current surplus or shortfall. A surplus creates choices. A shortfall means the first job is stabilisation, not finding an investment.", caution: "Do not build a budget around an unusually cheap month or hoped-for income." },
        ],
        takeaways: ["Use transactions, not memory.", "Turn irregular bills into monthly amounts.", "Find the current surplus before setting goals."],
        source: { label: "MoneySmart Budget Planner", url: "https://moneysmart.gov.au/budgeting/budget-planner" },
      },
      {
        title: "Create a shock absorber", time: "7 min", summary: "An emergency fund protects you from panic borrowing, forced selling and avoidable stress.",
        sections: [
          { heading: "What it is for", body: "Emergency savings are for genuine disruptions such as urgent repairs, reduced work or necessary travel. They are not an investment and do not need to maximise returns. Accessibility and safety matter.", example: "Start with a small milestone, then work toward roughly one month of essential expenses before deciding whether a larger buffer fits your situation." },
          { heading: "Make the rule before the emergency", body: "Write down what counts as an emergency and how the fund will be rebuilt after use. This removes a difficult decision from a stressful moment." },
        ],
        takeaways: ["A buffer buys decision time.", "Begin with a reachable milestone.", "Keep emergency money accessible."],
        source: { label: "MoneySmart Saving", url: "https://moneysmart.gov.au/saving" },
      },
      {
        title: "Understand debt and offsets", time: "9 min", summary: "Interest is a certain cost. Reducing expensive debt can be more powerful than chasing uncertain returns.",
        sections: [
          { heading: "Compare the real cost", body: "List every debt with its balance, interest rate, minimum payment and fees. High-interest consumer debt often deserves attention before investing because avoiding interest is certain while investment returns are not.", example: "A credit-card balance at a high rate can grow quickly even while minimum payments are made." },
          { heading: "Offset is not income", body: "A genuine mortgage offset reduces the loan balance used to calculate interest while keeping cash accessible. It creates an interest saving, not taxable income. Features, fees and redraw rules differ.", caution: "Check your lender's exact offset and redraw rules. Similar-looking loan features can behave differently." },
        ],
        takeaways: ["List rates and fees, not just balances.", "Avoided interest is a certain saving.", "Verify offset and redraw rules."],
        source: { label: "MoneySmart Managing Debt", url: "https://moneysmart.gov.au/managing-debt" },
      },
      {
        title: "Protect the household", time: "7 min", summary: "Insurance, credit reports, wills and beneficiary details are boring systems that matter most when life is not boring.",
        sections: [
          { heading: "Know what already exists", body: "Check insurance held inside super, standalone cover, beneficiaries and major exclusions. The goal here is understanding, not buying more. Estate documents and guardianship choices should be reviewed after major life changes." },
          { heading: "Check your records", body: "Review your credit report before major borrowing and investigate errors. Keep a simple list of important accounts, policies and contact details that a trusted person could locate.", caution: "Insurance and estate decisions can be complex. Use qualified advice for decisions that materially affect your family." },
        ],
        takeaways: ["Inventory existing protection.", "Review after major life changes.", "Make essential records findable."],
        source: { label: "MoneySmart Insurance", url: "https://moneysmart.gov.au/insurance" },
      },
    ],
    check: [
      { question: "What should a useful first budget use?", answers: ["A perfect future month", "Actual transactions from a typical month", "Only large expenses"], correct: 1, explanation: "Actual transactions expose the real pattern and make the plan usable." },
      { question: "What is the primary job of an emergency fund?", answers: ["Maximise returns", "Buy decision time during disruption", "Fund predictable annual bills"], correct: 1, explanation: "A buffer reduces the chance of panic debt or forced decisions." },
      { question: "What does a mortgage offset generally create?", answers: ["Interest savings", "Guaranteed investment income", "A tax deduction"], correct: 0, explanation: "An offset generally reduces interest calculated on the linked loan balance." },
    ],
  },
  australia: {
    why: "Tax, super, debt and consumer rules change the result you actually keep. Current Australian sources outrank old videos and overseas advice.",
    reflection: "Which Australian money rule are you currently relying on hearsay to understand?",
    lessons: [
      {
        title: "Income tax and Medicare", time: "8 min", summary: "Tax is calculated through rules and thresholds that can change. Learn where to verify them rather than memorising old numbers.",
        sections: [
          { heading: "Marginal rates", body: "Australia uses marginal income-tax rates. Moving into a higher bracket does not usually mean all your income is taxed at that higher rate; only the portion within that bracket is.", example: "A pay rise does not normally leave you worse off simply because part of your income enters a higher tax bracket." },
          { heading: "Use current ATO information", body: "The Medicare levy, offsets, deductions and thresholds can depend on circumstances. Use ATO pages or a registered tax agent for material decisions.", caution: "Tax content from previous financial years or other countries may be wrong for you." },
        ],
        takeaways: ["Tax rates are marginal.", "Rules and thresholds change.", "Use the ATO as the truth source."],
        source: { label: "ATO Tax Rates", url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents" },
      },
      {
        title: "HELP and super basics", time: "9 min", summary: "HELP repayments respond to income, while super is a tax-structured retirement system with access restrictions.",
        sections: [
          { heading: "HELP is income-contingent", body: "Compulsory repayments depend on repayment income and current thresholds. Indexation and repayment rules can change, so check the ATO before planning around old figures." },
          { heading: "Super is not just an account", body: "Super typically holds investments, charges fees and may include insurance. Contributions can have different tax treatment and caps. Money is generally preserved until a condition of release is met.", caution: "Extra contributions can affect cash availability and caps. Verify current rules before acting." },
        ],
        takeaways: ["Check current HELP thresholds.", "Review super fees, investment option and insurance.", "Understand access restrictions and contribution caps."],
        source: { label: "ATO Super", url: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families" },
      },
      {
        title: "CGT and record keeping", time: "7 min", summary: "Investment and business decisions create record-keeping obligations long before a tax return is due.",
        sections: [
          { heading: "Capital gains are not simply sale price", body: "Capital gains tax rules consider proceeds, cost base, ownership and eligibility rules. Australian resident individuals may be eligible for a discount in some circumstances, including qualifying holding periods.", caution: "Eligibility and calculations depend on facts. Keep purchase, fee, improvement and sale records and verify with the ATO or a tax professional." },
          { heading: "Keep evidence as you go", body: "Store invoices, platform statements and transaction records when they occur. Reconstructing years of activity later is slow and error-prone." },
        ],
        takeaways: ["Keep records from day one.", "CGT rules depend on circumstances.", "Do not rely on social-media summaries."],
        source: { label: "ATO Capital Gains Tax", url: "https://www.ato.gov.au/individuals-and-families/investments-and-assets/capital-gains-tax" },
      },
      {
        title: "Side income and consumer law", time: "8 min", summary: "Calling something a hobby does not automatically make business, tax or consumer obligations disappear.",
        sections: [
          { heading: "Hobby or business?", body: "The distinction can depend on purpose, repetition, scale and commercial behaviour. It affects tax, records, registrations, insurance and legal responsibilities." },
          { heading: "Selling creates obligations", body: "Digital products and small apps still need truthful claims and functioning products. Refunds, privacy, copyright and financial-advice boundaries can matter.", example: "A small paid template is still a product. Marketing should describe what it does without promising outcomes it cannot guarantee." },
        ],
        takeaways: ["Commercial behaviour matters more than the label.", "Keep claims accurate.", "Avoid regulated advice and unnecessary personal data."],
        source: { label: "business.gov.au: Business or Hobby", url: "https://business.gov.au/planning/new-businesses/difference-between-a-business-and-a-hobby" },
      },
    ],
    check: [
      { question: "What happens when part of income enters a higher tax bracket?", answers: ["All income is taxed at the higher rate", "Usually only that portion is taxed at the higher rate", "Tax stops applying"], correct: 1, explanation: "Australia's personal income-tax rates are marginal." },
      { question: "Why check current ATO pages for HELP and super?", answers: ["Thresholds and caps can change", "Videos are illegal", "Super has no rules"], correct: 0, explanation: "Current thresholds, caps and rules can differ from older summaries." },
      { question: "What is a sensible first record-keeping habit?", answers: ["Reconstruct everything years later", "Keep transaction evidence as it occurs", "Delete receipts after payment"], correct: 1, explanation: "Contemporaneous records are easier and more reliable." },
    ],
  },
  economics: {
    why: "Economics helps you see constraints, incentives and second-order effects in everyday family decisions.",
    reflection: "What scarce resource are you most trying to protect: money, time, energy or attention?",
    lessons: [
      { title: "Scarcity and opportunity cost", time: "8 min", summary: "Every choice uses a limited resource and gives up an alternative.", sections: [{ heading: "Nothing is truly free", body: "Money, time, energy and attention are scarce. Opportunity cost is the best alternative you give up when making a choice.", example: "A side hustle earning $100 may cost a weekend of rest, family time or study. Those are real costs even without a receipt." }, { heading: "Compare complete choices", body: "Good decisions compare the next-best alternatives, including time and stress, rather than looking at one dollar figure in isolation." }], takeaways: ["Name the scarce resource.", "Compare with the next-best alternative.", "Include time and stress."], source: { label: "MRU Microeconomics", url: "https://mru.org/principles-economics-microeconomics" } },
      { title: "Incentives and markets", time: "8 min", summary: "Prices and behaviour respond to rewards, penalties, friction, supply and demand.", sections: [{ heading: "Follow the incentive", body: "Creators optimise thumbnails because attention is rewarded. Platforms change fees because their incentives differ from sellers. Buyers pay when a product solves a painful enough problem." }, { heading: "Supply changes pricing power", body: "When many sellers offer similar products, prices and profits tend to face pressure. Differentiation, trust and distribution become more important.", example: "A generic AI-generated template competes with thousands of similar products; a specific tool for a reachable niche may have more value." }], takeaways: ["Ask what behaviour is rewarded.", "Ask how many substitutes exist.", "Buyer pain matters more than builder excitement."], source: { label: "MRU Supply and Demand", url: "https://mru.org/principles-economics-microeconomics" } },
      { title: "Inflation and interest rates", time: "9 min", summary: "Inflation changes purchasing power; interest rates influence borrowing, saving and spending.", sections: [{ heading: "Purchasing power", body: "Inflation means a dollar buys less over time when prices rise. A nominal return can look positive while producing little or negative growth after inflation and tax." }, { heading: "Rates flow through the economy", body: "Interest-rate changes affect mortgage payments, savings returns, business investment, demand and asset prices. Effects differ across households.", caution: "Rate forecasts are uncertain. Learn the mechanism rather than betting on a prediction." }], takeaways: ["Separate nominal from real outcomes.", "Rates affect borrowers and savers differently.", "Mechanisms are more useful than forecasts."], source: { label: "RBA Education Explainers", url: "https://www.rba.gov.au/education/resources/explainers/" } },
      { title: "Productivity and leverage", time: "7 min", summary: "Long-term income improves when more useful value can be produced per hour, but leverage also magnifies mistakes.", sections: [{ heading: "Useful output matters", body: "Productivity is not simply being busier. It is producing more valuable output with the same resources through skill, tools, systems or better processes." }, { heading: "Leverage has two sides", body: "Debt, software, staff, capital and audiences can multiply output. They can also multiply losses, complexity and obligations.", example: "AI can speed up building an app, but it cannot guarantee demand, accuracy, trust or support capacity." }], takeaways: ["Optimise useful output, not activity.", "Leverage multiplies both strengths and mistakes.", "Demand remains essential."], source: { label: "RBA Education", url: "https://www.rba.gov.au/education/" } },
    ],
    check: [
      { question: "What is opportunity cost?", answers: ["Only the cash price", "The best alternative given up", "A tax deduction"], correct: 1, explanation: "Opportunity cost includes the next-best use of scarce resources." },
      { question: "Why can generic digital products have low pricing power?", answers: ["Supply is often very large", "Digital products cannot sell", "Buyers dislike files"], correct: 0, explanation: "Large supply and easy substitutes put pressure on prices." },
      { question: "What does leverage do?", answers: ["Only reduces risk", "Multiplies output and potential mistakes", "Guarantees demand"], correct: 1, explanation: "Leverage can amplify both positive and negative outcomes." },
    ],
  },
  investing: {
    why: "Investing is accepting uncertainty for a possible future return. A sound process starts with goals and risk, not a ticker symbol.",
    reflection: "Which would bother you more: missing gains or seeing a temporary loss?",
    lessons: [
      { title: "Goals, time and risk", time: "9 min", summary: "The purpose and timing of money determine which risks are tolerable.", sections: [{ heading: "Start with the job", body: "Money needed soon has a different job from retirement money. Time horizon, ability to absorb loss and emotional tolerance all matter." }, { heading: "Return is not free", body: "Higher expected returns generally involve higher uncertainty, volatility or risk of loss. If a return looks unusually high and safe, investigate what is hidden.", caution: "Never confuse recent performance with a guarantee." }], takeaways: ["Define the goal and timeframe.", "Understand capacity for loss.", "Higher return generally means higher risk."], source: { label: "MoneySmart Develop an Investing Plan", url: "https://moneysmart.gov.au/how-to-invest/develop-an-investing-plan" } },
      { title: "Diversification and asset allocation", time: "9 min", summary: "Spread exposure so one company, sector or asset cannot decide the whole outcome.", sections: [{ heading: "Different assets behave differently", body: "Asset allocation is the mix of asset types. Diversification spreads exposure within and across them. It reduces concentration risk but cannot remove all market risk." }, { heading: "Simple can be powerful", body: "Complexity does not automatically improve a portfolio. It can add fees, overlap and behavioural mistakes.", example: "Owning many investments that all depend on the same sector may look diversified while remaining concentrated." }], takeaways: ["Diversify across and within asset classes.", "Check hidden concentration.", "Complexity is not a goal."], source: { label: "MoneySmart Diversification", url: "https://moneysmart.gov.au/how-to-invest/diversification" } },
      { title: "Compounding, fees and tax drag", time: "8 min", summary: "Small repeated effects become large over long periods, including costs.", sections: [{ heading: "Compounding works both ways", body: "Returns can build on prior returns. Fees also repeatedly reduce the base that can compound. Time makes both effects more important." }, { heading: "Focus on what is controllable", body: "Future returns are uncertain. Costs, diversification, saving behaviour and tax awareness are more controllable.", caution: "After-tax outcomes depend on personal circumstances. Use current ATO information or qualified advice." }], takeaways: ["Time magnifies returns and costs.", "Fees are certain; outperformance is not.", "Think in after-fee and after-tax terms."], source: { label: "MoneySmart Compound Interest", url: "https://moneysmart.gov.au/budgeting/compound-interest-calculator" } },
      { title: "Manage the investor, too", time: "7 min", summary: "A reasonable plan can fail when fear, excitement or overconfidence takes control.", sections: [{ heading: "Write rules in calm weather", body: "An investment policy can document goals, timeframe, contribution routine, diversification rules and what you will do during market falls." }, { heading: "Avoid prediction addiction", body: "Constant news and portfolio checking can encourage reactive decisions. A process should not depend on correctly forecasting each market move.", example: "Deciding in advance how often to review reduces the temptation to respond to every headline." }], takeaways: ["Write rules before stress arrives.", "Reduce reactive checking.", "Judge the process, not one outcome."], source: { label: "MoneySmart How to Invest", url: "https://moneysmart.gov.au/how-to-invest" } },
    ],
    check: [
      { question: "What should come before choosing an investment product?", answers: ["Goals, timeframe and risk", "A market prediction", "A creator's portfolio"], correct: 0, explanation: "The product should serve the plan, not define it." },
      { question: "What can diversification reduce?", answers: ["All possibility of loss", "Concentration risk", "All fees"], correct: 1, explanation: "Diversification spreads exposure but cannot remove all market risk." },
      { question: "Why do fees matter strongly over time?", answers: ["They repeatedly reduce money that can compound", "They guarantee returns", "They eliminate tax"], correct: 0, explanation: "Repeated costs reduce the compounding base." },
    ],
  },
  behaviour: {
    why: "Your strongest protection is a checklist used when excited, scared, tired or pressured.",
    reflection: "What type of money claim makes you most likely to act too quickly?",
    lessons: [
      { title: "Know your predictable biases", time: "8 min", summary: "Biases are normal shortcuts, not character flaws. Systems can reduce their cost.", sections: [{ heading: "Common traps", body: "FOMO creates urgency. Loss aversion makes losses feel unusually painful. Overconfidence turns a few wins into imagined skill. Sunk cost keeps bad projects alive." }, { heading: "Use pre-commitments", body: "Cooling-off periods, spending rules, written kill criteria and automatic saving reduce the number of decisions made in a high-emotion state.", example: "Before starting a side project, define the maximum hours and money you will spend before requiring evidence of demand." }], takeaways: ["Expect bias rather than denying it.", "Use cooling-off periods.", "Set kill criteria before starting."], source: { label: "MoneySmart Financial Advice and Scams", url: "https://moneysmart.gov.au/check-and-report-scams" } },
      { title: "See survivorship and authority bias", time: "7 min", summary: "Visible winners and confident presenters can make rare outcomes feel normal.", sections: [{ heading: "Ask for the denominator", body: "A success story says little without knowing how many people tried, failed or stopped. Look for base rates and ordinary outcomes." }, { heading: "Credentials are not incentives", body: "Expertise in one area does not prove expertise in another. Check qualifications, evidence, geography and how the creator earns money.", caution: "Confidence, followers and production quality are not evidence that a claim is correct." }], takeaways: ["Ask how many tried.", "Separate credentials from incentives.", "Check geographic relevance."], source: { label: "MoneySmart Finfluencers", url: "https://moneysmart.gov.au/online-safety/what-is-a-finfluencer" } },
      { title: "Recognise scam pressure", time: "9 min", summary: "Scams use urgency, secrecy, trust and complexity to interrupt careful checking.", sections: [{ heading: "High-risk signals", body: "Stop when you see guaranteed returns, private messages, celebrity endorsements, crypto or AI-trading claims, pressure to act now, or requests to move money in unusual ways." }, { heading: "Break the spell", body: "Pause contact. Independently find the organisation's details. Check licences and warnings. Tell a trusted person. Never use links or phone numbers supplied by the person pressuring you.", caution: "If money or information has already been sent, contact your bank promptly and report the scam." }], takeaways: ["Urgency is a reason to stop.", "Verify through independent channels.", "Report quickly after suspected loss."], source: { label: "Scamwatch Investment Scams", url: "https://www.scamwatch.gov.au/types-of-scams/investment-scams" } },
      { title: "Design a calmer decision process", time: "7 min", summary: "Good decisions are easier when your environment reduces pressure and noise.", sections: [{ heading: "Choose the decision state", body: "Avoid major money decisions late at night, during conflict, under time pressure or while doom-scrolling. Create a short written checklist for material choices." }, { heading: "Use a second pair of eyes", body: "Explain the claim, risks and source to someone who is not emotionally invested. If it cannot be explained plainly, more learning is needed." }], takeaways: ["Choose a calm time.", "Use a repeatable checklist.", "Explain the decision plainly to someone else."], source: { label: "Scamwatch", url: "https://www.scamwatch.gov.au/" } },
    ],
    check: [
      { question: "What is a useful response to FOMO?", answers: ["Act before others", "Wait and independently verify", "Borrow more"], correct: 1, explanation: "A cooling-off period interrupts urgency and creates time to check." },
      { question: "What does survivorship bias hide?", answers: ["Visible winners", "People who failed or earned little", "Current tax rates"], correct: 1, explanation: "The visible sample often excludes unsuccessful attempts." },
      { question: "Which is a strong scam warning?", answers: ["Time to independently verify", "Guaranteed returns and urgency", "Clear risk disclosure"], correct: 1, explanation: "Guarantees and pressure are classic warning signs." },
    ],
  },
  passive: {
    why: "The word passive often hides capital, earlier labour, ongoing operations, risk or all four.",
    reflection: "Would an income idea still appeal if every revenue screenshot disappeared?",
    lessons: [
      { title: "Classify the income honestly", time: "8 min", summary: "Start by identifying what asset or system produces value and who pays.", sections: [{ heading: "Four useful categories", body: "Capital income comes from owned capital. Packaged labour sells prior work repeatedly. Business systems require operations and management. Speculation depends heavily on uncertain price movement." }, { heading: "Use the clean filter", body: "Ask: who pays, why do they pay, what asset creates value, what capital is required, and what ongoing work is hidden?", example: "Mortgage offset savings are economically useful but are cost savings, not income." }], takeaways: ["Name the category.", "Identify payer and value.", "Find the hidden work."], source: { label: "MoneySmart Passive Income Starting Point", url: "https://moneysmart.gov.au/" } },
      { title: "Find hidden labour and platform risk", time: "8 min", summary: "Setup, distribution, support and rule changes often determine whether an idea fits your life.", sections: [{ heading: "Labour does not vanish", body: "Digital products still need research, creation, marketing, refunds, customer questions and updates. Content businesses need repeated output and audience maintenance." }, { heading: "Platforms are rented land", body: "Marketplaces, search engines, social networks and app stores can change fees, ranking and access. A business dependent on one platform carries platform risk." }], takeaways: ["Count setup and ongoing hours.", "Include customer support.", "Identify platform dependence."], source: { label: "business.gov.au Planning", url: "https://business.gov.au/planning" } },
      { title: "Understand unit economics", time: "9 min", summary: "Revenue is not profit, and profit is not automatically worth the time and risk.", sections: [{ heading: "Calculate one sale", body: "Start with price, then subtract payment fees, platform fees, refunds, advertising, fulfilment, support time, software and expected tax obligations." }, { heading: "Distribution is part of the product", body: "A useful product with no path to buyers earns nothing. Validate reach and willingness to pay before polishing.", example: "A $9 digital product with high marketplace fees and support questions may create little return per hour." }], takeaways: ["Calculate contribution per sale.", "Price time and support.", "Prove a path to buyers."], source: { label: "business.gov.au Pricing", url: "https://business.gov.au/products-and-services/develop-a-pricing-strategy" } },
      { title: "Match the idea to your constraints", time: "7 min", summary: "The best idea is not the highest theoretical return; it is one that survives your real life.", sections: [{ heading: "Use a constraint scorecard", body: "Score startup time, capital, ongoing hours, stress, legal risk, downside, support and realistic first-year outcome." }, { heading: "Boring often wins", body: "Reviewing debt costs, savings rates, automation and existing systems may deliver more reliable value per hour than starting a business.", caution: "Avoid day trading, AI trading bots, guaranteed-income systems and ideas requiring constant support when time is the core constraint." }], takeaways: ["Optimise for fit, not excitement.", "Compare downside and stress.", "Boring systems can have high return on time."], source: { label: "MoneySmart", url: "https://moneysmart.gov.au/" } },
    ],
    check: [
      { question: "What is packaged labour?", answers: ["Past work sold repeatedly", "Money in a bank", "A guaranteed return"], correct: 0, explanation: "Examples include templates, books and software created first and sold later." },
      { question: "What does unit economics examine?", answers: ["Only total revenue", "The economics of each sale after costs", "Social-media followers"], correct: 1, explanation: "Per-sale economics expose fees, fulfilment, support and other costs." },
      { question: "Why is distribution essential?", answers: ["Buyers must be able to discover the product", "It removes all support", "It guarantees profit"], correct: 0, explanation: "A good product without reachable buyers still earns nothing." },
    ],
  },
  vibe: {
    why: "AI lowers the cost of building. It does not remove the need for demand, judgement, quality assurance or support.",
    reflection: "Are you more interested in solving a buyer problem, or in the excitement of building?",
    lessons: [
      { title: "Choose a small painful problem", time: "8 min", summary: "Narrow products are easier to explain, validate, build and support.", sections: [{ heading: "Pain before features", body: "A buyer pays for a useful outcome, not the number of features. Start with one reachable group and one recurring problem they already recognise." }, { heading: "Apply the parent-life filter", body: "Prefer ideas with a short MVP, low support, low legal risk, simple pricing and a realistic path to buyers.", example: "A focused printable-plus-helper can be easier to maintain than a subscription platform with accounts and billing." }], takeaways: ["One buyer, one problem, one outcome.", "Prefer low-support scope.", "Choose a reachable audience."], source: { label: "business.gov.au Market Research", url: "https://business.gov.au/marketing-and-advertising/do-market-research" } },
      { title: "Validate before building", time: "8 min", summary: "Compliments are weak evidence. Behaviour and payment intent are stronger.",
        sections: [{ heading: "Test the risky assumption", body: "The riskiest assumption is usually that a buyer cares enough to act. Show a simple description or mock-up and ask for a concrete next step such as a pre-order, signup or interview." }, { heading: "Set a stopping rule", body: "Cap the first test by hours and money. Decide in advance what evidence is needed to continue.", caution: "Do not interpret polite encouragement as demand." }], takeaways: ["Test demand first.", "Ask for action, not praise.", "Set a time and money cap."], source: { label: "business.gov.au Business Planning", url: "https://business.gov.au/planning/business-plans" } },
      { title: "Design for low support", time: "8 min", summary: "Every account, integration and promise creates a future maintenance obligation.", sections: [{ heading: "Reduce moving parts", body: "Static products, local processing and one-time purchases can reduce uptime, billing, privacy and support burden. Add complexity only when buyers prove it matters." }, { heading: "Make boundaries clear", body: "Explain what the product does, what it does not do, supported devices, refund terms and how to get help. Clear expectations prevent avoidable support.", example: "A no-login tool that stores no personal data has fewer privacy and account-recovery problems." }], takeaways: ["Every feature has a maintenance cost.", "Avoid unnecessary personal data.", "Set clear product expectations."], source: { label: "OAIC Privacy for Small Business", url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business" } },
      { title: "Ship, measure and stop intelligently", time: "8 min", summary: "A small launch is a learning experiment, not proof of a future empire.", sections: [{ heading: "Measure useful signals", body: "Track visits, conversations, signups, purchases, refunds, support time and repeat use. Revenue alone can hide excessive labour." }, { heading: "Use kill and continue criteria", body: "Continue when evidence improves and the work still fits your constraints. Stop, simplify or reposition when buyers do not act or support burden grows.", caution: "Vibe coding can make it easy to keep adding features instead of confronting weak demand." }], takeaways: ["Measure buyer behaviour.", "Track support time.", "Stop or simplify when evidence is weak."], source: { label: "business.gov.au Digital Tools", url: "https://business.gov.au/online-and-digital" } },
    ],
    check: [
      { question: "What does AI development reduce most directly?", answers: ["Build effort", "Need for demand", "Legal obligations"], correct: 0, explanation: "AI can lower build effort but does not create buyers or remove obligations." },
      { question: "What is stronger evidence than compliments?", answers: ["A concrete buyer action", "More features", "A prettier logo"], correct: 0, explanation: "Payment, signup or another meaningful action demonstrates real interest." },
      { question: "What generally reduces support burden?", answers: ["More integrations", "Fewer moving parts and clear boundaries", "Storing more personal data"], correct: 1, explanation: "Simple products create fewer failure and support paths." },
    ],
  },
};
