import{j as _e,r as u,a as Ee}from"./react-a9b6c34a.js";import{a as Se,c as Be}from"./react-dom-a06df840.js";import{L as Me,N as ce,H as De}from"./react-router-dom-e5f3a2d5.js";import{O as $e,d as je,e as X}from"./react-router-0030e45b.js";import{S as ve,A as ye,a as qe,R as Y,b as Qe,C as ze,c as Oe}from"./microsoft-cognitiveservices-speech-sdk-6e793f52.js";import{p as ue}from"./dompurify-76a5efca.js";import{S as Fe,a as N,I as U,E as He,P as Ge,T as H,B as Ue,b as Ke,c as Ve,d as le,e as We,f as be,g as Je,h as Ne,D as ke,C as Xe,i as Te,j as J,k as Ye,l as Ze,m as et,n as tt}from"./@fluentui-b922d453.js";import{J as nt,i as ot}from"./@react-spring-3be8f457.js";import"./bent-d4cce1f4.js";import"./@remix-run-88f74c5a.js";import"./uuid-a960c1f4.js";import"./tslib-14a4c710.js";import"./@microsoft-31b40247.js";import"./@griffel-cbe60fd0.js";import"./rtl-css-js-4ed993c7.js";import"./@emotion-8a8e73f6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const pe=_e.Fragment,e=_e.jsx,c=_e.jsxs;const at="/assets/github-fab00c2d.svg",st="_layout_1nrkm_1",rt="_header_1nrkm_7",it="_headerContainer_1nrkm_12",ct="_headerTitleContainer_1nrkm_20",lt="_headerLogo_1nrkm_28",dt="_headerTitle_1nrkm_20",ht="_headerNavList_1nrkm_37",ut="_headerNavPageLink_1nrkm_43",pt="_headerNavPageLinkActive_1nrkm_57",mt="_headerNavLeftMargin_1nrkm_62",gt="_headerRightText_1nrkm_66",_t="_microsoftLogo_1nrkm_71",Ct="_githubLogo_1nrkm_76",y={layout:st,header:rt,headerContainer:it,headerTitleContainer:ct,headerLogo:lt,headerTitle:dt,headerNavList:ht,headerNavPageLink:ut,headerNavPageLinkActive:pt,headerNavLeftMargin:mt,headerRightText:gt,microsoftLogo:_t,githubLogo:Ct},ft=()=>c("div",{className:y.layout,children:[e("header",{className:y.header,role:"banner",children:c("div",{className:y.headerContainer,children:[e(Me,{to:"/",className:y.headerTitleContainer,children:e("h3",{className:y.headerTitle,children:"Bing + GPT + Enterprise data | Sample"})}),e("nav",{children:c("ul",{className:y.headerNavList,children:[e("li",{children:e(ce,{to:"/",className:({isActive:t})=>t?y.headerNavPageLinkActive:y.headerNavPageLink,children:"Chat"})}),e("li",{className:y.headerNavLeftMargin,children:e(ce,{to:"/qa",className:({isActive:t})=>t?y.headerNavPageLinkActive:y.headerNavPageLink,children:"Ask a question"})}),e("li",{className:y.headerNavLeftMargin,children:e(ce,{to:"/files",className:({isActive:t})=>t?y.headerNavPageLinkActive:y.headerNavPageLink,children:"Files Viewer"})}),e("li",{className:y.headerNavLeftMargin,children:e("a",{href:"https://aka.ms/entgptsearch",target:"_blank",title:"Github repository link",children:e("img",{src:at,alt:"Github logo","aria-label":"Link to github repository",width:"20px",height:"20px",className:y.githubLogo})})})]})}),e("h4",{className:y.headerRightText,children:"Azure OpenAI + Cognitive Search"})]})}),e($e,{})]}),St=()=>e("h1",{children:"404"}),vt="_oneshotContainer_p6613_1",yt="_oneshotTopSection_p6613_8",bt="_oneshotBottomSection_p6613_15",Nt="_oneshotTitle_p6613_25",kt="_oneshotQuestionInput_p6613_39",Tt="_oneshotAnswerContainer_p6613_46",wt="_oneshotAnalysisPanel_p6613_53",At="_oneshotSettingsSeparator_p6613_58",xt="_settingsButton_p6613_62",b={oneshotContainer:vt,oneshotTopSection:yt,oneshotBottomSection:bt,oneshotTitle:Nt,oneshotQuestionInput:kt,oneshotAnswerContainer:Tt,oneshotAnalysisPanel:wt,oneshotSettingsSeparator:At,settingsButton:xt};async function Lt(t){var i,n,r,l,f,s,m,d;const o=await fetch("/ask",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.question,approach:t.approach,overrides:{semantic_ranker:(i=t.overrides)==null?void 0:i.semanticRanker,semantic_captions:(n=t.overrides)==null?void 0:n.semanticCaptions,top:(r=t.overrides)==null?void 0:r.top,temperature:(l=t.overrides)==null?void 0:l.temperature,prompt_template:(f=t.overrides)==null?void 0:f.promptTemplate,prompt_template_prefix:(s=t.overrides)==null?void 0:s.promptTemplatePrefix,prompt_template_suffix:(m=t.overrides)==null?void 0:m.promptTemplateSuffix,exclude_category:(d=t.overrides)==null?void 0:d.excludeCategory}})}),a=await o.json();if(o.status>299||!o.ok)throw Error(a.error||"Unknown error");return a}async function Rt(t){var i,n,r,l,f,s,m,d,g;const o=await fetch("/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({history:t.history,approach:t.approach,overrides:{semantic_ranker:(i=t.overrides)==null?void 0:i.semanticRanker,semantic_captions:(n=t.overrides)==null?void 0:n.semanticCaptions,top:(r=t.overrides)==null?void 0:r.top,temperature:(l=t.overrides)==null?void 0:l.temperature,prompt_template:(f=t.overrides)==null?void 0:f.promptTemplate,prompt_template_prefix:(s=t.overrides)==null?void 0:s.promptTemplatePrefix,prompt_template_suffix:(m=t.overrides)==null?void 0:m.promptTemplateSuffix,exclude_category:(d=t.overrides)==null?void 0:d.excludeCategory,suggest_followup_questions:(g=t.overrides)==null?void 0:g.suggestFollowupQuestions}})}),a=await o.json();if(o.status>299||!o.ok)throw Error(a.error||"Unknown error");return a}async function It(t){const o="e985cb0392ad45d59681a396b208ebcf",a="southcentralus";var i=ve.fromSubscription(o,a);const n=ye.fromDefaultSpeakerOutput();i.speechSynthesisVoiceName="zh-CN-YunxiNeural";const r=new qe(i,n),f=t.answer.replace(/\[[^\]]*\]/g,"");console.log(t.answer),r.speakTextAsync(f,function(s){s.reason===Y.SynthesizingAudioCompleted?console.log("synthesis finished."):console.error("Speech synthesis canceled, "+s.errorDetails+`
Did you set the speech resource key and region values?`),r.close()},function(s){console.trace("err - "+s),r.close()})}function Pt(t){return`/content/${t}`}var P=(t=>(t.RetrieveThenRead="rtr",t.ReadRetrieveRead="rrr",t.ReadDecomposeAsk="rda",t))(P||{});const Et="_answerContainer_9j9bn_1",Bt="_answerLogo_9j9bn_9",Mt="_answerText_9j9bn_13",Dt="_selected_9j9bn_22",$t="_citationLearnMore_9j9bn_26",jt="_citation_9j9bn_26",qt="_followupQuestionsList_9j9bn_48",Qt="_followupQuestionLearnMore_9j9bn_52",zt="_followupQuestion_9j9bn_48",Ot="_supContainer_9j9bn_71",Ft="_retryButton_9j9bn_100",Ht="_loadingdots_9j9bn_122",Gt="_loading_9j9bn_122",k={answerContainer:Et,answerLogo:Bt,answerText:Mt,selected:Dt,citationLearnMore:$t,citation:jt,followupQuestionsList:qt,followupQuestionLearnMore:Qt,followupQuestion:zt,supContainer:Ot,retryButton:Ft,loadingdots:Ht,loading:Gt};function Ut(t,o){const a=[],i=[];let n=t.replace(/<<([^>>]+)>>/g,(s,m)=>(i.push(m),""));n=n.trim();const r=n.split(/\[([^\]]+)\]+\(([^\)]+)\)/g);console.log(r);let l=n.match(/\[([^\]]+)\]+\(([^\)]+)\)/g);return console.log(l),l&&l.map((s,m)=>{const d=s.split("]")[0].replace("[",""),g=s.split("]")[1].replace("(","").replace(")","");console.log(d),console.log(g),a.push({id:m,name:d,path:g})}),{answerHtml:r.map((s,m)=>{if(m%3===0)return s;if(m%3==1){let d=a.find(B=>B.name==s),g=d?d.id:-1;g!==-1?g=d?d.id+1:-1:g=a.length;const v=Pt(s);return Se(e("a",{className:"supContainer",title:s,onClick:()=>o(v),children:e("sup",{children:g})}))}else return""}).join(""),citations:a,followupQuestions:i}}function Kt(t){if(t.length==0)return e("table",{});const o=Object.keys(t[0]);let a=new Array;t.map(l=>{a.push(Object.values(l))});const i=a,n=o.map((l,f)=>e("th",{children:l},f)),r=i.map((l,f)=>e("tr",{children:l.map((s,m)=>e("td",{children:s},m))},f));return c("table",{children:[e("thead",{children:e("tr",{children:n})}),e("tbody",{children:r})]})}function Vt(t){return Se(Kt(t))}const me=()=>e(Fe,{primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Answer logo"}),we=({answer:t,isSelected:o,onCitationClicked:a,onThoughtProcessClicked:i,onSupportingContentClicked:n,onFollowupQuestionClicked:r,onReadAnswerClicked:l,showFollowupQuestions:f})=>{if(typeof t.answer=="string"){const s=u.useMemo(()=>Ut(t.answer,a),[t]),m=ue.sanitize(s.answerHtml);return c(N,{className:`${k.answerContainer} ${o&&k.selected}`,verticalAlign:"space-between",children:[e(N.Item,{children:c(N,{horizontal:!0,horizontalAlign:"space-between",children:[e(me,{}),c("div",{children:[e(U,{style:{color:"black"},iconProps:{iconName:"Lightbulb"},title:"Show thought process",ariaLabel:"Show thought process",onClick:()=>i(),disabled:!t.thoughts}),e(U,{style:{color:"black"},iconProps:{iconName:"ClipboardList"},title:"Show supporting content",ariaLabel:"Show supporting content",onClick:()=>n(),disabled:!t.data_points.length}),e(U,{style:{color:"black"},iconProps:{iconName:"ReadOutLoud"},title:"Read answer",ariaLabel:"Read answer",onClick:()=>l(),disabled:!t.answer})]})]})}),e(N.Item,{grow:!0,children:e("div",{className:k.answerText,dangerouslySetInnerHTML:{__html:m}})}),!!s.citations.length&&e(N.Item,{children:c(N,{horizontal:!0,wrap:!0,tokens:{childrenGap:5},children:[e("span",{className:k.citationLearnMore,children:"来源:"}),s.citations.map((d,g)=>{const v=d.path;return e("a",{className:k.citation,title:d.name,onClick:()=>a(v),children:`${++g}. ${d.name}`},g)})]})}),!!s.followupQuestions.length&&f&&r&&e(N.Item,{children:c(N,{horizontal:!0,wrap:!0,className:`${s.citations.length?k.followupQuestionsList:""}`,tokens:{childrenGap:6},children:[e("span",{className:k.followupQuestionLearnMore,children:"您可能还想问:"}),s.followupQuestions.map((d,g)=>e("a",{className:k.followupQuestion,title:d,onClick:()=>r(d),children:`${d}`},g))]})})]})}else if(Array.isArray(t.answer)){let s=t.answer;const m=u.useMemo(()=>Vt(s),[t]),d=ue.sanitize(m);return c(N,{className:`${k.answerContainer} ${o&&k.selected}`,verticalAlign:"space-between",children:[e(N.Item,{children:c(N,{horizontal:!0,horizontalAlign:"space-between",children:[e(me,{}),c("div",{children:[e(U,{style:{color:"black"},iconProps:{iconName:"Lightbulb"},title:"Show thought process",ariaLabel:"Show thought process",onClick:()=>i(),disabled:!t.thoughts}),e(U,{style:{color:"black"},iconProps:{iconName:"ClipboardList"},title:"Show supporting content",ariaLabel:"Show supporting content",onClick:()=>n(),disabled:!t.data_points.length}),e(U,{style:{color:"black"},iconProps:{iconName:"ReadOutLoud"},title:"Read answer",ariaLabel:"Read answer",onClick:()=>l(),disabled:!t.answer})]})]})}),e(N.Item,{grow:!0,children:e("div",{className:k.answerText,dangerouslySetInnerHTML:{__html:d}})})]})}else return null},Wt=()=>{const t=nt({from:{opacity:0},to:{opacity:1}});return e(ot.div,{style:{...t},children:c(N,{className:k.answerContainer,verticalAlign:"space-between",children:[e(me,{}),e(N.Item,{grow:!0,children:c("p",{className:k.answerText,children:["正在生成回答",e("span",{className:k.loadingdots})]})})]})})},Ae=({error:t,onRetry:o})=>c(N,{className:k.answerContainer,verticalAlign:"space-between",children:[e(He,{"aria-hidden":"true","aria-label":"Error icon",primaryFill:"red"}),e(N.Item,{grow:!0,children:e("p",{className:k.answerText,children:t})}),e(Ge,{className:k.retryButton,onClick:o,text:"Retry"})]}),Jt="_questionInputContainer_sk61p_1",Xt="_questionInputTextArea_sk61p_10",Yt="_questionInputButtonsContainer_sk61p_15",Zt="_questionInputSendButton_sk61p_21",en="_questionInputSendButtonDisabled_sk61p_25",F={questionInputContainer:Jt,questionInputTextArea:Xt,questionInputButtonsContainer:Yt,questionInputSendButton:Zt,questionInputSendButtonDisabled:en},xe=({onSend:t,disabled:o,placeholder:a,clearOnSend:i})=>{const[n,r]=u.useState(""),l=()=>{if(o||!n.trim()){console.log("send disabled"),console.log("question: "+n);return}t(n),i&&r("")},f=()=>{const g="e985cb0392ad45d59681a396b208ebcf",v="southcentralus";var B=ve.fromSubscription(g,v);const T=ye.fromDefaultMicrophoneInput();B.speechRecognitionLanguage="zh-CN";const Q=new Qe(B,T);Q.recognizeOnceAsync(w=>{switch(w.reason){case Y.RecognizedSpeech:console.log(`RECOGNIZED: Text=${w.text}`),r(w.text);break;case Y.NoMatch:console.log("NOMATCH: Speech could not be recognized.");break;case Y.Canceled:const R=ze.fromResult(w);console.log(`CANCELED: Reason=${R.reason}`),R.reason==Oe.Error&&(console.log(`CANCELED: ErrorCode=${R.ErrorCode}`),console.log(`CANCELED: ErrorDetails=${R.errorDetails}`),console.log("CANCELED: Did you set the speech resource key and region values?"));break}Q.close()})},s=g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),l())},m=(g,v)=>{v?v.length<=1e3&&r(v):r("")},d=o||!n.trim();return c(N,{horizontal:!0,className:F.questionInputContainer,children:[e(H,{className:F.questionInputTextArea,placeholder:a,multiline:!0,resizable:!1,borderless:!0,value:n,onChange:m,onKeyDown:s}),c("div",{className:F.questionInputButtonsContainer,children:[e("div",{className:`${F.questionInputSendButton} ${d?F.questionInputSendButtonDisabled:""}`,"aria-label":"语音输入",onClick:f,children:e(Ue,{primaryFill:"rgba(115, 118, 225, 1)"})}),e("div",{className:`${F.questionInputSendButton} ${d?F.questionInputSendButtonDisabled:""}`,"aria-label":"提问按钮",onClick:l,children:e(Ke,{primaryFill:"rgba(115, 118, 225, 1)"})})]})]})},tn="_examplesNavList_1eu46_1",nn="_example_1eu46_1",on="_exampleText_1eu46_27",ge={examplesNavList:tn,example:nn,exampleText:on},an=({text:t,value:o,onClick:a})=>e("div",{className:ge.example,onClick:()=>a(o),children:e("p",{className:ge.exampleText,children:t})}),sn=[{text:"2022-23赛季，NBA哪只球队常规赛战绩最好?",value:"2022-23赛季，NBA哪只球队常规赛战绩最好?"},{text:"What's the main goal of gpt model ?",value:"What's the main goal of gpt model ?"},{text:"涨幅最高的三只股票是？",value:"查询出涨幅最高的三只股票"}],Le=({onExampleClicked:t})=>e("ul",{className:ge.examplesNavList,children:sn.map((o,a)=>e("li",{children:e(an,{text:o.text,value:o.value,onClick:t})},a))}),rn="_thoughtProcess_1rdxk_1",cn={thoughtProcess:rn};function ln(t){const o=t.split(": "),a=o[0];var i=o.slice(1).join(": ")?o.slice(1).join(": "):"No content";const n=i.match(/<([^>]+)>/);return i=i.replace(/<([^>]+)>/g,""),{title:a,content:i,url:n?n[1]:""}}const dn="_supportingContentNavList_1yfye_1",hn="_supportingContentItem_1yfye_9",un="_supportingContentItemHeader_1yfye_21",pn="_supportingContentItemText_1yfye_25",q={supportingContentNavList:dn,supportingContentItem:hn,supportingContentItemHeader:un,supportingContentItemText:pn},mn=({supportingContent:t})=>Array.isArray(t)?e("ul",{className:q.supportingContentNavList,children:t.map((o,a)=>{const i=ln(o);return c("li",{className:q.supportingContentItem,children:[e("h4",{className:q.supportingContentItemHeader,children:i.title}),e("p",{className:q.supportingContentItemText,children:i.content}),e("a",{className:q.supportingContentItemText,href:i.url,target:"_blank",children:i.url})]})})}):typeof t=="string"?e("ul",{className:q.supportingContentNavList,children:e("li",{className:q.supportingContentItem,children:e("p",{className:q.supportingContentItemText,children:t})})}):e("ul",{});var A=(t=>(t.ThoughtProcessTab="thoughtProcess",t.SupportingContentTab="supportingContent",t.CitationTab="citation",t))(A||{});const de={disabled:!0,style:{color:"grey"}},Re=({answer:t,activeTab:o,activeCitation:a,citationHeight:i,className:n,onActiveTabChanged:r})=>{const l=!t.thoughts,f=!t.data_points.length,s=!a,m=ue.sanitize(t.thoughts);return c(Ve,{className:n,selectedKey:o,onLinkClick:d=>d&&r(d.props.itemKey),children:[e(le,{itemKey:A.ThoughtProcessTab,headerText:"思维过程",headerButtonProps:l?de:void 0,children:e("div",{className:cn.thoughtProcess,dangerouslySetInnerHTML:{__html:m}})}),e(le,{itemKey:A.SupportingContentTab,headerText:"支持内容",headerButtonProps:f?de:void 0,children:e(mn,{supportingContent:t.data_points})}),e(le,{itemKey:A.CitationTab,headerText:"引用",headerButtonProps:s?de:void 0,children:e("iframe",{title:"引用",src:a,width:"100%",height:i})})]})},gn="_container_cfwv2_1",_n={container:gn},Ie=({className:t,onClick:o})=>c("div",{className:`${_n.container} ${t??""}`,onClick:o,children:[e(We,{}),e(be,{children:"开发人员配置"})]}),Cn=()=>{const[t,o]=u.useState(!1),[a,i]=u.useState(P.ReadDecomposeAsk),[n,r]=u.useState(""),[l,f]=u.useState(""),[s,m]=u.useState(""),[d,g]=u.useState(3),[v,B]=u.useState(!1),[T,Q]=u.useState(!1),[w,R]=u.useState(""),M=u.useRef(""),[D,K]=u.useState(!1),[$,j]=u.useState(),[x,z]=u.useState(),[G,E]=u.useState(),[O,I]=u.useState(void 0),V=async _=>{M.current=_,$&&j(void 0),K(!0),E(void 0),I(void 0);try{const C={question:_,approach:a,overrides:{promptTemplate:n.length===0?void 0:n,promptTemplatePrefix:l.length===0?void 0:l,promptTemplateSuffix:s.length===0?void 0:s,excludeCategory:w.length===0?void 0:w,top:d,semanticRanker:v,semanticCaptions:T}},Pe=await Lt(C);z(Pe)}catch(C){j(C)}finally{K(!1)}},Z=(_,C)=>{r(C||"")},ee=(_,C)=>{f(C||"")},te=(_,C)=>{m(C||"")},ne=(_,C)=>{g(parseInt(C||"3"))},oe=(_,C)=>{i((C==null?void 0:C.key)||P.RetrieveThenRead)},ae=(_,C)=>{B(!!C)},se=(_,C)=>{Q(!!C)},re=(_,C)=>{R(C||"")},W=_=>{V(_)},ie=_=>{G===_&&O===A.CitationTab?I(void 0):(E(_),I(A.CitationTab))},h=_=>{I(O===_?void 0:_)},p=()=>{alert("onReadAnswerClicked")},L=[{key:P.RetrieveThenRead,text:"Retrieve-Then-Read"},{key:P.ReadRetrieveRead,text:"Read-Retrieve-Read"},{key:P.ReadDecomposeAsk,text:"Read-Decompose-Ask"}];return c("div",{className:b.oneshotContainer,children:[c("div",{className:b.oneshotTopSection,children:[e(Ie,{className:b.settingsButton,onClick:()=>o(!t)}),e("h1",{className:b.oneshotTitle,children:"Ask your data"}),e("div",{className:b.oneshotQuestionInput,children:e(xe,{placeholder:"示例:查询出涨幅最高的三只股票",disabled:D,onSend:_=>V(_)})})]}),c("div",{className:b.oneshotBottomSection,children:[D&&e(Je,{label:"正在生成回答"}),!M.current&&e(Le,{onExampleClicked:W}),!D&&x&&!$&&e("div",{className:b.oneshotAnswerContainer,children:e(we,{answer:x,onCitationClicked:_=>ie(_),onThoughtProcessClicked:()=>h(A.ThoughtProcessTab),onSupportingContentClicked:()=>h(A.SupportingContentTab),onReadAnswerClicked:()=>p()})}),$?e("div",{className:b.oneshotAnswerContainer,children:e(Ae,{error:$.toString(),onRetry:()=>V(M.current)})}):null,O&&x&&e(Re,{className:b.oneshotAnalysisPanel,activeCitation:G,onActiveTabChanged:_=>h(_),citationHeight:"600px",answer:x,activeTab:O})]}),c(Ne,{headerText:"配置",isOpen:t,isBlocking:!1,onDismiss:()=>o(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e(ke,{onClick:()=>o(!1),children:"Close"}),isFooterAtBottom:!0,children:[e(Xe,{className:b.oneshotSettingsSeparator,label:"方式",options:L,defaultSelectedKey:a,onChange:oe}),(a===P.RetrieveThenRead||a===P.ReadDecomposeAsk)&&e(H,{className:b.oneshotSettingsSeparator,defaultValue:n,label:"更改提问模板",multiline:!0,autoAdjustHeight:!0,onChange:Z}),a===P.ReadRetrieveRead&&c(pe,{children:[e(H,{className:b.oneshotSettingsSeparator,defaultValue:l,label:"更改提问前缀模板",multiline:!0,autoAdjustHeight:!0,onChange:ee}),e(H,{className:b.oneshotSettingsSeparator,defaultValue:s,label:"更改提问后缀模板",multiline:!0,autoAdjustHeight:!0,onChange:te})]}),e(Te,{className:b.oneshotSettingsSeparator,label:"最多从搜索中返回的条目数量:",min:1,max:50,defaultValue:d.toString(),onChange:ne}),e(H,{className:b.oneshotSettingsSeparator,label:"排除类别",onChange:re}),e(J,{className:b.oneshotSettingsSeparator,checked:v,label:"使用语义搜索",onChange:ae}),e(J,{className:b.oneshotSettingsSeparator,checked:T,label:"使用查询上下文摘要而不是整个文档",onChange:se,disabled:!v})]})]})},fn="_container_18ti9_1",Sn="_chatRoot_18ti9_8",vn="_chatContainer_18ti9_13",yn="_chatEmptyState_18ti9_21",bn="_chatEmptyStateTitle_18ti9_31",Nn="_chatEmptyStateSubtitle_18ti9_38",kn="_chatMessageStream_18ti9_54",Tn="_chatMessageGpt_18ti9_66",wn="_chatMessageGptMinWidth_18ti9_73",An="_chatInput_18ti9_78",xn="_chatAnalysisPanel_18ti9_91",Ln="_chatSettingsSeparator_18ti9_99",Rn="_loadingLogo_18ti9_103",In="_commandsContainer_18ti9_107",Pn="_commandButton_18ti9_112",S={container:fn,chatRoot:Sn,chatContainer:vn,chatEmptyState:yn,chatEmptyStateTitle:bn,chatEmptyStateSubtitle:Nn,chatMessageStream:kn,chatMessageGpt:Tn,chatMessageGptMinWidth:wn,chatInput:An,chatAnalysisPanel:xn,chatSettingsSeparator:Ln,loadingLogo:Rn,commandsContainer:In,commandButton:Pn},En="_container_1rakl_1",Bn="_message_1rakl_9",Ce={container:En,message:Bn},he=({message:t})=>e("div",{className:Ce.container,children:e("div",{className:Ce.message,children:t})}),Mn="_container_1opm5_1",Dn="_disabled_1opm5_8",fe={container:Mn,disabled:Dn},$n=({className:t,disabled:o,onClick:a})=>c("div",{className:`${fe.container} ${t??""} ${o&&fe.disabled}`,onClick:a,children:[e(Ye,{}),e(be,{children:"清空对话"})]}),jn=()=>{const[t,o]=u.useState(!1),[a,i]=u.useState(""),[n,r]=u.useState(3),[l,f]=u.useState(!1),[s,m]=u.useState(!1),[d,g]=u.useState(""),[v,B]=u.useState(!0),T=u.useRef(""),Q=u.useRef(null),[w,R]=u.useState(!1),[M,D]=u.useState(),[K,$]=u.useState(),[j,x]=u.useState(void 0),[z,G]=u.useState(0),[E,O]=u.useState([]),I=async h=>{T.current=h,M&&D(void 0),R(!0),$(void 0),x(void 0);try{const L={history:[...E.map(C=>({user:C[0],bot:C[1].answer})),{user:h,bot:void 0}],approach:P.ReadRetrieveRead,overrides:{promptTemplate:a.length===0?void 0:a,excludeCategory:d.length===0?void 0:d,top:n,semanticRanker:l,semanticCaptions:s,suggestFollowupQuestions:v}},_=await Rt(L);O([...E,[h,_]])}catch(p){D(p)}finally{R(!1)}},V=()=>{T.current="",M&&D(void 0),$(void 0),x(void 0),O([])};u.useEffect(()=>{var h;return(h=Q.current)==null?void 0:h.scrollIntoView({behavior:"smooth"})},[w]);const Z=(h,p)=>{i(p||"")},ee=(h,p)=>{r(parseInt(p||"3"))},te=(h,p)=>{f(!!p)},ne=(h,p)=>{m(!!p)},oe=(h,p)=>{g(p||"")},ae=(h,p)=>{B(!!p)},se=h=>{I(h)},re=(h,p)=>{K===h&&j===A.CitationTab&&z===p?x(void 0):($(h),x(A.CitationTab)),G(p)},W=(h,p)=>{x(j===h&&z===p?void 0:h),G(p)},ie=async(h,p)=>{G(p);try{const L={answer:h.answer};await It(L)}catch(L){D(L)}finally{R(!1)}};return c("div",{className:S.container,children:[c("div",{className:S.commandsContainer,children:[e($n,{className:S.commandButton,onClick:V,disabled:!T.current||w}),e(Ie,{className:S.commandButton,onClick:()=>o(!t)})]}),c("div",{className:S.chatRoot,children:[c("div",{className:S.chatContainer,children:[T.current?c("div",{className:S.chatMessageStream,children:[E.map((h,p)=>c("div",{children:[e(he,{message:h[0]}),e("div",{className:S.chatMessageGpt,children:e(we,{answer:h[1],isSelected:z===p&&j!==void 0,onCitationClicked:L=>re(L,p),onThoughtProcessClicked:()=>W(A.ThoughtProcessTab,p),onSupportingContentClicked:()=>W(A.SupportingContentTab,p),onFollowupQuestionClicked:L=>I(L),onReadAnswerClicked:()=>ie(h[1],p),showFollowupQuestions:v&&E.length-1===p},p)})]},p)),w&&c(pe,{children:[e(he,{message:T.current}),e("div",{className:S.chatMessageGptMinWidth,children:e(Wt,{})})]}),M?c(pe,{children:[e(he,{message:T.current}),e("div",{className:S.chatMessageGptMinWidth,children:e(Ae,{error:M.toString(),onRetry:()=>I(T.current)})})]}):null,e("div",{ref:Q})]}):c("div",{className:S.chatEmptyState,children:[e(Ze,{fontSize:"120px",primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Chat logo"}),e("h1",{className:S.chatEmptyStateTitle,children:"Chat with your documents"}),e("h2",{className:S.chatEmptyStateSubtitle,children:"Ask anything or try an example"}),e(Le,{onExampleClicked:se})]}),e("div",{className:S.chatInput,children:e(xe,{clearOnSend:!0,placeholder:"输入问题",disabled:w,onSend:h=>I(h)})})]}),E.length>0&&j&&e(Re,{className:S.chatAnalysisPanel,activeCitation:K,onActiveTabChanged:h=>W(h,z),citationHeight:"810px",answer:E[z][1],activeTab:j}),c(Ne,{headerText:"配置",isOpen:t,isBlocking:!1,onDismiss:()=>o(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e(ke,{onClick:()=>o(!1),children:"Close"}),isFooterAtBottom:!0,children:[e(H,{className:S.chatSettingsSeparator,defaultValue:a,label:"更改提问模板",multiline:!0,autoAdjustHeight:!0,onChange:Z}),e(Te,{className:S.chatSettingsSeparator,label:"最多从搜索中返回的条目数量:",min:1,max:50,defaultValue:n.toString(),onChange:ee}),e(H,{className:S.chatSettingsSeparator,label:"排除类别",onChange:oe}),e(J,{className:S.chatSettingsSeparator,checked:l,label:"使用语义搜索",onChange:te}),e(J,{className:S.chatSettingsSeparator,checked:s,label:"使用查询上下文摘要而不是整个文档",onChange:ne,disabled:!l}),e(J,{className:S.chatSettingsSeparator,checked:v,label:"建议后续问题",onChange:ae})]})]})]})};et();tt();function qn(){return e(De,{children:e(je,{children:c(X,{path:"/",element:e(ft,{}),children:[e(X,{index:!0,element:e(jn,{})}),e(X,{path:"qa",element:e(Cn,{})}),e(X,{path:"*",element:e(St,{})})]})})})}Be.createRoot(document.getElementById("root")).render(e(Ee.StrictMode,{children:e(qn,{})}));
//# sourceMappingURL=index-67c01798.js.map