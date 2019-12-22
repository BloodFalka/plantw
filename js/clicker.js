var settings = {
  language : "enLanguage"
};

var gold = 0;
var goldMultipler = 15;

var dpc = 1;
var dps = 0;
var stage = 1;

var enemy = {
  maxHealth : 10*(stage - 1 + Math.pow(1.55, stage-1)),
  killedCount : 0,
  stageKilledCount: 0,
  image : ["aloe", "cactus", "mandragora", "golem", "realCactus", "oldBroccole", "finnTheGreen"]
};

var currentEnemy = {
  currentHealth: enemy.maxHealth,
  currentImage : enemy.image[random(enemy.image.length)]
};

function item(cost, ownedCount, damageMultipler, costMultipler){
  this.cost = cost;
  this.ownedCount = ownedCount;
  this.damageMultipler = damageMultipler;
  this.costMultipler = costMultipler;
}

var sword = new item(5, 0, 1, 1.08);

var luda = new item(50, 0, 5, 1.09);
var galina = new item(500, 0, 20, 1.09);
var anton = new item(2000, 0, 200, 1.09);
var yarik = new item(1000, 0, 1000, 1.09);
var nazar = new item(50000, 0, 20000, 1.09);
var olia = new item(500000, 0, 100000, 1.09);

function dpsEarn(){
  if (dps > 0) {
    currentEnemy.currentHealth -= dps;
    if (currentEnemy.currentHealth <= 0) {
      $("#enemyImg").fadeOut(200).fadeIn(100);
      enemy.maxHealth = 10*(stage - 1 + Math.pow(1.55, stage-1));
      enemy.killedCount += 1;
      enemy.stageKilledCount += 1;
      enemy.maxHealth = random(10*enemyHealthMultipler)+10;
      currentEnemy.currentHealth = enemy.maxHealth;
      currentEnemy.currentImage = enemy.image[random(enemy.image.length)];
      gold += Math.ceil((enemy.maxHealth/goldMultipler));
    };
    if (enemy.stageKilledCount == 11){
      stage++;
      enemy.stageKilledCount = 0;
    };
    refreshGame();
    enemyAnimation();
  }else {
    refreshGame();
  }
};

