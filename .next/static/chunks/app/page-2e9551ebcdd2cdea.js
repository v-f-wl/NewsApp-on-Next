(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2967:function(e,t,s){Promise.resolve().then(s.bind(s,4271))},4271:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return I}});var l=s(9268),n=s(6006),a=s(1033),i=s(1712),r=s(5846),c=s.n(r),o=s(3393);let d=()=>{let e=i.Z.get("id"),[t,s]=(0,n.useState)(""),[r,d]=(0,n.useState)(""),[x,m]=(0,n.useState)(!1),u=i.Z.get("name"),g=i.Z.get("color");(0,n.useEffect)(()=>{e?(s("/profilepage/?id=".concat(e)),d("/settings/?id=".concat(e))):(s("/authpage"),d("/authpage"))},[e]);let h=()=>{m(e=>!e)},p=()=>{i.Z.remove("name"),i.Z.remove("id"),i.Z.remove("token"),i.Z.remove("color"),window.location.reload()};return(0,l.jsx)("div",{className:"justify-self-end flex items-center md:gap-4 h-full",children:(0,l.jsxs)("div",{className:"px-2 shadow-sm h-[40px] flex justify-between items-center gap-2 w-[240px] sm:w-[310px] lg:w-[310px] rounded-lg",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,l.jsx)("div",{style:{backgroundColor:g},className:"w-[25px] h-[25px] lg:max-w-[30px] lg:max-h-[30px] bg-neutral-200 rounded-lg"}),(0,l.jsx)("div",{className:"font-light text-sm text-slate-800 w-3/4 overflow-hidden",children:u})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(o.$Pu,{onClick:()=>h(),size:24,className:"text-orange-600 cursor-pointer"}),x?(0,l.jsx)("div",{className:"w-[150px] absolute bg-white p-4 right-0 top-10 border  rounded-lg z-20",children:(0,l.jsxs)("ul",{className:"flex flex-col gap-3",children:[(0,l.jsxs)(c(),{href:"/",className:"cursor-pointer flex items-center gap-1",children:[(0,l.jsx)(a.VdP,{size:18}),"Dashdoard"]}),(0,l.jsxs)(c(),{href:t,className:"cursor-pointer flex items-center gap-1",children:[(0,l.jsx)(a.nf1,{size:18}),"Profile"]}),(0,l.jsxs)(c(),{href:r,className:"cursor-pointer flex items-center gap-1",children:[(0,l.jsx)(a.zPD,{size:18}),"Settings"]}),(0,l.jsxs)("li",{className:"cursor-pointer flex items-center gap-1",onClick:()=>p(),children:[(0,l.jsx)(a.k0d,{size:18}),"Log out"]})]})}):null]})]})})},x=e=>{let{search:t}=e,[s,r]=(0,n.useState)(!1),[o,x]=(0,n.useState)(!1),m=i.Z.get("id");(0,n.useEffect)(()=>{m&&x(!0),r(!0)},[m]);let u=()=>(0,l.jsxs)("div",{className:"justify-self-end flex gap-4 items-center",children:[(0,l.jsx)(c(),{href:"/authpage",className:"cursor-pointer py-2 px-3 rounded-lg border text-orange-400",children:"LogIn"}),(0,l.jsx)(c(),{href:"/authpage?id=signup",className:"cursor-pointer py-2 px-3 rounded-lg bg-orange-400 text-white",children:"Sign Up"})]});return(0,l.jsxs)("header",{className:"h-[65px] bg-white rounded-b-lg grid grid-cols-2 lg:grid-cols-3 grid-rows-1 items-center px-5 shadow-md shadow-slate-400/10",children:[(0,l.jsxs)(c(),{href:"/",className:"font-semibold text-slate-600 text-base lg:text-2xl flex items-center gap-1",children:[(0,l.jsx)(a.kUE,{size:24}),(0,l.jsx)("div",{className:"",children:"Flumpf"})]}),(0,l.jsx)("div",{className:"hidden lg:block p-2"}),s?o?(0,l.jsx)(d,{}):(0,l.jsx)(u,{}):null]})},m=()=>{let e=i.Z.get("id"),[t,s]=(0,n.useState)(""),[r,o]=(0,n.useState)("");return(0,n.useEffect)(()=>{e?(s("/profilepage/?id=".concat(e)),o("/settings/?id=".concat(e))):(s("/authpage"),o("/authpage"))},[e]),(0,l.jsx)("nav",{className:"h-[40px] lg:h-full bg-white lg:bg-transparent rounded-lg absolute bottom-2 z-50 left-0 right-0 lg:sticky",children:(0,l.jsxs)("ul",{className:"flex items-center justify-center lg:justify-start lg:items-start lg:flex-col gap-8 lg:gap-4 py-2 h-full",children:[(0,l.jsxs)(c(),{href:t,className:"flex gap-2 items-center cursor-pointer",children:[(0,l.jsx)(a.nf1,{size:24,className:"text-orange-500"}),(0,l.jsx)("span",{className:"hidden lg:block mt-0 tracking-wider",children:"Profile"})]}),(0,l.jsxs)(c(),{href:"/",className:"flex gap-2 items-center cursor-pointer",children:[(0,l.jsx)(a.VdP,{size:24,className:"text-orange-500"}),(0,l.jsx)("span",{className:"hidden lg:block mt-0 tracking-wider",children:"Dashdoard"})]}),(0,l.jsxs)(c(),{href:r,className:"flex gap-2 items-center cursor-pointer",children:[(0,l.jsx)(a.zPD,{size:24,className:"text-orange-500"}),(0,l.jsx)("span",{className:"hidden lg:block mt-0 tracking-wider",children:"Settings"})]})]})})},u=e=>{let{isGrid:t,children:s}=e;return(0,l.jsx)("div",{className:"\n        p-2 \n        lg:p-8 \n        rounded-t-lg \n        flex \n        flex-col-reverse \n        overflow-hidden \n        h-full\n        w-full\n        lg:grid \n        ".concat(t?"lg:grid-cols-LeftRight":"lg:grid-cols-Profile","\n        gap-2 \n        lg:gap-8 justify-end\n        lg:justify-between\n        "),children:s})};var g=s(4214),h=s(6008),p=s(6066),f=s.n(p),j=["funny","humor","life","stories","adventures","memories","laughter","friends","family","travel","hobbies","entertainment","inspiration","creativity","food","music","books","movies","pets","nature","celebrations","random","dailyroutine","weekendvibes","relaxation","achievements","reflection"];let v=e=>{let{value:t,disabled:s,toggle:n}=e;return(0,l.jsx)("div",{onClick:()=>n(t),className:"\n        ".concat(s?"bg-orange-400":"","\n        ").concat(s?"text-white":"","\n        py-1 \n        px-2 \n        border \n        rounded-full \n        cursor-pointer\n      "),children:t})},N=e=>{let{getTags:t}=e,[s,i]=(0,n.useState)(!1),[r,c]=(0,n.useState)([]),o=e=>{if(-1===r.indexOf(e)&&r.length<=4){let t=[...r,e];c(t)}else{let t=r.filter(t=>t!==e);c(t)}},d=()=>{t(r),i(!1)};return(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("div",{onClick:()=>i(!0),className:"cursor-pointer w-[80px] py-2 rounded-lg flex items-center justify-center border",children:"Add tags"}),(0,l.jsxs)("div",{className:"\n          ".concat(s?"top-0":"-top-[800px]"," \n          absolute \n          left-0\n          bg-white\n          z-40 \n          w-full \n          h-full \n          transition-all\n          py-8\n          px-4\n          overflow-y-scroll\n        "),children:[(0,l.jsx)("h2",{className:"font-semibold text-2xl text-slate-500",children:"Select tags"}),(0,l.jsx)("span",{className:"text-slate-600 font-light text-sm",children:"Maximum number of tags: 5"}),(0,l.jsx)("div",{className:"flex gap-2 flex-wrap mt-4  overflow-y-scroll",children:j.map(e=>(0,l.jsx)(v,{disabled:-1!==r.indexOf(e),value:e,toggle:o},e))}),(0,l.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,l.jsx)("div",{onClick:()=>d(),className:" mt-2  cursor-pointer  w-1/4  py-2  rounded-lg  flex  items-center  justify-center  text-white  bg-orange-400",children:"add"}),(0,l.jsxs)("span",{className:"font-light text-sm text-orange-400",children:["Selected ",r.length,"/5"]})]}),(0,l.jsx)("div",{className:"absolute top-4 right-4",onClick:()=>i(!1),children:(0,l.jsx)(a.SV5,{size:24})})]})]})},w=()=>{let[e,t]=(0,n.useState)(!1),[s,r]=(0,n.useState)(null),[c,o]=(0,n.useState)(""),[d,x]=(0,n.useState)(!1),[m,u]=(0,n.useState)([]),p=(0,h.useRouter)(),j=i.Z.get("id"),v=i.Z.get("name"),w=i.Z.get("color"),b=()=>{i.Z.get("token")?t(!0):p.push("/authpage")},y=()=>{r(null)};async function k(e){let t=e.target.files[0];try{await new Promise((e,s)=>{new(f())(t,{quality:.95,maxWidth:900,maxHeight:900,success(e){if(e.size<=1048576){let t=new FileReader;t.onload=function(e){let t=e.target.result;r(t)},t.onerror=function(e){s(e)},t.readAsDataURL(e)}else console.log("error")},error(e){s(e)}})})}catch(e){console.error(e)}}let S=async()=>{if(x(!0),null===s&&0===c.length)return x(!1),!1;try{if(null===s)g.Z.post("/api/postCreate",{text:c,nameValue:v,userId:j,color:w,tags:m}).then(e=>console.log(e)).catch(()=>{x(!1)}),t(!1),x(!1),r(null),o(""),window.location.reload();else{let e=JSON.stringify({data:s}),l=await g.Z.post("/api/uploads/",e,{headers:{"Content-Type":"application/json"}}),n={text:c,nameValue:v,userId:j,color:w,tags:m,imagePost:[{url:l.data.url,id:l.data.id}]};await g.Z.post("/api/postCreate",n),t(!1),x(!1),r(null),o(""),window.location.reload()}}catch(e){x(!1)}x(!1)};return(0,l.jsxs)("div",{className:" flex  items-center rounded-lg  bg-white  sticky  z-10 top-0  shadow-md  shadow-slate-400/10 ",children:[(0,l.jsx)("div",{className:"m-3 w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center",children:(0,l.jsx)(a.lFz,{size:22,className:"text-white"})}),(0,l.jsx)("div",{onClick:()=>b(),className:"text-zinc-300 font-light text-sm lg:text-base cursor-pointer w-full",children:e?"":"Create Post"}),(0,l.jsx)("div",{className:"\n          absolute \n          top-16\n          ".concat(e?"opacity-100":"opacity-0","\n          ").concat(e?"visible":"invisible","\n          ").concat(e?"z-10":"-z-10","\n          transition\n          border \n          w-full \n          bg-white\n          overflow-hidden\n          rounded-lg\n          shadow-lg shadow-slate-400/40\n        "),children:(0,l.jsxs)("div",{className:"w-full h-full relative",children:[(0,l.jsx)("div",{onClick:()=>t(!1),className:"  text-slate-500  absolute  top-4 right-4  cursor-pointer z-10 ",children:(0,l.jsx)(a.SV5,{size:24})}),(0,l.jsxs)("div",{className:"py-8 px-4 flex flex-col gap-2 relative",children:[d?(0,l.jsx)("div",{className:"absolute inset-0 bg-slate-400 bg-opacity-40 z-30 flex items-center justify-center",children:(0,l.jsx)("div",{className:"p-8 border border-white rounded-lg animate-spin"})}):null,(0,l.jsxs)("label",{className:"flex flex-col gap-4",children:[(0,l.jsx)("h3",{className:"font-semibold text-2xl text-slate-500",children:"Enter You Post"}),(0,l.jsx)("textarea",{value:c,onChange:e=>o(e.target.value),cols:"50",rows:"3",className:"outline-none w-full resize-none",placeholder:"Write here..."})]}),s&&(0,l.jsxs)("div",{className:"max-w-[150px] max-h-[150px] lg:max-w-[250px] lg:max-h-[250px] rounded-lg relative flex items-center justify-center overflow-hidden",children:[(0,l.jsx)("div",{onClick:()=>y(),className:"absolute bg-white top-2 right-2 rounded-md ",children:(0,l.jsx)(a.oHP,{size:24,className:"text-orange-400 cursor-pointer"})}),(0,l.jsx)("img",{src:s,alt:"image",className:"w-auto h-auto rounded-lg object-cover object-center"})]}),(0,l.jsx)("div",{className:"flex items-center gap-2",children:(0,l.jsxs)("div",{className:"w-[30px] h-[30px] overflow-hidden border relative flex items-center justify-center rounded-sm",children:[(0,l.jsx)(a.Ypm,{size:26,className:"text-orange-400"}),(0,l.jsx)("form",{method:"post",onChange:k,className:"absolute top-0 opacity-0 cursor-pointer",children:(0,l.jsx)("input",{type:"file",name:"file",className:"cursor-pointer"})})]})}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("div",{onClick:S,className:"bg-orange-400 text-white w-1/4 py-2 rounded-lg cursor-pointer flex items-center justify-center",children:"Create"}),(0,l.jsx)(N,{getTags:e=>u(e)})]})]})]})})]})};var b=s(4021),y=s(6462);let k=e=>{let{userId:t,color:s,isLoaded:n,authorName:a,dateString:i}=e;return(0,l.jsxs)(c(),{href:"/userprofile?id=".concat(t),className:"grid grid-cols-post grid-rows-2 items-center gap-y-0 gap-x-2",children:[(0,l.jsx)("div",{style:{backgroundColor:s},className:"w-8 h-8 rounded-lg row-span-full"}),(0,l.jsx)("span",{className:"\n          ".concat(n?"":"w-[100px]","\n          ").concat(n?"":"h-[15px]","\n          ").concat(n?"":"bg-slate-300","\n          ").concat(n?"":"animate-pulse","\n          ").concat(n?"":"rounded-md","\n          font-light \n          text-slate-800 \n          text-sm \n          self-end\n          w-[250]\n          lg:w-[290px]\n          overflow-hidden\n        "),children:n?a:""}),(0,l.jsx)("div",{className:"self-start text-xs text-slate-400",children:n?i:""})]})},S=e=>{let{isOpen:t,userId:s,color:r,isLoaded:o,authorName:d,dateString:x,onClose:m,postId:u,postText:h,imagePost:p}=e,[f,j]=(0,n.useState)(""),[v,N]=(0,n.useState)(),[w,b]=(0,n.useState)(!1),[S,z]=(0,n.useState)(!1),C=i.Z.get("id"),Z=i.Z.get("name");(0,n.useEffect)(()=>{t&&g.Z.get("/api/getComments/?postId=".concat(u)).then(e=>{N(e.data.comments),b(!0)})},[t,u]);let P=()=>{if(0===f.length||S)return;z(!0);let e={userId:C,text:f,name:Z,time:new Date};g.Z.post("/api/addComments/?id=".concat(u),e).then(e=>{j(""),N(e.data.updatedPost.comments),z(!1)}).catch(()=>z(!1))},E=e=>{if(!e)return"";let t=new Date(e),s=t.toLocaleDateString("en-US",{hour:"numeric",minute:"numeric",year:"numeric",month:"long",day:"numeric"});return s},I=e=>{let{name:t,userId:s,time:n,text:a}=e;return(0,l.jsxs)("div",{className:"border-l border-orange-400 p-2",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)(c(),{href:"/userprofile/?id=".concat(s),className:"font-bold text-md text-slate-500",children:t}),(0,l.jsx)("div",{className:"text-xs font-light",children:E(n)})]}),(0,l.jsx)("div",{className:"pt-2 text-md",children:a})]},(0,y.Z)())};return(0,l.jsx)("div",{className:"".concat(t?"flex":"hidden"," fixed top-0 bg-slate-600 bg-opacity-20 left-0 w-full h-full z-20 items-center justify-center"),children:(0,l.jsxs)("div",{className:"h-full w-full lg:w-2/4 lg:max-h-[70vh] p-4 lg:p-8 bg-white lg:rounded-lg flex flex-col gap-4 overflow-y-scroll",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)(k,{userId:s,color:r,isLoaded:o,authorName:d,dateString:x}),(0,l.jsx)("div",{className:"cursor-pointer",onClick:m,children:(0,l.jsx)(a.oHP,{size:24})})]}),(0,l.jsxs)("div",{className:"py-4 text-xl",children:[h,void 0!==p&&p.length>0&&(0,l.jsx)("div",{className:"flex items-center overflow-hidden",children:p.map(e=>(0,l.jsx)("div",{className:"w-[100px] h-[100px] rounded-lg",children:(0,l.jsx)("img",{src:e.url,className:"h-full w-full object-cover rounded-lg"})},"".concat(e.id,"1fddv2a")))})]}),(0,l.jsx)("h3",{className:"font-bold text-slate-600 text-xl",children:"Сomments"}),(0,l.jsx)("div",{className:"h-full overflow-y-scroll flex flex-col gap-4",children:w?(0,l.jsx)(l.Fragment,{children:0==v.length?(0,l.jsx)("div",{className:"font-semibold capitalize text-lg",children:"no comments yet"}):v.map(e=>(0,l.jsx)(I,{userId:e.userId,name:e.name,time:e.time,text:e.text},(0,y.Z)()))}):(0,l.jsx)("div",{className:"",children:"Loading..."})}),(0,l.jsxs)("div",{className:"py-4 border-t flex flex-col gap-2",children:[(0,l.jsx)("textarea",{value:f,onChange:e=>j(e.target.value),rows:"2",className:"p-2 w-full resize-none border rounded-lg outline-none"}),(0,l.jsx)("div",{onClick:()=>P(),className:"\n              ".concat(S?"opacity-40":"","\n              rounded-lg \n              py-4\n              px-2 \n              flex \n              flex-col \n              items-center \n              justify-center\n              bg-orange-400\n              text-white\n              text-xl\n              font-semibold\n              cursor-pointer\n              "),children:"Send"})]})]})})},z=e=>{let{openEdit:t,postText:s,onClose:a,editedText:i,posrId:r}=e,[c,o]=(0,n.useState)(s),[d,x]=(0,n.useState)(!1),m=()=>{x(!0),g.Z.patch("/api/postEdit",{postId:r,editedText:c}).then(()=>{a(),x(!1),i(c)})};return(0,l.jsx)("div",{className:"".concat(t?"flex":"hidden"," fixed top-0 lg:bg-slate-600 lg:bg-opacity-20 left-0 w-full h-full z-20 items-center justify-center"),children:(0,l.jsxs)("div",{className:" h-full w-full  lg:w-2/4  lg:h-auto  lg:max-h-[70vh]  p-4  lg:p-8  bg-slate-600  lg:bg-white  bg-opacity-20  lg:rounded-lg  flex  flex-col  gap-4  overflow-y-scroll  justify-center ",children:[d?(0,l.jsx)("div",{className:"w-full h-[250px] bg-white border flex items-center justify-center rounded-lg font-semibold text-xl",children:"Please Wait.."}):(0,l.jsx)("textarea",{className:"w-full h-[250px] resize-none text-xl font-medium p-2 lg:p-4 outline-none border border-orange-400 rounded-lg",value:c,onChange:e=>o(e.target.value)}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("div",{onClick:a,className:"cursor-pointer bg-white font-semibold text-lg py-3 px-2 lg:border rounded-lg",children:"Cancel"}),(0,l.jsx)("div",{onClick:m,className:"cursor-pointer font-semibold text-lg py-3 px-5 bg-orange-400 text-white rounded-lg ",children:"Edit"})]})]})})},C=e=>{let{isLoaded:t,postText:s,authorName:r,createdAt:c,color:o,userId:d,idPost:x,likesArr:m,comments:u,imagePost:h,tags:p,selectTag:f}=e,[j,v]=(0,n.useState)(!1),[N,w]=(0,n.useState)(!1),[C,Z]=(0,n.useState)(!1),[P,E]=(0,n.useState)(!1),[I,L]=(0,n.useState)(),[T,D]=(0,n.useState)(),[_,A]=(0,n.useState)(!1),[O,R]=(0,n.useState)(s),[V,F]=(0,n.useState)(!1),U=new Date(c),H=U.toLocaleDateString("en-US",{hour:"numeric",minute:"numeric",year:"numeric",month:"long",day:"numeric"}),G=i.Z.get("id"),W=e=>{j&&!e.target.closest(".pin")?v(!1):v(!0)},M=()=>{g.Z.delete("/api/postRemove/?id=".concat(x)).then(()=>{w(!0)}).catch(e=>console.log(e))},Y=()=>{P?g.Z.patch("/api/postLikeTarger/?id=".concat(x),{userId:G}).then(()=>{L(e=>e-1),E(!1)}):g.Z.patch("/api/postLikeTarger/?id=".concat(x),{userId:G}).then(()=>{L(e=>e+1),E(!0)})};return(0,n.useEffect)(()=>{void 0!==d&&d===G&&Z(!0),void 0!==m&&(L(m.length),-1!==m.indexOf(G)&&E(!0)),void 0!==u&&D(u.length);let e=e=>{(!e.target.closest(".menu-container")||e.target.closest(".pin"))&&v(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[u,m,G,d]),(0,l.jsxs)("div",{className:"".concat(N?"hidden":""," p-4 bg-white rounded-lg flex flex-col gap-4"),children:[(0,l.jsx)(z,{openEdit:V,postText:s,editedText:e=>R(e),onClose:()=>F(!1),posrId:x}),(0,l.jsx)(S,{onClose:()=>A(!1),isOpen:_,userId:d,color:o,postText:s,isLoaded:t,authorName:r,dateString:H,postId:x,imagePost:h}),(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)(k,{userId:d,color:o,isLoaded:t,authorName:r,dateString:H}),(0,l.jsxs)("div",{className:"".concat(C?"flex":"hidden","  relative menu-container z-0"),onClick:e=>W(e),children:[(0,l.jsx)(a.fXH,{size:22}),(0,l.jsx)("div",{className:"\n              ".concat(j?"visible":"invisible","\n              ").concat(j?"top-10":"top-8","\n              transition-all\n              py-3\n              px-2\n              right-0\n              absolute \n              border \n              rounded-lg\n              w-[140px]\n              bg-white\n              shadow-md \n            shadow-slate-400/10\n            "),children:(0,l.jsxs)("ul",{className:"flex flex-col gap-2",children:[(0,l.jsx)("li",{onClick:()=>M(),className:"\n                    pin\n                    relative\n                    z-20\n                    pin\n                    flex \n                    items-center \n                    gap-2 \n                    cursor-pointer\n                  ",children:(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(b.gKM,{size:24}),(0,l.jsx)("span",{className:"",children:"Remove"})]})}),(0,l.jsx)("li",{onClick:()=>F(!0),className:"\n                    pin\n                    relative\n                    z-20\n                    pin\n                    flex \n                    items-center \n                    gap-2 \n                    cursor-pointer\n                  ",children:(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(b.FNg,{size:24}),(0,l.jsx)("span",{className:"",children:"Edit"})]})})]})})]})]}),(0,l.jsx)("div",{className:"\n          ".concat(t?"":"h-[50px]","\n          ").concat(t?"":"animate-pulse","\n          ").concat(t?"":"bg-slate-300","\n          ").concat(t?"":"rounded-lg","\n\n          text-sm \n          lg:text-xl\n          tracking-wide\n        "),children:O}),(0,l.jsx)("div",{className:"",children:p&&(0,l.jsx)("div",{className:"flex items-center flex-wrap gap-2",children:p.map(e=>(0,l.jsxs)("div",{onClick:()=>f(e),className:"text-sm cursor-pointer text-slate-400 lg:hover:text-orange-400 lg:transition",children:["#",e]},(0,y.Z)()))})}),t&&(0,l.jsx)(l.Fragment,{children:h.length>0?(0,l.jsx)("div",{className:"flex justify-center",children:h.map(e=>(0,l.jsx)("div",{className:" max-w-[290px] max-h-[290px] lg:max-w-[350px] lg:max-h-[350px] flex items-center justify-center rounded-lg overflow-hidden",children:(0,l.jsx)("img",{src:e.url,alt:"Description of the image",className:"w-auto h-auto rounded-lg object-cover object-center"},"".concat(e.id,"1fd2a"))},e.id))}):null}),t?(0,l.jsxs)("div",{className:"".concat(G?"flex":"hidden"," items-center gap-5"),children:[(0,l.jsxs)("div",{onClick:()=>Y(),className:"px-2 py-2 border flex items-center gap-2 rounded-full cursor-pointer",children:[(0,l.jsx)(a.lo,{size:24,className:"".concat(P?"text-red-500":"text-slate-400")}),(0,l.jsx)("span",{className:"text-slate-800",children:I})]}),(0,l.jsxs)("div",{onClick:()=>A(!0),className:"px-2 py-2 border flex items-center gap-2 rounded-full cursor-pointer",children:[(0,l.jsx)(a.RG4,{size:24,className:"text-slate-400"}),(0,l.jsx)("span",{className:"text-slate-800",children:T})]})]}):(0,l.jsx)("div",{className:"animate-pulsew-[100px]h-[40px]rounded-lg bg-slate-300"})]})},Z=e=>{let{value:t,clearTag:s}=e;return(0,l.jsxs)("div",{className:" p-3 flex  items-center justify-between rounded-lg  bg-white  sticky  z-10 top-0  shadow-md  shadow-slate-400/10 ",children:[(0,l.jsxs)("div",{className:"h-8 leading-8 font-semibold text-xl text-slate-700",children:["#",t]}),(0,l.jsx)("div",{onClick:s,className:"cursor-pointer",children:(0,l.jsx)(a.SV5,{size:20,className:"text-orange-400"})})]})},P=()=>{let[e,t]=(0,n.useState)(!0),[s,a]=(0,n.useState)([]),[i,r]=(0,n.useState)(!1),[c,o]=(0,n.useState)(""),[d,x]=(0,n.useState)(s);(0,n.useEffect)(()=>{if(""===c)return;let e=[...s],t=e.filter(e=>e.tags.includes(c));x(t)},[c,s]);let m=async()=>{t(!0),r(!1);try{let e=await g.Z.get("/api/postGetAll");a(e.data.reverse()),x(e.data),t(!1)}catch(e){r(!0)}};(0,n.useEffect)(()=>{m()},[]);let u=()=>{o(""),x(s)};return(0,l.jsxs)("div",{className:"relative max-h-[80vh] lg:max-h-[90vh] overflow-y-scroll rounded-lg lg:rounded-t-xl snap-none",children:[""===c?(0,l.jsx)(w,{}):(0,l.jsx)(Z,{value:c,clearTag:()=>u()}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 overflow-hidden pt-4 lg:pt-8 mb-4",children:[i&&(0,l.jsxs)("div",{className:" absolute  inset-0  bg-white  rounded-t-lg  z-50 flex  flex-col  items-center  justify-center  gap-2",children:[(0,l.jsx)("div",{className:" text-xl font-semibold",children:"Something went wrong..."}),(0,l.jsx)("div",{onClick:()=>m(),className:"inline-block py-3 px-2 bg-orange-400 text-white rounded-lg cursor-pointer",children:"Try Again"})]}),(e?[void 0,void 0,void 0,void 0]:d).map((t,s)=>e?(0,l.jsx)(C,{isLoaded:!1},s):(0,l.jsx)(C,{isLoaded:!0,idPost:t._id,userId:t.user,postText:t.text,authorName:t.name,createdAt:t.createdAt,likeCount:t.likesCount,likesArr:t.likesUser,color:t.color,image:t.image,comments:t.comments,imagePost:t.imagePost,tags:t.tags,selectTag:e=>o(e)},t._id))]})]})},E=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"container mx-auto max-w-screen-xl flex flex-col gap-1 h-[100%]",children:t})};function I(){return(0,l.jsx)("div",{children:(0,l.jsxs)(E,{children:[(0,l.jsx)(x,{search:!0}),(0,l.jsxs)(u,{isGrid:!0,children:[(0,l.jsx)(m,{}),(0,l.jsx)(P,{})]})]})})}s(6571)}},function(e){e.O(0,[104,776,81,667,139,744],function(){return e(e.s=2967)}),_N_E=e.O()}]);