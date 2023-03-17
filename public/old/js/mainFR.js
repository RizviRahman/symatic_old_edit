const cardlist = document.querySelectorAll('.card__inner');


let chemicalcheck = true
let chemical1check = false
chemical = document.getElementById('chemical')
chemical.addEventListener('click', function(){
  if(chemicalcheck && renewablecheck && oilcheck && nuclearcheck && footprintcheck && watercheck && wastecheck && productioncheck && cybercheck && informaticcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    green = document.getElementById('green')
  green.innerHTML = `<div class="card__header1">
  <i class="fa fa-flash"></i>
  <h2>Petrochimie & Chimie</h2>
</div>
<div class="card__body">
  <p><strong>- Securité Environnementale</strong></p>
<p><strong>- Pilotage d’Instalation</strong></p>
<p><strong>- Construction</strong></p>
<p><strong>- Biomasse</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[0].classList.add('is-flipped');
    chemicalcheck = false
  },100)
  chemical1check = false
  }
})



let renewablecheck = true
let renewable1check = false
renewable = document.getElementById('renewable')
renewable.addEventListener('click', function(){
  if(chemicalcheck && renewablecheck && oilcheck && nuclearcheck && footprintcheck && watercheck && wastecheck && productioncheck && cybercheck && informaticcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    green = document.getElementById('green')
  green.innerHTML = `<div class="card__header1">
  <i class="fa fa-flash"></i>
  <h2>Renouvelable</h2>
</div>
<div class="card__body1">
  <p><strong>- Geothermique</strong></p>
<p><strong>- Hydrogène</strong></p>
<p><strong>- Eolienne</strong></p>
<p><strong>- Solaire</strong></p>
<p><strong>- Marine</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[0].classList.add('is-flipped');
    renewablecheck = false
  },100)
  renewable1check = false
  }
    
})



let oilcheck = true
let oil1check = false
oil = document.getElementById('oil')
oil.addEventListener('click', function(){
  if(chemicalcheck && renewablecheck && oilcheck && nuclearcheck && footprintcheck && watercheck && wastecheck && productioncheck && cybercheck && informaticcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    green = document.getElementById('green')
  green.innerHTML = `<div class="card__header1">
  <i class="fa fa-flash"></i>
  <h2>Oil & Gas</h2>
</div>
<div class="card__body">
  <p><strong>- Onshore/Offshore</strong></p>
<p><strong>- Subsea</strong></p>
<p><strong>- Raffinage</strong></p>
<p><strong>- Distribution</strong></p>
<p><strong>- Transport</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[0].classList.add('is-flipped');
    oilcheck = false
  },100)
  oil1check = false
  }
})

let nuclearcheck = true
let nuclear1check = false
nuclear = document.getElementById('nuclear')
nuclear.addEventListener('click', function(){
  if(chemicalcheck && renewablecheck && oilcheck && nuclearcheck && footprintcheck && watercheck && wastecheck && productioncheck && cybercheck && informaticcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    green = document.getElementById('green')
  green.innerHTML = `<div class="card__header1">
  <i class="fa fa-flash"></i>
  <h2>Nucleaire</h2>
</div>
<div class="card__body">
  <p><strong>- Prod. Electricité</strong></p>
<p><strong>- Infrastructure</strong></p>
<p><strong>- Dechets</strong></p>
<p><strong>- Sécurité</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[0].classList.add('is-flipped');
    nuclearcheck = false
  },100)
  nuclear1check = false
  }
})


