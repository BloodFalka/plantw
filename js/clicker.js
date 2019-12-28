load();
save();

var settings = {
  language : "enLanguage",
  background : "2"
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
};


var sword = new item(5, 5, 0, 1, 1.07);

var luda = new item(50, 50, 0, 5, 1.07);
var galina = new item(500, 500,0, 20, 1.07);
var anton = new item(2000, 2000, 0, 200, 1.07);
var yarik = new item(10000, 10000, 0, 1000, 1.07);
var nazar = new item(50000, 50000, 0, 20000, 1.07);
var olia = new item(500000, 500000, 0, 100000, 1.07);

load();
function save(){
  localStorage.setItem('settings', JSON.stringify(settings));

  localStorage.setItem('dpc', dpc);
  localStorage.setItem('dps', dps);
  localStorage.setItem('stage', stage);
  localStorage.setItem('gold', gold);
  localStorage.setItem('goldMultipler', goldMultipler);

  localStorage.setItem('enemy', JSON.stringify(enemy));
/*  localStorage.setItem('currentEnemy', JSON.stringify(currentEnemy)); */

  localStorage.setItem('sword', JSON.stringify(sword));

  localStorage.setItem('luda', JSON.stringify(luda));
  localStorage.setItem('galina', JSON.stringify(galina));
  localStorage.setItem('anton', JSON.stringify(anton));
  localStorage.setItem('yarik', JSON.stringify(yarik));
  localStorage.setItem('nazar', JSON.stringify(nazar));
  localStorage.setItem('olia', JSON.stringify(olia));
};

function load(){
  if ((parseInt(localStorage.getItem('gold')) === 0) && (parseInt(localStorage.getItem('dpc')) === 1)) {
    settings = {
      language : "enLanguage",
      background : "2"
    };

    gold = 0;
    goldMultipler = 15;

    dpc = 1;
    dps = 0;
    stage = 1;

    enemy = {
      maxHealth : 10*(stage - 1 + Math.pow(1.55, stage-1)),
      killedCount : 0,
      stageKilledCount: 0,
      image : ["aloe", "cactus", "mandragora", "golem", "realCactus", "oldBroccole", "finnTheGreen", "grassBear"]
    };

    currentEnemy = {
      currentHealth: enemy.maxHealth,
      currentImage : enemy.image[random(enemy.image.length)]
    };

    sword = new item(5, 5, 0, 1, 1.07);

    luda = new item(50, 50, 0, 5, 1.07);
    galina = new item(500, 500,0, 20, 1.07);
    anton = new item(2000, 2000, 0, 200, 1.07);
    yarik = new item(10000, 10000, 0, 1000, 1.07);
    nazar = new item(50000, 50000, 0, 20000, 1.07);
    olia = new item(500000, 500000, 0, 100000, 1.07);
  }else if (parseInt(localStorage.getItem('gold')) > 0){
    settings = JSON.parse(localStorage.getItem("settings"));

    dpc = parseInt(localStorage.getItem('dpc'));
    dps = parseInt(localStorage.getItem('dps'));

    stage = parseInt(localStorage.getItem('stage'));

    gold = parseInt(localStorage.getItem('gold'));
    goldMultipler = parseInt(localStorage.getItem('goldMultipler'));

    enemy = JSON.parse(localStorage.getItem("enemy"));
    currentEnemy = {
      currentHealth: enemy.maxHealth,
      currentImage : enemy.image[random(enemy.image.length)]
    };

    sword = JSON.parse(localStorage.getItem("sword"));

    luda = JSON.parse(localStorage.getItem("luda"));
    galina = JSON.parse(localStorage.getItem("galina"));
    anton = JSON.parse(localStorage.getItem("anton"));
    yarik = JSON.parse(localStorage.getItem("yarik"));
    nazar = JSON.parse(localStorage.getItem("nazar"));
    olia = JSON.parse(localStorage.getItem("olia"));
  };
};

function dpsEarn(){
  if (dps > 0) {
    currentEnemy.currentHealth -= dps;
    if (currentEnemy.currentHealth <= 0) {
      $("#enemyImg").fadeOut(50).delay(200).fadeIn(50);
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
      enemy.maxHealth = 10*(stage - 1 + Math.pow(1.55, stage - 1));
      currentEnemy.currentHealth = enemy.maxHealth;
    };
    $("#autoDamageText").html(dps).css({"color" : "green", "position" : "absolute", "top" : 8.5 + "vmax", "left" : 85 + "vw"}).show(1).delay(300).hide(1);
    refreshGame();
    //enemyAnimation();
  }else {
    refreshGame();
  }
};

