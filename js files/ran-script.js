/******************************************
project 1 - A Random Quote Generator

******************************************/


/*** 
 * `quotes` array 
***/
var quotes = [

    // { quote: "I have been studying the traits and dispositions of the 'lower animals' (so called) and contrasting them with the traits and dispositions of man. I find the result humiliating to me.", source: "Mark Twain", citation: "Letters From Earth", tags: ['#TwainMan', '#FreightTwain']},
    // { quote: 'Go so far away that you stop being afraid of not coming back.', source: 'Eve Ensler', citation: 'I Am an Emotional Creature: The Secret Life of Girls Around the World', year: 2010},
  //  { quote: "Live Long and Prosper", source: "Mr. Spock", citiation: "Star Trek", year: '1967', tags: ['#Trekkies', '#Vulcan', '#Space']},
    // { quote: "Yadda Yadda Yadda", source: "Jerry Seinfeld", year: "1997", tags: ['#Yadda', '#NoSoupForYou']},
    // { quote: 'We are what we pretend to be, so we must be careful about what we pretend to be.', source: 'Kurt Vonnegut', citation: 'Mother Night', tags: ['#KeepingIt100']}
 {quote:"Let go of yesterday. Embrace today. Chase tomorrow.",source:"Unknown"},
  {quote:"You don't have to see the whole staircase, just take the first step.",source:"Martin Luther King Jr."}, 
  {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall." ,source:"Nelson Mandela"},
{ quote:"Believe you can and you're halfway there." ,source:" Theodore Roosevelt"},
{quote:"It always seems impossible until it's done." ,source: "Nelson Mandela"},
 {quote:"You are never too old to set another goal or to dream a new dream." ,source: "C.S. Lewis"},
  {quote:"Be the change you wish to see in the world.",source:"Mahatma Gandhi"},
 {quote:"Don't wait for opportunities, create them.", source:"Unknown"},
  {quote:"The future belongs to those who prepare for it today.",source:"Malcolm X"},
  {quote:"Your time is limited, don't waste it living someone else's life." ,source:"Steve Jobs"},
{quote:"If you want to live a happy life, tie it to a goal, not to people or things.",source:"Albert Einstein"}, 
{quote:"The only way to do great work is to love what you do.",source:"Steve Jobs"},
{quote:"The best way to predict your future is to create it.",source:"Abraham Lincoln"},
{quote:"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." ,source:"Christian D. Larson"},
{quote:"You don't have to be great to start, but you have to start to be great.",source: "Zig Ziglar"},
{quote:"The only person you are destined to become is the person you decide to be." ,source:"Ralph Waldo Emerson"},
{quote:"Opportunities are usually disguised as hard work, so most people don't recognize them.",source:" Ann Landers "},
{quote:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",source:"Albert Schweitzer"},
{quote:"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",source:" Chantal Sutherland"},
{quote:"The biggest adventure you can ever take is to live the life of your dreams.",source:"Oprah Winfrey  "},
{quote:"Be yourself; everyone else is already taken.",source:"Oscar Wilde "},
{quote:"If you want to live a happy life, tie it to a goal, not to people or things.",source:" Albert Einstein "},
{quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",source:" Winston Churchill "},
{quote:"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",source:" Steve Jobs"},
{quote:"If you don't like something, change it. If you can't change it, change your attitude.",source:"Maya Angelou"},
{quote:"You miss 100% of the shots you don't take.",source:"Wayne Gretzky"},
{quote:"The best time to plant a tree was 20 years ago. The second-best time is now.",source:"Chinese proverb"},
{quote: "The only limit to our realization of tomorrow will be our doubts of today.",source:"Franklin D. Roosevelt"},
{quote:"Believe you can and you're halfway there.",source:"Theodore Roosevelt  "},
{quote:"The most difficult thing is the decision to act, the rest is merely tenacity." ,source:"Amelia Earhart  "},
{quote:"I have not failed. I've just found 10,000 ways that won't work." ,source:"Thomas Edison "},
{quote:"We may encounter many defeats but we must not be defeated.",source:"Maya Angelou"},
{quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",source:"Ralph Waldo Emerson"},
{quote:"Happiness is not something ready made. It comes from your own actions." ,source:" Dalai Lama "},
{quote:"You are never too old to set another goal or to dream a new dream.",source:"C.S. Lewis "},
{quote:"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty." ,source:"Winston Churchill"},
{quote:"The best way to predict the future is to create it.",source:" Peter Drucker"},
{quote:"A goal without a plan is just a wish.",source:" Antoine de Saint-Exupéry"},
{quote:"Success is walking from failure to failure with no loss of enthusiasm.",source:"Winston Churchill"},
{quote:"In order to succeed, we must first believe that we can.",source:"Nikos Kazantzakis "},
{quote:"The only thing we have to fear is fear itself." ,source:"Franklin D. Roosevelt"},
{quote: "It does not matter how slowly you go as long as you do not stop.",source:"Confucius"},
{quote:"Strive not to be a success, but rather to be of value.",source:"Albert Einstein "},
{quote: "Success is not the absence of failure; it's the persistence through failure.",source:"Aisha Tyler "},
{quote: "The only way to do great work is to love what you do.",source:"Steve Jobs"},
{quote:"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",source:"Christian D. Larson "},
{quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",source:"Nelson Mandela "},
{quote:"If you can't explain it simply, you don't understand it well enough.",source:" Albert Einstein "},
{quote: "You have to learn the rules of the game. And then you have to play better than anyone else.",source:" Albert Einstein "},
{quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",source:" Helen Keller"}



]
  console.log(quotes);
  
  function getRandomQuote() {
    // this gets a random number ranging from 0 to (quotes.length - 1)
    var random = Math.floor(Math.random() * quotes.length);
    // the random number is used as the index for quotes to pick the right, random one and it is returned to the
    // print function.
    return(quotes[random ]);
  }
  
  
  function printQuote(){
    //Pull the quote in question from getRandomQuote
    var currentQuote = getRandomQuote();
    // Set a blank string to hold the HTML
    var html = ''
    //Set up a variable to point to our quote box in the HTML
    var quoteDiv = document.getElementById('quote-box')
  
    //Open up a p tag and place the quote itself in it
    html += '<p class="quote">' + currentQuote.quote 
    
    //If tags are present...
    if ('tags' in currentQuote){
      // ...Add the tags to the quote
        html += '  ' + currentQuote.tags.join(', ')
    }
    // Close the first p tag
    html += '</p>'
  
    // mandatory p tag for source
    html += '<p class="source">' + currentQuote.source 
    // if a citation is defined...
    if ('citation' in currentQuote) {
      // ...add it to the p tag
      html += '<span class="citation">' + currentQuote.citation + '</span>'
    }
    // If a year is defined...
    if ('year' in currentQuote){
      // ...add it to the p tag
      html += '<span class="year">' + currentQuote.year + '</span>'
    }
    html += '</p>'
  
    // take this HTML item we have been appending and set the html of the quote box to it
    quoteDiv.innerHTML = html
  
    // run the set randomBackground() program to change the background color
    setRandomBackground()
    
  }
  
  function setRandomBackground(){
    // This function changes the background color to one of 6 pre-defined colors based on a random
    // number generator.  First get the random number
    var randomNumber = Math.floor(Math.random() * 6)
    
    // then check to see what the number equals and assign the corresponding color
    if (randomNumber == 0){
      document.body.style.background = 'black';
    }else if (randomNumber == 1){
      document.body.style.background = 'blue';
    }else if (randomNumber == 2){
      document.body.style.background = 'green';
    }else if (randomNumber == 3){
      document.body.style.background = 'red';
    }else if (randomNumber == 4){
      document.body.style.background = 'purple';
    }else if (randomNumber == 5){
      document.body.style.background = 'magenta';
    }
  }
  
  // Run the function when the button is pressed...
  document.getElementById('load-quote').addEventListener("click", printQuote, false);
  // ...or when 30 seconds pass
  window.setInterval(printQuote, 5000);