(()=>{"use strict";const e=(e,t,n)=>({taskContent:e,dueDate:t,entry:n}),t=e=>{const t=document.createElement("li"),n=document.createElement("div");n.classList.add("item-li");const c=document.createElement("span");c.classList.add("circle"),n.appendChild(c);const d=document.createElement("div");d.textContent=e.taskContent,d.classList.add("desp"),n.appendChild(d);const a=document.createElement("div");a.textContent=e.dueDate.toString(),a.classList.add("due-date"),n.appendChild(a);const o=document.createElement("img");o.src="./images/icons/archive-arrow-down-outline.svg",o.classList.add("archive"),n.appendChild(o);const s=document.createElement("img");return s.src="./images/icons/trophy.svg",s.classList.add("achivement"),n.appendChild(s),t.appendChild(n),t},n=(e,t)=>{const n=document.createElement("li"),c=document.createElement("div");c.classList.add("item-li");const d=document.createElement("span");d.classList.add("circle"),d.classList.add("checked");const a=document.createElement("span");a.textContent="✓",a.classList.add("check"),d.appendChild(a),c.appendChild(d);const o=document.createElement("div");if(console.log(t),o.textContent=t.taskContent,c.appendChild(o),console.log(e),"Archived"===e.textContent){const e=document.createElement("img");e.src="./images/icons/archive-arrow-down-outline.svg",e.classList.add("archive"),e.style.marginLeft="auto",c.appendChild(e)}else{const e=document.createElement("img");e.src="./images/icons/trophy.svg",e.classList.add("achivement"),e.style.marginLeft="auto",c.appendChild(e)}return n.appendChild(c),n},c=t=>{const n=t.parentNode.parentNode,c=n.querySelector(".desp").textContent,d=n.querySelector(".due-date").textContent,a="achivement"===t.classList.value?"Achievements":"Archived",{top_button:o,left_button:s}=f();let l=e(c,d,s.textContent);k(o.textContent,l),console.log(c),l=e(c,d,null),x(a,l),n.remove()},d=e=>{let n=document.querySelector(".task-panel");n&&n.remove(),n=document.createElement("div"),n.classList.add("task-panel");const c=document.createElement("div");c.textContent="Tasks",n.appendChild(c);const d=document.createElement("ul");if(e)for(let n of e){const e=t(n);d.appendChild(e)}const a=document.createElement("button");a.textContent="+ Add Task",a.setAttribute("id","add-task"),d.appendChild(a),n.appendChild(d);const o=document.createElement("div");o.classList.add("form-container");const s=l();return o.appendChild(s),n.appendChild(o),n},a=()=>{document.querySelector("#add-task").addEventListener("click",(e=>{e.target.style.display="none",document.querySelector(".form-container").style.display="flex"}))},o=()=>{document.querySelector('input[type="button"]').addEventListener("click",(()=>{s()}))},s=()=>{document.querySelector(".form-container").style.display="none",document.querySelector("#add-task").style.display="block"},l=()=>{const e=document.createElement("form");e.action="#";const t=document.createElement("div"),n=document.createElement("label");n.setAttribute("for","task_desp"),n.textContent="To-do task:";const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","task_desp"),c.setAttribute("id","task_desp"),c.setAttribute("placeholder","Writing my thesis all day"),t.appendChild(n),t.appendChild(c);const d=document.createElement("div"),a=document.createElement("label");a.setAttribute("for","task_due"),a.textContent="Due date:";const o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("name","task_due"),o.setAttribute("id","task_due"),d.appendChild(a),d.appendChild(o);const s=document.createElement("div");s.classList.add("button-group");const l=document.createElement("input");l.setAttribute("type","button"),l.setAttribute("value","Cancel");const i=document.createElement("input");return i.setAttribute("type","submit"),i.setAttribute("value","Add Task"),s.appendChild(l),s.appendChild(i),e.appendChild(t),e.appendChild(d),e.appendChild(s),e},i=()=>{const n=document.querySelector("form");n.addEventListener("submit",(c=>{c.preventDefault();const d=n.elements.task_desp.value,a=n.elements.task_due.value,{top_button:o,left_button:l}=f(),i=e(d,a,l.textContent);x(o.textContent,i);const m=document.querySelector("ul"),u=t(i),p=document.querySelector("#add-task");m.insertBefore(u,p),n.reset(),s(),r.handle_circle_click(),r.handle_achivement(),r.handle_archive()}))},r={handle_circle_click:()=>{document.querySelectorAll(".circle").forEach((e=>{e.addEventListener("click",(()=>{(e=>{if(e.classList.contains("checked"))e.classList.remove("checked"),e.removeChild(e.firstChild),e.nextElementSibling.classList.remove("crossover");else{const t=document.createElement("span");t.textContent="✓",t.classList.add("check"),e.appendChild(t),e.classList.add("checked"),(e=>{e.classList.add("crossover")})(e.nextElementSibling)}})(e)}))}))},handle_achivement:()=>{document.querySelectorAll(".achivement").forEach((e=>{e.addEventListener("click",(()=>{c(e)}))}))},handle_archive:()=>{document.querySelectorAll(".archive").forEach((e=>{e.addEventListener("click",(t=>{c(e)}))}))}},m=["Sleep for 12 hours","Study for 24 hours","Hunting Alligators Non STOP"],u=[e(m[0],"2023-12-31","Today"),e(m[1],"1996-03-17","Week"),e(m[2],"2021-02-02","Month")],p=document.querySelector(".content");let h=["Time","Research","Life"];const C=["Achievements","Archived"],v=(e,t)=>{const n=document.createElement("button");if(n.classList.add("nav-item"),n.textContent=e,2===t){const e=document.createElement("span");e.textContent="x",n.appendChild(e),n.classList.add("nav-deletable")}else 3===t?n.classList.add("nav-color"):4===t?n.classList.add("nav-add"):1===t&&n.classList.add("active");return n};let y={Time:["Today","Week","Month"],Researchx:["Study","Paper","Thesis","Others"],Lifex:["Grocery","Chores","Utility","Others"]};const E=e=>{const t=document.createElement("div"),n=y[e];for(let e=0;e<n.length;e++){const c=document.createElement("button");c.classList.add("specific-choice"),0===e&&c.classList.add("entry-select"),c.textContent=n[e],t.appendChild(c)}return t},f=()=>({top_button:document.querySelector(".nav-item.active"),left_button:document.querySelector(".specific-choice.entry-select")}),g=e=>{const t=document.querySelectorAll(".specific-choice");e.addEventListener("click",(e=>{if("BUTTON"===e.target.tagName){t.forEach((e=>{e.classList.remove("entry-select")})),e.target.classList.add("entry-select");const{top_button:n,left_button:c}=f(),s=_(n.textContent,c.textContent),l=d(s);p.appendChild(l),a(),o(),i(),r.handle_achivement(),r.handle_archive(),r.handle_circle_click()}}))};!function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()?console.log("Bad bad bad"):console.log("Testing local storage!");const L=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},k=(e,t)=>{const n=localStorage.getItem(e);if(null!==n){const c=JSON.parse(n),d=c.findIndex((e=>e.taskContent===t.taskContent&&e.dueDate===t.dueDate&&e.entry===t.entry));-1!==d&&(c.splice(d,1),L(e,c))}},_=(e,t=null)=>{const n=localStorage.getItem(e);if(null!==n){const e=JSON.parse(n);return null!==t?e.filter((e=>e.entry===t)):e}},x=(e,t)=>{const n=localStorage.getItem(e),c=null===n?[]:JSON.parse(n);c.push(t),L(e,c)};localStorage.getItem("Time")||L("Time",u);const b=document.querySelector("body"),S=document.querySelector(".content"),A=document.createElement("div");A.classList.add("header"),b.insertBefore(A,S);const q=document.createElement("div");q.textContent="Made By Jing",q.classList.add("footer"),S.after(q);const T=document.createElement("div");T.classList.add("nav");const O=document.createElement("div");for(let e=0;e<h.length;e++){const t=v(h[e],0===e?1:2);O.appendChild(t)}T.appendChild(O);const N=document.createElement("div");for(let e=0;e<2;e++){const t=v(C[e],3);N.appendChild(t)}T.appendChild(N),S.appendChild(T);const D=document.createElement("div");D.classList.add("list-bar");const I=E("Time");D.appendChild(I);const B=document.querySelectorAll(".nav-item");T.addEventListener("click",(e=>{if("BUTTON"===e.target.tagName){B.forEach((e=>{e.classList.remove("active")}));const t=e.target;if(t.classList.add("active"),"Achievements"!=t.textContent&"Archived"!=t.textContent){D.style.display="flex";const e=E(t.textContent);for(;D.firstChild;)D.replaceChildren();D.appendChild(e);const{top_button:n,left_button:c}=f(),s=_(n.textContent,c.textContent);console.log(s);const l=d(s);S.appendChild(l),g(D),a(),o(),i(),r.handle_achivement(),r.handle_archive(),r.handle_circle_click()}else{for(;D.firstChild;)D.replaceChildren();const e=document.createElement("div");e.textContent="See What You've Finished!",e.style.fontSize="36px",e.style.textAlign="center",D.appendChild(e),D.style.alignContent="center";const c=((e,t)=>{let c=document.querySelector(".task-panel");c&&c.remove(),c=document.createElement("div"),c.classList.add("task-panel"),c.classList.add("done");const d=document.createElement("div");d.textContent=e.textContent+" Board",c.appendChild(d),console.log(t);const a=document.createElement("ul");if(t)for(let c of t){console.log(c.taskContent);const t=n(e,c);a.appendChild(t)}return c.appendChild(a),c})(t,_(t.textContent));S.appendChild(c)}}})),S.append(D),g(D);const w=_("Time","Today"),R=d(w);S.appendChild(R),a(),o(),i(),r.handle_achivement(),r.handle_archive(),r.handle_circle_click()})();