function clickHandlerEnemy(){
  currentEnemy.currentHealth -= dpc;
  if (currentEnemy.currentHealth <= 0) {
    $("#enemyImg").fadeOut(50).delay(200).fadeIn(50);
    enemy.maxHealth = 10*(stage - 1 + Math.pow(1.55, stage - 1));
    enemy.killedCount += 1;
    enemy.stageKilledCount += 1;
    currentEnemy.currentHealth = enemy.maxHealth;
    currentEnemy.currentImage = enemy.image[random(enemy.image.length)];
    gold += Math.ceil((enemy.maxHealth/goldMultipler));
  };
/*  if (stage % 5) {
  }else {
    if ((currentEnemy.currentHealth === enemy.maxHealth) && (stage != 1)) {
      enemy.maxHealth *= 10;
      currentEnemy.currentHealth = enemy.maxHealth;
      enemy.stageKilledCount = 1;
      //if (enemy.killedCount = ) {

      //};
    };
  };
  if (stage % 6) {
  }else {
    if ((currentEnemy.currentHealth === enemy.maxHealth) && (stage != 1)) {
      enemy.maxHealth /= 10;
      currentEnemy.currentHealth = enemy.maxHealth;
      enemy.stageKilledCount = 10;
    };
};*/

if (enemy.stageKilledCount == 11){
  stage++;
  enemy.stageKilledCount = 0;
  enemy.maxHealth = 10*(stage - 1 + Math.pow(1.55, stage - 1));
  currentEnemy.currentHealth = enemy.maxHealth;
};
  let clickX = event.pageX;
  let clickY = event.pageY;
  $("#clickDamageText").html(dpc).css({"color" : "white", "position" : "absolute", "top" : clickY + -40 + "px", "left" : clickX + -50 + "px"}).show(1).delay(100).hide(1);
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

function resetGame(){
  gold = 0;
  dpc = 1;
  save();
  load();
};

function refreshGame(){
  if (settings.language === "enLanguage") {

    $("#gold").html("Oxygen: " + Math.floor(gold));

    $("#enemyImg").attr("src", "img/clicker/" + currentEnemy.currentImage + ".png");
    $("#dpc").html("WpC: " + Math.floor(dpc));
    $("#dps").html("WpS: " + Math.floor(dps));

    $("#sword").html("Watering Pot </br>" + Math.floor(sword.currentCost) + " Oxygen" +" (+" + Math.floor(sword.damageMultipler) + " WpC) </br>" + "Level "+ sword.ownedCount);

    $("#luda").html("Luda </br>" + Math.floor(luda.currentCost) + " Oxygen" + " (+" + Math.floor(luda.damageMultipler) + " WpS) </br>" + "Level " + luda.ownedCount);
    $("#galina").html("Galiasha </br>" + Math.floor(galina.currentCost) + " Oxygen" + " (+" + Math.floor(galina.damageMultipler) + " WpS) </br>" + "Level " + galina.ownedCount);
    $("#anton").html("Anton </br>" + Math.floor(anton.currentCost / 1000) + "K Oxygen" + " (+" + Math.floor(anton.damageMultipler / 1000) + "К WpS) </br>" + "Level " + anton.ownedCount);
    $("#yarik").html("Yarik </br>" + Math.floor(yarik.currentCost / 1000) + "K Oxygen" + " (+" + Math.floor(yarik.damageMultipler / 1000) + "К WpS) </br>" + "Level " + yarik.ownedCount);
    $("#nazar").html("Nazar </br>" + Math.floor(nazar.currentCost / 1000) + "K Oxygen" + " (+" + Math.floor(nazar.damageMultipler / 1000) + "К WpS) </br>" + "Level " + nazar.ownedCount);
    $("#olia").html("Oliasha </br>" + Math.floor(olia.currentCost / 1000) + "K Oxygen" + " (+" + Math.floor(olia.damageMultipler / 1000) + "К WpS) </br>" + "Level " + olia.ownedCount);

    $("#enemyHealth").html("Hunger: " + rounded(currentEnemy.currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(currentEnemy.currentImage.toUpperCase());

    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("STAGE: " + stage)

    $("#language").html("Language");

    $("#resetOption").html("Reset");
    $("#reset").html("Reset progress");

    $("#visualOption").html("Style");
    $("#backgroundChange").html("Background Change");

    save();
  }else if (settings.language === "ukLanguage") {

    $("#gold").html("Кисню: " + Math.floor(gold));

    $("#enemyImg").attr("src", "img/clicker/" + currentEnemy.currentImage + ".png");
    $("#dpc").html("WpC: " + Math.floor(dpc));
    $("#dps").html("WpS: " + Math.floor(dps));

    $("#sword").html("Ліїчка </br>" + Math.floor(sword.currentCost) + " Кисню" +" (+" + Math.floor(sword.damageMultipler) + " WpC) </br>" + "Рівень "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.currentCost) + " Кисню" + " (+" + Math.floor(luda.damageMultipler) + " WpS) </br>" + "Рівень " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.currentCost) + " Кисню" + " (+" + Math.floor(galina.damageMultipler) + " WpS) </br>" + "Рівень " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.currentCost / 1000) + "K Кисню" + " (+" + Math.floor(anton.damageMultipler / 1000) + "К WpS) </br>" + "Рівень " + anton.ownedCount);
    $("#yarik").html("Ярік </br>" + Math.floor(yarik.currentCost / 1000) + "K Кисню" + " (+" + Math.floor(yarik.damageMultipler / 1000) + "К WpS) </br>" + "Рівень " + yarik.ownedCount);
    $("#nazar").html("Назарій </br>" + Math.floor(nazar.currentCost / 1000) + "K Кисню" + " (+" + Math.floor(nazar.damageMultipler / 1000) + "К WpS) </br>" + "Рівень " + nazar.ownedCount);
    $("#olia").html("Оляша </br>" + Math.floor(olia.currentCost / 1000) + "K Кисню" + " (+" + Math.floor(olia.damageMultipler / 1000) + "К WpS) </br>" + "Рівень " + olia.ownedCount);

    $("#enemyHealth").html("Спрага: " + rounded(currentEnemy.currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(currentEnemy.currentImage.toUpperCase());

    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("РІВЕНЬ: " + stage)

    $("#language").html("Мова");

    $("#resetOption").html("Скид");
    $("#reset").html("Скинути прогрес");

    $("#visualOption").html("Стиль");
    $("#backgroundChange").html("Змінити фон");

    save();
  }else if (settings.language === "ruLanguage") {

    $("#gold").html("Кислород: " + Math.floor(gold));

    $("#enemyImg").attr("src", "img/clicker/" + currentEnemy.currentImage + ".png");
    $("#dpc").html("WpC: " + Math.floor(dpc));
    $("#dps").html("WpS: " + Math.floor(dps));

    $("#sword").html("Лейка </br>" + Math.floor(sword.currentCost) + " Кислорода" +" (+" + Math.floor(sword.damageMultipler) + " WpC) </br>" + "Уровень "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.currentCost) + " Кислорода" + " (+" + Math.floor(luda.damageMultipler) + " WpS) </br>" + "Уровень " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.currentCost) + " Кислорода" + " (+" + Math.floor(galina.damageMultipler) + " WpS) </br>" + "Уровень " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.currentCost / 1000) + "K Кислорода" + " (+" + Math.floor(anton.damageMultipler / 1000) + "К WpS) </br>" + "Уровень " + anton.ownedCount);
    $("#yarik").html("Ярик </br>" + Math.floor(yarik.currentCost / 1000) + "K Кислорода" + " (+" + Math.floor(yarik.damageMultipler / 1000) + "К WpS) </br>" + "Уровень " + yarik.ownedCount);
    $("#nazar").html("Назарей </br>" + Math.floor(nazar.currentCost / 1000) + "K Кислорода" + " (+" + Math.floor(nazar.damageMultipler / 1000) + "К WpS) </br>" + "Уровень " + nazar.ownedCount);
    $("#olia").html("Аляша </br>" + Math.floor(olia.currentCost / 1000) + "K Кислорода" + " (+" + Math.floor(olia.damageMultipler / 1000) + "К WpS) </br>" + "Уровень " + olia.ownedCount);

    $("#enemyHealth").html("Жажда: " + rounded(currentEnemy.currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(currentEnemy.currentImage.toUpperCase());

    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("УРОВЕНЬ: " + stage)

    $("#language").html("Язык");

    $("#resetOption").html("Сброс");
    $("#reset").html("Сбросить прогресс");

    $("#visualOption").html("Стиль");
    $("#backgroundChange").html("Изменить фон");

    save();
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

$("#loadScreen").css({"backgroundImage": "url(../plantw/img/backgrounds/loadScreen" + random(4) + ".jpg)"});
setTimeout(function () {
  $("#loadScreen").hide();
}, 3000);

$("html, body").css({"background" : "#ffc1d8 repeat fixed 10% url(../plantw/img/backgrounds/background" + settings.background + ".jpg)"});$("html, body").css({
  "backgroundColor" : "#ffc1d8",
  "backgroundRepeat" : "repeat",
  "backgroundAttachment" : "fixed",
  "backgroundSize" : "30%",
  "backgroundImage" : "url(../plantw/img/backgrounds/background" + settings.background + ".jpg)"});

$(function(){
  $("main").on("click" , clickHandlerEnemy);
  $("body").on("contextmenu" , false);
  $("main").on("contextmenu" , clickHandlerEnemy);

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

  $("#reset").click(function(){
    let reset = confirm("Serioslly?");
    if (reset === true) {
      resetGame();
    };
  });

  $("#backgroundChange").click(function(){
    settings.background++;
    if (settings.background > 2) {
      settings.background = 0;
    };

    $("html, body").css({
      "backgroundColor" : "#ffc1d8",
      "backgroundRepeat" : "repeat",
      "backgroundAttachment" : "fixed",
      "backgroundSize" : "30%",
      "backgroundImage" : "url(../plantw/img/backgrounds/background" + settings.background + ".jpg)"});
  });

  $("#settingsMenu").fadeOut();

  $("#autoDamageText, #clickDamageText").hide();

  $("#settings").click(function(){
    $("#settingsMenu").fadeToggle(500);
  });

  $("#settingsCloseButton").click(function(){
    $("#settingsMenu").fadeOut(500);
  });
});
