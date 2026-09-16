const app=document.getElementById("app");

const professionals=[
{name:"Jéssica Santos",place:"Madureira, RJ",rating:"4,9",reviews:127,price:"280",next:"18/09 às 13h",tags:["Box Braids","Knotless","Nagô"]},
{name:"Luana Oliveira",place:"Tijuca, RJ",rating:"4,8",reviews:98,price:"250",next:"19/09 às 10h",tags:["Knotless","Fulani","Twists"]},
{name:"Camila Nunes",place:"Barra da Tijuca, RJ",rating:"4,9",reviews:156,price:"300",next:"18/09 às 15h",tags:["Nagô","Box Braids","Tranças livres"]},
{name:"Roberta Silva",place:"Méier, RJ",rating:"4,7",reviews:84,price:"270",next:"20/09 às 09h",tags:["Box Braids","Twists","Locs"]}
];

function header(){
return `<header class="topbar"><div class="container nav"><a class="logo" href="#/"><span class="logo-mark"></span><span class="brand-word">TRAMA<small class="brand-sub">BELEZA QUE CONECTA</small></span></a><nav class="navlinks"><a href="#/buscar">Buscar trancistas</a><a href="#/como-funciona">Como funciona</a><a href="#/trancistas">Para trancistas</a><a href="#/conteudos">Conteúdos</a></nav><div class="navactions"><button class="btn btn-outline" onclick="toast('Login demonstrativo')">Entrar</button><a class="btn btn-primary" href="#/cadastro">Criar conta</a></div></div></header>`
}

function home(){
return `
${header()}

<main class="home-page">

  <section class="hero">

    <div class="hero-overlay">

      <div class="hero-copy">

        <h1>
          <span>Sua beleza</span>
          <strong>com mais <em>Trama</em></strong>
        </h1>

        <p>
          Encontre trancistas de confiança, descubra novos estilos
          e agende seu horário de forma simples e segura.
        </p>

        <form
          class="home-search"
          onsubmit="event.preventDefault(); buscarHome();"
        >

          <div class="search-field">

            <span class="search-field-icon">⌕</span>

            <div class="search-field-content">

              <label for="home-technique">
                Qual técnica você procura?
              </label>

              <input
                id="home-technique"
                type="text"
                placeholder="Ex: Box Braids, Knotless, Nagô..."
                autocomplete="off"
              >

            </div>

          </div>


          <div class="search-field">

            <span class="search-field-icon">⌖</span>

            <div class="search-field-content">

              <label for="home-location">
                Onde?
              </label>

              <input
                id="home-location"
                type="text"
                placeholder="Rio de Janeiro, bairro ou região"
                autocomplete="off"
              >

            </div>

          </div>


          <button
            type="submit"
            class="search-button"
          >
            Buscar
          </button>

        </form>

      </div>

    </div>

  </section>

</main>
`;
}


function buscarHome(){

  const technique =
    document.getElementById("home-technique")?.value.trim() || "";

  const locationValue =
    document.getElementById("home-location")?.value.trim() || "";

  const params = new URLSearchParams();

  if(technique){
    params.set("tecnica", technique);
  }

  if(locationValue){
    params.set("local", locationValue);
  }

  location.hash =
    "/buscar" +
    (params.toString() ? "?" + params.toString() : "");
}
function proCard(p){
return `<article class="panel"><div style="height:160px;border-radius:12px;background:linear-gradient(135deg,#6b351e,#d47c3d);margin:-2px -2px 14px"></div><h3>${p.name} <span class="verified">●</span></h3><div class="muted">${p.place}</div><b>★ ${p.rating}</b> <span class="muted">(${p.reviews})</span><div style="margin:10px 0">${p.tags.map(t=>`<span style="background:#f1e5d9;border-radius:20px;padding:5px 8px;font-size:11px;margin-right:4px">${t}</span>`).join("")}</div><p>A partir de <b>R$ ${p.price}</b></p><a class="btn btn-dark" href="#/perfil">Ver perfil</a></article>`
}

function search(){
return `${header()}<main class="page"><div class="container"><div class="crumb">Início › Buscar trancistas</div><h1>Encontre sua trancista no Rio de Janeiro</h1><p class="muted">Profissionais para todos os estilos, em todos os cantos da cidade.</p><div class="panel" style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:8px;margin:25px 0"><input class="panel" placeholder="Qual técnica?"><input class="panel" placeholder="Onde?"><input class="panel" placeholder="Quando?"><button class="btn btn-primary">Buscar</button></div><div style="display:grid;grid-template-columns:220px 1fr;gap:18px"><aside class="panel"><b>Filtros</b><hr>${["Localização","Técnica","Faixa de preço","Disponibilidade","Avaliação"].map(x=>`<p><b>${x}</b></p><label><input type="checkbox"> Opções</label>`).join("")}</aside><section><div style="display:flex;justify-content:space-between;margin-bottom:12px"><b>126 trancistas encontradas</b><select><option>Mais relevantes</option></select></div><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px">${professionals.map(proCard).join("")}</div></section></div></div></main>`
}

