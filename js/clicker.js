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
  image : ["aloe", "cactus", "mandragora", "golem", "realCactus", "oldBroccole", "finnTheGreen", "grassBear"]
};

var currentEnemy = {
  currentHealth: enemy.maxHealth,
  currentImage : enemy.image[random(enemy.image.length)]
};

function item(baseCost, currentCost, ownedCount, damageMultipler, costMultipler){
  this.baseCost = baseCost;
  this.currentCost = currentCost;
  this.ownedCount = ownedCount;
  this.damageMultipler = damageMultipler;
  this.costMultipler = costMultipler;
}

var sword = new item(5, 5, 0, 1, 1.07);

var luda = new item(50, 50, 0, 5, 1.07);
var galina = new item(500, 500,0, 20, 1.07);
var anton = new item(2000, 2000, 0, 200, 1.07);
var yarik = new item(10000, 10000, 0, 1000, 1.07);
var nazar = new item(50000, 50000, 0, 20000, 1.07);
var olia = new item(500000, 500000, 0, 100000, 1.07);

function dpsEarn(){
  if (dps > 0) {
    currentEnemy.currentHealth -= dps;
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
    refreshGame();
    //enemyAnimation();
  }else {
    refreshGame();
  }
};

function clickHandlerEnemy(){
  currentEnemy.currentHealth -= dpc;
  if (currentEnemy.currentHealth <= 0) {
    $("#enemyImg").fadeOut(200).fadeIn(100);
    enemy.maxHealth = 10*(stage - 1 + Math.pow(1.55, stage - 1));
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
  refreshGame();
  //enemyAnimation();
};

function rounded(number, countAfterFloat){
  return number.toFixed(countAfterFloat);
};

function random(size){
  return Math.floor(Math.random()*size)
}

function noMoney(purchaseType){
  if (settings.language === "enLanguage") {
    alert("You need " + Math.floor(purchaseType.currentCost - gold) + " more coins");
  }else if (settings.language === "ukLanguage") {
    alert("Тобі не вистачає " + Math.floor(purchaseType.currentCost - gold) + " монети");
  }else if (settings.language === "ruLanguage") {
    alert("Не хватает " + Math.floor(purchaseType.currentCost - gold) + " монеты");
  };
};

function refreshGame(){
  if (settings.language === "enLanguage") {

    $("#gold").html("Love: " + Math.floor(gold));

    $("#enemyImg").attr("src", "img/clicker/" + currentEnemy.currentImage + ".png");
    $("#dpc").html("WpC: " + Math.floor(dpc));
    $("#dps").html("WpS: " + Math.floor(dps));

    $("#sword").html("Watering Pot </br>" + Math.floor(sword.currentCost) + " Plant Love" +" (+" + Math.floor(sword.damageMultipler) + " WpC) </br>" + "Owned "+ sword.ownedCount);

    $("#luda").html("Luda </br>" + Math.floor(luda.currentCost) + " Love" + " (+" + Math.floor(luda.damageMultipler) + " WpS) </br>" + "Owned " + luda.ownedCount);
    $("#galina").html("Galiasha </br>" + Math.floor(galina.currentCost) + " Love" + " (+" + Math.floor(galina.damageMultipler) + " WpS) </br>" + "Owned " + galina.ownedCount);
    $("#anton").html("Anton </br>" + Math.floor(anton.currentCost / 1000) + "K Love" + " (+" + Math.floor(anton.damageMultipler / 1000) + "К WpS) </br>" + "Owned " + anton.ownedCount);
    $("#yarik").html("Yarik </br>" + Math.floor(yarik.currentCost / 1000) + "K Love" + " (+" + Math.floor(yarik.damageMultipler / 1000) + "К WpS) </br>" + "Owned " + yarik.ownedCount);
    $("#nazar").html("Nazar </br>" + Math.floor(nazar.currentCost / 1000) + "K Love" + " (+" + Math.floor(nazar.damageMultipler / 1000) + "К WpS) </br>" + "Owned " + nazar.ownedCount);
    $("#olia").html("Oliasha </br>" + Math.floor(olia.currentCost / 1000) + "K Love" + " (+" + Math.floor(olia.damageMultipler / 1000) + "К WpS) </br>" + "Owned " + olia.ownedCount);

    $("#enemyHealth").html("Hunger: " + rounded(currentEnemy.currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(currentEnemy.currentImage.toUpperCase());

    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("STAGE: " + stage)
  }else if (settings.language === "ukLanguage") {

    $("#gold").html("Любові: " + Math.floor(gold));

    $("#enemyImg").attr("src", "img/clicker/" + currentEnemy.currentImage + ".png");
    $("#dpc").html("WpC: " + Math.floor(dpc));
    $("#dps").html("WpS: " + Math.floor(dps));

    $("#sword").html("Ліїчка </br>" + Math.floor(sword.currentCost) + " любові" +" (+" + Math.floor(sword.damageMultipler) + " WpC) </br>" + "Куплено "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.currentCost) + " любові" + " (+" + Math.floor(luda.damageMultipler) + " WpS) </br>" + "Куплено " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.currentCost) + " любові" + " (+" + Math.floor(galina.damageMultipler) + " WpS) </br>" + "Куплено " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.currentCost / 1000) + "K любові" + " (+" + Math.floor(anton.damageMultipler / 1000) + "К WpS) </br>" + "Куплено " + anton.ownedCount);
    $("#yarik").html("Ярік </br>" + Math.floor(yarik.currentCost / 1000) + "K любові" + " (+" + Math.floor(yarik.damageMultipler / 1000) + "К WpS) </br>" + "Куплено " + yarik.ownedCount);
    $("#nazar").html("Назарій </br>" + Math.floor(nazar.currentCost / 1000) + "K любові" + " (+" + Math.floor(nazar.damageMultipler / 1000) + "К WpS) </br>" + "Куплено " + nazar.ownedCount);
    $("#olia").html("Оляша </br>" + Math.floor(olia.currentCost / 1000) + "K любові" + " (+" + Math.floor(olia.damageMultipler / 1000) + "К WpS) </br>" + "Куплено " + olia.ownedCount);

    $("#enemyHealth").html("Спрага: " + rounded(currentEnemy.currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(currentEnemy.currentImage.toUpperCase());

    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("РІВЕНЬ: " + stage)
  }else if (settings.language === "ruLanguage") {

    $("#gold").html("Любви: " + Math.floor(gold));

    $("#enemyImg").attr("src", "img/clicker/" + currentEnemy.currentImage + ".png");
    $("#dpc").html("WpC: " + Math.floor(dpc));
    $("#dps").html("WpS: " + Math.floor(dps));

    $("#sword").html("Лейка </br>" + Math.floor(sword.currentCost) + " любви" +" (+" + Math.floor(sword.damageMultipler) + " WpC) </br>" + "Куплено "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.currentCost) + " любви" + " (+" + Math.floor(luda.damageMultipler) + " WpS) </br>" + "Куплено " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.currentCost) + " любви" + " (+" + Math.floor(galina.damageMultipler) + " WpS) </br>" + "Куплено " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.currentCost / 1000) + "K любви" + " (+" + Math.floor(anton.damageMultipler / 1000) + "К WpS) </br>" + "Куплено " + anton.ownedCount);
    $("#yarik").html("Ярик </br>" + Math.floor(yarik.currentCost / 1000) + "K любви" + " (+" + Math.floor(yarik.damageMultipler / 1000) + "К WpS) </br>" + "Куплено " + yarik.ownedCount);
    $("#nazar").html("Назарей </br>" + Math.floor(nazar.currentCost / 1000) + "K любви" + " (+" + Math.floor(nazar.damageMultipler / 1000) + "К WpS) </br>" + "Куплено " + nazar.ownedCount);
    $("#olia").html("Аляша </br>" + Math.floor(olia.currentCost / 1000) + "K любви" + " (+" + Math.floor(olia.damageMultipler / 1000) + "К WpS) </br>" + "Куплено " + olia.ownedCount);

    $("#enemyHealth").html("Жажды: " + rounded(currentEnemy.currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(currentEnemy.currentImage.toUpperCase());

    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("УРОВЕНЬ: " + stage)
  };
};


/*function enemyAnimation(){
  $("#enemyImg").css({"paddingTop": "+10px"});
  $("#enemyImg").css({"paddingLeft": "+10px"});
  setTimeout(function () {
    $("#enemyImg").css({"paddingTop": "-10px"});
    $("#enemyImg").css({"paddingLeft": "-10px"});
  }, 20);
};*/

function clickHandlerShopClick(equipment){
  if (gold >= equipment.currentCost) {
    gold -= equipment.currentCost;
    dpc += equipment.damageMultipler;
    equipment.ownedCount++;
    equipment.currentCost = Math.floor((equipment.baseCost + equipment.ownedCount) * Math.pow(equipment.costMultipler, (equipment.ownedCount-1)));
    refreshGame();
  }else {
    noMoney(equipment);
  };
  if (equipment.ownedCount === 10 || equipment.ownedCount === 25 || equipment.ownedCount === 50) {
    equipment.damageMultipler *=2;
  };
  $()
};

function clickHandlerShopAuto(hero){
  if (gold >= hero.currentCost) {
    gold -= hero.currentCost;
    dps += hero.damageMultipler;
    hero.ownedCount++;
    hero.currentCost = Math.floor((hero.baseCost + hero.ownedCount) * Math.pow(hero.costMultipler, (hero.ownedCount-1)));
    refreshGame();
  }else {
    noMoney(hero);
  };
  if (hero.ownedCount === 10 || hero.ownedCount === 25 || hero.ownedCount === 50) {
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
  $("#damageText").hide();

  $("#settings").click(function(){
    $("#settingsMenu").fadeToggle(1000);
  });

  $("#settingsCloseButton").click(function(){
    $("#settingsMenu").fadeOut(1000);
  });
});
