import G from"./DocsAside.34181e47.js";import K from"./ProseCodeInline.7710d447.js";import R from"./Alert.e6da3b57.js";import U from"./DocsPageBottom.b5965dbc.js";import J from"./DocsPrevNext.bc69e57d.js";import{d as Q,G as W,a3 as X,i as Y,L as m,r as V,q as Z,o as ee,a6 as oe,b as u,K as A,w as h,I as t,c as g,g as r,f as y,e as p,N as te,D as x,t as ne,F as se,n as k,O as ae,a7 as ce,p as le,j as re,l as _e}from"./entry.78a716a3.js";import ie from"./DocsToc.e66dd23a.js";import"./ContentSlot.b5b98b74.js";import"./ProseA.3f627b5f.js";import"./EditOnLink.vue.b732c332.js";import"./DocsTocLinks.b50d50ab.js";const ue=d=>(le("data-v-59f831ff"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=Q({__name:"DocsPageLayout",setup(d){const{page:s}=W(),{config:f,tree:T}=X(),L=Y(),j=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},P=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),b=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(n=T.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),F=m(()=>j("bottom",!0)),_=V(!1),a=V(null),v=()=>L.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,N,w,B,I,$;const n=G,c=K,l=R,H=U,M=J,O=ae,q=ie,z=ce;return u(),A(z,{fluid:(N=(D=t(f))==null?void 0:D.main)==null?void 0:N.fluid,padded:(B=(w=t(f))==null?void 0:w.main)==null?void 0:B.padded,class:k(["docs-page-content",{fluid:($=(I=t(f))==null?void 0:I.main)==null?void 0:$.fluid,"has-toc":t(S),"has-aside":t(b)}])},{default:h(()=>[t(b)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(P)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ne(t(s)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(P)&&t(s)&&t(F)?(u(),g(se,{key:2},[r(H),r(M)],64)):y("",!0)]),t(S)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=E=>_.value=!t(_))},[fe,r(O,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(q,{onMove:o[1]||(o[1]=E=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Ne=_e(ve,[["__scopeId","data-v-59f831ff"]]);export{Ne as default};
