import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, BookOpen, Calculator, Check, ChevronRight, CircleDollarSign, Clock3, ExternalLink, GraduationCap, LayoutDashboard, Lightbulb, Menu, MessageCircle, Search, ShieldCheck, Sparkles, Target, TrendingUp, X } from "lucide-react";
import { incomeOptions, modules, quiz, resources } from "./data";
import { courses } from "./lessons";
import "./index.css";

type Page="home"|"learn"|"resources"|"reality"|"tools"|"quiz"|"coach";
const nav=[["home","Overview",LayoutDashboard],["learn","Learning path",GraduationCap],["resources","Library",BookOpen],["reality","Reality check",ShieldCheck],["tools","Tools",Calculator],["quiz","Knowledge check",Target],["coach","Money coach",MessageCircle]] as const;
const Disclaimer=()=> <div className="disclaimer"><ShieldCheck size={17}/><span><b>Education only.</b> MoneyMap AU is not financial, tax, legal or investment advice. Check authoritative Australian sources before acting.</span></div>;
const Progress=({value}:{value:number})=><div className="progress"><span style={{width:`${value}%`}}/></div>;

export default function App(){
 const [page,setPage]=useState<Page>("home"),[menu,setMenu]=useState(false);
 const [done,setDone]=useState<string[]>(()=>JSON.parse(localStorage.getItem("progress")||"[]"));
 useEffect(()=>localStorage.setItem("progress",JSON.stringify(done)),[done]);
 const go=(p:Page)=>{setPage(p);setMenu(false);scrollTo({top:0,behavior:"smooth"})};
 const pct=Math.round(done.length/modules.length*100);
 return <div className="shell"><aside className={menu?"open":""}>
  <button className="brand" onClick={()=>go("home")}><span><CircleDollarSign/></span><strong>MoneyMap <b>AU</b><small>Learn money. Lose the hype.</small></strong></button>
  <nav>{nav.map(([id,label,Icon])=><button className={page===id?"active":""} onClick={()=>go(id)} key={id}><Icon size={18}/>{label}<ChevronRight size={14}/></button>)}</nav>
  <div className="sideProgress"><div><span>Your progress</span><b>{pct}%</b></div><Progress value={pct}/><small>{done.length} of 7 modules complete</small></div>
  <div className="truth"><BadgeCheck/><span><b>Truth layer</b><small>MoneySmart · ATO · RBA · Scamwatch</small></span></div>
 </aside><main><header><button className="mobile" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button><strong>{nav.find(x=>x[0]===page)?.[1]}<small>Australian-first financial education</small></strong><span className="safe"><ShieldCheck size={13}/> Education only</span></header>
 {page==="home"&&<Home go={go} pct={pct} done={done}/>}
 {page==="learn"&&<Learn done={done} setDone={setDone}/>}
 {page==="resources"&&<Resources/>}{page==="reality"&&<Reality/>}{page==="tools"&&<Tools/>}{page==="quiz"&&<Quiz/>}{page==="coach"&&<Coach/>}
 <footer>MoneyMap AU · Built from the supplied research curriculum <span>Verify material decisions with authoritative sources or a qualified professional.</span></footer></main></div>
}

