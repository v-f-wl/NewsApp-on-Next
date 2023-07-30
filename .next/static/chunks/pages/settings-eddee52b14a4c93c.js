(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{8076:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return r(2211)}])},848:function(e,t,r){"use strict";var n=r(1844);let a=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"container mx-auto max-w-screen-xl flex flex-col gap-1 h-[100%]",children:t})};t.Z=a},2631:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(1844),a=r(5784),s=r(8193),o=r(1955),l=r(1664),i=r.n(l),c=r(6893);let u=()=>{let e=o.Z.get("id"),[t,r]=(0,a.useState)(""),[l,u]=(0,a.useState)(""),[d,f]=(0,a.useState)(!1),h=o.Z.get("name"),g=o.Z.get("color");(0,a.useEffect)(()=>{e?(r("/profilepage/?id=".concat(e)),u("/settings/?id=".concat(e))):(r("/authpage"),u("/authpage"))},[e]);let x=()=>{f(e=>!e)},p=()=>{o.Z.remove("name"),o.Z.remove("id"),o.Z.remove("token"),o.Z.remove("color"),window.location.reload()};return(0,n.jsx)("div",{className:"justify-self-end flex items-center md:gap-4 h-full",children:(0,n.jsxs)("div",{className:"px-2 shadow-sm h-[40px] flex justify-between items-center gap-2 w-[240px] sm:w-[310px] lg:w-[310px] rounded-lg",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,n.jsx)("div",{style:{backgroundColor:g},className:"w-[25px] h-[25px] lg:max-w-[30px] lg:max-h-[30px] bg-neutral-200 rounded-lg"}),(0,n.jsx)("div",{className:"font-light text-sm text-slate-800 w-3/4 overflow-hidden",children:h})]}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(c.$Pu,{onClick:()=>x(),size:24,className:"text-orange-600 cursor-pointer"}),d?(0,n.jsx)("div",{className:"w-[150px] absolute bg-white p-4 right-0 top-10 border  rounded-lg z-20",children:(0,n.jsxs)("ul",{className:"flex flex-col gap-3",children:[(0,n.jsxs)(i(),{href:"/",className:"cursor-pointer flex items-center gap-1",children:[(0,n.jsx)(s.VdP,{size:18}),"Dashdoard"]}),(0,n.jsxs)(i(),{href:t,className:"cursor-pointer flex items-center gap-1",children:[(0,n.jsx)(s.nf1,{size:18}),"Profile"]}),(0,n.jsxs)(i(),{href:l,className:"cursor-pointer flex items-center gap-1",children:[(0,n.jsx)(s.zPD,{size:18}),"Settings"]}),(0,n.jsxs)("li",{className:"cursor-pointer flex items-center gap-1",onClick:()=>p(),children:[(0,n.jsx)(s.k0d,{size:18}),"Log out"]})]})}):null]})]})})},d=e=>{let{search:t}=e,[r,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1),f=o.Z.get("id");(0,a.useEffect)(()=>{f&&d(!0),l(!0)},[f]);let h=()=>(0,n.jsxs)("div",{className:"justify-self-end flex gap-4 items-center",children:[(0,n.jsx)(i(),{href:"/authpage",className:"cursor-pointer py-2 px-3 rounded-lg border text-orange-400",children:"LogIn"}),(0,n.jsx)(i(),{href:"/authpage?id=signup",className:"cursor-pointer py-2 px-3 rounded-lg bg-orange-400 text-white",children:"Sign Up"})]});return(0,n.jsxs)("header",{className:"h-[65px] bg-white rounded-b-lg grid grid-cols-2 lg:grid-cols-3 grid-rows-1 items-center px-5 shadow-md shadow-slate-400/10",children:[(0,n.jsxs)(i(),{href:"/",className:"font-semibold text-slate-600 text-base lg:text-2xl flex items-center gap-1",children:[(0,n.jsx)(s.kUE,{size:24}),(0,n.jsx)("div",{className:"",children:"Flumpf"})]}),(0,n.jsx)("div",{className:"hidden lg:block p-2"}),r?c?(0,n.jsx)(u,{}):(0,n.jsx)(h,{}):null]})};var f=d},4728:function(e,t,r){"use strict";var n=r(1844),a=r(5784),s=r(8193),o=r(1664),l=r.n(o),i=r(1955);let c=()=>{let e=i.Z.get("id"),[t,r]=(0,a.useState)(""),[o,c]=(0,a.useState)("");return(0,a.useEffect)(()=>{e?(r("/profilepage/?id=".concat(e)),c("/settings/?id=".concat(e))):(r("/authpage"),c("/authpage"))},[e]),(0,n.jsx)("nav",{className:"h-[40px] lg:h-full bg-white lg:bg-transparent rounded-lg absolute bottom-2 z-50 left-0 right-0 lg:sticky",children:(0,n.jsxs)("ul",{className:"flex items-center justify-center lg:justify-start lg:items-start lg:flex-col gap-8 lg:gap-4 py-2 h-full",children:[(0,n.jsxs)(l(),{href:t,className:"flex gap-2 items-center cursor-pointer",children:[(0,n.jsx)(s.nf1,{size:24,className:"text-orange-500"}),(0,n.jsx)("span",{className:"hidden lg:block mt-0 tracking-wider",children:"Profile"})]}),(0,n.jsxs)(l(),{href:"/",className:"flex gap-2 items-center cursor-pointer",children:[(0,n.jsx)(s.VdP,{size:24,className:"text-orange-500"}),(0,n.jsx)("span",{className:"hidden lg:block mt-0 tracking-wider",children:"Dashdoard"})]}),(0,n.jsxs)(l(),{href:o,className:"flex gap-2 items-center cursor-pointer",children:[(0,n.jsx)(s.zPD,{size:24,className:"text-orange-500"}),(0,n.jsx)("span",{className:"hidden lg:block mt-0 tracking-wider",children:"Settings"})]})]})})};t.Z=c},9051:function(e,t,r){"use strict";var n=r(1844);let a=e=>{let{isGrid:t,children:r}=e;return(0,n.jsx)("div",{className:"\n        p-2 \n        lg:p-8 \n        rounded-t-lg \n        flex \n        flex-col-reverse \n        overflow-hidden \n        h-full\n        w-full\n        lg:grid \n        ".concat(t?"lg:grid-cols-LeftRight":"lg:grid-cols-Profile","\n        gap-2 \n        lg:gap-8 justify-end\n        lg:justify-between\n        "),children:r})};t.Z=a},2211:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(1844);r(1342),r(4190);var a=r(9008),s=r.n(a),o=r(848),l=r(2631),i=r(9051),c=r(4728),u=r(5784),d=r(1163),f=r(1955),h=r(6154),g=r(5651);let x=e=>{let{title:t}=e;return(0,n.jsx)("h2",{className:" text-center  text-2xl  font-bold text-slate-600 ",children:t})},p=e=>{let{isOpen:t}=e,[r,a]=(0,u.useState)("fff"),[s,o]=(0,u.useState)(""),[l,i]=(0,u.useState)(""),[c,d]=(0,u.useState)(!1);(0,u.useEffect)(()=>{o(f.Z.get("color")),i(f.Z.get("id"))},[]);let p=()=>{d(!0),h.Z.patch("/api/changeColor/?id=".concat(l),{colorCode:r}).then(()=>{f.Z.set("color",r),d(!1),t(),window.location.reload()}).catch(()=>{d(!1)})};return(0,n.jsxs)("div",{className:"\n        relative\n        w-[95%]\n        lg:w-2/5\n        bg-white \n        rounded-lg\n        py-8\n        px-4 \n        overflow-hidden\n      ",children:[(0,n.jsx)("div",{className:"\n        ".concat(c?"block":"hidden","\n        absolute\n        inset-0\n        bg-slate-400 \n        bg-opacity-60\n        z-20\n        flex\n        items-center\n        justify-center\n      "),children:(0,n.jsx)("div",{className:"w-8 h-8 rounded-lg animate-spin border"})}),(0,n.jsx)(x,{title:"Choose a color"}),(0,n.jsxs)("div",{className:"mt-8 flex justify-center gap-4",children:[(0,n.jsx)(g.gW,{color:r,onChange:a}),(0,n.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,n.jsx)("span",{className:"",children:"Your color:"}),(0,n.jsx)("div",{style:{backgroundColor:s},className:"w-[30px] h-[30px] rounded-lg border"})]}),(0,n.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,n.jsx)("span",{className:"",children:"New color:"}),(0,n.jsx)("div",{style:{backgroundColor:r},className:"w-[30px] h-[30px] rounded-lg border"})]})]})]}),(0,n.jsxs)("div",{className:"mt-4 flex justify-center gap-4 ",children:[(0,n.jsx)("div",{onClick:()=>t(),className:"border-2 py-2 px-4 rounded-lg cursor-pointer transition hover:border-slate-900",children:"Cancel"}),(0,n.jsx)("div",{onClick:()=>p(),className:"bg-orange-400 text-white py-2 px-4 rounded-lg cursor-pointer hover:opacity-70",children:"Change"})]})]})},m=e=>{let{children:t,isOpen:r}=e;return(0,n.jsx)("div",{className:"\n        ".concat(r?"flex":"hidden","\n        absolute \n      bg-slate-600 \n        bg-opacity-50 \n        inset-0 \n        items-center \n        justify-center\n      "),children:t})},v=e=>{let{isOpen:t}=e,[r,a]=(0,u.useState)(""),[s,o]=(0,u.useState)(!0),[l,i]=(0,u.useState)(!0),[c,d]=(0,u.useState)(!1),g=f.Z.get("id"),p=e=>{for(let t=0;t<e.length;t++)if(/[0-9]/.test(e[t]))return o(!1),d(!1),!1;return!0},m=e=>!(e.length<8)||(i(!1),d(!1),!1),v=e=>{p(e)&&m(e)&&(d(!0),h.Z.patch("/api/changeName/?id=".concat(g),{nameValue:r}).then(e=>console.log(e.data)),f.Z.set("name",r),t(),window.location.reload(),d(!1))};return(0,n.jsxs)("div",{className:"py-8 px-4 w-[95%] lg:w-2/5 rounded-lg overflow-hidden bg-white flex flex-col gap-4",children:[(0,n.jsx)("div",{className:"".concat(c?"flex":"hidden"," absolute inset-0 z-20 bg-slate-400 bg-opacity-60 items-center justify-center"),children:(0,n.jsx)("div",{className:"w-8 h-8 border border-white rounded-lg animate-spin"})}),(0,n.jsx)(x,{title:"Write The Name"}),(0,n.jsxs)("div",{className:"text-center capitalize flex flex-col items-center",children:[(0,n.jsx)("span",{className:"".concat(s?"text-slate-600":"text-red-400"),children:"should not contain any numbers"}),(0,n.jsx)("span",{className:"".concat(l?"text-slate-600":"text-red-400"),children:"minimum character count is 8"})]}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("input",{onChange:e=>a(e.target.value),value:r,type:"text",className:"\n            border \n            py-3 \n            px-2 \n            rounded-lg \n            capitalize\n            outline-none\n          "})}),(0,n.jsxs)("div",{className:"mt-4 flex justify-center gap-4 ",children:[(0,n.jsx)("div",{onClick:()=>t(),className:"border-2 py-2 px-4 rounded-lg cursor-pointer transition hover:border-slate-900",children:"Cancel"}),(0,n.jsx)("div",{onClick:()=>v(r),className:"bg-orange-400 text-white py-2 px-4 rounded-lg cursor-pointer hover:opacity-70",children:"Change"})]})]})},j=()=>{let[e,t]=(0,u.useState)(!1),[r,a]=(0,u.useState)(!1),[s,o]=(0,u.useState)(!1),l=f.Z.get("id"),i=(0,d.useRouter)();(0,u.useEffect)(()=>{l||i.push("/")},[l,i]);let c=()=>{f.Z.remove("name"),f.Z.remove("id"),f.Z.remove("token"),f.Z.remove("color"),window.location.reload()};return(0,n.jsxs)("div",{className:"h-full rounded-lg lg:rounded-t-lg bg-white px-4 py-8",children:[(0,n.jsx)("h2",{className:"font-bold text-3xl text-slate-700",children:"Settings"}),(0,n.jsxs)("div",{className:"mt-4 flex flex-col gap-6",children:[(0,n.jsx)("div",{onClick:()=>t(!0),className:"cursor-pointer border-l-2 border-orange-400 px-2",children:"Change Avatar Color"}),(0,n.jsx)("div",{onClick:()=>a(!0),className:"cursor-pointer border-l-2 border-orange-400 px-2",children:"Change Name"}),(0,n.jsx)("div",{className:"text-orange-400 cursor-pointer",onClick:c,children:"Log Out"})]}),(0,n.jsx)(m,{isOpen:e,children:(0,n.jsx)(p,{isOpen:()=>{t(!1)}})}),(0,n.jsx)(m,{isOpen:r,children:(0,n.jsx)(v,{isOpen:()=>{a(!1)}})})]})},b=()=>(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Flumpf - settings"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1, viewport-fit=cover"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,n.jsx)(l.Z,{}),(0,n.jsxs)(i.Z,{isGrid:!1,children:[(0,n.jsx)(c.Z,{}),(0,n.jsx)(j,{})]})]});var N=b},4190:function(){},5651:function(e,t,r){"use strict";r.d(t,{gW:function(){return O}});var n=r(5784);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(r=s[n])>=0||(a[r]=e[r]);return a}function o(e){var t=(0,n.useRef)(e),r=(0,n.useRef)(function(e){t.current&&t.current(e)});return t.current=e,r.current}var l,i=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},c=function(e){return"touches"in e},u=function(e){return e&&e.ownerDocument.defaultView||self},d=function(e,t,r){var n=e.getBoundingClientRect(),a=c(t)?function(e,t){for(var r=0;r<e.length;r++)if(e[r].identifier===t)return e[r];return e[0]}(t.touches,r):t;return{left:i((a.pageX-(n.left+u(e).pageXOffset))/n.width),top:i((a.pageY-(n.top+u(e).pageYOffset))/n.height)}},f=function(e){c(e)||e.preventDefault()},h=n.memo(function(e){var t=e.onMove,r=e.onKey,l=s(e,["onMove","onKey"]),i=(0,n.useRef)(null),h=o(t),g=o(r),x=(0,n.useRef)(null),p=(0,n.useRef)(!1),m=(0,n.useMemo)(function(){var e=function(e){f(e),(c(e)?e.touches.length>0:e.buttons>0)&&i.current?h(d(i.current,e,x.current)):r(!1)},t=function(){return r(!1)};function r(r){var n=p.current,a=u(i.current),s=r?a.addEventListener:a.removeEventListener;s(n?"touchmove":"mousemove",e),s(n?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,n=i.current;if(n&&(f(t),(!p.current||c(t))&&n)){if(c(t)){p.current=!0;var a=t.changedTouches||[];a.length&&(x.current=a[0].identifier)}n.focus(),h(d(n,t,x.current)),r(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),g({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},r]},[g,h]),v=m[0],j=m[1],b=m[2];return(0,n.useEffect)(function(){return b},[b]),n.createElement("div",a({},l,{onTouchStart:v,onMouseDown:v,className:"react-colorful__interactive",ref:i,onKeyDown:j,tabIndex:0,role:"slider"}))}),g=function(e){return e.filter(Boolean).join(" ")},x=function(e){var t=e.color,r=e.left,a=e.top,s=g(["react-colorful__pointer",e.className]);return n.createElement("div",{className:s,style:{top:100*(void 0===a?.5:a)+"%",left:100*r+"%"}},n.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},p=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r},m=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?p(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?p(parseInt(e.substring(6,8),16)/255,2):1}},v=function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:p(e.h),s:p(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:p(a/2),a:p(n,2)}},j=function(e){var t=v(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},b=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var s=Math.floor(t),o=n*(1-r),l=n*(1-(t-s)*r),i=n*(1-(1-t+s)*r),c=s%6;return{r:p(255*[n,l,o,o,i,n][c]),g:p(255*[i,n,n,l,o,o][c]),b:p(255*[o,o,i,n,n,l][c]),a:p(a,2)}},N=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},w=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,s=a<1?N(p(255*a)):"";return"#"+N(t)+N(r)+N(n)+s},_=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,s=Math.max(t,r,n),o=s-Math.min(t,r,n),l=o?s===t?(r-n)/o:s===r?2+(n-t)/o:4+(t-r)/o:0;return{h:p(60*(l<0?l+6:l)),s:p(s?o/s*100:0),v:p(s/255*100),a:a}},y=n.memo(function(e){var t=e.hue,r=e.onChange,a=g(["react-colorful__hue",e.className]);return n.createElement("div",{className:a},n.createElement(h,{onMove:function(e){r({h:360*e.left})},onKey:function(e){r({h:i(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":p(t),"aria-valuemax":"360","aria-valuemin":"0"},n.createElement(x,{className:"react-colorful__hue-pointer",left:t/360,color:j({h:t,s:100,v:100,a:1})})))}),C=n.memo(function(e){var t=e.hsva,r=e.onChange,a={backgroundColor:j({h:t.h,s:100,v:100,a:1})};return n.createElement("div",{className:"react-colorful__saturation",style:a},n.createElement(h,{onMove:function(e){r({s:100*e.left,v:100-100*e.top})},onKey:function(e){r({s:i(t.s+100*e.left,0,100),v:i(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+p(t.s)+"%, Brightness "+p(t.v)+"%"},n.createElement(x,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:j(t)})))}),k=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},E="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,Z=new Map,S=function(e){E(function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!Z.has(t)){var n=t.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',Z.set(t,n);var a=l||r.nc;a&&n.setAttribute("nonce",a),t.head.appendChild(n)}},[])},z=function(e){var t,r,l,i,c,u=e.className,d=e.colorModel,f=e.color,h=void 0===f?d.defaultColor:f,x=e.onChange,p=s(e,["className","colorModel","color","onChange"]),m=(0,n.useRef)(null);S(m);var v=(t=o(x),l=(r=(0,n.useState)(function(){return d.toHsva(h)}))[0],i=r[1],c=(0,n.useRef)({color:h,hsva:l}),(0,n.useEffect)(function(){if(!d.equal(h,c.current.color)){var e=d.toHsva(h);c.current={hsva:e,color:h},i(e)}},[h,d]),(0,n.useEffect)(function(){var e;k(l,c.current.hsva)||d.equal(e=d.fromHsva(l),c.current.color)||(c.current={hsva:l,color:e},t(e))},[l,d,t]),[l,(0,n.useCallback)(function(e){i(function(t){return Object.assign({},t,e)})},[])]),j=v[0],b=v[1],N=g(["react-colorful",u]);return n.createElement("div",a({},p,{ref:m,className:N}),n.createElement(C,{hsva:j,onChange:b}),n.createElement(y,{hue:j.h,onChange:b,className:"react-colorful__last-control"}))},M={defaultColor:"000",toHsva:function(e){return _(m(e))},fromHsva:function(e){return w(b({h:e.h,s:e.s,v:e.v,a:1}))},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||k(m(e),m(t))}},O=function(e){return n.createElement(z,a({},e,{colorModel:M}))}}},function(e){e.O(0,[617,649,893,45,511,888,179],function(){return e(e.s=8076)}),_N_E=e.O()}]);