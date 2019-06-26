document.addEventListener("DOMContentLoaded", init);

function init() {
	const panels = document.querySelectorAll(".panel");
	
	function toggleOpen() { 		// f. adds & removes class "open"
		this.classList.toggle("open"); // panel size & its main text manipulation
	}

	function toggleActive(e) { 	// f. adds & removes class "open-active"
		// "flex" changes here ( for Safari: 'flex-grow'), stąd:
		if (e.propertyName.includes("flex") ) { 
			this.classList.toggle("open-active"); 
		}
	}

	// "click" listener for each panel, what inits the function
	panels.forEach(panel => panel.addEventListener("click", toggleOpen));
	
	// "end of transformation" listener for each panel, what inits the function
	panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
}

