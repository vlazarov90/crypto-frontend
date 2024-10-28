(function(){"use strict";var e={8061:function(e,t,r){var o=r(5130),a=r(6768);const i={id:"app"};function s(e,t,r,o,s,n){const c=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(c)])}var n={name:"App"},c=r(1241);const l=(0,c.A)(n,[["render",s]]);var u=l,d=r(782),p=r(4373),m=(r(4114),r(1387));const h={class:"container mt-5"},f={class:"form-group mb-3"},g={class:"form-group mb-3"},b={class:"text-center mt-3"};function v(e,t,r,i,s,n){const c=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",h,[t[8]||(t[8]=(0,a.Lk)("h2",{class:"text-center"},"Login",-1)),(0,a.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"])),class:"w-50 mx-auto"},[(0,a.Lk)("div",f,[t[3]||(t[3]=(0,a.Lk)("label",{for:"email"},"Email",-1)),(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),id:"email",class:"form-control",required:""},null,512),[[o.Jo,i.email]])]),(0,a.Lk)("div",g,[t[4]||(t[4]=(0,a.Lk)("label",{for:"password"},"Password",-1)),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),id:"password",class:"form-control",required:""},null,512),[[o.Jo,i.password]])]),t[5]||(t[5]=(0,a.Lk)("button",{type:"submit",class:"btn btn-primary w-100"},"Login",-1))],32),(0,a.Lk)("p",b,[t[7]||(t[7]=(0,a.eW)(" Don't have an account? ")),(0,a.bF)(c,{to:"/register"},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.eW)("Register here")]))),_:1})])])}var k=r(144),y={name:"LoginPage",setup(){const e=(0,m.rd)(),t=(0,d.Pj)(),r=(0,k.KR)(""),o=(0,k.KR)(""),a=async()=>{await t.dispatch("login",{email:r.value,password:o.value}),t.getters.isAuthenticated?e.push("/"):console.error("Login failed. Please check your credentials.")};return{email:r,password:o,handleSubmit:a}}};const w=(0,c.A)(y,[["render",v],["__scopeId","data-v-6cd0878b"]]);var P=w,L=r(4232);const E={class:"container mt-5"},A={class:"mb-3"},S={class:"mb-3"},_={class:"mb-3"},R={key:0,class:"text-danger mt-3"};function O(e,t,r,i,s,n){return(0,a.uX)(),(0,a.CE)("div",E,[t[8]||(t[8]=(0,a.Lk)("h2",null,"Register",-1)),(0,a.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>n.registerUser&&n.registerUser(...e)),["prevent"]))},[(0,a.Lk)("div",A,[t[4]||(t[4]=(0,a.Lk)("label",{for:"email",class:"form-label"},"Email",-1)),(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>s.email=e),class:"form-control",id:"email",required:""},null,512),[[o.Jo,s.email]])]),(0,a.Lk)("div",S,[t[5]||(t[5]=(0,a.Lk)("label",{for:"password",class:"form-label"},"Password",-1)),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e),class:"form-control",id:"password",required:""},null,512),[[o.Jo,s.password]])]),(0,a.Lk)("div",_,[t[6]||(t[6]=(0,a.Lk)("label",{for:"confirmPassword",class:"form-label"},"Confirm Password",-1)),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>s.confirmPassword=e),class:"form-control",id:"confirmPassword",required:""},null,512),[[o.Jo,s.confirmPassword]])]),t[7]||(t[7]=(0,a.Lk)("button",{type:"submit",class:"btn btn-primary"},"Register",-1)),s.errorMessage?((0,a.uX)(),(0,a.CE)("div",R,(0,L.v_)(s.errorMessage),1)):(0,a.Q3)("",!0)],32)])}var D={name:"RegisterPage",data(){return{email:"",password:"",confirmPassword:"",errorMessage:""}},methods:{...(0,d.i0)(["register"]),async registerUser(){if(this.password===this.confirmPassword)try{await this.register({email:this.email,password:this.password}),this.$router.push("/")}catch(e){this.errorMessage="Registration failed. Please try again."}else this.errorMessage="Passwords do not match"}}};const T=(0,c.A)(D,[["render",O]]);var C=T;const I={class:"container mt-5"};function x(e,t,r,o,i,s){const n=(0,a.g2)("crypto-price");return(0,a.uX)(),(0,a.CE)("div",I,[t[0]||(t[0]=(0,a.Lk)("h1",{class:"text-center"},"Welcome to Crypto Dashboard",-1)),(0,a.bF)(n)])}const U={class:"container mt-5"},$={class:"text-center mb-4"};function j(e,t,r,o,i,s){const n=(0,a.g2)("PriceChart");return(0,a.uX)(),(0,a.CE)("div",U,[(0,a.Lk)("div",$,[t[0]||(t[0]=(0,a.Lk)("h1",null,"Real-time Bitcoin Prices",-1)),(0,a.Lk)("p",{class:(0,L.C4)(["current-price",s.priceDirection])}," Current Price: "+(0,L.v_)(i.price?`$${i.price}`:"Loading..."),3)]),null!==e.historicalData?((0,a.uX)(),(0,a.Wv)(n,{key:0})):(0,a.Q3)("",!0)])}var N=r(9509),F=r(8971);const q=(new N.$).withUrl("http://localhost:5122/cryptoHub",{accessTokenFactory:()=>ie.getters.token}).withAutomaticReconnect().configureLogging(F.$.Information).build();var H=q;function M(e,t,r,o,i,s){const n=(0,a.g2)("LineChart");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(n,{data:s.chartData,chartOptions:i.chartOptions},null,8,["data","chartOptions"])])}var X=r(1010),B=r(6912);B.t1.register(B.PP,B.kc,B.UA,B.FN,B.No,B.dN,B.m_,B.s$);var J={components:{LineChart:X.N1},computed:{...(0,d.L8)(["historicalData"]),chartData(){if(!this.historicalData||!this.historicalData.bpi)return{labels:[],datasets:[{label:"Bitcoin Price",backgroundColor:"#42A5F5",borderColor:"#1E88E5",data:[]}]};const e=Object.entries(this.historicalData.bpi).map((([e,t])=>({date:e,price:t})));return{labels:e.map((e=>e.date)),datasets:[{label:"Bitcoin Price",backgroundColor:"#42A5F5",borderColor:"#1E88E5",data:e.map((e=>e.price))}]}}},data(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"}},y:{beginAtZero:!0}}}}}};const K=(0,c.A)(J,[["render",M],["__scopeId","data-v-541095bc"]]);var z=K,V={components:{PriceChart:z},data(){return{price:null,previousPrice:null,lastPriceDirection:""}},computed:{...(0,d.L8)(["historicalData"]),priceDirection(){return null===this.previousPrice?"":this.price>this.previousPrice?"text-success":this.price<this.previousPrice?"text-danger":this.lastPriceDirection}},watch:{price(e){null!==this.previousPrice&&(e>this.previousPrice?this.lastPriceDirection="text-success":e<this.previousPrice&&(this.lastPriceDirection="text-danger")),this.previousPrice=e}},methods:{...(0,d.i0)(["fetchHistoricalData"])},mounted(){this.fetchHistoricalData(),H.start().then((()=>{H.on("ReceivePriceUpdate",(e=>{this.previousPrice=this.price,this.price=JSON.parse(e).bpi.USD.rate}))})).catch((e=>console.error("SignalR connection failed: ",e)))}};const W=(0,c.A)(V,[["render",j],["__scopeId","data-v-6c74138e"]]);var G=W,Q={name:"HomePage",components:{CryptoPrice:G}};const Z=(0,c.A)(Q,[["render",x],["__scopeId","data-v-c5d78518"]]);var Y=Z;const ee=[{path:"/login",name:"Login",component:P},{path:"/register",name:"Register",component:C},{path:"/",name:"Home",component:Y,meta:{requiresAuth:!0}}],te=(0,m.aE)({history:(0,m.LA)(),routes:ee});te.beforeEach(((e,t,r)=>{e.meta.requiresAuth&&!ie.getters.isAuthenticated?r({name:"Login"}):r()}));var re=te;const oe=p.A.create({baseURL:"http://localhost:5122/api"});oe.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e})),oe.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(localStorage.removeItem("token"),re.push("/login")),Promise.reject(e))));var ae=oe,ie=(0,d.y$)({state:{historicalData:null,token:localStorage.getItem("token")||null,user:null,registrationError:null},mutations:{SET_HISTORICAL_DATA(e,t){e.historicalData=t},SET_TOKEN(e,t){e.token=t,t?localStorage.setItem("token",t):localStorage.removeItem("token")},SET_USER(e,t){e.user=t},SET_REGISTRATION_ERROR(e,t){e.registrationError=t}},actions:{async fetchHistoricalData({commit:e}){try{const t=await ae.get("/crypto/history");e("SET_HISTORICAL_DATA",t.data)}catch(t){console.error("Error fetching historical data:",t)}},async login({commit:e},t){try{const r=await ae.post("/auth/login",t),o=r.data.token;e("SET_TOKEN",o),p.A.defaults.headers.common["Authorization"]=`Bearer ${o}`}catch(r){console.error("Login error:",r)}},async register({commit:e},t){try{const r=await ae.post("/auth/register",t),o=r.data.token;e("SET_TOKEN",o),p.A.defaults.headers.common["Authorization"]=`Bearer ${o}`,e("SET_USER",r.data.user)}catch(r){console.error("Registration error:",r),e("SET_REGISTRATION_ERROR",r.response.data.message||"Registration failed")}},logout({commit:e}){e("SET_TOKEN",null),delete p.A.defaults.headers.common["Authorization"]}},getters:{historicalData:e=>e.historicalData,isAuthenticated:e=>!!e.token,token:e=>e.token,registrationError:e=>e.registrationError}});(0,o.Ef)(u).use(ie).use(re).mount("#app");const se=ie.getters.token;se&&(p.A.defaults.headers.common["Authorization"]=`Bearer ${se}`)}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,o,a,i){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var n=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(n=!1,i<s&&(s=i));if(n){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,s=o[0],n=o[1],c=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(c)var u=c(r)}for(t&&t(o);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},o=self["webpackChunkcrypto_dashboard_frontend"]=self["webpackChunkcrypto_dashboard_frontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(8061)}));o=r.O(o)})();
//# sourceMappingURL=app.66bad35e.js.map