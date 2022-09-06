//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}		



//Data: assume we have a list of top 5 movies
let topProducts = [{id: 0, title: "EVGA GeForce RTX 3050 XC", price: 499, image_url: "MEDIA/product0.jpg"},
				 {id: 1, title: "Gigabyte GeForce RTX 3060 Eagle OC", price: 628, image_url: "MEDIA/product1.jpg"},
				 {id: 2, title: "MSI GeForce RTX 3070 VENTUS 2X OC", price: 898, image_url: "MEDIA/product2.jpg"},
			     {id: 3, title: "EVGA GeForce RTX 3080 FTW3 Ultra Gaming LHR", price: 1449, image_url: "MEDIA/product3.jpg"},
			     {id: 4, title: "MSI GeForce RTX 3090 VENTUS 3X 24G OC", price: 2098, image_url: "MEDIA/product4.jpg"},
				];
				
//Exercise 1
//Manual
let manualIndex = 0;
function nextMovie() {
	//Increase the index by 1 if the index is less than or equal to 4
	//If the index is equal to 4, move back to 0
	if (manualIndex < topProducts.length - 1) {
		manualIndex++;		
	}
	else {
		manualIndex = 0;
	}
	
	//Extract the title, image_url and display on HTML elements
	document.getElementById("manual-slide-title").innerHTML = topProducts[manualIndex].title;
	document.getElementById("manual-slide-price").innerHTML = topProducts[manualIndex].price;
	document.getElementById("manual-slide-image").src = topProducts[manualIndex].image_url;
	
}
function previousMovie() {
	//Decrease the index by 1 as long as it is above 0
	//If the index drops below 0, it goes back to the last movie in the list
	if (manualIndex > 0) {
		manualIndex--;		
	}
	else {
		manualIndex = topProducts.length - 1;
	}
	
	//Extract the title, image_url and display on HTML elements
	document.getElementById("manual-slide-title").innerHTML = topProducts[manualIndex].title;
	document.getElementById("manual-slide-price").innerHTML = topProducts[manualIndex].price;
	document.getElementById("manual-slide-image").src = topProducts[manualIndex].image_url;	
}

//Automatic Slideshow
let autoIndex = 0;
function autoSlideShow() {
	//Change the autoIndex
	if (autoIndex < topProducts.length - 1) {
		autoIndex++;
	}
	else {
		autoIndex = 0;
	}
	//Extract the title and URL and display them on HTML elements
	document.getElementById("auto-slide-title").innerHTML = topProducts[autoIndex].title;
	document.getElementById("auto-slide-price").innerHTML = topProducts[autoIndex].price;
	document.getElementById("auto-slide-image").src = topProducts[autoIndex].image_url;
	//Wait period for slide changes
	setTimeout(autoSlideShow, 2000);
}

//Execute the autoSlideShow() function when loading the website
autoSlideShow();

//Exercise 2: Dropdown menubar
function loadMyMovies() {
	let movieSelect = document.getElementById("myMovieList");
	for(var i = 0; i < topProducts.length ; i++) {
		//Extract title and add to select element
		//Create a new Option
		let optionNode = document.createElement("option");
		//Assign the option content
		optionNode.value = topProducts[i].id.toString();
		optionNode.textContent = topProducts[i].title.toString();
		//Append this option to the select element
		movieSelect.appendChild(optionNode);
	}
}

loadMyMovies();

function displayMovie(){
	let selectedMovieIndex = document.getElementById("myMovieList").value;
	document.getElementById("selectedMovieTitle").innerHTML = topProducts[selectedMovieIndex].title;
	document.getElementById("selectedMoviePrice").innerHTML = topProducts[selectedMovieIndex].price;
	document.getElementById("selectedMovieURL").src = topProducts[selectedMovieIndex].image_url;	
}

