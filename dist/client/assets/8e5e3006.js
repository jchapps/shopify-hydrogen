import{R as s,r as a}from"./index.6f748f0d.js";import{R as p}from"./02637587.js";import{M as i,u}from"./3ed2f817.js";function m(e){return String(e).includes("__proto__")?JSON.parse(e,f):JSON.parse(e)}function f(e,t){if(e!=="__proto__")return t}function R(e){try{const{pathname:t,search:o}=e,r=e.searchParams.get("state");return t===s?r?m(decodeURIComponent(r)):{}:{pathname:decodeURIComponent(t),search:decodeURIComponent(o)}}catch{}}function d(){var t,o;if(i){const r=new URL(u());if(r.pathname===s){const n=R(r),c=`${r.origin}${(t=n==null?void 0:n.pathname)!=null?t:""}${(o=n==null?void 0:n.search)!=null?o:""}`;return new URL(c)}return new URL(r)}const e=a.exports.useContext(p);return a.exports.useMemo(()=>new URL(window.location.href),[e])}export{d as u};
//# sourceMappingURL=8e5e3006.js.map
