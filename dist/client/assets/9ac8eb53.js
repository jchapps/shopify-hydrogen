import{r as d,j as b}from"./index.3aad892f.js";const h={};function P(a,n){const i=h[a];if(i)return i;const t=new Promise((r,s)=>{const o=document.createElement("script");n!=null&&n.module&&(o.type="module"),o.src=a,o.onload=()=>{r(!0)},o.onerror=()=>{s(!1)},(n==null?void 0:n.in)==="head"?document.head.appendChild(o):document.body.appendChild(o)});return h[a]=t,t}function S(a,n){const[i,t]=d.exports.useState("loading"),r=JSON.stringify(n);return d.exports.useEffect(()=>{async function s(){try{t("loading"),await P(a,n),t("done")}catch{t("error")}}s()},[a,r,n]),i}function w(a){var l,c,m,u,p,f,v,g;const[n,i]=d.exports.useState(void 0),t=d.exports.useCallback(L=>{i(L)},[]),{data:r,id:s=r.id,children:o,className:y,...e}=a,E=S("https://unpkg.com/@google/model-viewer@v1.8.0/dist/model-viewer.min.js",{module:!0});if(d.exports.useEffect(()=>{if(n!=null)return e.onError&&n.addEventListener("error",e.onError),e.onLoad&&n.addEventListener("load",e.onLoad),e.onPreload&&n.addEventListener("preload",e.onPreload),e.onModelVisibility&&n.addEventListener("model-visibility",e.onModelVisibility),e.onProgress&&n.addEventListener("progress",e.onProgress),e.onArStatus&&n.addEventListener("ar-status",e.onArStatus),e.onArTracking&&n.addEventListener("ar-tracking",e.onArTracking),e.onQuickLookButtonTapped&&n.addEventListener("quick-look-button-tapped",e.onQuickLookButtonTapped),e.onCameraChange&&n.addEventListener("camera-change",e.onCameraChange),e.onEnvironmentChange&&n.addEventListener("environment-change",e.onEnvironmentChange),e.onPlay&&n.addEventListener("play",e.onPlay),e.onPause&&n.addEventListener("ar-status",e.onPause),e.onSceneGraphReady&&n.addEventListener("scene-graph-ready",e.onSceneGraphReady),()=>{n!=null&&(e.onError&&n.removeEventListener("error",e.onError),e.onLoad&&n.removeEventListener("load",e.onLoad),e.onPreload&&n.removeEventListener("preload",e.onPreload),e.onModelVisibility&&n.removeEventListener("model-visibility",e.onModelVisibility),e.onProgress&&n.removeEventListener("progress",e.onProgress),e.onArStatus&&n.removeEventListener("ar-status",e.onArStatus),e.onArTracking&&n.removeEventListener("ar-tracking",e.onArTracking),e.onQuickLookButtonTapped&&n.removeEventListener("quick-look-button-tapped",e.onQuickLookButtonTapped),e.onCameraChange&&n.removeEventListener("camera-change",e.onCameraChange),e.onEnvironmentChange&&n.removeEventListener("environment-change",e.onEnvironmentChange),e.onPlay&&n.removeEventListener("play",e.onPlay),e.onPause&&n.removeEventListener("ar-status",e.onPause),e.onSceneGraphReady&&n.removeEventListener("scene-graph-ready",e.onSceneGraphReady))}},[n,e.onArStatus,e.onArTracking,e.onCameraChange,e.onEnvironmentChange,e.onError,e.onLoad,e.onModelVisibility,e.onPause,e.onPlay,e.onPreload,e.onProgress,e.onQuickLookButtonTapped,e.onSceneGraphReady]),E!=="done")return null;if(!((c=(l=r.sources)==null?void 0:l[0])!=null&&c.url))throw new Error("<ModelViewer/> requires 'data.sources' prop to be an array, with an object that has a property 'url' on it");return r.alt||console.warn("<ModelViewer/> requires the 'data.alt' prop for accessibility"),b("model-viewer",{ref:t,...e,class:y,id:s,src:r.sources[0].url,alt:r.alt,"camera-controls":(m=e.cameraControls)!=null?m:!0,poster:e.poster||((u=r.previewImage)==null?void 0:u.url),autoplay:(p=e.autoplay)!=null?p:!0,loading:e.loading,reveal:e.reveal,ar:e.ar,"ar-modes":e.arModes,"ar-scale":e.arScale,"ar-placement":e.arPlacement,"ios-src":e.iosSrc,"touch-action":e.touchAction,"disable-zoom":e.disableZoom,"orbit-sensitivity":e.orbitSensitivity,"auto-rotate":e.autoRotate,"auto-rotate-delay":e.autoRotateDelay,"rotation-per-second":e.rotationPerSecond,"interaction-policy":e.interactionPolicy,"interaction-prompt":e.interactionPrompt,"interaction-prompt-style":e.interactionPromptStyle,"interaction-prompt-threshold":e.interactionPromptThreshold,"camera-orbit":e.cameraOrbit,"camera-target":e.cameraTarget,"field-of-view":e.fieldOfView,"max-camera-orbit":e.maxCameraOrbit,"min-camera-orbit":e.minCameraOrbit,"max-field-of-view":e.maxFieldOfView,"min-field-of-view":e.minFieldOfView,bounds:e.bounds,"interpolation-decay":(f=e.interpolationDecay)!=null?f:100,"skybox-image":e.skyboxImage,"environment-image":e.environmentImage,exposure:e.exposure,"shadow-intensity":(v=e.shadowIntensity)!=null?v:0,"shadow-softness":(g=e.shadowSoftness)!=null?g:0,"animation-name":e.animationName,"animation-crossfade-duration":e.animationCrossfadeDuration,"variant-name":e.variantName,orientation:e.orientation,scale:e.scale,children:o})}export{w as ModelViewer};
//# sourceMappingURL=9ac8eb53.js.map