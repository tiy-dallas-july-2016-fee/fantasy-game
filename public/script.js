console.log('script.js');
(function(context) {
  console.log('start of iife', context);

  var guy1;
  var guy2;
  var intervalId;
  var $messaging;

  function generateCombatants() {
    guy1 = context.generateGuy();
    guy2 = context.generateGuy();

    updateCombatantDisplay();
  }

  function updateCombatantDisplay() {
    var templateHtml = $('#dude-info-template').html();
    var templateFunc = _.template(templateHtml);

    var html = templateFunc(guy1);
    $('.good-guy .info').html(html);

    html = templateFunc(guy2);
    $('.bad-guy .info').html(html);
  }

  var roundCount = 0;

  function doRound() {
    roundCount += 1;
    console.log('round', roundCount);

    var damage = Math.floor(Math.random() * 3);
    guy1.hp = guy1.hp - damage;

    if (guy1.hp <= 0) {
      $('.good-guy .sprite').removeClass('hurt');
      $('.good-guy .sprite').addClass('dead');
    }
    else if (guy1.hp < 6) {
      $('.good-guy .sprite').addClass('hurt');
    }



    damage = Math.floor(Math.random() * 3);
    guy2.hp -= damage;

    if (guy2.hp <= 0) {
      $('.bad-guy .sprite').removeClass('hurt');
      $('.bad-guy .sprite').addClass('dead');
    }
    else if (guy2.hp < 6) {
      $('.bad-guy .sprite').addClass('hurt');
    }


    updateCombatantDisplay();

    //intervalId
    if (guy1.hp < 1 || guy2.hp < 1) {
      clearInterval(intervalId);
      $messaging.text('Game over!');
    }
  }

  function startClicked() {
    $('.start-button').toggle();

    $messaging = $('.messaging');
    $messaging.text('Combat in progress!');

    intervalId = setInterval(doRound, 1000);

    console.log('interval id', intervalId);

  }

  function start() {
    generateCombatants();

    $('.start-button').on('click', startClicked);
  }

  context.start = start;

})(window.Fantasy);
