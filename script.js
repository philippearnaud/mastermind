// fonction tableau_try //
// Lorsqu'on clique sur un élément de la liste du choix des couleurs,
// je veux que ça créé un élément d'une liste avec une classe couleur qu'on met
// dans un tableau pour la comparaison.
//
//
function repartition(expression, id, b) {
        switch (expression) {
            case "green":
                var  li =  document.getElementById(id + b);
                li.classList.add('green');
                break;
            case "red":
                var li = document.getElementById(id + b);
                li.classList.add('red');
                break;
            case "yellow":
               var li = document.getElementById(id +b);
                li.classList.add('yellow');
                break;
            case "blue":
                var li = document.getElementById( id + b);
                li.classList.add('blue');
                break;
            case "orange":
                var li = document.getElementById(id + b);
                li.classList.add('orange');
                break;
            case "white":
                var li = document.getElementById(id + b);
                li.classList.add('white');
                break;
            case "violet":
                var li = document.getElementById(id + b );
                li.classList.add('violet');
                break;
            case "fuchsia":
                var li = document.getElementById(id + b);
                li.classList.add('fuchsia');
                break;
    }
}

function impeachment(choice) {
    for[<0;62;20M
    //il me faut un algo qui check si la couleur n'a pas déjà été prise.
    //Il faut checker à chaque nouvelle entrée dans le tableau.
    //La couleur fait-elle partie du tableau?

}


function c_choice() {
    possible_choice = ['green', 'red', 'yellow', 'blue', 'orange', 'white', 'violet', 'fuchsia'];
    var computer_choice = [];
    var choice = null;
    for(var b = 0; b <= 4; b++) {
        choice = Math.floor((Math.random() * 6-1) + 1);
        computer_choice.push(possible_choice[choice]);
        repartition(possible_choice[choice], "solution-", b+1);
    }
}




function nice_try() {
    c_choice();
    var tableau_try =[];
    var colors = [];
    var color_list = ['green', 'red', 'yellow', 'blue', 'orange', 'white', 'violet', 'fuchsia'];
    for(var i = 0; i <= color_list.length-1; i++) {
        colors.push(document.getElementById(color_list[i]));
        // La boucle for n'attend pas la réalisation de l'évènement. Peut
        // déclencher une erreur.
        // Regarder Boucle closure.
        colors[i].onclick = function(ev) {
           if(tableau_try.length < 4) {
                repartition(ev.target.id, "li-", i );
                tableau_try.push(id);
                console.log(tableau_try);
            }
        };
    }
}



window.onload = nice_try;

