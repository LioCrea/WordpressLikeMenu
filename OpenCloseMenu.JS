	var body, creaNode, creaNodeWrapper, wrapper, subWrapper, subWrapperTarget, wrapperTarget, wrapperTargetWidth, divTop, divMiddle, divBottom, divHeight, divMarginTop;
	
	divHeight = 5;
	divMarginTop = 5;
	body = document.body;
	creaNode = body.parentNode;
	wrapper = document.createElement('div');
	wrapper.setAttribute('class' , 'OpenCloseMenu');
	body.appendChild(wrapper);	
	
	wrapper.style.width = '60px';
	wrapper.style.height = '60px';
	wrapper.style.position = 'relative';
	wrapper.style.top = '0px';
	wrapper.style.bottom = '0px';
	wrapper.style.left = '0px';
	wrapper.style.right = '0px';
	wrapper.style.margin = 'auto';
	wrapper.style.borderRadius = '10px';
	wrapper.style.border = '2px solid black';
	wrapper.style.cursor = 'pointer';
	
	wrapperTarget = document.getElementsByClassName('OpenCloseMenu')[0];
	wrapperTargetWidth = wrapperTarget.style.width;
	wrapperTargetHeight = wrapperTarget.style.height;
	
	creaNodeWrapper = wrapperTarget.parentNode;
	subWrapper = document.createElement('div');
	subWrapper.setAttribute('class' , 'subWrapper');
	wrapper.appendChild(subWrapper);
	subWrapper.style.position = 'absolute';	
	subWrapper.style.top = '0px';
	subWrapper.style.bottom = '0px';
	subWrapper.style.left = '0px';
	subWrapper.style.right = '0px';
	subWrapper.style.margin = 'auto';
	
	subWrapperTarget = document.getElementsByClassName('subWrapper')[0];
	
	divTop = document.createElement('div');
	divTop.setAttribute('class' , 'divTop');
	subWrapperTarget.appendChild(divTop);
	divTop.style.width = 0.6*parseInt(wrapperTargetWidth,10)+ 'px';
	divTop.style.height = divHeight+ 'px';
	divTop.style.marginTop = '0px';
	divTop.style.marginLeft = divTop.style.marginRight = 'auto';
	divTop.style.borderRadius = '10px';
	divTop.style.background = 'black';
	
	divMiddle = document.createElement('div');
	divMiddle.setAttribute('class' , 'divMiddle');
	subWrapperTarget.appendChild(divMiddle);
	divMiddle.style.width = 0.6*parseInt(wrapperTargetWidth,10)+ 'px';
	divMiddle.style.height = divHeight+ 'px';
	divMiddle.style.marginTop = divMarginTop+ 'px';
	divMiddle.style.marginLeft = divMiddle.style.marginRight = 'auto';
	divMiddle.style.borderRadius = '10px';
	divMiddle.style.background = 'black';
	divMiddle.style.opacity = '1';
	
	divBottom = document.createElement('div');
	divBottom.setAttribute('class' , 'divBottom');
	subWrapperTarget.appendChild(divBottom);
	divBottom.style.width = 0.6*parseInt(wrapperTargetWidth,10)+ 'px';
	divBottom.style.height = divHeight+ 'px';
	divBottom.style.marginTop = divMarginTop+ 'px';
	divBottom.style.marginLeft = divBottom.style.marginRight = 'auto';
	divBottom.style.borderRadius = '10px';
	divBottom.style.background = 'black';
	
	divMiddle.transition = '.3s';
	divTop.style.transition = divBottom.style.transition = '.4s';
	
	subWrapper.style.width = parseInt(divTop.style.width,10)+ 'px';
	subWrapper.style.height = parseInt(divTop.style.height,10)+parseInt(divTop.style.marginTop,10)+parseInt(divMiddle.style.height,10)+parseInt(divMiddle.style.marginTop,10)+parseInt(divBottom.style.height,10)+parseInt(divBottom.style.marginTop,10)+ 'px';

	wrapper.onclick = defaultAnimation;
	
	function defaultAnimation(){
		if(divMiddle.style.opacity == '1'){
			divMiddle.style.opacity = '0';
			divTop.style.marginTop = parseInt(subWrapper.style.height,10)/2-1+ 'px';
			divBottom.style.marginTop = -(parseInt(subWrapper.style.height,10)+divMarginTop)/2-1+ 'px';
			divTop.style.transform = 'rotate(45deg)';
			divTop.style.webkitTransform = 'rotate(45deg)';
			divTop.style.msTransform = 'rotate(45deg)';
			divBottom.style.transform = 'rotate(-45deg)';
			divBottom.style.webkitTransform = 'rotate(-45deg)';
			divBottom.style.msTransform = 'rotate(-45deg)';
		} else{
			divMiddle.style.opacity = '1';
			divTop.style.marginTop = '0px';
			divBottom.style.marginTop = divMarginTop+ 'px';
			divTop.style.transform = 'rotate(0deg)';
			divTop.style.webkitTransform = 'rotate(0deg)';
			divTop.style.msTransform = 'rotate(0deg)';
			divBottom.style.transform = 'rotate(0deg)';
			divBottom.style.webkitTransform = 'rotate(0deg)';
			divBottom.style.msTransform = 'rotate(0deg)';
		}
	}
