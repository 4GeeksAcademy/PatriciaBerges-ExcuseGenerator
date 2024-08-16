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
  let random_who = who[Math.floor(Math.random() * who.length)] + " ";
  let random_action = action[Math.floor(Math.random() * action.length)] + " ";
  let random_what = what[Math.floor(Math.random() * what.length)] + " ";
  let random_when = when[Math.floor(Math.random() * when.length)];
  let random_excuse = random_who.concat(
    random_action.concat(random_what.concat(random_when))
  );
  document.getElementById("excuse").innerHTML = random_excuse;
};
