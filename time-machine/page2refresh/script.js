var i = 0;
var txt = 'Coca Cola corporation has just announced the death of their former CEO Iam Genius, he passed away on Monday 13th August, at 4.44 pm, while playing with his grandsons.He report, delivered by a tearful, black-clad announcer, claimed that he died due to an advanced acute myocardial infarction, complicated by serious heart shock,” which was caused by “a great mental and physical strain caused by his uninterrupted field guidance tour for the building of a thriving nation.” It is of course no secret that he had been unwell for several years, having suffered a stroke in 1940, and often appearing frail in public appearances.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}

typeWriter();
