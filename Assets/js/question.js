"use strict"
class Answer {
    constructor(choice,isRight,point){
        this.choice = choice ;
        this.isRight = isRight;
        this.point = point;
    }
}
class Question {
        constructor(questionTitle){
            this.questionTitle = questionTitle ;
            this.answers = [];
        }
        addAnswer(answer){ 
            this.answers.push(answer);
        }
}
class Sondage{
    constructor(title){
        this.title = title;
        this.questions = [];
    }
    addQuestion(question){ 
        this.questions.push(question);
    }
}

//premier sondage
const sondage1 = new Sondage('One piece');
//questions 
let Question1 = new Question('A votre avis qui deviendra le roi de pirates?');
let Question2 = new Question('A votre avis qui est sûrement sur la lune?');
let Question3 = new Question('Boa Hanckok ou Boa Hanclok');
let Question4 = new Question('Gold Roger ou Gol D. Roger');
let Question5 = new Question("D'après usopp, où est ce que Zoro n'ira pas?");
//réponse question 1
Question1.addAnswer(new Answer('Marshall D. Teach', false,-1)); 
Question1.addAnswer(new Answer('Shanks', false,-1)); 
Question1.addAnswer(new Answer('Monkey D. Luffy', true,1));

//réponse question2
Question2.addAnswer(new Answer('ener', true,3)); 
Question2.addAnswer(new Answer('crocodile', false,-1)); 
Question2.addAnswer(new Answer('smoker', false,-1));

//réponse question3
Question3.addAnswer(new Answer('Boa Hanckok ', true,1)); 
Question3.addAnswer(new Answer('Boa Hanclok', false,-1)); 
//réponse question4
Question4.addAnswer(new Answer('Gold Roger',false,-1 )); 
Question4.addAnswer(new Answer('Gol D. Roger', true,1)); 
//réponse question5
Question5.addAnswer(new Answer('Dormir',true,1)); 
Question5.addAnswer(new Answer('Au paradis', true,1)); 
Question5.addAnswer(new Answer('En enfer', false,-1));

//ajout des question dans le sondage
sondage1.addQuestion(Question1);
sondage1.addQuestion(Question2);
sondage1.addQuestion(Question3);
sondage1.addQuestion(Question4);
sondage1.addQuestion(Question5);
console.log(sondage1);

document.getElementById("sondage").innerHTML = `Sondage ${sondage1.title}`;


//pop up prénom
var name = "";

function popUp() {
    var button = document.getElementById('nameButton');
    button.style.display = "none"
    document.getElementById("questions").innerHTML += `<div id="formName">
    <label id="nameQ">Comment t'apelles tu?</label>
    <input id="name" type="text" name="input" value="">
    <button id="confirmButton" class="button" name="button" type="submit" onclick="takeName()" id="sendName">Je confirme mon prénom</button>
</div>`;
}

function takeName() {
    name = document.getElementById("name").value;
    console.log(name);
    document.getElementById('formName').style.display = "none";
    document.getElementById('question').style.display = "flex";
    document.getElementById('rep').style.display = "flex";
    document.getElementById('questionButton').style.display = "flex";
    document.getElementById('userName').innerHTML = `Bienvenu ${name}`;
};



//fonction de vision des questions et réponses 
    //variables de boucle
    var i = 0;
    //autres variables
    var points = 0;
    var pointTot = 0;
    //state par défaut avant le click
    document.getElementById("questions").innerHTML += `<h3 id="question"> ${sondage1.questions[i].questionTitle }</h3> `;
    for(var j = 0; j<sondage1.questions[i].answers.length; j++){
        if(sondage1.questions[0].answers[j].isRight == true){
        document.getElementById("rep").innerHTML += `<div class="answer"><input  id="choix${j}" type="checkbox" name="reponse1" value="1" ><label>${sondage1.questions[0].answers[j].choice}</label></div>`;
        }else{
        document.getElementById("rep").innerHTML += `<div class="answer"><input  id="choix${j}" type="checkbox" name="reponse1" value="-1"><label>${sondage1.questions[0].answers[j].choice}</label></div>`;
        }
    }
//fonction d'écriture des questions et réponse après un click


function write(sondage)
{  
    if(i < sondage.questions.length){
        document.getElementById("question").innerHTML = sondage.questions[i].questionTitle;
        for(var k = 0; k<sondage.questions[i].answers.length; k++){
           if(sondage.questions[i].answers[k].isRight == true){
            document.getElementById("rep").innerHTML += `<div class="answer"><input  id="choix${k}" type="checkbox" name="reponse1" value="1"><label>${sondage.questions[i].answers[k].choice}</label></div>`;
           }else{
            document.getElementById("rep").innerHTML += `<div class="answer"><input  id="choix${k}" type="checkbox" name="reponse1" value="-1"><label>${sondage.questions[i].answers[k].choice}</label></div>`;
           }
        }
    }else{
        document.getElementById("question").innerHTML = ` Il n'y a plus de question `;
        document.getElementById("question").innerHTML += `<br> Vous avez ${points} points sur ${pointTot}`;
        document.getElementById("questionButton").style.display = "none";
        if(points < (pointTot / 2)){
            document.getElementById("question").innerHTML += `<br> Tu n'es pas très calé sur One piece ${name} :( <br> Tu as ${(points/pointTot)*100}% de bonne réponses `;
        }else if(points >= (pointTot/2) &&  points < (pointTot *  0.80)){
            document.getElementById("question").innerHTML += `<br> Pas mal du tout, tu connais One piece  ${name} :) <br> Tu as ${(points/pointTot)*100}% de bonne réponses `;
        }else if(points >= (pointTot *  0.80) && points < pointTot ){
            document.getElementById("question").innerHTML += `<br> Tu est un véritable pirate ${name} :O<br> Tu as ${(points/pointTot)*100}% de bonne réponses `;
        }else if(points === pointTot){
            document.getElementById("question").innerHTML += `<br>kaizoku oni ore wa naru ${name}👒👒👒  <br>  Tu as ${(points/pointTot)*100}% de bonne réponses`;
        }else{
            document.getElementById("question").innerHTML += `<br>Ce test est terminé, bravo à toi B) <br> Tu as ${(points/pointTot)*100}% de bonne réponses `;
        }
    }
  

}
//fonction next permet de passer à la question suivante en cliquant sur le submit, il comptabilise les points aussi

function next(sondage)
{
    //boucle des points

for(var m = 0; m <sondage.questions[i].answers.length; m++){
    if(sondage.questions[i].answers[m].isRight == true){
        pointTot += sondage.questions[i].answers[m].point;
    }
}
    for(var l = 0; l<sondage.questions[i].answers.length; l++){
        
        if(document.getElementById('choix'+l).checked && sondage.questions[i].answers[l].isRight == false){
            if(points > 0 ){
                points += sondage.questions[i].answers[l].point;         //Number(document.getElementById('choix'+l).value);
            }
        }else if(document.getElementById('choix'+l).checked && sondage.questions[i].answers[l].isRight == true){
            points += sondage.questions[i].answers[l].point;    //Number(document.getElementById('choix'+l).value);
        }else{
           points+=0;
        }
    }
    
    document.getElementById("rep").innerHTML = "";
    i++;
    write(sondage1);
        
};






