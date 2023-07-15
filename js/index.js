
var Quotes=["Always forgive your enemies; nothing annoys them so much. <br/> <br/> ― Elbert Hubbard","A friend is someone who knows all about you and still loves you <br/> <br/> ― Elbert Hubbard","If you tell the truth, you don't have to remember anything. <br/> <br/> ― Mark Twain","Be yourself; everyone else is already taken <br/> <br/> ― Oscar Wilde","I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best <br/> <br/> ― Marilyn Monroe","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. <br/> <br/> ― Albert Einstein","Be the change that you wish to see in the world. <br/> <br/> ― Mahatma Gandhi","If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. <br/> <br/> ― J.K. Rowling, Harry Potter and the Goblet of Fire"];
var element=document.getElementById("quote");
var prevNum=0;
function displayQuote(){
    
    for(var i=0;i<Quotes.length;i++){
        var x=Quotes.length;
        var y=Math.floor(Math.random()*x); 
        if (y != prevNum) {
            break;
          }
        }
        prevNum = y;
        element.innerHTML=Quotes[y];
    }


console.log(element);