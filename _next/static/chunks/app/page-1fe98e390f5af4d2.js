(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4937:function(e,t,a){Promise.resolve().then(a.bind(a,375))},375:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var r=a(7437),l=a(2265),n=e=>{let{label:t,name:a,type:l="text",value:n,onChange:s,min:d,max:o,step:i,className:g}=e;return(0,r.jsxs)("div",{className:"mb-2",children:[" ",(0,r.jsxs)("label",{htmlFor:a,className:"block text-gray-700 text-sm font-bold mb-1",children:[" ",t]}),(0,r.jsx)("input",{id:a,name:a,type:l,value:n,onChange:s,min:d,max:o,step:i,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ".concat(g),required:!0})]})},s=e=>{let{input:t,handleChange:a,handleSubmit:l,loading:s}=e;return(0,r.jsxs)("form",{onSubmit:l,className:"space-y-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-900 dark:text-gray-200 font-semibold mb-2",children:"Current Age"}),(0,r.jsx)(n,{name:"age",type:"number",value:t.age,onChange:a,min:0,max:100,className:"py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md",label:""})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-900 dark:text-gray-200 font-semibold mb-2",children:"Monthly Savings ($)"}),(0,r.jsx)(n,{name:"monthlySavings",type:"number",value:t.monthlySavings,onChange:a,min:0,className:"py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md",label:""})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-900 dark:text-gray-200 font-semibold mb-2",children:"Retirement Annual Spending ($)"}),(0,r.jsx)(n,{name:"retirementAnnualSpending",type:"number",value:t.retirementAnnualSpending,onChange:a,min:0,className:"py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md",label:""})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-900 dark:text-gray-200 font-semibold mb-2",children:"Current Net Worth ($)"}),(0,r.jsx)(n,{name:"currentNetWorth",type:"number",value:t.currentNetWorth,onChange:a,min:0,className:"py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md",label:""})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-900 dark:text-gray-200 font-semibold mb-2",children:"Expected Annual Return Rate (%)"}),(0,r.jsx)(n,{name:"expectedReturnRate",type:"number",value:t.expectedReturnRate,onChange:a,min:0,max:20,step:.1,className:"py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md",label:""})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-900 dark:text-gray-200 font-semibold mb-2",children:"Withdrawal Rate (%)"}),(0,r.jsx)(n,{name:"withdrawalRate",type:"number",value:t.withdrawalRate,onChange:a,min:1,max:20,step:.1,className:"py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md",label:""})]}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-blue-600 dark:bg-blue-800 text-white font-bold py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-900 transition duration-200",disabled:s,children:s?"Calculating...":"Calculate FIRE"})]})},d=e=>{let{output:t,error:a}=e;return(0,r.jsxs)("div",{className:"dark:bg-gray-900 bg-white p-4 rounded-lg",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold mb-6 text-gray-900 dark:text-gray-200",children:"Your FIRE Results"}),a&&(0,r.jsx)("p",{className:"text-red-500 mb-4",children:a}),t?(0,r.jsxs)("div",{className:"text-center space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-2xl font-bold text-gray-900 dark:text-gray-200",children:"FIRE Number"}),(0,r.jsxs)("p",{className:"text-3xl text-green-500 font-extrabold",children:["$",t.fireNumber.toLocaleString()]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-2xl font-bold text-gray-900 dark:text-gray-200",children:"FIRE Age"}),(0,r.jsx)("p",{className:"text-3xl text-green-500 font-extrabold",children:t.fireAge.toFixed(2)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-2xl font-bold text-gray-900 dark:text-gray-200",children:"Years Until FIRE"}),(0,r.jsx)("p",{className:"text-3xl text-green-500 font-extrabold",children:t.yearsUntilFire.toFixed(2)})]})]}):(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:'Enter your details and press "Calculate FIRE" to see results.'})]})},o=a(7625),i=a(7476),g=a(6940),c=a(7059),x=a(2994),b=a(8147),m=a(3263),u=e=>{let{data:t}=e;return(0,r.jsx)("div",{className:"dark:bg-gray-900 bg-white p-4 rounded-lg",children:(0,r.jsx)(o.h,{width:"100%",height:400,children:(0,r.jsxs)(i.T,{data:t,margin:{top:10,right:20,bottom:40,left:60},children:[(0,r.jsx)(g.q,{strokeDasharray:"3 3",className:"dark:stroke-gray-700 stroke-gray-300"}),(0,r.jsx)(c.K,{dataKey:"age",label:{value:"Age (years)",position:"insideBottom",offset:-25,className:"text-black dark:text-white"},tick:{fill:"currentColor"}}),(0,r.jsx)(x.B,{tickFormatter:e=>"$".concat(e.toLocaleString()),tick:{fill:"currentColor"}}),(0,r.jsx)(b.u,{contentStyle:{backgroundColor:"var(--tooltip-bg)",borderColor:"var(--tooltip-border)",color:"var(--tooltip-text)"}}),(0,r.jsx)(m.u,{type:"monotone",dataKey:"contributions",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.4,name:"Contributions"}),(0,r.jsx)(m.u,{type:"monotone",dataKey:"netWorth",stroke:"#82ca9d",fill:"#82ca9d",fillOpacity:.6,name:"Net Worth"})]})})})},y=a(595);let h=a(1321).qL;var p=()=>{let e=(0,y.Db)(h.functions.calculateRetirement.calculateFIRE),[t,a]=(0,l.useState)({age:30,monthlySavings:500,retirementAnnualSpending:4e4,currentNetWorth:5e4,expectedReturnRate:5,withdrawalRate:4}),[n,o]=(0,l.useState)(null),[i,g]=(0,l.useState)(!1),[c,x]=(0,l.useState)(null),[b,m]=(0,l.useState)([]),p=async a=>{a.preventDefault(),g(!0),x(null),o(null),m([]);try{let a=await e(t);o(a),m(a.detailedNetWorth)}catch(e){x(e.message||"An error occurred while calculating."),console.error(e)}finally{g(!1)}};return(0,r.jsxs)("div",{className:"container mx-auto p-6",children:[(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,r.jsx)(s,{input:t,handleChange:e=>{let{name:r,value:l}=e.target;a({...t,[r]:Number(l)})},handleSubmit:p,loading:i}),(0,r.jsx)(d,{output:n,error:c})]}),n&&(0,r.jsxs)("div",{className:"mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold mb-4 text-gray-900 dark:text-gray-200",children:"Net Worth Growth by Age"}),(0,r.jsx)(u,{data:b})]})]})}}},function(e){e.O(0,[595,438,971,117,744],function(){return e(e.s=4937)}),_N_E=e.O()}]);