function Home({go,pct,done}:{go:(p:Page)=>void;pct:number;done:string[]}){
 return <div className="page"><section className="hero"><div><span className="tag"><Sparkles size={13}/> A calmer way to learn money</span><h1>Build money judgement.<em>Not money hype.</em></h1><p>Learn personal finance, economics, investing basics and passive-income realism through an Australian lens.</p><div className="actions"><button onClick={()=>go("learn")}>Start learning <ArrowRight/></button><button onClick={()=>go("reality")}>Check an income idea</button></div></div><div className="score"><div>{pct}%<small>path complete</small></div><p><b>{done.length}/7</b> modules <b>20 min</b> a day <b>$0</b> to learn</p></div></section><Disclaimer/>
 <Head kicker="START HERE" title="A sensible order of operations"/><div className="sequence">{modules.slice(0,4).map(m=><button onClick={()=>go("learn")} key={m[0]}><span>{m[1]}</span><small>{m[2]}</small><h3>{m[3]}</h3><p>{m[4]}</p>{done.includes(m[0])&&<i><Check/></i>}</button>)}</div>
 <div className="split"><section className="dark"><span className="tag">THE CORE IDEA</span><h2>Passive income is usually capital doing work, or past labour packaged into an asset.</h2><p>Most online passive-income content is better understood as a business, sales funnel, or survivorship-biased entertainment.</p><button onClick={()=>go("reality")}>Run the reality check <ArrowRight/></button></section><section><Head kicker="TRUTH LAYER" title="Check claims at the source"/>{["MoneySmart","ATO","RBA Education","Scamwatch","ASIC","business.gov.au"].map(x=><div className="source" key={x}><BadgeCheck/>{x}</div>)}</section></div></div>
}
function Head({kicker,title}:{kicker:string;title:string}){return <div className="head"><span>{kicker}</span><h2>{title}</h2></div>}
function Intro({kicker,title,text}:{kicker:string;title:string;text:string}){return <div className="intro"><span>{kicker}</span><h1>{title}</h1><p>{text}</p></div>}

function Learn({done,setDone}:{done:string[];setDone:(x:string[])=>void}){
 const [open,setOpen]=useState("foundations");
 return <div className="page"><Intro kicker="YOUR CURRICULUM" title="Principles before products." text="Seven complete mini-courses, built from the supplied research. Read each lesson, check your understanding, then take one practical action."/><Disclaimer/><div className="modules">{modules.map(m=><article className={done.includes(m[0])?"complete":""} key={m[0]}><button className="moduleTop" onClick={()=>setOpen(open===m[0]?"":m[0])}><b>{done.includes(m[0])?<Check/>:m[1]}</b><span><small>{m[2]}</small><h2>{m[3]}</h2><p>{m[4]}</p><em>{courses[m[0]].lessons.length} lessons · module check · practical action</em></span><ChevronRight/></button>{open===m[0]&&<ModuleCourse id={m[0]} action={m[6]} complete={done.includes(m[0])} toggle={()=>setDone(done.includes(m[0])?done.filter(x=>x!==m[0]):[...done,m[0]])}/>}</article>)}</div></div>
}

