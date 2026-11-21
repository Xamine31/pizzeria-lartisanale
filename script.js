const pizzas = [
  {name:'Méditerranéenne',type:'blanche',price:11,ingredients:'Thon, persillade, câpres, mozzarella',tag:'Saveurs du Sud'},
  {name:'Kebab',type:'blanche',price:11,ingredients:'Kebab, oignons confits, mozzarella, emmental'},
  {name:'Reine blanche',type:'blanche',price:11,ingredients:'Jambon de dinde, champignons, emmental, mozzarella'},
  {name:'Forestière',type:'blanche',price:11,ingredients:'Poulet, champignons, emmental, mozzarella'},
  {name:'Crèmière',type:'blanche',price:11,ingredients:'Emmental, mozzarella, roquefort, chèvre',tag:'Fromages'},
  {name:'Maya',type:'blanche',price:11,ingredients:'Emmental, chèvre, miel',tag:'Sucré-salé'},
  {name:'Paysanne',type:'blanche',price:11,ingredients:'Lardons de dinde, pommes de terre, oignons confits, mozzarella'},
  {name:'Campagnarde',type:'blanche',price:12,ingredients:'Poulet rôti, pommes de terre, oignons confits, mozzarella'},
  {name:'Fraîcheur',type:'blanche',price:12,ingredients:'Mozzarella, salade, tomate, parmesan, pesto, jambon de dinde'},
  {name:'Océanne',type:'blanche',price:12,ingredients:'Saumon, persillade'},
  {name:'Boisé',type:'blanche',price:13,ingredients:'Poulet, poivrons, mozzarella, sauce fromagère'},
  {name:'Tartiflette',type:'blanche',price:13,ingredients:'Lardons, pommes de terre, oignons confits, mozzarella, reblochon'},
  {name:'Moitié / Moitié',type:'rouge',price:9,ingredients:'Anchois et fromage'},
  {name:'Anchois',type:'rouge',price:9,ingredients:'Anchois'},
  {name:'Fromage',type:'rouge',price:9,ingredients:'Fromage'},
  {name:'Royale',type:'rouge',price:11,ingredients:'Mozzarella, jambon de dinde, champignons, emmental',tag:'Classique'},
  {name:'4 fromages',type:'rouge',price:11,ingredients:'Emmental, mozzarella, roquefort, chèvre',tag:'Fromages'},
  {name:'L’Orientale',type:'rouge',price:11,ingredients:'Merguez, poivrons, emmental'},
  {name:'Arménienne',type:'rouge',price:11,ingredients:'Bœuf, persillade, oignons confits, huile'},
  {name:'Viande hachée',type:'rouge',price:11,ingredients:'Bœuf, persillade, oignons confits, huile, mozzarella'},
  {name:'Thon / Mozza',type:'rouge',price:11,ingredients:'Thon, mozzarella'},
  {name:'Chorizo poivrons',type:'rouge',price:11,ingredients:'Mozzarella, emmental'},
  {name:'Aubergine parmesan',type:'rouge',price:11,ingredients:'Mozzarella, parmesan'},
  {name:'Parmesane',type:'rouge',price:12,ingredients:'Mozzarella, tomate cerise, pesto, parmesan, jambon'},
  {name:'Italienne',type:'rouge',price:12,ingredients:'Mélange de salade, tomate, parmesan, pesto, jambon'},
  {name:'Napolitaine',type:'rouge',price:12,ingredients:'Mozzarella, anchois, câpres, pesto'},
  {name:'La reine marguerite',type:'rouge',price:12,ingredients:'Mozzarella fraîche italienne, huile, basilic, noix, tomate cerise'},
  {name:'Végétarienne',type:'rouge',price:13,ingredients:'Oignons confits, aubergine, poivron, mozzarella'},
  {name:'Moussaka',type:'rouge',price:13,ingredients:'Viande hachée, oignons confits, persil, aubergine, mozzarella'},
  {name:'Thon persillade',type:'rouge',price:13,ingredients:'Oignons confits, thon, persillade'},
  {name:'Di Buffala',type:'rouge',price:13,ingredients:'Tomate, salade, jambon de dinde, parmesan, tomate, pesto, mozzarella fraîche italienne'}
];
const grid = document.getElementById('pizza-grid');
const filters = document.querySelectorAll('.filter');
const formatPrice = n => `${n.toFixed(2).replace('.', ',')} €`;
function renderPizzas(filter='all') {
  const entries = pizzas.filter(p => filter === 'all' || p.type === filter);
  document.getElementById('pizza-count').textContent = `${entries.length} pizzas`;
  grid.innerHTML = entries.map(p => `<article class="pizza-card"><div class="pizza-top"><span class="pizza-type ${p.type}">${p.type === 'blanche' ? 'SAUCE BLANCHE' : 'SAUCE ROUGE'}</span>${p.tag ? `<span class="pizza-tag">${p.tag}</span>` : ''}</div><h3>${p.name}</h3><p>${p.ingredients}</p><div class="pizza-bottom"><span>Préparée avec soin</span><strong>${formatPrice(p.price)}</strong></div></article>`).join('');
}
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => {b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});
  renderPizzas(btn.dataset.filter);
}));
renderPizzas();
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navigation');
toggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));toggle.setAttribute('aria-label',isOpen?'Fermer le menu':'Ouvrir le menu');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Ouvrir le menu');}));
document.getElementById('year').textContent = new Date().getFullYear();
if('IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
