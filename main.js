const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

document.addEventListener("DOMContentLoaded", function(event) {
	var counter = 969;
	var counterElement = document.querySelector(".counter");
  
	setInterval(function() {
	  counter += 3;
	  counterElement.textContent = counter;
	}, 1000);
  });