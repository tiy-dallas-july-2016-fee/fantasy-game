(function (context) {



  function generateGuy() {
    var badNames = ['Ashurbanipal', 'Hitler', 'Bill S. Preston, Esquire', 'Vegan-aVenger', 'Mallioch', 'The Kerfuffler', 'Count Crusher', 'Bob', 'Luigi', 'Samus', 'Ford Prefect', 'Pikachu', 'Caramon', 'Minion Leah', 'Theodore Logan', 'Rufus', 'Socrates', 'Death',
    'Golum', 'Batman', 'Aragorn', 'Tasslehoff Burfoot', 'a Zombie', 'Sarcastro', 'Babyboomerangutan'];
    var index = Math.floor(Math.random() * badNames.length);
    var name = badNames[index];

    var hp = generateHitPointsBetween(5, 10);

    return { name: name, hp: hp };
  }

  function generateHitPointsBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  context.generateGuy = generateGuy;

})(window.Fantasy);