let footprintcheck = true
let footprint1check = true
footprint = document.getElementById('footprint')
footprint.addEventListener('click', function(){
  if(footprintcheck && watercheck && wastecheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && productioncheck && cybercheck && informaticcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    blue = document.getElementById('blue')
  blue.innerHTML = `<div class="card__header2">	
  <i class="fa fa-recycle"></i>
  <h2>Empreinte Environnementale</h2>
</div>
<div class="card__body">
  <p><strong>- Biodiversité</strong></p>
<p><strong>- Carbonne</strong></p>
<p><strong>- Eau</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[1].classList.add('is-flipped');
    footprintcheck = false
  },100)
  footprint1check = false
  }
})




let watercheck = true
let water1check = false
water = document.getElementById('water')
water.addEventListener('click', function(){
  if(footprintcheck && watercheck && wastecheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && productioncheck && cybercheck && informaticcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    blue = document.getElementById('blue')
  blue.innerHTML = `<div class="card__header2">	
  <i class="fa fa-recycle"></i>
  <h2>Traitement d’eau</h2>
</div>
<div class="card__body2">
  <h4><strong>- Gestion des Effluences</strong></h4>
  <h2>Industriels</h2>
<p><strong>- Gestion des Reseaux</strong></p>
<p><strong>- Gestion de l’Approvisionnement</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[1].classList.add('is-flipped');
    watercheck = false
  },100)
  water1check = false
  }
})


let wastecheck = true
let waste1check = true
waste = document.getElementById('waste')
waste.addEventListener('click', function(){
  if(footprintcheck && watercheck && wastecheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && productioncheck && cybercheck && informaticcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    blue = document.getElementById('blue')
  blue.innerHTML = `<div class="card__header2">	
  <i class="fa fa-recycle"></i>
  <h2>Dechet</h2>
</div>
<div class="card__body">
<p><strong>- Gestion Dechets Dangereux</strong></p>
  <p><strong>- Maintenance et Nettoyage</strong></p>
<p><strong>- Traitement et Stockage</strong></p>
<p><strong>- Convertir les Dechets</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[1].classList.add('is-flipped');
    wastecheck = false
  },100)
  waste1check = false
  }
})



let productioncheck = true
let production1check = true
production = document.getElementById('production')
production.addEventListener('click', function(){
  if(productioncheck && cybercheck && informaticcheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && watercheck && wastecheck && footprintcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    silver = document.getElementById('silver')
  silver.innerHTML = `<div class="card__header3">	
  <i class="fa fa-laptop"></i>
  <h2>Infrastructure et Production</h2>
</div>
<div class="card__body">
  <p><strong>- Businesse Intelligence</strong></p>
<p><strong>- Architecte</strong></p>
<p><strong>- Big Data</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[2].classList.add('is-flipped');
    productioncheck = false
  },100)
  production1check = false
  }
})


let cybercheck = true
let cyber1check = false
cyber = document.getElementById('cyber')
cyber.addEventListener('click', function(){
  if(productioncheck && cybercheck && informaticcheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && watercheck && wastecheck && footprintcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    silver = document.getElementById('silver')
  silver.innerHTML = `<div class="card__header3">	
  <i class="fa fa-laptop"></i>
  <h2>Cybersécurité</h2>
</div>
<div class="card__body">
  <p><strong>- Commerce Internationale</strong></p>
<p><strong>- Edge Computing</strong></p>
<p><strong>- IoT Industriel</strong></p>
<p><strong>- Logistique</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[2].classList.add('is-flipped');
    cybercheck = false
  },100)
  cyber1check = false
  }
})


let informaticcheck = true
let informatic1check = true
informatic = document.getElementById('informatic')
informatic.addEventListener('click', function(){
  if(productioncheck && cybercheck && informaticcheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && watercheck && wastecheck && footprintcheck && constructioncheck && buildingcheck && railwaycheck && navalcheck && card1 && card2 && card3 && card4){
    silver = document.getElementById('silver')
  silver.innerHTML = `<div class="card__header3">	
  <i class="fa fa-laptop"></i>
  <h2>Informatique</h2>
</div>
<div class="card__body">
  <p><strong>- Software Développement</strong></p>
<p><strong>- Fullstack développement</strong></p>
<p><strong>- Moe/Moa</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[2].classList.add('is-flipped');
    informaticcheck = false
  },100)
  informatic1check = false
  }
})


