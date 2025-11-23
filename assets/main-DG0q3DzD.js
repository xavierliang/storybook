import"./modulepreload-polyfill-B5Qt9EMX.js";const b=[{id:"courage-pocket",title:"勇气口袋",description:"关于勇气的神奇故事",cover:"stories/courage-pocket/4.webp",link:"stories/courage-pocket/index.html",tags:["情绪管理"],ageRange:{min:3,max:6},printLink:"stories/courage-pocket/index.html?print=true"},{id:"magic-ears",title:"魔法耳朵",description:"聆听世界的声音",cover:"stories/magic-ears/3-2.webp",link:"stories/magic-ears/index.html",tags:["感官认知"],ageRange:{min:3,max:6},printLink:"stories/magic-ears/index.html?print=true"},{id:"frog-bath",title:"变身！不怕水的淋浴超人",description:"遵守安全指令 (淋浴场景)",cover:"stories/frog-bath/1.webp",link:"stories/frog-bath/index.html",tags:["生活习惯"],ageRange:{min:3,max:6},printLink:"stories/frog-bath/index.html?print=true"},{id:"lion-toothbrush",title:"小狮子，啊呜！",description:"适合1岁宝宝的刷牙绘本",cover:"stories/lion-toothbrush/1.webp",link:"stories/lion-toothbrush/index.html",tags:["生活习惯"],ageRange:{min:0,max:3},printLink:"stories/lion-toothbrush/index.html?print=true"},{id:"detective-katy",title:"凯蒂侦探和闪亮牙齿的秘密",description:"保护牙齿，是我自己的任务！",cover:"stories/detective-katy/1.webp",link:"stories/detective-katy/index.html",tags:["健康卫生"],ageRange:{min:3,max:6},printLink:"stories/detective-katy/index.html?print=true"}];document.addEventListener("DOMContentLoaded",async()=>{const g=document.getElementById("story-grid"),k=document.getElementById("filter-container");if(!g||!k)return;let s=null,o=null;try{const n=new Set;let e=100,a=0;b.forEach(t=>{t.tags&&t.tags.forEach(r=>n.add(r)),t.ageRange&&(e=Math.min(e,t.ageRange.min),a=Math.max(a,t.ageRange.max))}),S(Array.from(n),e,a),E(b)}catch(n){console.error("Failed to load stories:",n),g.innerHTML='<p class="error-message">加载故事失败，请刷新页面重试。</p>'}function S(n,e,a){const t=document.createElement("div");t.className="filter-toggle-header",t.innerHTML=`
      <button id="filter-toggle-btn" class="filter-toggle-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        筛选故事
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div id="active-filter-summary" class="active-filter-summary">全部故事</div>
    `,k.appendChild(t);const r=document.createElement("div");r.className="filter-collapsible-content",r.style.display="none",k.appendChild(r);const C=t.querySelector("#filter-toggle-btn"),M=t.querySelector(".arrow");C.addEventListener("click",()=>{const i=r.style.display==="none";r.style.display=i?"flex":"none",M.style.transform=i?"rotate(180deg)":"rotate(0deg)",C.classList.toggle("active",i)});const m=document.createElement("div");m.className="filter-section",m.innerHTML='<div class="filter-group" id="age-filters"></div>',r.appendChild(m);const h=m.querySelector("#age-filters"),c=w("全部","all","age");c.classList.add("active"),c.addEventListener("click",()=>{s=null,x(h,"all"),c.textContent="全部";const i=h.querySelector('input[type="range"]');i&&(i.value=e),u(),p()}),h.appendChild(c);const y=document.createElement("div");y.className="age-slider-container";const d=document.createElement("input");d.type="range",d.min=e,d.max=a,d.value=e,d.addEventListener("input",i=>{const l=parseInt(i.target.value);s=l,c.innerHTML=`${l}岁 <span class="reset-icon">✕</span>`,c.classList.add("active"),u(),p()}),y.appendChild(d),h.appendChild(y);const v=document.createElement("div");v.className="filter-section",v.innerHTML='<div class="filter-group" id="topic-filters"></div>',r.appendChild(v);const f=v.querySelector("#topic-filters"),L=w("全部","all","topic");L.classList.add("active"),L.addEventListener("click",()=>{o=null,x(f,"all"),u(),p()}),f.appendChild(L),n.forEach(i=>{const l=w(i,i,"topic");l.addEventListener("click",()=>{o=i,x(f,i),u(),p()}),f.appendChild(l)});function p(){const i=document.getElementById("active-filter-summary"),l=[];s!==null&&l.push(`${s}岁`),o!==null&&l.push(o),l.length===0?i.textContent="全部故事":i.textContent=l.join(" + ")}p()}function w(n,e,a){const t=document.createElement("button");return t.className=`filter-chip ${a}-chip`,t.textContent=n,t.dataset.value=e,t}function x(n,e){n.querySelectorAll(".filter-chip").forEach(t=>{String(t.dataset.value)===String(e)?t.classList.add("active"):t.classList.remove("active")})}function u(){const n=b.filter(e=>{let a=!0;s!==null&&e.ageRange&&(a=s>=e.ageRange.min&&s<=e.ageRange.max);let t=!0;return o!==null&&(t=e.tags&&e.tags.includes(o)),a&&t});E(n)}function E(n){if(g.innerHTML="",n.length===0){g.innerHTML='<div class="empty-state">没有找到适合该条件的故事</div>';return}n.forEach(e=>{const a=document.createElement("div");a.className="story-card";const t=e.tags?`<div class="card-tags">${e.tags.map(r=>`<span class="tag">${r}</span>`).join("")}</div>`:"";a.innerHTML=`
        <a href="${e.link}" class="story-link">
          <div class="img-wrapper">
            <img src="${e.cover}" alt="${e.title}" loading="lazy" />
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
      `,g.appendChild(a)})}});
