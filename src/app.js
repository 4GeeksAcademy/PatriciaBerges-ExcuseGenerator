function getRandomElement(array) {
  let randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

window.onload = function() {
  let who = ["My dog", "My grandma", "The mailman", "A random bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "yesterday",
    "when I was sleeping",
    "during my lunch",
    "when I was exercising",
    "while I was praying"
  ];
  let random_who = getRandomElement(who) + " ";
  let random_action = getRandomElement(action) + " ";
  let random_what = getRandomElement(what) + " ";
  let random_when = getRandomElement(when) + " ";
  let random_excuse = random_who.concat(
    random_action.concat(random_what.concat(random_when))
  );
  document.getElementById("excuse").innerHTML = random_excuse;
};