let constructioncheck = true
let construction1check = false
construction = document.getElementById('construction')
construction.addEventListener('click', function(){
  if(constructioncheck && buildingcheck && railwaycheck && navalcheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && watercheck && wastecheck && footprintcheck && productioncheck && cybercheck && informaticcheck && card1 && card2 && card3 && card4){
    orange = document.getElementById('orange')
  orange.innerHTML = `<div class="card__header">	
  <i class='fa fa-solid fa-helmet-safety'></i>
  <h2>Construction</h2>
</div>
<div class="card__body">
  <p><strong>- Industrie Lourde</strong></p>
<p><strong>- Ouvrage d’art</strong></p>
<p><strong>- Hydraulique</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[3].classList.add('is-flipped');
    constructioncheck = false
  },100)
  construction1check = false
  }
})


let buildingcheck = true
let building1check = true
building = document.getElementById('building')
building.addEventListener('click', function(){
  if(constructioncheck && buildingcheck && railwaycheck && navalcheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && watercheck && wastecheck && footprintcheck && productioncheck && cybercheck && informaticcheck && card1 && card2 && card3 && card4){
    orange = document.getElementById('orange')
  orange.innerHTML = `<div class="card__header">	
  <i class='fa fa-solid fa-helmet-safety'></i>
  <h2>Bâtiment</h2>
</div>
<div class="card__body">
  <p><strong>- Environnement</strong></p>
<p><strong>- Industriels</strong></p>
<p><strong>- Tertiaires</strong></p>
<p><strong>- Maritime</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[3].classList.add('is-flipped');
    buildingcheck = false
  },100)
  building1check = false
  }
})


let railwaycheck = true
let railway1check = true
railway = document.getElementById('railway')
railway.addEventListener('click', function(){
  if(constructioncheck && buildingcheck && railwaycheck && navalcheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && watercheck && wastecheck && footprintcheck && productioncheck && cybercheck && informaticcheck && card1 && card2 && card3 && card4){
    orange = document.getElementById('orange')
  orange.innerHTML = `<div class="card__header">	
  <i class='fa fa-solid fa-helmet-safety'></i>
  <h2>Ferrovière</h2>
</div>
<div class="card__body">
<p><strong>- Infrastructures</strong></p>
<p><strong>- Lourd (Ter, Tet, Tgv..)</strong></p>
<p><strong>- Gestionnaire</strong></p>
<p><strong>- Guidé Urbain (Tramway,</strong></p>
  <h2>Metro…)</h2>
</div>`
  setTimeout(()=>{
    cardlist[3].classList.add('is-flipped');
    railwaycheck = false
  },100)
  railway1check = false
  }
})


let navalcheck = true
let naval1check = true
naval = document.getElementById('naval')
naval.addEventListener('click', function(){
  if(constructioncheck && buildingcheck && railwaycheck && navalcheck && chemicalcheck && renewablecheck && oilcheck && nuclearcheck && watercheck && wastecheck && footprintcheck && productioncheck && cybercheck && informaticcheck && card1 && card2 && card3 && card4){
    orange = document.getElementById('orange')
  orange.innerHTML = `<div class="card__header">	
  <i class='fa fa-solid fa-helmet-safety'></i>
  <h2>Naval</h2>
</div>
<div class="card__body">
  <p><strong>- Geotechnique</strong></p>
<p><strong>- Equipements</strong></p>
<p><strong>- Sous Marin</strong></p>
<p><strong>- Systemes</strong></p>
</div>`
  setTimeout(()=>{
    cardlist[3].classList.add('is-flipped');
    navalcheck = false
  },100)
  naval1check = false
  }
})



