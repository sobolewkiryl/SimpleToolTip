function assignEvents(elems , type , event){
	
      for(let i =0;i<elems.length;i++){
		  
		  elems[i].addEventListener(type , event , false)
		  
	  }
	
}

let existingDiv = null;

function createToolTip(divText , options){
	
	let newDiv = document.createElement('div');
	
	newDiv.className = 'tool-tip';
	
	newDiv.appendChild(document.createTextNode(divText));
	
	document.body.appendChild(newDiv);
	
	newDiv.style.top = options.y - newDiv.offsetHeight + "px";
	
	newDiv.style.left = options.x + options.w/2 - newDiv.offsetWidth/2 + "px";
	
	existingDiv = newDiv;
}

function showToolTip(e){
	
	var options = {
		
		x: e.target.offsetLeft , 
		
		y: e.target.offsetTop,
		
		w: e.target.offsetWidth,
		
		h: e.target.offsetHeight
		
	};

	let divText = e.target.getAttribute('title');
	
	createToolTip(divText , options);
	//console.log(options);
	
}
function deleteToolTip(e){
	
    existingDiv.parentNode.removeChild(existingDiv);
	
}


function mouseOn(elems){

    assignEvents(elems , 'mouseenter' , showToolTip);
	assignEvents(elems , 'mouseleave' , deleteToolTip);
	
}

window.t00ltip = mouseOn;