function profile(){
return `${header()}<section class="profile-hero"><div class="container"><div class="crumb">Início › Buscar › Jéssica Santos</div><div class="profile-intro"><div class="profile-photo-real"></div><div class="profile-info"><span class="verified">● Perfil verificado</span><h1>Jéssica Santos</h1><p>Especialista em Box Braids, Knotless e Nagô, com atendimento em Madureira, Rio de Janeiro.</p><div>⌖ Madureira, RJ</div><div style="margin-top:8px">★ 4,9 <span style="color:#cbb6a9">(127 avaliações)</span></div><div class="profile-stats"><div><strong>6 anos</strong><span>de experiência</span></div><div><strong>1h</strong><span>tempo de resposta</span></div><div><strong>98%</strong><span>comparecimento</span></div></div></div><div class="booking-card"><span class="muted">A partir de</span><div class="price-big">R$ 280</div><p class="muted">Próximo horário: <b>18/09 às 13h</b></p><a class="btn btn-primary" href="#/agendamento">Agendar horário</a><button class="btn btn-light" style="margin-top:8px" onclick="toast('Adicionado aos favoritos')">♡ Favoritar</button></div></div></div></section><section class="profile-main"><div class="container profile-content"><div><h2>Portfólio</h2><p class="muted">Trabalhos recentes de Jéssica.</p><div class="portfolio-large">${[1,2,3,4,5,6].map(i=>`<div class="work"></div>`).join("")}</div><div style="margin-top:50px"><h2>Serviços</h2><div class="service-list">${[["Box Braids","R$ 280","5 horas"],["Knotless","R$ 350","6 horas"],["Nagô","R$ 180","3 horas"],["Fulani","R$ 320","5 horas"]].map(x=>`<div class="service-row"><div><b>${x[0]}</b><br><small>${x[2]}</small></div><div><b>${x[1]}</b><br><a class="orange" href="#/agendamento">Agendar →</a></div></div>`).join("")}</div></div><div style="margin-top:50px"><h2>Avaliações</h2><div class="review"><b>★★★★★ 5,0</b><p>O resultado ficou exatamente como eu queria. Atendimento organizado e pontual.</p><small class="muted">Cliente verificada · atendimento realizado</small></div></div></div><aside class="sticky-panel"><div class="panel"><h3>Sobre o atendimento</h3><div class="list-row">Local <b>Madureira, RJ</b></div><div class="list-row">Atendimento <b>Estúdio</b></div><div class="list-row">Material <b>Incluso</b></div><div class="list-row">Pagamento <b>Pix ou cartão</b></div><a class="btn btn-primary" style="display:block;text-align:center;margin-top:15px" href="#/agendamento">Escolher horário</a></div></aside></div></section>`
}

function booking(){
return `${header()}<main class="page"><div class="container"><div class="crumb">Início › Jéssica Santos › Agendamento</div><h1>Agende seu horário</h1><p class="muted">Escolha o serviço, a data e o horário.</p><div class="booking-layout"><section><div class="panel"><h2>1. Serviço</h2>${["Box Braids — R$ 280 · 5h","Knotless — R$ 350 · 6h","Nagô — R$ 180 · 3h"].map((x,i)=>`<div class="service-option ${i===0?'selected':''}" onclick="this.parentElement.querySelectorAll('.service-option').forEach(e=>e.classList.remove('selected'));this.classList.add('selected')"><b>${x}</b><span>○</span></div>`).join("")}</div><div class="panel" style="margin-top:18px"><h2>2. Data e horário</h2><div class="calendar">${["16","17","18","19","20","21","22","23","24","25","26","27","28","29"].map((d,i)=>`<button class="day ${i===2?'selected':''}" onclick="this.parentElement.querySelectorAll('.day').forEach(e=>e.classList.remove('selected'));this.classList.add('selected')">${d}</button>`).join("")}</div><div class="times" style="margin-top:18px">${["09:00","10:30","13:00","14:00","16:00","17:30"].map((t,i)=>`<button class="time ${i===2?'selected':''}" onclick="this.parentElement.querySelectorAll('.time').forEach(e=>e.classList.remove('selected'));this.classList.add('selected')">${t}</button>`).join("")}</div></div></section><aside class="panel"><h2>Resumo</h2><div class="list-row">Profissional <b>Jéssica Santos</b></div><div class="list-row">Serviço <b>Box Braids</b></div><div class="list-row">Data <b>18/09</b></div><div class="list-row">Horário <b>13:00</b></div><div class="list-row">Valor <b>R$ 280</b></div><div class="list-row">Sinal <b>R$ 84</b></div><p class="muted" style="font-size:13px">A política de cancelamento aparece antes da confirmação.</p><button class="btn btn-primary" style="width:100%" onclick="toast('Reserva confirmada — demonstração')">Confirmar e pagar sinal</button></aside></div></div></main>`
}

