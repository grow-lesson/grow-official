"use strict";(self["webpackChunkgrow_official_project"]=self["webpackChunkgrow_official_project"]||[]).push([[265],{3248:function(e,a,l){l.r(a),l.d(a,{default:function(){return M}});l(560);var i=l(6252),s=l(3577),o=l(2262),n=l(2201),c=l(6659),t=l(9567),u=l(4887),p=l(7695);const m={class:"wrap"},d={class:"main"},v={class:"employee"},g={class:"employee-head"},r={class:"employee-main"},_={class:"employee-mainInner"},y={class:"employee-list"},w=["onClick"],b={class:"employee-profile"},k={class:"employee-imageBox"},N=["src"],h={class:"employee-work"},f=(0,i._)("div",{class:"employee-joiningDayBox"},null,-1),x={class:"employee-descriptionBox"},C={class:"employee-description"},D={class:"pageNation-box"},E={class:"pageNation-list"},H={class:"pageNation-item"},T=["disabled"],B=(0,i._)("div",{class:"pageNation-previous"},null,-1),P=[B],S=["onClick"],Z={class:"pageNation-numberBox"},j={class:"pageNation-number"},U={class:"pageNation-item"},W=["disabled"],Y=(0,i._)("div",{class:"pageNation-next"},null,-1),q=[Y],z=6;var I={__name:"EmployeePage",setup(e){const a=(0,o.iH)("社員紹介"),B=(0,o.iH)("EMPLOYEE"),Y=(0,o.iH)(p.Z),I=(0,n.tv)(),K=e=>{I.push({name:"EmployeeDetailPage",params:{id:e.id}})},M=Number(I.currentRoute.value.query.page)||1,F=(0,o.iH)(M),L=Math.ceil(Y.value.length/z),O=(0,i.Fl)((()=>{const e=(F.value-1)*z,a=e+z;return Y.value.slice(e,a)})),R=e=>{e>=1&&e<=L&&(F.value=e,I.push({name:"EmployeePage",query:{page:e}}),window.scrollTo(0,0))};return(0,i.bv)((()=>{window.scrollTo(0,0)})),(e,n)=>((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(c.Z),(0,i._)("main",d,[(0,i._)("section",v,[(0,i._)("div",g,[(0,i.Wm)(u.Z,{headingText:a.value,headingSubText:B.value},null,8,["headingText","headingSubText"])]),(0,i._)("div",r,[(0,i._)("div",_,[(0,i._)("ul",y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(O.value,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id,class:"employee-item wow animated fadeInUp"},[(0,i._)("a",{onClick:a=>K(e),class:"employee-link"},[(0,i._)("div",b,[(0,i._)("div",k,[(0,i._)("img",{src:l(990)(`./${e.image}`),alt:"",class:"employee-image"},null,8,N)]),(0,i._)("div",h,[f,(0,i._)("div",x,[(0,i._)("p",C,(0,s.zw)(e.position),1)])])])],8,w)])))),128))]),(0,i._)("div",D,[(0,i._)("ul",E,[(0,i._)("li",H,[(0,i._)("a",{onClick:n[0]||(n[0]=e=>R(F.value-1)),disabled:1===F.value.value,class:"pageNation-button"},P,8,T)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,o.SU)(L),(e=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:"pageNation-item"},[(0,i._)("a",{onClick:a=>R(e),class:(0,s.C_)([{active:F.value.value===e},"pageNation-button"])},[(0,i._)("div",Z,[(0,i._)("p",j,(0,s.zw)(e),1)])],10,S)])))),128)),(0,i._)("li",U,[(0,i._)("a",{onClick:n[1]||(n[1]=e=>R(F.value+1)),disabled:F.value.value===(0,o.SU)(L),class:"pageNation-button"},q,8,W)])])])])])]),(0,i.Wm)(t.Z)])]))}};const K=I;var M=K}}]);
//# sourceMappingURL=265.9c273c8f.js.map