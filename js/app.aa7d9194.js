(function(){"use strict";var e={9047:function(e,t,l){var n=l(5130),a=l(6768);const r=(0,a.Lk)("hr",null,null,-1);function o(e,t,l,n,o,i){const s=(0,a.g2)("MemberArea"),u=(0,a.g2)("UploadArea"),m=(0,a.g2)("InputItem"),d=(0,a.g2)("ResultArea");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(s),(0,a.bF)(u),r,(0,a.bF)(m),(0,a.bF)(d)],64)}var i=l(4232);const s=e=>((0,a.Qi)("data-v-792a8ea0"),e=e(),(0,a.jt)(),e),u={class:"main"},m={class:"inputArea"},d=s((()=>(0,a.Lk)("h4",null,"Add Item :",-1))),c=s((()=>(0,a.Lk)("label",{for:"title"},"Item Name:",-1))),h=s((()=>(0,a.Lk)("br",null,null,-1))),p=s((()=>(0,a.Lk)("label",{for:"price"},"Price:",-1))),b=s((()=>(0,a.Lk)("br",null,null,-1))),f=s((()=>(0,a.Lk)("label",{for:"whoPaid"},"whoPaid:",-1))),k=["value"],v=s((()=>(0,a.Lk)("br",null,null,-1))),L=s((()=>(0,a.Lk)("label",{for:"note"},"note:",-1))),g=s((()=>(0,a.Lk)("br",null,null,-1))),I={class:"itemsArea"},y=s((()=>(0,a.Lk)("option",{value:""},"All",-1))),C=["value"],w={class:"itemListArea"},A={class:"itemListTable"},M=s((()=>(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"項目"),(0,a.Lk)("th",null,"價格"),(0,a.Lk)("th",{colspan:"3"},"付款的人")])],-1))),E={class:"noteCol"},_=["data-tooltip"],P={class:"deleteCol"},F=["onClick"],X=s((()=>(0,a.Lk)("td",null,"total:",-1))),N={colspan:"4"},S={key:0},x={colspan:"4"},B={key:0},$={class:"calBtnArea"};function j(e,t,l,r,o,s){return(0,a.uX)(),(0,a.CE)("div",u,[(0,a.Lk)("div",m,[d,c,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.title=e)},null,512),[[n.Jo,o.title,void 0,{trim:!0}]]),h,p,(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>o.price=e)},null,512),[[n.Jo,o.price]]),b,f,(0,a.bo)((0,a.Lk)("select",{name:"",id:"","onUpdate:modelValue":t[2]||(t[2]=e=>o.whoPaid=e)},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.members,((e,t)=>((0,a.uX)(),(0,a.CE)("option",{value:e,key:t},(0,i.v_)(e),9,k)))),128))],512),[[n.u1,o.whoPaid]]),v,L,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>o.note=e)},null,512),[[n.Jo,o.note]]),g,(0,a.Lk)("button",{onClick:t[4]||(t[4]=e=>s.addItems())},"add")]),(0,a.Lk)("div",I,[(0,a.Lk)("div",null,[(0,a.eW)(" filter by member: "),(0,a.bo)((0,a.Lk)("select",{name:"",id:"","onUpdate:modelValue":t[5]||(t[5]=e=>o.filterSelect=e)},[y,((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.members,((e,t)=>((0,a.uX)(),(0,a.CE)("option",{value:e,key:t},(0,i.v_)(e),9,C)))),128))],512),[[n.u1,o.filterSelect]])]),(0,a.Lk)("div",w,[(0,a.Lk)("table",A,[M,(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.filterByMember,((e,t)=>((0,a.uX)(),(0,a.CE)("tr",{key:t},[(0,a.Lk)("td",null,(0,i.v_)(e.title),1),(0,a.Lk)("td",null,"$"+(0,i.v_)(e.price),1),(0,a.Lk)("td",null,(0,i.v_)(e.whoPaid),1),(0,a.Lk)("td",E,[""!==e.note?((0,a.uX)(),(0,a.CE)("button",{key:0,class:"note","data-tooltip":e.note}," note ",8,_)):(0,a.Q3)("",!0)]),(0,a.Lk)("td",P,[(0,a.Lk)("button",{onClick:e=>s.deleteItem(t)},"delete",8,F)])])))),128))]),(0,a.Lk)("tfoot",null,[(0,a.Lk)("tr",null,[X,(0,a.Lk)("td",N,"$"+(0,i.v_)(e.total),1)]),(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,[e.allItems.length>0&""==o.filterSelect?((0,a.uX)(),(0,a.CE)("span",S,"average:")):(0,a.Q3)("",!0)]),(0,a.Lk)("td",x,[e.allItems.length>0&""==o.filterSelect?((0,a.uX)(),(0,a.CE)("span",B,"$"+(0,i.v_)(e.averageAmount),1)):(0,a.Q3)("",!0)])])])])]),(0,a.Lk)("div",$,[(0,a.Lk)("button",{onClick:t[6]||(t[6]=e=>s.finalCalculate())},"Calculate")])])])}l(4114);var O=l(782),U={name:"InputItem",data(){return{title:"",price:0,whoPaid:"",note:"",filterSelect:"",filterByMember:[]}},computed:{...(0,O.aH)(["allItems","members","total","averageAmount"])},methods:{addItems(){if(""!==this.title&0!==this.price&""!==this.whoPaid){let e={title:this.title,price:this.price,whoPaid:this.whoPaid,note:this.note};this.$store.commit("addItems",e),this.title="",this.price=0,this.note=""}this.totalCal(),this.filterSelect=""},deleteItem(e){console.log(this.filterByMember[e].title);let t=confirm("Do u want to delete item?");t&&(this.$store.commit("deleteItem",e),this.filterByMember=this.allItems,this.filterSelect="",this.totalCal())},totalCal(){let e=this.filterByMember.reduce(((e,t)=>e+t.price),0);console.log("total"+e),this.$store.commit("changeAverage",e),console.log(this.members.length)},finalCalculate(){let e=this.total,t=[];0!==e&""==this.filterSelect&&this.members.forEach((e=>{let l=this.allItems.filter((t=>t.whoPaid==e)),n=l.reduce(((e,t)=>e+t.price),0),a=Math.round(n-this.averageAmount);a<0?(a=a.toString(),a=a.replace("-",""),a="-$"+a):a="$"+a;let r={memberName:e,amountByMember:n,result:a};t.push(r)})),this.$store.commit("setResult",t)}},watch:{filterSelect(){""==this.filterSelect?(console.log("all"),this.filterByMember=this.allItems):this.filterByMember=this.allItems.filter((e=>e.whoPaid==this.filterSelect));let e=this.filterByMember.reduce(((e,t)=>e+t.price),0);this.$store.commit("changeAverage",e)}},mounted(){this.filterByMember=this.allItems,this.totalCal()}},R=l(1241);const K=(0,R.A)(U,[["render",j],["__scopeId","data-v-792a8ea0"]]);var Q=K;const T=e=>((0,a.Qi)("data-v-c0dd71e8"),e=e(),(0,a.jt)(),e),V={class:"main"},H=T((()=>(0,a.Lk)("label",{for:"membersName"},"Members Name:",-1)));function J(e,t,l,r,o,i){return(0,a.uX)(),(0,a.CE)("div",V,[H,(0,a.bo)((0,a.Lk)("input",{type:"text",onKeyup:t[0]||(t[0]=(0,n.jR)((e=>i.addMembers()),["enter"])),"onUpdate:modelValue":t[1]||(t[1]=e=>o.memberName=e)},null,544),[[n.Jo,o.memberName,void 0,{trim:!0}]]),(0,a.Lk)("button",{onClick:t[2]||(t[2]=e=>i.addMembers())},"Add")])}var D={name:"MemberArea",data(){return{memberName:""}},computed:{...(0,O.aH)(["members"])},methods:{addMembers(){if(""!==this.memberName){let e=confirm("確定要新增嗎?");e&&this.$store.commit("addMembers",this.memberName),this.memberName=""}}}};const W=(0,R.A)(D,[["render",J],["__scopeId","data-v-c0dd71e8"]]);var q=W;const z=e=>((0,a.Qi)("data-v-51013e56"),e=e(),(0,a.jt)(),e),G=z((()=>(0,a.Lk)("br",null,null,-1))),Y=z((()=>(0,a.Lk)("h3",null,"Result:",-1))),Z={class:"main"},ee={key:0,class:"resultTable"},te=z((()=>(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Member Name"),(0,a.Lk)("th",null,"Total Paid"),(0,a.Lk)("th",null,"+/-")])],-1)));function le(e,t,l,n,r,o){return(0,a.uX)(),(0,a.CE)(a.FK,null,[G,Y,(0,a.Lk)("div",Z,[e.result.length>0?((0,a.uX)(),(0,a.CE)("table",ee,[te,(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.result,((e,t)=>((0,a.uX)(),(0,a.CE)("tr",{key:t},[(0,a.Lk)("td",null,(0,i.v_)(e.memberName),1),(0,a.Lk)("td",null,(0,i.v_)(e.amountByMember),1),(0,a.Lk)("td",{class:(0,i.C4)({shouldPaid:e.result.includes("-")>0})},(0,i.v_)(e.result),3)])))),128))])])):(0,a.Q3)("",!0)])],64)}var ne={name:"ResultArea",data(){return{}},computed:{...(0,O.aH)(["result"])},methods:{}};const ae=(0,R.A)(ne,[["render",le],["__scopeId","data-v-51013e56"]]);var re=ae;const oe=e=>((0,a.Qi)("data-v-6015471c"),e=e(),(0,a.jt)(),e),ie=oe((()=>(0,a.Lk)("br",null,null,-1))),se={class:"main"},ue={class:"box"},me=oe((()=>(0,a.Lk)("span",null," 🔸Download sample csv: ",-1))),de={class:"box"},ce=oe((()=>(0,a.Lk)("span",null," 🔸Upload file: ",-1)));function he(e,t,l,n,r,o){return(0,a.uX)(),(0,a.CE)(a.FK,null,[ie,(0,a.Lk)("div",se,[(0,a.Lk)("div",ue,[me,(0,a.Lk)("button",{class:"downloadBtn",onClick:t[0]||(t[0]=e=>o.downloadSample())},"Download")]),(0,a.Lk)("div",de,[ce,(0,a.Lk)("input",{type:"file",onChange:t[1]||(t[1]=e=>o.onFileChange(e)),accept:"text/csv",capture:""},null,32)])])],64)}var pe={name:"UploadArea",data(){return{fileinput:""}},computed:{...(0,O.aH)(["result"])},methods:{async onFileChange(e){const t=e.target.files[0];let l=await this.readFile(t);0!==l.length&&this.$store.commit("uploadItems",l)},async readFile(e){return new Promise(((t,l)=>{let n=[];const a=new FileReader;a.onload=e=>{const l=e.target.result,a=l.split("\r\n");for(var r=1;r<a.length;r++){const e=a[r].split(",");if(""!==e[0]){let t={title:e[0],price:Number(e[1]),whoPaid:e[2],note:e[3]};n.push(t)}}t(n)},a.onerror=l,a.readAsText(e,"Big5")}))},downloadSample(){console.log("downloadSample");let e=[["title","price","whoPaid","note"],["Item Name1",100,"Member1","note1"],["Item Name2",200,"Member2","note2"]],t="data:text/csv;charset=utf-8,";e.forEach((function(e){let l=e.join(",");t+=l+"\r\n"}));var l=encodeURI(t);window.open(l)}}};const be=(0,R.A)(pe,[["render",he],["__scopeId","data-v-6015471c"]]);var fe=be,ke={name:"App",components:{InputItem:Q,MemberArea:q,ResultArea:re,UploadArea:fe}};const ve=(0,R.A)(ke,[["render",o]]);var Le=ve,ge=(0,O.y$)({state:{allItems:[],members:[],result:[],averageAmount:[],total:0},getters:{},mutations:{addItems(e,t){return e.allItems.push(t)},addMembers(e,t){if(-1==e.members.indexOf(t))return e.members.push(t),void(e.averageAmount=Math.round(e.total/e.members.length))},deleteItem(e,t){return e.allItems.splice(t,1)},setResult(e,t){return e.result=t},changeAverage(e,t){e.total=t,e.averageAmount=Math.round(e.total/e.members.length)},uploadItems(e,t){t.forEach((t=>{e.allItems.push(t),this.commit("addMembers",t.whoPaid),e.total+=t.price,this.commit("changeAverage",e.total)}))}},actions:{},modules:{}});(0,n.Ef)(Le).use(ge).mount("#app")}},t={};function l(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,l),r.exports}l.m=e,function(){var e=[];l.O=function(t,n,a,r){if(!n){var o=1/0;for(m=0;m<e.length;m++){n=e[m][0],a=e[m][1],r=e[m][2];for(var i=!0,s=0;s<n.length;s++)(!1&r||o>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[s])}))?n.splice(s--,1):(i=!1,r<o&&(o=r));if(i){e.splice(m--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[n,a,r]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,o=n[0],i=n[1],s=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(s)var m=s(l)}for(t&&t(n);u<o.length;u++)r=o[u],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},n=self["webpackChunktrack_spending"]=self["webpackChunktrack_spending"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=l.O(void 0,[504],(function(){return l(9047)}));n=l.O(n)})();
//# sourceMappingURL=app.aa7d9194.js.map