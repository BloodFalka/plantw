var settings = {
  language : "enLanguage"
};

var enemyImage = ["aloe", "cactus", "mandragora", "golem"];

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
      $("#enemyImg").fadeOut(200).fadeIn(100);
      enemy.killedCount += 1;
      enemy.stageKilledCount += 1;
      $("#enemyImg").attr("src", "img/clicker/" + enemyImage[random(enemyImage.length)] + ".png");
      enemy.maxHealth = random(10*enemyHealthMultipler)+10*enemyHealthMultipler;
      currentHealth = enemy.maxHealth;
      gold += goldMultipler * (stage*1.08);
    };
    if (enemy.stageKilledCount == 10){
      enemy.stageKilledCount = 0
      stage++;
      enemyHealthMultipler *= 1.15;
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
    $("#enemyImg").fadeOut(200).fadeIn(100);
    enemy.killedCount += 1;
    enemy.stageKilledCount += 1;
    $("#enemyImg").attr("src", "img/clicker/" + enemyImage[random(enemyImage.length)] + ".png");
    enemy.maxHealth = random(10*enemyHealthMultipler)+10*enemyHealthMultipler;
    currentHealth = enemy.maxHealth;
    gold += goldMultipler * (stage*1.08);
  };
  if (enemy.stageKilledCount == 10){
    enemy.stageKilledCount = 0
    stage++;
    enemyHealthMultipler *= 1.15;
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

    $("#gold").html("Gold: " + Math.floor(gold));

    $("#dpc").html("DPC: " + Math.floor(dpc));
    $("#dps").html("DPS: " + Math.floor(dps));

    $("#sword").html("Sword </br>" + Math.floor(sword.cost) + " coins" +" (+" + Math.floor(sword.damageMultipler) + " DPC) </br>" + "Owned "+ sword.ownedCount);

    $("#luda").html("Luda </br>" + Math.floor(luda.cost) + " coins" + " (+" + Math.floor(luda.damageMultipler) + " DPS) </br>" + "Owned " + luda.ownedCount);
    $("#galina").html("Galiasha </br>" + Math.floor(galina.cost) + " coins" + " (+" + Math.floor(galina.damageMultipler) + " DPS) </br>" + "Owned " + galina.ownedCount);
    $("#anton").html("Anton </br>" + Math.floor(anton.cost / 1000) + "K coins" + " (+" + Math.floor(anton.damageMultipler) + " DPS) </br>" + "Owned " + anton.ownedCount);
    $("#yarik").html("Yarik </br>" + Math.floor(yarik.cost / 1000) + "K coins" + " (+" + Math.floor(yarik.damageMultipler) + " DPS) </br>" + "Owned " + yarik.ownedCount);
    $("#nazar").html("Nazar </br>" + Math.floor(nazar.cost / 1000) + "K coins" + " (+" + Math.floor(nazar.damageMultipler) + " DPS) </br>" + "Owned " + nazar.ownedCount);
    $("#olia").html("Oliasha </br>" + Math.floor(olia.cost / 1000) + "K coins" + " (+" + Math.floor(olia.damageMultipler) + " DPS) </br>" + "Owned " + olia.ownedCount);

    $("#enemyHealth").html("Health: " + rounded(currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#enemyName").html(enemyImage[1].toUpperCase());

    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("STAGE: " + stage)
  }else if (settings.language === "ukLanguage") {

    $("#gold").html("Золота: " + Math.floor(gold));

    $("#dpc").html("DPC: " + Math.floor(dpc));
    $("#dps").html("DPS: " + Math.floor(dps));

    $("#sword").html("Меч </br>" + Math.floor(sword.cost) + " монеток" +" (+" + Math.floor(sword.damageMultipler) + " DPC) </br>" + "Куплено "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.cost) + " монеток" + " (+" + Math.floor(luda.damageMultipler) + " DPS) </br>" + "Куплено " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.cost) + " монеток" + " (+" + Math.floor(galina.damageMultipler) + " DPS) </br>" + "Куплено " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.cost / 1000) + "K монеток" + " (+" + Math.floor(anton.damageMultipler) + " DPS) </br>" + "Куплено " + anton.ownedCount);
    $("#yarik").html("Ярік </br>" + Math.floor(yarik.cost / 1000) + "K монеток" + " (+" + Math.floor(yarik.damageMultipler) + " DPS) </br>" + "Куплено " + yarik.ownedCount);
    $("#nazar").html("Назарій </br>" + Math.floor(nazar.cost / 1000) + "K монеток" + " (+" + Math.floor(nazar.damageMultipler) + " DPS) </br>" + "Куплено " + nazar.ownedCount);
    $("#olia").html("Оляша </br>" + Math.floor(olia.cost / 1000) + "K монеток" + " (+" + Math.floor(olia.damageMultipler) + " DPS) </br>" + "Куплено " + olia.ownedCount);

    $("#enemyHealth").html("Здоров\'я: " + rounded(currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("РІВЕНЬ: " + stage)
  }else if (settings.language === "ruLanguage") {

    $("#gold").html("Золота: " + Math.floor(gold));

    $("#dpc").html("DPC: " + Math.floor(dpc));
    $("#dps").html("DPS: " + Math.floor(dps));

    $("#sword").html("Меч </br>" + Math.floor(sword.cost) + " монеток" +" (+" + Math.floor(sword.damageMultipler) + " DPC) </br>" + "Куплено "+ sword.ownedCount);

    $("#luda").html("Людочка </br>" + Math.floor(luda.cost) + " монеток" + " (+" + Math.floor(luda.damageMultipler) + " DPS) </br>" + "Куплено " + luda.ownedCount);
    $("#galina").html("Галяша </br>" + Math.floor(galina.cost) + " монеток" + " (+" + Math.floor(galina.damageMultipler) + " DPS) </br>" + "Куплено " + galina.ownedCount);
    $("#anton").html("Антоха </br>" + Math.floor(anton.cost / 1000) + "K монеток" + " (+" + Math.floor(anton.damageMultipler) + " DPS) </br>" + "Куплено " + anton.ownedCount);
    $("#yarik").html("Ярик </br>" + Math.floor(yarik.cost / 1000) + "K монеток" + " (+" + Math.floor(yarik.damageMultipler) + " DPS) </br>" + "Куплено " + yarik.ownedCount);
    $("#nazar").html("Назарей </br>" + Math.floor(nazar.cost / 1000) + "K монеток" + " (+" + Math.floor(nazar.damageMultipler) + " DPS) </br>" + "Куплено " + nazar.ownedCount);
    $("#olia").html("Аляша </br>" + Math.floor(olia.cost / 1000) + "K монеток" + " (+" + Math.floor(olia.damageMultipler) + " DPS) </br>" + "Куплено " + olia.ownedCount);

    $("#enemyHealth").html("Здоровля: " + rounded(currentHealth, 0) + "/" + rounded(enemy.maxHealth, 0));
    $("#killedCount").html(enemy.stageKilledCount + "/" + 10);
    $("#stage").html("УРОВЕНЬ: " + stage)
  };
};

var enemyTopPos = $("#enemyImg").offset().top;
var enemyLeftPos = $("#enemyImg").offset().left;

function enemyAnimation(){
  $("#enemyImg").css({"paddingTop": "+10px"});
  $("#enemyImg").css({"paddingLeft": "+10px"});
  setTimeout(function () {
    $("#enemyImg").css({"paddingTop": "-10px"});
    $("#enemyImg").css({"paddingLeft": "-10px"});
  }, 20);

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
  if (hero.ownedCount = 10) {
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
