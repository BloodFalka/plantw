var settings = {
  language : "enLanguage"
};

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
  damageMultipler: 1,
  costMultipler: 1.08
};

var luda = {
  cost : 50,
  ownedCount : 0,
  damageMultipler: 1,
  costMultipler: 1.09
};

var galina = {
  cost : 500,
  ownedCount : 0,
  damageMultipler: 5,
  costMultipler: 1.09
};

var anton = {
  cost : 2000,
  ownedCount : 0,
  damageMultipler: 20,
  costMultipler: 1.09
};

var yarik = {
  cost : 10000,
  ownedCount : 0,
  damageMultipler: 100,
  costMultipler: 1.09
};

var nazar = {
  cost : 50000,
  ownedCount : 0,
  damageMultipler: 200,
  costMultipler: 1.09
};

var olia = {
  cost : 500000,
  ownedCount : 0,
  damageMultipler: 500,
  costMultipler: 1.09
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
  /*if ((stage % 5) && (enemy.stageKilledCount !== 9)) {
  }else {
    enemy.maxHealth *= 10;
    currentHealth = enemy.maxHealth;
  };
  if ((stage % 6) && (enemy.stageKilledCount !== 0)) {     //
  } else {
    enemy.maxHealth /= 10;
    currentHealth = enemy.maxHealth;
  };*/
  refreshGame();
  enemyAnimation();
};

function rounded(number, countAfterFloat){
  return number.toFixed(countAfterFloat);
};

function random(size){
  return Math.floor(Math.random()*size)
}

function refreshGame(){
  if (settings.language === "enLanguage") {

    $("#gold").text("Gold: " + Math.floor(gold));

    $("#dpc").text("DPC: " + Math.floor(dpc));
    $("#dps").text("DPS: " + Math.floor(dps));

    $("#sword").html("Sword </br>" + Math.floor(sword.cost) + " coins" +" (+" + Math.floor(sword.damageMultipler) + " DPC) </br>" + "Owned "+ sword.ownedCount);

    $("#luda").html("Luda </br>" + Math.floor(luda.cost) + " coins" + " (+" + Math.floor(luda.damageMultipler) + " DPS) </br>" + "Owned " + luda.ownedCount);
    $("#galina").html("Galiasha </br>" + Math.floor(galina.cost) + " coins" + " (+" + Math.floor(galina.damageMultipler) + " DPS) </br>" + "Owned " + galina.ownedCount);
    $("#anton").html("Anton </br>" + Math.floor(anton.cost / 1000) + "K coins" + " (+" + Math.floor(anton.damageMultipler) + " DPS) </br>" + "Owned " + anton.ownedCount);
    $("#yarik").html("Yarik </br>" + Math.floor(yarik.cost / 1000) + "K coins" + " (+" + Math.floor(yarik.damageMultipler) + " DPS) </br>" + "Owned " + yarik.ownedCount);
    $("#nazar").html("Nazar </br>" + Math.floor(nazar.cost / 1000) + "K coins" + " (+" + Math.floor(nazar.damageMultipler) + " DPS) </br>" + "Owned " + nazar.ownedCount);
    $("#olia").html("Oliasha </br>" + Math.floor(olia.cost / 1000) + "K coins" + " (+" + Math.floor(olia.damageMultipler) + " DPS) </br>" + "Owned " + olia.ownedCount);

    $("#enemyHealth").text("Health: " + rounded(currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#killedCount").text(enemy.stageKilledCount + "/" + 10);
    $("#stage").text("STAGE: " + stage)
  }else if (settings.language === "ukLanguage") {

    $("#gold").text("Золота: " + Math.floor(gold));

    $("#dpc").text("DPC: " + Math.floor(dpc));
    $("#dps").text("DPS: " + Math.floor(dps));

    $("#sword").html("Меч </br>" + Math.floor(sword.cost) + " монеток" +" (+" + Math.floor(sword.damageMultipler) + " DPC) </br>" + "Куплено "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.cost) + " монеток" + " (+" + Math.floor(luda.damageMultipler) + " DPS) </br>" + "Куплено " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.cost) + " монеток" + " (+" + Math.floor(galina.damageMultipler) + " DPS) </br>" + "Куплено " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.cost / 1000) + "K монеток" + " (+" + Math.floor(anton.damageMultipler) + " DPS) </br>" + "Куплено " + anton.ownedCount);
    $("#yarik").html("Ярік </br>" + Math.floor(yarik.cost / 1000) + "K монеток" + " (+" + Math.floor(yarik.damageMultipler) + " DPS) </br>" + "Куплено " + yarik.ownedCount);
    $("#nazar").html("Назарій </br>" + Math.floor(nazar.cost / 1000) + "K монеток" + " (+" + Math.floor(nazar.damageMultipler) + " DPS) </br>" + "Куплено " + nazar.ownedCount);
    $("#olia").html("Оляша </br>" + Math.floor(olia.cost / 1000) + "K монеток" + " (+" + Math.floor(olia.damageMultipler) + " DPS) </br>" + "Куплено " + olia.ownedCount);

    $("#enemyHealth").text("Здоров\'я: " + rounded(currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#killedCount").text(enemy.stageKilledCount + "/" + 10);
    $("#stage").text("Рівень: " + stage)
  }else if (settings.language === "ruLanguage") {

    $("#gold").text("Золота: " + Math.floor(gold));

    $("#dpc").text("DPC: " + Math.floor(dpc));
    $("#dps").text("DPS: " + Math.floor(dps));

    $("#sword").html("Меч </br>" + Math.floor(sword.cost) + " монеток" +" (+" + Math.floor(sword.damageMultipler) + " DPC) </br>" + "Куплено "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.cost) + " монеток" + " (+" + Math.floor(luda.damageMultipler) + " DPS) </br>" + "Куплено " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.cost) + " монеток" + " (+" + Math.floor(galina.damageMultipler) + " DPS) </br>" + "Куплено " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.cost / 1000) + "K монеток" + " (+" + Math.floor(anton.damageMultipler) + " DPS) </br>" + "Куплено " + anton.ownedCount);
    $("#yarik").html("Ярик </br>" + Math.floor(yarik.cost / 1000) + "K монеток" + " (+" + Math.floor(yarik.damageMultipler) + " DPS) </br>" + "Куплено " + yarik.ownedCount);
    $("#nazar").html("Назарей </br>" + Math.floor(nazar.cost / 1000) + "K монеток" + " (+" + Math.floor(nazar.damageMultipler) + " DPS) </br>" + "Куплено " + nazar.ownedCount);
    $("#olia").html("Аляша </br>" + Math.floor(olia.cost / 1000) + "K монеток" + " (+" + Math.floor(olia.damageMultipler) + " DPS) </br>" + "Куплено " + olia.ownedCount);

    $("#enemyHealth").text("Здоровля: " + rounded(currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#killedCount").text(enemy.stageKilledCount + "/" + 10);
    $("#stage").text("Уровень: " + stage)
  };
};