function ModuleCourse({id,action,complete,toggle}:{id:string;action:string;complete:boolean;toggle:()=>void}){
 const course=courses[id];const [lesson,setLesson]=useState(0);const [answers,setAnswers]=useState<Record<number,number>>({});const current=course.lessons[lesson];
 const score=course.check.filter((q,i)=>answers[i]===q.correct).length;const checked=Object.keys(answers).length===course.check.length;
 return <div className="course">
  <div className="courseWhy"><Lightbulb/><span><b>Why this module matters</b>{course.why}</span></div>
  <div className="lessonTabs">{course.lessons.map((x,i)=><button className={lesson===i?"active":""} onClick={()=>setLesson(i)} key={x.title}><b>{i+1}</b><span>{x.title}<small>{x.time}</small></span></button>)}</div>
  <div className="lessonContent"><span className="lessonKicker">LESSON {lesson+1} OF {course.lessons.length} · {current.time}</span><h2>{current.title}</h2><p className="lessonSummary">{current.summary}</p>
   {current.sections.map(s=><section className="lessonSection" key={s.heading}><h3>{s.heading}</h3><p>{s.body}</p>{s.example&&<div className="example"><b>In practice</b>{s.example}</div>}{s.caution&&<div className="caution"><ShieldCheck/><span><b>Important caution</b>{s.caution}</span></div>}</section>)}
   <div className="takeaways"><h3>Keep these ideas</h3>{current.takeaways.map(x=><span key={x}><Check/>{x}</span>)}</div>
   <a className="lessonSource" href={current.source.url} target="_blank" rel="noreferrer">Continue with {current.source.label}<ExternalLink/></a>
   <div className="lessonNav"><button disabled={lesson===0} onClick={()=>setLesson(lesson-1)}>Previous lesson</button><button disabled={lesson===course.lessons.length-1} onClick={()=>setLesson(lesson+1)}>Next lesson <ArrowRight/></button></div>
  </div>
  <div className="moduleCheck"><Head kicker="QUICK MODULE CHECK" title="Check your understanding"/>{course.check.map((q,i)=><div className="checkQuestion" key={q.question}><h3>{i+1}. {q.question}</h3><div>{q.answers.map((a,n)=><button className={answers[i]===n?(n===q.correct?"correct":"wrong"):""} onClick={()=>setAnswers({...answers,[i]:n})} key={a}>{a}{answers[i]===n&&<Check/>}</button>)}</div>{answers[i]!==undefined&&<p>{answers[i]===q.correct?"Correct. ":"Review this one. "}{q.explanation}</p>}</div>)}</div>
  <div className="moduleFinish"><div className="action"><Lightbulb/><span><b>Practical action</b>{action}</span></div><div className="reflection"><b>Reflection prompt</b><span>{course.reflection}</span></div><button className="done" disabled={!checked&&!complete} onClick={toggle}>{complete?"Completed":checked?`Mark complete · ${score}/${course.check.length} correct`:"Answer the module check to complete"} <Check/></button></div>
 </div>
}
function Resources(){
 const [q,setQ]=useState(""),[filter,setFilter]=useState("All");const cats=["All",...new Set(resources.map(x=>x[2]))];const shown=resources.filter(x=>(filter==="All"||x[2]===filter)&&x.join(" ").toLowerCase().includes(q.toLowerCase()));
 return <div className="page"><Intro kicker="CREDIBLE, FREE, USEFUL" title="Resource library" text="Government sources form the truth layer. Courses and creators are supplements, not substitutes."/><div className="search"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by topic or provider…"/></div><div className="filters">{cats.map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)}>{x}</button>)}</div><div className="cards">{shown.map(r=><article key={r[0]}><span className={r[5]==="Truth source"?"safe":""}>{r[5]}</span><small>{r[2]}</small><h3>{r[0]}</h3><b>{r[1]}</b><p>{r[3]}</p><a href={r[4]} target="_blank">Open resource <ExternalLink/></a></article>)}</div></div>
}
function Reality(){
 const [s,setS]=useState<(typeof incomeOptions)[number]>(incomeOptions[0]);const flags=["Urgency or scarcity pressure","Guaranteed or unusually easy returns","Income screenshots without failure rates","Risks, fees or hidden labour omitted"];const [checks,setChecks]=useState<number[]>([]);
 return <div className="page"><Intro kicker="PASSIVE INCOME REALITY CHECK" title="Where does the money actually come from?" text="Pick an idea. Surface the capital, labour, risk and stress that headlines tend to hide."/><Disclaimer/><div className="reality"><div>{incomeOptions.map(x=><button className={s[0]===x[0]?"active":""} onClick={()=>setS(x)}><i className={x[2]}/><span><b>{x[0]}</b><small>{x[1]}</small></span><ChevronRight/></button>)}</div><article className="verdict"><span className={`tag ${s[2]}`}>{s[2]} · for a time-poor beginner</span><h2>{s[0]}</h2><p>{s[5]}</p><div className="metrics"><span>Setup effort<b>{s[3]}</b></span><span>Ongoing work<b>{s[4]}</b></span><span>Reality type<b>{s[1]}</b></span></div><div className="action"><Clock3/><span><b>Hidden labour and friction</b>{s[6]}</span></div><h3>Ask: who pays, what is ordinary, and what can permanently go wrong?</h3></article></div><Head kicker="CLAIM CHECKER" title="Pause before you trust the thumbnail"/><div className="flags">{flags.map((x,i)=><button className={checks.includes(i)?"checked":""} onClick={()=>setChecks(checks.includes(i)?checks.filter(n=>n!==i):[...checks,i])}><span>{checks.includes(i)&&<Check/>}</span>{x}</button>)}</div></div>
}
function Tools(){
 const [p,setP]=useState(5000),[m,setM]=useState(250),[r,setR]=useState(5),[y,setY]=useState(10);const result=useMemo(()=>{const rate=r/1200,n=y*12;return p*Math.pow(1+rate,n)+m*((Math.pow(1+rate,n)-1)/rate)},[p,m,r,y]);
 return <div className="page"><Intro kicker="EDUCATIONAL ESTIMATES" title="Make assumptions visible." text="These tools explain relationships. They do not predict returns or recommend products."/><Disclaimer/><section className="tool"><TrendingUp/><h2>Compound growth explainer</h2><p>Explore how a starting amount, regular contributions, time and an assumed rate interact.</p><div className="fields"><label>Starting amount<input type="number" value={p} onChange={e=>setP(+e.target.value)}/></label><label>Monthly contribution<input type="number" value={m} onChange={e=>setM(+e.target.value)}/></label><label>Assumed annual rate %<input type="number" value={r} onChange={e=>setR(+e.target.value)}/></label><label>Years<input type="number" value={y} onChange={e=>setY(+e.target.value)}/></label></div><div className="result"><small>Illustrative future value</small><b>{result.toLocaleString("en-AU",{style:"currency",currency:"AUD",maximumFractionDigits:0})}</b><span>Real outcomes vary. Fees, tax and inflation are not included.</span></div></section></div>
}
function Quiz(){
 const [i,setI]=useState(0),[a,setA]=useState<number|null>(null),[score,setScore]=useState(0);const item=quiz[i];
 if(i===quiz.length)return <div className="page finish"><Target/><h1>{score}/{quiz.length}</h1><p>Keep checking claims at the source.</p><button onClick={()=>{setI(0);setA(null);setScore(0)}}>Try again</button></div>;
 return <div className="page quiz"><Progress value={(i+1)/quiz.length*100}/><span>Question {i+1} of {quiz.length}</span><h1>{item[0]}</h1>{item[1].map((x,n)=><button disabled={a!==null} className={a===null?"":n===item[2]?"correct":a===n?"wrong":""} onClick={()=>setA(n)}><b>{String.fromCharCode(65+n)}</b>{x}{a!==null&&n===item[2]&&<Check/>}</button>)}{a!==null&&<div className="action"><Lightbulb/><span><b>{a===item[2]?"Correct.":"Not quite."}</b>{item[3]}</span></div>}<button className="next" disabled={a===null} onClick={()=>{setScore(score+(a===item[2]?1:0));setI(i+1);setA(null)}}>Next <ArrowRight/></button></div>
}
function Coach(){
 const [msgs,setMsgs]=useState([["coach","Hi. I can explain concepts, challenge hype and help prepare better questions. I will not choose financial products or make decisions for you."]]),[text,setText]=useState("");const send=(q=text)=>{if(!q)return;setMsgs([...msgs,["you",q],["coach",reply(q)]]);setText("")};
 return <div className="page"><Intro kicker="CAUTIOUS BY DESIGN" title="MoneyMap Coach" text="A local educational coach for concepts, claim checking and learning plans."/><Disclaimer/><section className="chat"><div>{msgs.map(x=><p className={x[0]}><b>{x[0]==="coach"?"MoneyMap Coach":"You"}</b><span>{x[1]}</span></p>)}</div><form onSubmit={e=>{e.preventDefault();send()}}><input value={text} onChange={e=>setText(e.target.value)} placeholder="Ask an educational money question…"/><button><ArrowRight/></button></form></section></div>
}
function reply(q:string){q=q.toLowerCase();if(q.includes("offset"))return"An offset account is linked to a home loan. Its balance reduces the loan amount used to calculate interest. Check your lender's fees and rules.";if(q.includes("passive"))return"Ask what asset does the work, who pays, what ongoing labour is hidden, and what can fail. Digital products still need distribution, support and updates.";if(q.includes("hype")||q.includes("youtube"))return"Check the creator's incentives, ordinary failure rates, hidden labour, fees and whether selling the method earns more than using it.";return"I can help break that into assumptions, trade-offs, risks and sources to verify. Start with MoneySmart, ATO, RBA or Scamwatch depending on who owns the rule."}