//Exercise 3: Add new movie to list
function AddItemToList(){
	let newItemTitle = document.getElementById("myProductTitle").value;
	let newItemPrice = document.getElementById("myProductPrice").value;
	let newItemImage = document.getElementById("myProductImage").value;
	let newId = topProducts.length;
	
	if ((newItemTitle == "") || (newItemPrice == "") || (newItemImage == "")) {
		alert("Please enter data");
	} else {
		//Add a new item
		topProducts.push({id: newId, title: newItemTitle, price: parseInt(newItemPrice), image_url: newItemImage});
		alert("New item added");
		
		document.getElementById("myMovieList").options.length = 0;
		loadMyMovies();
		
		document.getElementById("myProductTitle").value = "";
		document.getElementById("myProductPrice").value = "";
		document.getElementById("myProductImage").value = "";
	}
}

//Array containing past reviews
let allComments = [{name: "Anna", comment: "Works as intended and also bought at a reasonable price."},
					{name: "Kevin", comment: "Graet Gard very much"},
						{name: "Daniel", comment: "It does it's job great, no issues whatsoever. However even with the 12GB vram, it still gets completely outperformed by the 3060ti and 3070 with just a little extra."},
						];

//Load existing comments
function loadComments(){
	//Loop through comments in array
	for (var i=0; i < allComments.length; i++) {
		let name = allComments[i].name;
		let comment= allComments[i].comment;
		
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);
		let parrent_node = document.getElementById("commentList");
		parrent_node.appendChild(node);
	}
}
loadComments();

function addComment() {
	let enteredCommentName = document.getElementById("commentName").value;
	let enteredCommentText = document.getElementById("commentText").value;
	
	if ((enteredCommentName == "") || (enteredCommentText == "")) {
		alert("Please enter a comment")
	}
	else {
		allComments.push({name: enteredCommentName, comment: enteredCommentText}); 
	alert("Thanks for your comment");
	
	let node = document.createElement("P");
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	node.appendChild(textnode);
	let parrent_node = document.getElementById("commentList");
	parrent_node.appendChild(node);
	
	document.getElementById("commentName").value = "";
	document.getElementById("commentText").value = "";
	}
}

let currentVotes = {like: 57, dislike: 16};

document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;

let voteStatus = {like: false, dislike: false};

function like() {
	//Check current status of "like" button (has been clicked or not)
	if (voteStatus.like == false) {
	//Increase a "Like": Increase the like number by 1
	document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
	//Change the background color of Like button to GREEN
	document.getElementById("likeButton").style.backgroundColor = "green";
	//Change the current status of "like" button: has been clicked
	voteStatus.like = true;//
	
	if (voteStatus.dislike == true) {
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
		voteStatus.dislike = false;//
		document.getElementById("dislikeButton").style.backgroundColor = "white";
	}
} 
	else {
	//Keep the current number of like
	document.getElementById("likeNumber").innerHTML = currentVotes.like;
	//Change the background color of Like button to WHITE
	document.getElementById("likeButton").style.backgroundColor = "white";
	//Change the current status of "like" button
	voteStatus.like = false;//has been clicked
	}
}

function dislike() {
	//Check current status of "dislike" button (has been clicked or not)
	if (voteStatus.dislike == false) {
	//Increase a "disLike" by 1
	document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
	//Change the background color of Like button to GREEN
	document.getElementById("dislikeButton").style.backgroundColor = "red";
	//Change the current status of "dislike" button
	voteStatus.dislike = true;//has been clicked
	//Check "like" status - if like has been voted, down it by one & change status to False & change

	if (voteStatus.like == true) {
		document.getElementById("likeNumber").innerHTML = currentVotes.like;
		voteStatus.like = false;//
		document.getElementById("likeButton").style.backgroundColor = "white";
	}
	} else {
	//Keep the current number of of "dislike"
	document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
	//Change the background color of disLike button to WHITE
	document.getElementById("dislikeButton").style.backgroundColor = "white";
	//Change the current status of "dislike" button
	voteStatus.dislike = false;//has been clicked
	}
} 