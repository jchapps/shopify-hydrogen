import{T as v,r as u,c as N,F as O,j as P,R as W}from"./index.6f748f0d.js";import{a as x,c as f,b as A}from"./02637587.js";import{u as U,b as J}from"./7467e845.js";import{useBasePath as $}from"./dacc7198.js";import"./3ed2f817.js";const H=v.forwardRef(function(t,o){var w,g;const n=U(),c=x(),[d,i]=v.useTransition(),E=$(),[C,B]=u.exports.useState(!1),[S,p]=u.exports.useState(!1),{reloadDocument:b,target:l,replace:k,onClick:h,clientState:y,prefetch:L=!0,scroll:M=!0}=t,r=J((w=t.basePath)!=null?w:E,t.to),F=u.exports.useCallback(s=>{if(h&&h(s),!b&&s.button===0&&(!l||l==="_self")&&!z(s)){s.preventDefault();const D=!!k||f(c)===f({pathname:r});n(r,{replace:D,scroll:M,clientState:y,basePath:"/"})}},[h,b,l,k,c,r,n,y,M]),m=()=>{i(()=>{L&&!!r&&p(!0)})},T=()=>{i(()=>{L&&p(!1)})};u.exports.useEffect(()=>{if(S){const s=setTimeout(()=>{B(!0)},100);return()=>{clearTimeout(s)}}},[S]);const R=a(t.onMouseEnter,m),j=a(t.onMouseLeave,T),I=a(t.onFocus,m),K=a(t.onBlur,T),_=a(t.onTouchStart,m);return N(O,{children:[P("a",{...G(t,["to","replace","clientState","reloadDocument","prefetch","scroll"]),ref:o,rel:(g=t.rel)!=null?g:r.startsWith("http")||r.startsWith("//")?"noreferrer noopener":void 0,onClick:F,onMouseEnter:R,onMouseLeave:j,onFocus:I,onBlur:K,onTouchStart:_,href:r,children:t.children}),C&&P(q,{pathname:r})]})});function q({pathname:e}){const{getProposedLocationServerProps:t}=A(),o=x(),n=f({pathname:e});if(e.startsWith("http")||n===f(o))return null;const c=new URL(n,window.location.href),d=t({pathname:c.pathname,search:c.search}),i=`${W}?state=`+encodeURIComponent(JSON.stringify(d));return P("link",{rel:"prefetch",as:"fetch",href:i})}function a(e,t){return o=>{e==null||e(o),o.defaultPrevented||t(o)}}function z(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function G(e,t){const o={};for(const n of Object.keys(e))t.includes(n)||(o[n]=e[n]);return o}export{H as Link,a as composeEventHandlers};
//# sourceMappingURL=7a9a8af7.js.map
