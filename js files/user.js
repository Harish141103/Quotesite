// Function to parse query parameters from the URL
function getQueryParameters(url) {
    const params = new URLSearchParams(url);
    return params.get('user_name');
}

// Get the username from the iframe's parent window's URL
const parentUrl = window.parent.location.search;
const username = getQueryParameters(parentUrl);

showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
let addTxt = document.getElementById("addTxt");
let notes = localStorage.getItem("notes");

if (notes == null) {
  notesObj = [];
} else {
  notesObj = JSON.parse(notes);
}
notesObj.push({text:addTxt.value,username: username});
localStorage.setItem("notes", JSON.stringify(notesObj));
addTxt.value = "";
// console.log(notesObj);
showNotes();
});
function showNotes() {
let notes = localStorage.getItem("notes");
if (notes == null) {
  notesObj = [];
} else {
  notesObj = JSON.parse(notes);
}
let html = "";
notesObj.forEach(function (element, index) {
  html += `<div class="card noteCard m-2" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title"> Quote${index+1}: </h2>
                <p class="card-text"><h1> ${element.text} </h1></p>
              <p class="card-text"><h4>Entered by: ${element.username}</h4></p>
              <button id='${index}' onClick="deleteNote(this.id)" class="btn btn-primary">Delete Quote</button>
             </div>
           </div>`
});
//---to display username as title---- <h2 class="card-title"> ${element.username}${index+1} </h2>
let noteElm = document.getElementById("notes");
if (notesObj.length!=null) {
  noteElm.innerHTML = html;
}else{
  noteElm.innerHTML = 'No Quotes is there, Please add Quote....'; 
}
}
//fuction to delete a note 
function deleteNote(index) {
console.log('I am deleting a Quote', index);
let notes = localStorage.getItem("notes");
if (notes == null) {
  notesObj = [];
} else {
  notesObj = JSON.parse(notes);
}
notesObj.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notesObj));
showNotes();
}
//function to filter in search bar
let search = document.getElementById("searchTxt");
search.addEventListener('input', function() {
  let inputVal = search.value.toLowerCase();
  let noteCard = document.getElementsByClassName('noteCard');
  Array.from(noteCard).forEach(function(element) {
    let cardTitle=element.getElementsByTagName("h2")[0].innerText.toLowerCase();
    let cardTxt = element.getElementsByTagName("h1")[0].innerText.toLowerCase();
    let cardText = element.getElementsByTagName("h4")[0].innerText.toLowerCase();
    if (cardTitle.includes(inputVal) || cardTxt.includes(inputVal) || cardText.includes(inputVal)) {
      element.style.display ='block';
    } else {
      element.style.display ='none';
    }
  }); 
});