let card1 = true
cardlist[0].addEventListener("click", function (e) {
  if(chemical1check && renewable1check && oil1check && nuclear1check && card1){
    green = document.getElementById('green')
    green.innerHTML = `<div class="card__header1">
  <i class="fa fa-flash"></i>
  <h2>Oil & Gas</h2>
</div>
<div class="card__body">
  <p><strong>- Onshore/Offshore</strong></p>
<p><strong>- Subsea</strong></p>
<p><strong>- Raffinage</strong></p>
<p><strong>- Distribution</strong></p>
<p><strong>- Transport</strong></p>
</div>`
    setTimeout(()=>{
      cardlist[0].classList.add('is-flipped');
      card1 = false
    },100)
  }
});


let card2 = true
cardlist[1].addEventListener("click", function (e) {
  if(footprint1check && waste1check && water1check && card2){
    blue = document.getElementById('blue')
  blue.innerHTML = `<div class="card__header2">	
  <i class="fa fa-recycle"></i>
  <h2>Traitement d’eau</h2>
</div>
<div class="card__body">
  <p><strong>- Gestion des Effluences Industriels</strong></p>
<p><strong>- Gestion des Reseaux</strong></p>
<p><strong>- Gestion de l’Approvisionnement</strong></p>
</div>`
    
    setTimeout(()=>{
      cardlist[1].classList.toggle('is-flipped');
      card2 = false
    },100)
  }
});


let card3 = true
cardlist[2].addEventListener("click", function (e) {
  if(production1check && cyber1check && informatic1check && card3){
    silver = document.getElementById('silver')
  silver.innerHTML = `<div class="card__header3">	
  <i class="fa fa-laptop"></i>
  <h2>Cybersécurité</h2>
</div>
<div class="card__body">
  <p><strong>- Commerce Internationale</strong></p>
<p><strong>- Edge Computing</strong></p>
<p><strong>- IoT Industriel</strong></p>
<p><strong>- Logistique</strong></p>
</div>`
    
    setTimeout(()=>{
      cardlist[2].classList.toggle('is-flipped');
      card3 = false
    },100)
  }
});


let card4 = true
cardlist[3].addEventListener("click", function (e) {
  if(construction1check && building1check && railway1check && naval1check && card4){
    orange = document.getElementById('orange')
  orange.innerHTML = `<div class="card__header">	
  <i class='fa fa-solid fa-helmet-safety'></i>
  <h2>Construction</h2>
</div>
<div class="card__body">
  <p><strong>- Industrie Lourde</strong></p>
<p><strong>- Ouvrage d’art</strong></p>
<p><strong>- Hydraulique</strong></p>
</div>`
    
    setTimeout(()=>{
      cardlist[3].classList.toggle('is-flipped');
      card4 = false
    },100)
  }
});


document.addEventListener('click', function(){
  if(!chemicalcheck || !renewablecheck || !oilcheck || !nuclearcheck || !card1){
    cardlist[0].classList.remove('is-flipped')
    chemicalcheck = true
    chemical1check = false
    renewablecheck = true
    renewable1check = false
    oilcheck =true
    oil1check =false
    nuclearcheck = true
    nuclear1check = false
    card1 = true
  }
  if(!footprintcheck || !watercheck || !wastecheck || !card2){
    cardlist[1].classList.remove('is-flipped')
    footprintcheck = true
    watercheck = true
    wastecheck = true
    footprint1check = false
    water1check = false
    waste1check = false
    card2 = true
  }
  if(!productioncheck || !cybercheck || !informaticcheck || !card3){
    cardlist[2].classList.remove('is-flipped')
    productioncheck = true
    cybercheck = true
    informaticcheck = true
    production1check = false
    cyber1check = false
    informatic1check = false
    card3 = true
  }
  if(!constructioncheck || !buildingcheck || !railwaycheck || !navalcheck || !card4){
    cardlist[3].classList.remove('is-flipped')
    constructioncheck = true
    buildingcheck = true
    railwaycheck = true
    navalcheck = true
    construction1check = false
    building1check = false
    railway1check = false
    naval1check = false
    card4 = true
  }
})
