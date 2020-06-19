var Questions=[
    {
        question:"1). "+"What is the name of my favorite band?",
        option:["EXO","BTS","BLACKPINK","SHINEE"],
        answer:"BTS"
    },
    {
        question:"2). "+"What is my name?",
        option:["Esther","Andrew","Philip","None"],
        answer:"Esther"
    },
    {
        question:"3). "+"Who is my bias?",
        option:["Jimin","Suga","Taehyung","Jin"],
        answer:"Jimin"
    },
    {
        question:"4). "+"What month do I represent?",
        option:["June","May","October","December"],
        answer:"June"
    },
    {
        question:"5). "+"What is the top trend in the world today?",
        option:["Black lives matter","#saynotoRape","Bobrisky","A & B"],
        answer:"A & B"
    }
];
var total_question=Questions.length;
var question_number=0;
var correct=0;
var q=Questions[question_number].question;
var opt=Questions[question_number].option;
var ans=Questions[question_number].answer;
let opt1=Questions[question_number].option[0];
let opt2=Questions[question_number].option[1]
let opt3=opt[2]
let opt4=opt[3]

var pick=document.getElementsByClassName("we").innerHTML
document.addEventListener('DOMContentLoaded',function(){
    load_question()
});
document.addEventListener('DOMContentLoaded',function(){
    load_option()
});

function load_question(){
    document.getElementById("questions").innerHTML=q;
    document.getElementById("tq").textContent=total_question;
}
function load_option(){
    document.getElementById("Opt1").innerHTML=opt1;
    document.getElementById("Opt2").innerHTML=opt2;
    document.getElementById("Opt3").innerHTML=opt3;
    document.getElementById("Opt4").innerHTML=opt4;
}

 //pass in value from the options to function answer
check: function answer(option){
         document.getElementById("Opt1").disabled="true";
         document.getElementById("Opt2").disabled="true";
         document.getElementById("Opt3").disabled="true";
         document.getElementById("Opt4").disabled="true";
         var ans = option.textContent;
        if (ans==Questions[question_number].answer){
            document.querySelector('#answers').textContent="Correct";
                correct++;
                document.querySelector('#correct').textContent=correct;
            }
        else{
            document.querySelector('#answers').textContent="Wrong, " + "Correct Answer is " + Questions[question_number].answer;
       }
    }

function next(){
    document.getElementById("Opt1").removeAttribute("disabled");
    document.getElementById("Opt2").removeAttribute("disabled");
    document.getElementById("Opt3").removeAttribute("disabled");
    document.getElementById("Opt4").removeAttribute("disabled");
    var next=document.getElementById("next")
    question_number++;

    if (question_number>=Questions.length){
        document.getElementById("questions").textContent=""
        document.getElementById("options").textContent="QUIZ COMPLETED"
        document.getElementById("answers").textContent=""
    }
    document.getElementById("questions").innerHTML=Questions[question_number].question;
    document.getElementById("Opt1").innerHTML=Questions[question_number].option[0]
    document.getElementById("Opt2").innerHTML=Questions[question_number].option[1]
    document.getElementById("Opt3").innerHTML=Questions[question_number].option[2]
    document.getElementById("Opt4").innerHTML=Questions[question_number].option[3];
};

function prev(){
    document.getElementById("Opt1").disabled="true";
    document.getElementById("Opt2").disabled="true";
    document.getElementById("Opt3").disabled="true";
    document.getElementById("Opt4").disabled="true";
    var prev=document.getElementById("prev")
    question_number--;
    if (question_number<0){
        document.getElementById("questions").textContent=""
        document.getElementById("options").textContent="QUIZ COMPLETED"
        document.getElementById("answers").textContent=""
        
    }
    document.getElementById("questions").innerHTML=Questions[question_number].question; 
    document.getElementById("Opt1").innerHTML=Questions[question_number].option[0]
    document.getElementById("Opt2").innerHTML=Questions[question_number].option[1]
    document.getElementById("Opt3").innerHTML=Questions[question_number].option[2]
    document.getElementById("Opt4").innerHTML=Questions[question_number].option[3]
} 

