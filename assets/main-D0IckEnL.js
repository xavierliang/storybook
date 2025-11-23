import"./modulepreload-polyfill-B5Qt9EMX.js";const E=[{id:"courage-pocket",title:"勇气口袋",description:"关于勇气的神奇故事",cover:"stories/courage-pocket/4.webp",link:"stories/courage-pocket/index.html",tags:["情绪管理"],ageRange:{min:3,max:6},printLink:"stories/courage-pocket/index.html?print=true"},{id:"magic-ears",title:"魔法耳朵",description:"聆听世界的声音",cover:"stories/magic-ears/3-2.webp",link:"stories/magic-ears/index.html",tags:["感官认知"],ageRange:{min:3,max:6},printLink:"stories/magic-ears/index.html?print=true"},{id:"frog-bath",title:"变身！不怕水的淋浴超人",description:"遵守安全指令 (淋浴场景)",cover:"stories/frog-bath/1.webp",link:"stories/frog-bath/index.html",tags:["生活习惯"],ageRange:{min:3,max:6},printLink:"stories/frog-bath/index.html?print=true"},{id:"lion-toothbrush",title:"小狮子，啊呜！",description:"适合1岁宝宝的刷牙绘本",cover:"stories/lion-toothbrush/1.webp",link:"stories/lion-toothbrush/index.html",tags:["生活习惯"],ageRange:{min:0,max:3},printLink:"stories/lion-toothbrush/index.html?print=true"},{id:"detective-katy",title:"凯蒂侦探和闪亮牙齿的秘密",description:"保护牙齿，是我自己的任务！",cover:"stories/detective-katy/1.webp",link:"stories/detective-katy/index.html",tags:["健康卫生"],ageRange:{min:3,max:6},printLink:"stories/detective-katy/index.html?print=true"}];document.addEventListener("DOMContentLoaded",async()=>{const d=document.getElementById("story-grid"),w=document.getElementById("filter-container");if(!d||!w)return;let r=null,o=null;try{const i=new Set;let e=100,a=0;E.forEach(t=>{t.tags&&t.tags.forEach(s=>i.add(s)),t.ageRange&&(e=Math.min(e,t.ageRange.min),a=Math.max(a,t.ageRange.max))}),$(Array.from(i),e,a),S(E)}catch(i){console.error("Failed to load stories:",i),d.innerHTML='<p class="error-message">加载故事失败，请刷新页面重试。</p>'}function $(i,e,a){const t=document.createElement("div");t.className="filter-toggle-header",t.innerHTML=`
      <button id="filter-toggle-btn" class="filter-toggle-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        筛选故事
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div id="active-filter-summary" class="active-filter-summary">全部故事</div>
    `,w.appendChild(t);const s=document.createElement("div");s.className="filter-collapsible-content",s.style.display="none",w.appendChild(s);const h=t.querySelector("#filter-toggle-btn"),M=t.querySelector(".arrow");h.addEventListener("click",()=>{const n=s.style.display==="none";s.style.display=n?"flex":"none",M.style.transform=n?"rotate(180deg)":"rotate(0deg)",h.classList.toggle("active",n)});const v=document.createElement("div");v.className="filter-section",v.innerHTML='<div class="filter-group" id="age-filters"></div>',s.appendChild(v);const g=v.querySelector("#age-filters"),f=L("不限","all","age");f.classList.add("active"),f.addEventListener("click",()=>{r=null,y(g,"all");const n=g.querySelector('input[type="range"]'),l=g.querySelector(".age-label");n&&l&&(n.value=e,l.textContent="选择年龄",l.classList.add("disabled")),u(),m()}),g.appendChild(f);const k=document.createElement("div");k.className="age-slider-container";const c=document.createElement("input");c.type="range",c.min=e,c.max=a,c.value=e;const p=document.createElement("span");p.className="age-label disabled",p.textContent="选择年龄",c.addEventListener("input",n=>{const l=parseInt(n.target.value);r=l,p.textContent=`${l}岁`,f.classList.remove("active"),p.classList.remove("disabled"),u(),m()}),k.appendChild(c),k.appendChild(p),g.appendChild(k);const x=document.createElement("div");x.className="filter-section",x.innerHTML='<div class="filter-group" id="topic-filters"></div>',s.appendChild(x);const b=x.querySelector("#topic-filters"),C=L("不限","all","topic");C.classList.add("active"),C.addEventListener("click",()=>{o=null,y(b,"all"),u(),m()}),b.appendChild(C),i.forEach(n=>{const l=L(n,n,"topic");l.addEventListener("click",()=>{o=n,y(b,n),u(),m()}),b.appendChild(l)});function m(){const n=document.getElementById("active-filter-summary"),l=[];r!==null&&l.push(`${r}岁`),o!==null&&l.push(o),l.length===0?n.textContent="全部故事":n.textContent=l.join(" + ")}m()}function L(i,e,a){const t=document.createElement("button");return t.className=`filter-chip ${a}-chip`,t.textContent=i,t.dataset.value=e,t}function y(i,e){i.querySelectorAll(".filter-chip").forEach(t=>{String(t.dataset.value)===String(e)?t.classList.add("active"):t.classList.remove("active")})}function u(){const i=E.filter(e=>{let a=!0;r!==null&&e.ageRange&&(a=r>=e.ageRange.min&&r<=e.ageRange.max);let t=!0;return o!==null&&(t=e.tags&&e.tags.includes(o)),a&&t});S(i)}function S(i){if(d.innerHTML="",i.length===0){d.innerHTML='<div class="empty-state">没有找到适合该条件的故事</div>';return}i.forEach(e=>{const a=document.createElement("div");a.className="story-card";const t=e.tags?`<div class="card-tags">${e.tags.map(h=>`<span class="tag">${h}</span>`).join("")}</div>`:"",s=e.ageRange?`<span class="age-tag">${e.ageRange.min}-${e.ageRange.max}岁</span>`:"";a.innerHTML=`
        <a href="${e.link}" class="story-link">
          <div class="img-wrapper">
            <img src="${e.cover}" alt="${e.title}" loading="lazy" />
            ${s}
          </div>
          <div class="card-content">
            <h2>${e.title}</h2>
            <p>${e.description}</p>
            ${t}
          </div>
        </a>
        <div class="card-actions">
          <a href="${e.link}" class="btn-read">阅读</a>
          <a href="${e.printLink}" target="_blank" class="btn-print">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            打印
          </a>
        </div>
      `,d.appendChild(a)})}});
