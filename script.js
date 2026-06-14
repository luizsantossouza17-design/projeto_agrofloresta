// ======================
// DADOS
// ======================

const diagnostics = [
{
icon:"🌳",
title:"Desmatamento",
text:"Expansão agrícola sem planejamento."
},
{
icon:"💧",
title:"Perda de Água",
text:"Redução da infiltração e retenção."
},
{
icon:"🌱",
title:"Solo Degradado",
text:"Perda de fertilidade natural."
},
{
icon:"🐝",
title:"Biodiversidade",
text:"Diminuição de espécies nativas."
}
];

const indicators = [
{
number:"4",
title:"Pilares",
text:"Solo, água, biodiversidade e produção."
},
{
number:"+50%",
title:"Diversidade",
text:"Maior variedade produtiva."
},
{
number:"↓",
title:"Erosão",
text:"Redução da degradação do solo."
},
{
number:"100%",
title:"Educação",
text:"Aprendizagem interdisciplinar."
}
];

const solutions = [
{
icon:"🌿",
title:"Consórcios Agrícolas",
text:"Combinar culturas e árvores."
},
{
icon:"♻️",
title:"Reciclagem de Nutrientes",
text:"Aproveitamento da matéria orgânica."
},
{
icon:"🌧",
title:"Conservação da Água",
text:"Proteção de nascentes."
},
{
icon:"👩‍🌾",
title:"Capacitação",
text:"Formação técnica para produtores."
}
];

const faqData = [
{
q:"O que é agrofloresta?",
a:"Sistema que integra árvores, cultivos agrícolas e biodiversidade."
},
{
q:"Quais benefícios?",
a:"Produção sustentável, conservação ambiental e renda."
},
{
q:"É viável economicamente?",
a:"Sim, especialmente a longo prazo."
}
];

// ======================
// RENDERIZAÇÃO
// ======================

function renderCards(data, container){
container.innerHTML=data.map(item=>`
<div class="card">
<h3>${item.icon} ${item.title}</h3>
<p>${item.text}</p>
</div>
`).join('');
}

renderCards(
diagnostics,
document.getElementById("diagnosticCards")
);

renderCards(
solutions,
document.getElementById("solutionsGrid")
);

document.getElementById("indicators").innerHTML =
indicators.map(item=>`
<div class="indicator">
<h3>${item.number}</h3>
<h4>${item.title}</h4>
<p>${item.text}</p>
</div>
`).join('');

// ======================
// QUIZ
// ======================

document.getElementById("quizBtn")
.addEventListener("click",()=>{

document.getElementById("quizArea").innerHTML=
`
<p><strong>Pergunta:</strong></p>
<p>Qual prática ajuda a conservar o solo?</p>

<button onclick="alert('Correto!')">
Plantio Consorciado
</button>

<button onclick="alert('Tente novamente')">
Queimada
</button>
`;

});

// ======================
// TABS
// ======================

const tabsContent={
social:"Fortalece comunidades rurais.",
economico:"Diversifica renda.",
ambiental:"Conserva biodiversidade.",
educacional:"Promove aprendizagem prática.",
tecnologico:"Integra conhecimento científico."
};

const tabContent =
document.getElementById("tabContent");

tabContent.textContent =
tabsContent.social;

document.querySelectorAll(".tab")
.forEach(tab=>{

tab.addEventListener("click",()=>{

document.querySelectorAll(".tab")
.forEach(t=>t.classList.remove("active"));

tab.classList.add("active");

tabContent.textContent =
tabsContent[tab.dataset.tab];

});

});

// ======================
// FAQ
// ======================

const faqContainer =
document.getElementById("faqContainer");

faqData.forEach(item=>{

const div=document.createElement("div");

div.className="accordion-item";

div.innerHTML=`
<button class="accordion-header">
${item.q}
</button>

<div class="accordion-content">
<p>${item.a}</p>
</div>
`;

faqContainer.appendChild(div);

});

document.querySelectorAll(".accordion-header")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelectorAll(".accordion-content")
.forEach(content=>{

if(content!==btn.nextElementSibling){
content.style.maxHeight=null;
}

});

const panel=btn.nextElementSibling;

panel.style.maxHeight=
panel.style.maxHeight
? null
: panel.scrollHeight+"px";

});

});

// ======================
// ACESSIBILIDADE
// ======================

let size=100;

increaseFont.onclick=()=>{
size+=10;
document.body.style.fontSize=size+"%";
};

decreaseFont.onclick=()=>{
size-=10;
document.body.style.fontSize=size+"%";
};

contrastBtn.onclick=()=>{
document.body.classList.toggle(
"high-contrast"
);
};

// ======================
// SCROLL REVEAL
// ======================

const observer=
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("active");
}

});

});

document.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el));

// ======================
// CARROSSEL
// ======================

const slides=[
{
img:"galo.png",
title:"Sistema Agroflorestal",
desc:"Integra árvores e cultivos."
},
{
img:"agro.png",
title:"Produção Sustentável",
desc:"Maior equilíbrio ambiental."
},
{
img:"conservacao.png",
title:"Conservação",
desc:"Proteção do solo e da água."
}
];

let current=0;

const track=
document.getElementById("carouselTrack");

track.innerHTML=slides.map(slide=>`
<div class="slide">
<img src="${slide.img}">
<h3>${slide.title}</h3>
<p>${slide.desc}</p>
</div>
`).join('');

function updateCarousel(){
track.style.transform=
`translateX(-${current*100}%)`;
}

document.querySelector(".next")
.onclick=()=>{
current=(current+1)%slides.length;
updateCarousel();
};

document.querySelector(".prev")
.onclick=()=>{
current=(current-1+slides.length)%slides.length;
updateCarousel();
};

setInterval(()=>{
current=(current+1)%slides.length;
updateCarousel();
},5000);