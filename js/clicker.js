var gold = 0;
var goldMultipler = 1;

var dpc = 1;
var dps = 0;
var stage = 1;

var enemyHealthMultipler = 1;
var enemy = {
  maxHealth : random(10*enemyHealthMultipler)+10*enemyHealthMultipler,
  killedCount : 0,
  stageKilledCount: 0
};
var currentHealth = enemy.maxHealth;

var sword = {
  cost: 20,
  ownedCount: 0,
  damageMultipler: 1.08,
  costMultipler: 1.08
};

var luda = {
  cost : 50,
  ownedCount : 0,
  damageMultipler: 1.15,
  costMultipler: 1.11
};

var galina = {
  cost : 500,
  ownedCount : 0,
  damageMultipler: 5.15,
  costMultipler: 1.11
};

var anton = {
  cost : 2000,
  ownedCount : 0,
  damageMultipler: 20.15,
  costMultipler: 1.11
};

var yarik = {
  cost : 10000,
  ownedCount : 0,
  damageMultipler: 100.15,
  costMultipler: 1.11
};

var nazar = {
  cost : 50000,
  ownedCount : 0,
  damageMultipler: 200.15,
  costMultipler: 1.11
};

var olia = {
  cost : 500000,
  ownedCount : 0,
  damageMultipler: 500.15,
  costMultipler: 1.11
};

function dpsEarn(){
  if (dps > 0) {
    currentHealth -= dps;
    if (currentHealth <= 0) {
      $("#enemyImg").fadeOut(200).fadeIn(200);
      enemy.killedCount += 1;
      enemy.stageKilledCount += 1;
      enemy.maxHealth = random(10*enemyHealthMultipler)+10*enemyHealthMultipler;
      currentHealth = enemy.maxHealth;
      gold += goldMultipler * (stage*1.08);
    };
    if (enemy.stageKilledCount == 10){
      enemy.stageKilledCount = 0
      stage++;
      enemyHealthMultipler *= 1.1;
    };
    refreshGame();
    enemyAnimation();
  }else {
    refreshGame();
  }
};

function clickHandlerEnemy(){
  currentHealth -= dpc;
  if (currentHealth <= 0) {
    $("#enemyImg").fadeOut(200).fadeIn(200);
    enemy.killedCount += 1;
    enemy.stageKilledCount += 1;
    enemy.maxHealth = random(10*enemyHealthMultipler)+10*enemyHealthMultipler;
    currentHealth = enemy.maxHealth;
    gold += goldMultipler * (stage*1.08);
  };
  if (enemy.stageKilledCount == 10){
    enemy.stageKilledCount = 0
    stage++;
    enemyHealthMultipler *= 1.1;
  };
  refreshGame();
  enemyAnimation();
};

function rounded(number, countAfterFloat){
  return number.toFixed(countAfterFloat);
};

function random(size){
  return Math.floor(Math.random()*size)
};

function refreshGame(){
  $("#gold").text("Gold: " + Math.floor(gold));

  $("#dpc").text("DPC: " + Math.floor(dpc));
  $("#dps").text("DPS: " + Math.floor(dps));

  $("#sword").text("Sword " + Math.floor(sword.cost) + " coins" + " (+" + Math.floor(sword.damageMultipler - dps) + " DPC) " + "Owned "+ sword.ownedCount);

  $("#luda").text("Luda " + Math.floor(luda.cost) + " coins" + " (+" + Math.floor(luda.damageMultipler - dps) + " DPS) " + "Owned " + luda.ownedCount);
  $("#galina").text("Galiasha " + Math.floor(galina.cost) + " coins" + " (+" + Math.floor(galina.damageMultipler - dps) + " DPS) " + "Owned " + galina.ownedCount);
  $("#anton").text("Anton " + Math.floor(anton.cost / 1000) + "K coins" + " (+" + Math.floor(anton.damageMultipler - dps) + " DPS) " + "Owned " + anton.ownedCount);
  $("#yarik").text("Yarik " + Math.floor(yarik.cost / 1000) + "K coins" + " (+" + Math.floor(yarik.damageMultipler - dps) + " DPS) " + "Owned " + yarik.ownedCount);
  $("#nazar").text("Nazar " + Math.floor(nazar.cost / 1000) + "K coins" + " (+" + Math.floor(nazar.damageMultipler - dps) + " DPS) " + "Owned " + nazar.ownedCount);
  $("#olia").text("Oliasha " + Math.floor(olia.cost / 1000) + "K coins" + " (+" + Math.floor(olia.damageMultipler - dps) + " DPS) " + "Owned " + olia.ownedCount);

  $("#enemyHealth").text("Health: " + rounded(currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
  $("#killedCount").text(enemy.stageKilledCount + "/" + 10);
  $("#stage").text("STAGE: " + stage)
};

function enemyAnimation(){
  for (var i = 0; i < 1; i++) {
  enemyImg.style.paddingLeft = random(40) + "px";
  enemyImg.style.paddingTop = random(40) + "px";
  };
};

function clickHandlerShopClick(equipment){
  if (gold >= equipment.cost) {
    gold -= equipment.cost;
    dpc = (dpc * equipment.damageMultipler) + 1;
    equipment.ownedCount++;
    equipment.cost *= Math.pow(equipment.costMultipler, equipment.ownedCount);
    refreshGame();
  }else {
    alert("You need " + Math.floor(equipment.cost - gold) + " more coins");
  };
};

function clickHandlerShopAuto(hero){
  if (gold >= hero.cost) {
    gold -= hero.cost;
    dps = (dps * hero.damageMultipler) + 1;
    hero.ownedCount++;
    hero.cost *= Math.pow(hero.costMultipler, hero.ownedCount);
    refreshGame();
  }else {
    alert("You need " + Math.floor(hero.cost - gold) + " more coins");
  };
};

setInterval(dpsEarn, 1000);

$("main").click(clickHandlerEnemy);

$("#luda").click(function(){
  clickHandlerShopAuto(luda)
});

$("#galina").click(function(){
  clickHandlerShopAuto(galina)
});

$("#anton").click(function(){
  clickHandlerShopAuto(anton)
});

$("#yarik").click(function(){
  clickHandlerShopAuto(yarik)
});

$("#nazar").click(function(){
  clickHandlerShopAuto(nazar)
});

$("#olia").click(function(){
  clickHandlerShopAuto(olia)
});

$("#sword").click(function(){
  clickHandlerShopClick(sword);
});
