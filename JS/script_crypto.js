/*var value1 = document.getElementById('value1')

fetch('https://p2bjpwhw.directus.app/items/symbole')
.then(res => res.json())
.then(data => console.log(data["data"][0].symbole))

.then(function(value1) {
    document.querySelector('#value1').innerHTML = "text";
    })

/*
data = JSON.stringify(value1);

document.querySelector('#value1').innerHTML = data ;


/*
.then(function(response) {
    response.text().then(function(text) {
    document.querySelector('#value1').innerHTML = text;
    });





fetch('https://p2bjpwhw.directus.app/items/symboles')
    .then(response => response.json())
    .then(data => {
    output1.textContent = '';
    output1.textContent = `${data["data"][0].symbole_name}`;
    output2.textContent = '';
    output2.textContent = `${data["data"][0].symbole_name2}`;
 
    symbole1.style.width = `${data["data"][0].symbole_value1}`;
    console.log(data["data"])
})










    output1.textContent = '';
    output1.textContent = `${data["data"][0].symbole_name}`;
    output2.textContent = '';
    output2.textContent = `${data["data"][0].symbole_name2}`;

  });



fetch('https://p2bjpwhw.directus.app/items/symboles')
    .then(response => response.json())
    .then(data => {

    output1.textContent = '';
    output1.textContent = `${data["data"][0].symbole_name}`;
    symbole1.style.width = `${data["data"][0].symbole_value}`;
    console.log(data["data"])
})


fetch('https://p2bjpwhw.directus.app/items/symboles')
 .then(response => response.json())
 .then(data => {
    / le code dans la function va se répéter autant de fois qu'il y a de symboles 
    data.data.forEach(function(symbole, index /* à l'intérieur: symbole aura comme valeur le symbole de en cours
    , index sera la clé: ex le premier sera 0 comme quand tu as utilisé le [0] pour cibler le premier ) {
     const symbolName = symbole.symbole_name;
     const symbolValue = symbole.symbole_value;
     console.log(symbole)
    });
    
})


///////////////////

fetch('https://p2bjpwhw.directus.app/items/symboles')
    .then(response => response.json())
    .then(data => {

for (var i=0; i<1; i++){
    var output = output + [i];
    output1.textContent = '';
    output1.textContent = `${data["data"][i].symbole_name}`;
    symbole1.style.width = `${data["data"][i].symbole_value}`;
    console.log(data["data"])}
    
})
//////////////////////
*/

/*
<li>
<div id="circlesymbole" class="color_symbole1"></div>
<h3 id="output1"></h3>
</li>





document.body.onload = addElement;

function addElement () {
  // crée un nouvel élément div
  var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  var newContent = document.createTextNode('<strong>Hi toto there and greetings!</strong>');
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentDiv = document.getElementById('symbolelist');
  document.body.insertBefore(newDiv, currentDiv);
}



_________________
let symbolelist = document.getElementById('symbolelist');
*/

/*
let htmlContent = '<li class="symbole"><div class="circlesymbole" class="color_symbole1"></div><h3 id="output1">TEST</h3></li>';
symbolelist.insertAdjacentHTML('afterbegin', htmlContent);
*/
let color_number = 0;
fetch("https://p2bjpwhw.directus.app/items/symboles")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data["data"].length; i++) {
      console.log(data["data"]);
      console.log(i);

      let toggle_crypto = data["data"][i].Crypto_toggle;

      if (toggle_crypto == true) {
        console.log("if" + i);
        let color = ["#F89D30", "#5057FF", "#FF4646", "#52B05C", "#C4C4C4"];
        color = color[color_number];
        console.log(color);
        const divcircle = document.createElement("div");
        divcircle.style.backgoundColor = color;
        divcircle.innerHTML = `<div class="circlesymbole" style="background-color: ${color};"></div><span>${data["data"][i].symbole_name}</span>`;

        const div = document.createElement("div");
        // p.classList.add('output-' + i);

        //div.classList.add('chart');

        div.style.height = "100%";
        div.style.width = data["data"][i].symbole_value;
        div.style.backgroundColor = color;
        let symbolelist = document.getElementById("symbolelist");
        symbolelist.insertAdjacentHTML("afterbegin", divcircle.outerHTML);
        chart.appendChild(div);
        color_number = color_number + 1;
      }

      //symbolelist.insertAdjacentHTML("afterbegin", p.outerHTML);

      console.log(data["data"][i].symbole_name);
    }
  });

