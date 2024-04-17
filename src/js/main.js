var verbs = document.querySelectorAll(".verb");
verbs.forEach(function (verb) {
  var close = verb.querySelector("img");

  close.addEventListener("click", function () {
    verb.style.display = "none";
  });
});
