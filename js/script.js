var darkMode = document.querySelector(".dark-mode");
var body = document.querySelector("body");
var lightMode = document.querySelector(".light-mode");

//make sure to put document.
//They are now declared

darkMode.addEventListener("click", function () {
  body.classList.add("dark-palette");

  // .add should be after classlist NOT in front.

  //ALWAYS have the starting word in lowercase letter first (camel)

  // Nesting elements should be the only thing with dots and semicolons
  //Make sure to put semicolons at the end.
});

lightMode.addEventListener("click", function () {
  body.classList.remove("dark-palette");
});