function clickHandlerEnemy(){
  currentEnemy.currentHealth -= dpc;
  if (currentEnemy.currentHealth <= 0) {
    $("#enemyImg").fadeOut(200).fadeIn(100);
    enemy.maxHealth = 10*(stage - 1 + Math.pow(1.55, stage-1));
    enemy.killedCount += 1;
    enemy.stageKilledCount += 1;
    currentEnemy.currentHealth = enemy.maxHealth;
    currentEnemy.currentImage = enemy.image[random(enemy.image.length)];
    gold += Math.ceil((enemy.maxHealth/goldMultipler));
  };
  if (enemy.stageKilledCount == 11){
    stage++;
    enemy.stageKilledCount = 0;
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

function noMoney(purchaseType){
  if (settings.language === "enLanguage") {
    alert("You need " + Math.floor(purchaseType.cost - gold) + " more coins");
  }else if (settings.language === "ukLanguage") {
    alert("Тобі не вистачає " + Math.floor(purchaseType.cost - gold) + " монети");
  }else if (settings.language === "ruLanguage") {
    alert("Не хватает " + Math.floor(purchaseType.cost - gold) + " монеты");
  };
};

function refreshGame(){
  if (settings.language === "enLanguage") {

    $("#gold").html("Gold: " + Math.floor(gold));

    $("#enemyImg").attr("src", "img/clicker/" + currentEnemy.currentImage + ".png");
    $("#dpc").html("DPC: " + Math.floor(dpc));
    $("#dps").html("DPS: " + Math.floor(dps));

    $("#sword").html("Sword </br>" + Math.floor(sword.cost) + " coins" +" (+" + Math.floor(sword.damageMultipler) + " DPC) </br>" + "Owned "+ sword.ownedCount);

    $("#luda").html("Luda </br>" + Math.floor(luda.cost) + " coins" + " (+" + Math.floor(luda.damageMultipler) + " DPS) </br>" + "Owned " + luda.ownedCount);
    $("#galina").html("Galiasha </br>" + Math.floor(galina.cost) + " coins" + " (+" + Math.floor(galina.damageMultipler) + " DPS) </br>" + "Owned " + galina.ownedCount);
    $("#anton").html("Anton </br>" + Math.floor(anton.cost / 1000) + "K coins" + " (+" + Math.floor(anton.damageMultipler) + " DPS) </br>" + "Owned " + anton.ownedCount);
    $("#yarik").html("Yarik </br>" + Math.floor(yarik.cost / 1000) + "K coins" + " (+" + Math.floor(yarik.damageMultipler) + " DPS) </br>" + "Owned " + yarik.ownedCount);
    $("#nazar").html("Nazar </br>" + Math.floor(nazar.cost / 1000) + "K coins" + " (+" + Math.floor(nazar.damageMultipler) + " DPS) </br>" + "Owned " + nazar.ownedCount);
    $("#olia").html("Oliasha </br>" + Math.floor(olia.cost / 1000) + "K coins" + " (+" + Math.floor(olia.damageMultipler) + " DPS) </br>" + "Owned " + olia.ownedCount);

    $("#enemyHealth").html("Health: " + rounded(currentEnemy.currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(currentEnemy.currentImage.toUpperCase());

    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("STAGE: " + stage)
  }else if (settings.language === "ukLanguage") {

    $("#gold").html("Золота: " + Math.floor(gold));

    $("#enemyImg").attr("src", "img/clicker/" + currentEnemy.currentImage + ".png");
    $("#dpc").html("DPC: " + Math.floor(dpc));
    $("#dps").html("DPS: " + Math.floor(dps));

    $("#sword").html("Меч </br>" + Math.floor(sword.cost) + " монеток" +" (+" + Math.floor(sword.damageMultipler) + " DPC) </br>" + "Куплено "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.cost) + " монеток" + " (+" + Math.floor(luda.damageMultipler) + " DPS) </br>" + "Куплено " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.cost) + " монеток" + " (+" + Math.floor(galina.damageMultipler) + " DPS) </br>" + "Куплено " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.cost / 1000) + "K монеток" + " (+" + Math.floor(anton.damageMultipler) + " DPS) </br>" + "Куплено " + anton.ownedCount);
    $("#yarik").html("Ярік </br>" + Math.floor(yarik.cost / 1000) + "K монеток" + " (+" + Math.floor(yarik.damageMultipler) + " DPS) </br>" + "Куплено " + yarik.ownedCount);
    $("#nazar").html("Назарій </br>" + Math.floor(nazar.cost / 1000) + "K монеток" + " (+" + Math.floor(nazar.damageMultipler) + " DPS) </br>" + "Куплено " + nazar.ownedCount);
    $("#olia").html("Оляша </br>" + Math.floor(olia.cost / 1000) + "K монеток" + " (+" + Math.floor(olia.damageMultipler) + " DPS) </br>" + "Куплено " + olia.ownedCount);

    $("#enemyHealth").html("Здоров\'я: " + rounded(currentEnemy.currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(currentEnemy.currentImage.toUpperCase());

    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("РІВЕНЬ: " + stage)
  }else if (settings.language === "ruLanguage") {

    $("#gold").html("Золота: " + Math.floor(gold));

    $("#enemyImg").attr("src", "img/clicker/" + currentEnemy.currentImage + ".png");
    $("#dpc").html("DPC: " + Math.floor(dpc));
    $("#dps").html("DPS: " + Math.floor(dps));

    $("#sword").html("Меч </br>" + Math.floor(sword.cost) + " монеток" +" (+" + Math.floor(sword.damageMultipler) + " DPC) </br>" + "Куплено "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.cost) + " монеток" + " (+" + Math.floor(luda.damageMultipler) + " DPS) </br>" + "Куплено " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.cost) + " монеток" + " (+" + Math.floor(galina.damageMultipler) + " DPS) </br>" + "Куплено " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.cost / 1000) + "K монеток" + " (+" + Math.floor(anton.damageMultipler) + " DPS) </br>" + "Куплено " + anton.ownedCount);
    $("#yarik").html("Ярик </br>" + Math.floor(yarik.cost / 1000) + "K монеток" + " (+" + Math.floor(yarik.damageMultipler) + " DPS) </br>" + "Куплено " + yarik.ownedCount);
    $("#nazar").html("Назарей </br>" + Math.floor(nazar.cost / 1000) + "K монеток" + " (+" + Math.floor(nazar.damageMultipler) + " DPS) </br>" + "Куплено " + nazar.ownedCount);
    $("#olia").html("Аляша </br>" + Math.floor(olia.cost / 1000) + "K монеток" + " (+" + Math.floor(olia.damageMultipler) + " DPS) </br>" + "Куплено " + olia.ownedCount);

    $("#enemyHealth").html("Здоровля: " + rounded(currentEnemy.currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(currentEnemy.currentImage.toUpperCase());
    
    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("УРОВЕНЬ: " + stage)
  };
};


function enemyAnimation(){
  $("#enemyImg").css({"paddingTop": "+10px"});
  $("#enemyImg").css({"paddingLeft": "+10px"});
  setTimeout(function () {
    $("#enemyImg").css({"paddingTop": "-10px"});
    $("#enemyImg").css({"paddingLeft": "-10px"});
  }, 20);
};

function clickHandlerShopClick(equipment){
  if (gold >= equipment.cost) {
    gold -= equipment.cost;
    dpc += equipment.damageMultipler;
    equipment.ownedCount++;
    equipment.cost *= Math.pow(equipment.costMultipler, equipment.ownedCount);
    refreshGame();
  }else {
    noMoney(equipment);
  };
  if (equipment.ownedCount === 10 || equipment.ownedCount === 25) {
    equipment.damageMultipler *=2;
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
    noMoney(hero);
  };
  if (hero.ownedCount === 10 || hero.ownedCount === 25) {
    hero.damageMultipler *=2;
  };
};

$
setInterval(dpsEarn, 1000);

$(function(){
  $("main").on("click" , clickHandlerEnemy);

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
    $(".settingsOption").html("Мова");
  });

  $("#enLanguage").click(function(){
    settings.language = "enLanguage";
    $(".settingsOption").html("Language");
  });

  $("#ruLanguage").click(function(){
    settings.language = "ruLanguage";
    $(".settingsOption").html("Язык");
  });

  $("#settingsMenu").hide();

  $("#settings").click(function(){
    $("#settingsMenu").fadeToggle(1000);
  });

  $("#settingsCloseButton").click(function(){
    $("#settingsMenu").fadeOut(1000);
  });
});
