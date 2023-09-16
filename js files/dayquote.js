
// Function to parse query parameters from the URL
function getQueryParameters(url) {
    const params = new URLSearchParams(url);
    return params.get('user_name');
}

// Get the username from the iframe's parent window's URL
const parentUrl = window.parent.location.search;
const username = getQueryParameters(parentUrl);

if (username) {
    const greeting = document.getElementById("greeting");
    greeting.textContent = `${username}!`;
}


/*
<script>
    // Function to receive and display the username from the parent page
    function receiveUsername(event) {
        const username = event.data;

        if (username) {
            const greeting = document.getElementById("greeting");
            greeting.textContent = `Hello, ${username}!`;
        }
    }

    // Listen for messages from the parent page
    window.addEventListener("message", receiveUsername);
</script>
  -->
<!-- <script> 
    // Function to receive and display the username from the parent page
    function receiveUsername(event) {
        const username = event.data;
        if (username) {
            const greeting = document.getElementById("greeting");
            greeting.textContent = `Hello, ${username}!`;
        }
    }
    // Listen for messages from the parent page
    window.addEventListener("message", receiveUsername);
    </script>
    
<script>
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('user_name');
    
    if (userName) {
        const greetingElement = document.getElementById('greeting');
        greetingElement.textContent = `${userName}!`;
    }
</script>   
 -->






/*
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('user_name');

if (userName) {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = `${userName}!`;
}
*/


/*  
    <script>
    var images = document.getElementsByTagName('img');
    var sampleText = document.getElementById('sample-text');
    for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", updateName)
    }
    function updateName() {
    sampleText.innerHTML = this.getAttribute('data-text');
    }
</script>     
*/

/* daily new quote generator */ 

// List of Available Quotes
var quotes = [
"You miss 100% of the shots you don't take. - Wayne Gretzky",
 "The only way to do great work is to love what you do. - Steve Jobs",
"Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
"You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. - Steve Jobs",
 "Happiness is not something ready made. It comes from your own actions. - Dalai Lama ",
 "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
"We cannot change the cards we are dealt, just how we play the hand. - Randy Pausch ",
"In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
"Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
 "The best way to predict the future is to create it.- Peter Drucker ",
 "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
 "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill ",
 "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
"Happiness is not something ready made. It comes from your own actions.- Dalai Lama",
"You are never too old to set another goal or to dream a new dream.- C.S. Lewis",
"If you want to lift yourself up, lift up someone else. - Booker T. Washington" ,
"The best revenge is massive success. - Frank Sinatra" ,
"If you can dream it, you can achieve it. - Zig Ziglar ",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
"What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
"The only place where success comes before work is in the dictionary. - Vidal Sassoon",
"I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
"The new year stands before us, like a chapter in a book, waiting to be written. We can help write that story by setting goals. - Melody Beattie",
"Cheers to a new year and another chance for us to get it right. - Oprah Winfrey ",
"New beginnings are often disguised as painful endings. - Lao Tzu ",
"Every day is a new beginning. Take a deep breath and start again. - Unknown" ,
"The past cannot be changed. The future is yet in your power. - Unknown",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"New year, new you. - Unknown ",
"Don't watch the clock; do what it does. Keep going.- Sam Levenson",
"Every great accomplishment begins with a single step. - Unknown ",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
 "The new year is a blank canvas. Fill it with colors that represent you. - Unknown",
"Don't be afraid to start over. It's a brand new opportunity to rebuild what you truly want. - Unknown ",
"Every day is a new day, and you'll never be able to find happiness if you don't move on. - Carrie Underwood ",
"You can't start the next chapter of your life if you keep re-reading the last one. - Unknown",
"The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt ",
"Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",

"The best way to predict the future is to invent it.- Alan Kay",
"It does not matter how slowly you go as long as you do not stop. - Confucius",
"Believe you can and you're halfway there. - Theodore Roosevelt",
"If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
"Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
"The only way to do great work is to love what you do. - Steve Jobs",
"Strive not to be a success, but rather to be of value. - Albert Einstein"
];
// ---method 1-display each quote for 7 days
// const currentDate = new Date();
// const currentDay = currentDate.getDay();
// const currentQuote = quotes[currentDay];
// const quoteContainer = document.getElementById("quote-container");
// quoteContainer.textContent = currentQuote;

// method 2-display new quote for every 24 hours and also it dipslays new quote when refresh a page because js load every single time of page reload
// Function to generate a random quote and display it in the HTML 
// function generateQuote(){
// var randomQuote=quotes[Math.floor(Math.random()*quotes.length)];
// Display the quote in the Html
// var quoteElement=document.getElementById("quote-container");
// quoteElement.innerHTML=randomQuote;
// }
// generateQuote();
// setInterval(generateQuote,24*60*60*1000);


// method 3-that display new quote every day
// Function to generate a new quote of the day
function generateQuote() {
var storedQuote = localStorage.getItem("quote-container");
var storedDate = localStorage.getItem("date");
if (storedQuote && storedDate && new Date(storedDate).getDate() === new Date().getDate()) {
// Use the stored quote if it was generated today
return storedQuote;
} else {
// Generate a new quote and store it and the date it was generated
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
localStorage.setItem("quote-container", randomQuote);
localStorage.setItem("date", new Date().toString());
return randomQuote;
}
}
// Function to display the quote in the HTML
function displayQuote() {
var quoteElement = document.getElementById("quote-container");
quoteElement.innerHTML = generateQuote();
}
// Generate the initial quote when the page loads
displayQuote();
// Generate a new quote at midnight each day
setInterval(function() {
var now = new Date();
var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
var timeToMidnight = midnight.getTime() - now.getTime();
setTimeout(displayQuote, timeToMidnight);
}, 60 * 1000);



//  current Date

    const currentDates = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[currentDates.getMonth()];
    const day = currentDates.getDate();
    const year = currentDates.getFullYear();
    document.getElementById("currentDates").innerHTML = month + " " + day + ", " + year;