function stylist(){
return `${header()}<main class="page"><div class="container"><h1>Seu trabalho. Sua agenda. Seus clientes.</h1><p class="muted" style="font-size:18px;max-width:650px">Organize seu atendimento, mostre seu portfólio e conecte-se a pessoas que procuram trancistas no Rio de Janeiro.</p><a class="btn btn-primary" href="#/cadastro">Criar meu perfil</a><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin-top:40px">${["Perfil profissional","Agenda","Clientes","Financeiro"].map(x=>`<div class="panel"><h3>${x}</h3><p class="muted">Ferramenta para organizar sua operação.</p></div>`).join("")}</div></div></main>`
}

function register(){
return `${header()}<main class="page"><div class="container" style="max-width:700px"><div class="panel"><div class="crumb">Início › Cadastro</div><h1>Crie seu perfil de trancista</h1>${["Nome profissional","Telefone","E-mail","Bairro de atendimento","Técnicas que você oferece"].map(x=>`<div class="panel" style="margin:10px 0"><label>${x}</label><input style="width:100%;border:0;outline:0;margin-top:6px" placeholder="Digite ${x.toLowerCase()}"></div>`).join("")}<button class="btn btn-primary" style="width:100%" onclick="location.hash='/dashboard'">Continuar</button></div></div></main>`
}

function how(){
return `${header()}<main class="page"><div class="container"><h1>Do encontro ao agendamento.</h1><p class="muted">A plataforma organiza a contratação de um serviço de tranças do começo ao fim.</p><div class="panel" style="margin-top:25px">${["Descoberta","Comparação","Decisão","Agendamento","Confirmação","Atendimento","Avaliação","Recorrência"].map((x,i)=>`<div class="list-row"><b>0${i+1} · ${x}</b><span class="muted">Organizado pela plataforma</span></div>`).join("")}</div></div></main>`
}

function content(){
return `${header()}<main class="page"><div class="container"><h1>Universo das tranças</h1><p class="muted">Conteúdos para escolher, cuidar e conhecer mais sobre técnicas e cultura.</p><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-top:25px">${["Como escolher o tipo de trança","Cuidados antes de trançar","A história por trás das tranças"].map(x=>`<article class="panel"><div style="height:150px;background:linear-gradient(135deg,#61311d,#d47738);border-radius:10px;margin-bottom:15px"></div><h3>${x}</h3><p class="muted">Conteúdo demonstrativo.</p></article>`).join("")}</div></div></main>`
}

function dashboard(){
return `${header()}<main class="dashboard"><aside class="side"><b>Área da trancista</b>${["Dashboard","Agenda","Serviços","Portfólio","Clientes","Inbox","Financeiro","Avaliações"].map((x,i)=>`<a class="${i===0?'active':''}" href="#/dashboard">${x}</a>`).join("")}</aside><section class="dashmain"><div class="crumb">Área da trancista › Dashboard</div><h1>Olá, Jéssica.</h1><div class="stat-grid">${[["Atendimentos hoje","3"],["Receita prevista","R$ 840"],["Mensagens pendentes","2"],["Avaliação média","4,9"]].map(x=>`<div class="stat"><span class="muted">${x[0]}</span><strong>${x[1]}</strong></div>`).join("")}</div><div class="dash-grid"><div class="panel"><h2>Agenda de hoje</h2>${["09:00 — Ana Souza","14:00 — Mariana Alves","19:00 — Camila Ribeiro"].map(x=>`<div class="list-row">${x}<span>Confirmado</span></div>`).join("")}</div><div class="panel"><h2>Atalhos</h2><button class="btn btn-dark" style="width:100%;margin:5px 0">+ Adicionar serviço</button><button class="btn btn-light" style="width:100%;margin:5px 0">Atualizar portfólio</button></div></div></section></main>`
}

function toast(msg){
const t=document.createElement("div");
t.textContent=msg;
t.style.cssText="position:fixed;right:20px;bottom:20px;background:#32180d;color:#fff;padding:14px 18px;border-radius:10px;z-index:100";
document.body.appendChild(t);
setTimeout(()=>t.remove(),2200)
}

function render(){
const p=location.hash.replace("#","")||"/";

const views={
"/":home,
"/buscar":search,
"/perfil":profile,
"/agendamento":booking,
"/trancistas":stylist,
"/cadastro":register,
"/como-funciona":how,
"/conteudos":content,
"/dashboard":dashboard
};

app.innerHTML=(views[p]||home)();

window.scrollTo(0,0)
}

addEventListener("hashchange",render);
render();
