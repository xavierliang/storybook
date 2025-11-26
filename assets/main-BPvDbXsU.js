import"./modulepreload-polyfill-B5Qt9EMX.js";const S=[{id:"courage-pocket",title:"勇气口袋",description:"关于勇气的神奇故事",cover:"stories/courage-pocket/4.webp",link:"stories/courage-pocket/index.html",tags:["情绪管理"],ageRange:{min:3,max:6},printLink:"stories/courage-pocket/index.html?print=true"},{id:"magic-ears",title:"魔法耳朵",description:"聆听世界的声音",cover:"stories/magic-ears/3-2.webp",link:"stories/magic-ears/index.html",tags:["感官认知"],ageRange:{min:3,max:6},printLink:"stories/magic-ears/index.html?print=true"},{id:"frog-bath",title:"变身！不怕水的淋浴超人",description:"遵守安全指令 (淋浴场景)",cover:"stories/frog-bath/1.webp",link:"stories/frog-bath/index.html",tags:["生活习惯"],ageRange:{min:3,max:6},printLink:"stories/frog-bath/index.html?print=true"},{id:"lion-toothbrush",title:"小狮子，啊呜！",description:"适合1岁宝宝的刷牙绘本",cover:"stories/lion-toothbrush/1.webp",link:"stories/lion-toothbrush/index.html",tags:["生活习惯"],ageRange:{min:0,max:3},printLink:"stories/lion-toothbrush/index.html?print=true"},{id:"detective-katy",title:"凯蒂侦探和闪亮牙齿的秘密",description:"保护牙齿，是我自己的任务！",cover:"stories/detective-katy/1.webp",link:"stories/detective-katy/index.html",tags:["健康卫生"],ageRange:{min:3,max:6},printLink:"stories/detective-katy/index.html?print=true"},{id:"goodnight-panda",title:"团团和胖胖的晚安",description:"关于独立睡眠的温馨故事",cover:"stories/goodnight-panda/1.webp",link:"stories/goodnight-panda/index.html",tags:["生活习惯","独立睡眠"],ageRange:{min:0,max:3},printLink:"stories/goodnight-panda/index.html?print=true"},{id:"goodnight-meow",title:"咪咪的爱心罐子",description:"关于独立睡眠的温馨故事",cover:"stories/goodnight-meow/1.webp",link:"stories/goodnight-meow/index.html",tags:["生活习惯","独立睡眠"],ageRange:{min:0,max:3},printLink:"stories/goodnight-meow/index.html?print=true"},{id:"waiting-for-hug",title:"等抱抱",description:"关于耐心等待的温馨故事",cover:"stories/waiting-for-hug/1.webp",link:"stories/waiting-for-hug/index.html",tags:["情绪管理","耐心"],ageRange:{min:3,max:6},printLink:"stories/waiting-for-hug/index.html?print=true"},{id:"doudou-growth-chart",title:"豆豆的长大尺",description:"关于成长和独立睡觉的温馨故事",cover:"stories/doudou-growth-chart/1.webp",link:"stories/doudou-growth-chart/index.html",tags:["生活习惯","独立睡眠","成长"],ageRange:{min:3,max:6},printLink:"stories/doudou-growth-chart/index.html?print=true"}];function M(c){const a=document.createElement("div");a.className="print-modal-overlay",a.innerHTML=`
        <div class="print-modal">
            <div class="print-modal-header">
                <h2>选择打印方向</h2>
                <button class="print-modal-close" aria-label="关闭">✕</button>
            </div>
            <div class="print-modal-content">
                <button class="print-option" data-orientation="landscape">
                    <div class="print-option-icon">🖨️</div>
                    <div class="print-option-text">
                        <strong>横版打印</strong>
                        <span>11" × 8.5" - 图文并排</span>
                    </div>
                </button>
                <button class="print-option" data-orientation="portrait">
                    <div class="print-option-icon">📱</div>
                    <div class="print-option-text">
                        <strong>竖版打印</strong>
                        <span>8.5" × 11" - 上下布局</span>
                    </div>
                </button>
                <button class="print-option" data-orientation="booklet">
                    <div class="print-option-icon">📖</div>
                    <div class="print-option-text">
                        <strong>小册子打印</strong>
                        <span>对折版 - 5.5" × 8.5"</span>
                    </div>
                </button>
            </div>
        </div>
    `,document.body.appendChild(a),a.querySelector(".print-modal-close").addEventListener("click",()=>{a.remove()}),a.addEventListener("click",r=>{r.target.classList.contains("print-modal-overlay")&&a.remove()}),a.querySelectorAll(".print-option").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation();const v=r.dataset.orientation,g=c.includes("?")?`${c}&orientation=${v}`:`${c}?orientation=${v}`;console.log("Opening print window:",g),window.open(g,"_blank"),a.remove()})}),requestAnimationFrame(()=>{a.classList.add("active")})}document.addEventListener("DOMContentLoaded",async()=>{const c=document.getElementById("story-grid"),a=document.getElementById("filter-container");if(!c||!a)return;let r=null,d=null;try{const o=new Set;let t=100,i=0;S.forEach(e=>{e.tags&&e.tags.forEach(s=>o.add(s)),e.ageRange&&(t=Math.min(t,e.ageRange.min),i=Math.max(i,e.ageRange.max))}),v(Array.from(o),t,i),$(S)}catch(o){console.error("Failed to load stories:",o),c.innerHTML='<p class="error-message">加载故事失败，请刷新页面重试。</p>'}function v(o,t,i){const e=document.createElement("div");e.className="filter-toggle-header",e.innerHTML=`
      <button id="filter-toggle-btn" class="filter-toggle-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        筛选故事
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div id="active-filter-summary" class="active-filter-summary">全部故事</div>
    `,a.appendChild(e);const s=document.createElement("div");s.className="filter-collapsible-content",s.style.display="none",a.appendChild(s);const p=e.querySelector("#filter-toggle-btn"),y=e.querySelector(".arrow");p.addEventListener("click",()=>{const n=s.style.display==="none";s.style.display=n?"flex":"none",y.style.transform=n?"rotate(180deg)":"rotate(0deg)",p.classList.toggle("active",n)});const k=document.createElement("div");k.className="filter-section",k.innerHTML='<div class="filter-group" id="age-filters"></div>',s.appendChild(k);const w=k.querySelector("#age-filters"),u=g("全部","all","age");u.classList.add("active"),u.addEventListener("click",()=>{r=null,L(w,"all"),u.textContent="全部";const n=w.querySelector('input[type="range"]');n&&(n.value=t),f(),h()}),w.appendChild(u);const E=document.createElement("div");E.className="age-slider-container";const m=document.createElement("input");m.type="range",m.min=t,m.max=i,m.value=t,m.addEventListener("input",n=>{const l=parseInt(n.target.value);r=l,u.innerHTML=`${l}岁 <span class="reset-icon">✕</span>`,u.classList.add("active"),f(),h()}),E.appendChild(m),w.appendChild(E);const x=document.createElement("div");x.className="filter-section",x.innerHTML='<div class="filter-group" id="topic-filters"></div>',s.appendChild(x);const b=x.querySelector("#topic-filters"),C=g("全部","all","topic");C.classList.add("active"),C.addEventListener("click",()=>{d=null,L(b,"all"),f(),h()}),b.appendChild(C),o.forEach(n=>{const l=g(n,n,"topic");l.addEventListener("click",()=>{d=n,L(b,n),f(),h()}),b.appendChild(l)});function h(){const n=document.getElementById("active-filter-summary"),l=[];r!==null&&l.push(`${r}岁`),d!==null&&l.push(d),l.length===0?n.textContent="全部故事":n.textContent=l.join(" + ")}h()}function g(o,t,i){const e=document.createElement("button");return e.className=`filter-chip ${i}-chip`,e.textContent=o,e.dataset.value=t,e}function L(o,t){o.querySelectorAll(".filter-chip").forEach(e=>{String(e.dataset.value)===String(t)?e.classList.add("active"):e.classList.remove("active")})}function f(){const o=S.filter(t=>{let i=!0;r!==null&&t.ageRange&&(i=r>=t.ageRange.min&&r<=t.ageRange.max);let e=!0;return d!==null&&(e=t.tags&&t.tags.includes(d)),i&&e});$(o)}function $(o){if(c.innerHTML="",o.length===0){c.innerHTML='<div class="empty-state">没有找到适合该条件的故事</div>';return}o.forEach(t=>{const i=document.createElement("div");i.className="story-card";const e=t.tags?`<div class="card-tags">${t.tags.map(p=>`<span class="tag">${p}</span>`).join("")}</div>`:"";i.innerHTML=`
        <a href="${t.link}" class="story-link">
          <div class="img-wrapper">
            <img src="${t.cover}" alt="${t.title}" loading="lazy" />
          </div>
          <div class="card-content">
            <h2>${t.title}</h2>
            <p>${t.description}</p>
            ${e}
          </div>
        </a>
        <div class="card-actions">
          <a href="${t.link}" class="btn-read">阅读</a>
          <button class="btn-print" data-print-link="${t.printLink}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            打印
          </button>
        </div>
      `,i.querySelector(".btn-print").addEventListener("click",p=>{p.preventDefault();const y=p.currentTarget.dataset.printLink;M(y)}),c.appendChild(i)})}});