fetch("https://p2bjpwhw.directus.app/items/articles")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data["data"].length; i++) {
      console.log(data["data"]);
      console.log(i);

      const li = document.createElement("li");
      li.innerHTML =
        /*
          '<div>'+ data["data"][i].titre + '</div>' + 
          '<div>'+ data["data"][i].resume +'</div>' + 
          '<div>'+data["data"][i].text +'</div>' +
          '<p> <img src="Images/wallet.png" alt="arrow"></p></div>' +
          '</div>';

          */

        '<div id="article' +
        i +
        '">' +
        "<div class=titre>" +
        data["data"][i].titre +
        "</div>" +
        "<div class=resume>" +
        data["data"][i].resume +
        "</div>" +
        '<p class="arrow"> Lire la suite... <img src="Images/big_arrow_down.png" alt="arrow"  id="arrow' +
        i +
        '"></p>' +
        '<div id="text' +
        i +
        '">' +
        data["data"][i].text +
        '<p class="arrow">Fermer...<img src="Images/big_arrow_up.png" alt="arrow"  id="arrow2' +
        i +
        '"></p>' +
        "</div>" +
        "</div>";

      //accordion.insertAdjacentHTML("afterbegin", data["data"][i].titre + data["data"][i].text);
      //div.innerHTML = data["data"][i].titre + data["data"][i].text;;

      // p.classList.add('output-' + i);

      //li.classList.add('test');

      console.log(data["data"][i].text);
      //articles.appendChild(div);

      accordion.insertAdjacentHTML("afterbegin", li.outerHTML);

      //const div = document.createElement('div');
      //div.innerHTML =

      //article[i].insertAdjacentHTML("beforeend", div.outerHTML);

      /* function hide(e) {
            
            if(e.target.style.color == 'black') {
              e.target.style.color = "red";
            } else {
              e.target.style.color = "black";
            }
          }
          */

      var arrow = document.getElementById("arrow" + i);
      var arrow2 = document.getElementById("arrow2" + i);
      var text = document.getElementById("text" + i);

      text.style.display = "none";

      arrow.addEventListener("click", show);
      function show(e) {
        var target = e.currentTarget;
        var parent = target.parentElement;
        var next = parent.nextElementSibling;
        var previous = parent.previousElementSibling;

        parent.style.display = "none";
        next.style.display = "block";
        previous.style.display = "none";
        console.log(e.currentTarget);
      }

      arrow2.addEventListener("click", hide);
      function hide(e) {
        var target = e.currentTarget;
        var parent = target.parentElement;
        var gparent = parent.parentElement;
        var previous_gparent = gparent.previousElementSibling;
        var previous_previous_gparent = previous_gparent.previousElementSibling;

        gparent.style.display = "none";
        previous_gparent.style.display = "block";
        previous_previous_gparent.style.display = "block";
        console.log(e.currentTarget);
      }

      /*
test.addEventListener("click", myFunction);

function myFunction() {

  test.style.color = "red";
  var article = document.getElementById("article"+[i]);
  var texttest = document.getElementsByClassName("texttest");
  //document.getElementById("text0").innerHTML = "YOU CLICKED ME!";
  article.style.color = "red";
}
*/
    }
  });

/*
function myFunction(event) {

  event.currentTarget.style.color = "red";
}
*/