var enemyTopPos = $("#enemyImg").offset().top;
var enemyLeftPos = $("#enemyImg").offset().left;

function enemyAnimation(){
  $("#enemyImg").css({"paddingTop": "+10px"});
  $("#enemyImg").css({"paddingLeft": "+10px"});
  $("#enemyImg").css({"paddingTop": "-10px"});
  $("#enemyImg").css({"paddingLeft": "-10px"});
  //var enemy = $("#enemyImg");
  //$("#enemyImg").offset({left: enemyLeftPos + 20, top: enemyTopPos - 20});
  //$("#enemyImg").offset({left: enemyLeftPos, top: enemyTopPos});
};

function clickHandlerShopClick(equipment){
  if (gold >= equipment.cost) {
    gold -= equipment.cost;
    dpc += equipment.damageMultipler;
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
    dps += hero.damageMultipler;
    hero.ownedCount++;
    hero.cost *= Math.pow(hero.costMultipler, hero.ownedCount);
    refreshGame();
  }else {
    alert("You need " + Math.floor(hero.cost - gold) + " more coins");
  };
};

$
setInterval(dpsEarn, 1000);

$(function(){
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


  $("#ukLanguage").click(function(){
    settings.language = "ukLanguage";
  });

  $("#enLanguage").click(function(){
    settings.language = "enLanguage";
  });

  $("#ruLanguage").click(function(){
    settings.language = "ruLanguage";
  });

  $("#settingsMenu").hide();

  $("#settings").click(function(){
    $("#settingsMenu").fadeToggle(1000);
  });

  $("#settingsCloseButton").click(function(){
    $("#settingsMenu").fadeOut(1000);
  });
});
