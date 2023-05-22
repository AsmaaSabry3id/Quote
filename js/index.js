var quote = [
    {
        'quote': "Be yourself; everyone else is already taken.",
        'name': "― Oscar Wilde"

    },

    {
        'quote': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        'name': "― Albert Einstein"

    },

    {
        'quote': "A room without books is like a body without a soul.",
        'name': "― Marcus Tullius Cicero"

    },

    {
        'quote': "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        'name': "― Bernard M. Baruch"

    },

    {
        'quote': "You only live once, but if you do it right, once is enough.",
        'name': "― Mae West"

    },
]

function addQuote(){
   var num = Math.floor(Math.random()*quote.length)
   console.log(num);

   document.getElementById("quote").innerHTML=quote[num].quote;
   document.getElementById("name").innerHTML=quote[num].name;
}