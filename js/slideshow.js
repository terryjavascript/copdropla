// image slideshow



var imageArray = ["assets/images/image0.png","assets/images/image1.png","assets/images/image2.png","assets/images/image3.png","assets/images/image4.png","assets/images/image5.png","assets/images/image6.png",];

var imageIndex = 0;	

function changeImage(){
	slide.setAttribute("src", imageArray [imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex = 0;
	}
};

console.log(changeImage);

var intervalHandle = setInterval(changeImage,3500);