// Select all the quote cards
const quoteCards = document.querySelectorAll('.quote-card');
// Define the animation function
function animateQuoteCards() {
// Loop through each quote card and add the 'show' class
quoteCards.forEach((card) => {
// Get the position of the quote card relative to the top of the viewport
const position = card.getBoundingClientRect().top;
// If the quote card is in the viewport, add the 'show' class
if (position < window.innerHeight - 200) {
card.classList.add('show');
} else {
card.classList.remove('show');
}
});
}
// Call the animation function on page load and on scroll
window.addEventListener('load', animateQuoteCards);
window.addEventListener('scroll', animateQuoteCards);



function rotateFunction(){
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
  }
  var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
      element.classList.add('animate');
    }, 5000);
   
   
   
   
  const wheel = document.querySelector('.mainbox');
  const spinBtn = document.querySelector('.spin');
  const result = document.querySelector('.result');
  const viewQuoteBtn=document.querySelector('#quote');
  const emotions = [
      {
      name: 'Anger',
      image: 'https://harish141103.github.io/Quotesite/img/emotion img/angry.jpg',
      quoteUrl: 'https://harish141103.github.io/Quotesite/emotions/anger.htm',
      },
      {
      name: 'Fear',
      image: 'https://harish141103.github.io/Quotesite/img/emotion img/fear.jpg',
      quoteUrl: 'https://harish141103.github.io/Quotesite/emotions/fear.htm',
      },
      {
      name: 'Happiness',
      image: 'https://harish141103.github.io/Quotesite/img/emotion img/happy.jpg',
      quoteUrl: 'https://harish141103.github.io/Quotesite/emotions/happiness.htm',
      },
      {
      name: 'Shame',
      image: 'https://harish141103.github.io/Quotesite/img/emotion img/shame.jpg',
      quoteUrl: 'https://harish141103.github.io/Quotesite/emotions/shame.htm',
      },
      {
      name: 'Love',
      image: 'https://harish141103.github.io/Quotesite/img/emotion img/love.jpg',
      quoteUrl: 'https://harish141103.github.io/Quotesite/emotions/love.htm',
      },
      {
      name: 'Sadness',
      image: 'https://harish141103.github.io/Quotesite/img/emotion img/sad.jpg',
      quoteUrl: 'https://harish141103.github.io/Quotesite/emotions/sadness.htm',
      },
      {
      name: 'Anxiety',
      image: 'https://harish141103.github.io/Quotesite/img/emotion img/anxious.png',
      quoteUrl: 'https://harish141103.github.io/Quotesite/emotions/anxiety.htm',
      },
      {
      name: 'Envy',
      image: 'https://harish141103.github.io/Quotesite/img/emotion img/envy.jpg',
      quoteUrl: 'https://harish141103.github.io/Quotesite/emotions/envy.htm',
      },
      ];
      
      viewQuoteBtn.style.display='none';
  let deg = 0;
  spinBtn.addEventListener('click', () => {
    
  spinBtn.disabled = true;
  deg = Math.floor(Math.random() * 360 + 360 * 5);
  wheel.style.transition = 'all 8s ease-out';
  wheel.style.transform = `rotate(${deg}deg)`;
  wheel.addEventListener('transitionend', () => {
  const currentEmotion = Math.floor((360 - deg % 360) / 45);
  // result.innerText = emotions[currentEmotion];
  const emotion = emotions[currentEmotion];
  
  // Function to parse query parameters from the URL
  function getQueryParameters(url) {
      const params = new URLSearchParams(url);
      return params.get('user_name');
  }
  
  // Get the username from the iframe's parent window's URL
  const parentUrl = window.parent.location.search;
  const username = getQueryParameters(parentUrl);
  
  result.innerHTML = `
  <img id="image" src="${emotion.image}" />
  <h2 id="name"> ${username} ,Your Emotion is ${emotion.name}"</h2>
  <div class="gradient-border" id="box" > 
  <button id="quote" onclick="window.location.href='${emotion.quoteUrl}'">View ${emotion.name} Quote</button>
  </div>
  `;
  result.classList.add('show');
  spinBtn.disabled = false;
  }, {once: true});
  });
  