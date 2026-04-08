"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: Ike Patterson
      Date:   3/18/2026

      Filename: js05.js
*/

window.addEventListener("load", createLightbox);
window.addEventListener("load", setupGallery);

function createLightbox() {
	// Lightbox Container
	const lightbox = document.createElement("lightbox");

	// Parts of the lightbox
	const lbTitle = document.createElement("h1");
	lbTitle.textContent = lightboxTitle;
	const lbCounter = document.createElement("div");
	const currentImg = 1;
	lbCounter.textContent = currentImg + " / " + imgCount;
	const lbPrev = document.createElement("div");
	lbPrev.innerHTML = "&#9664;";
	const lbNext = document.createElement("div");
	lbNext.innerHTML = "&#9654;";
	const lbPlay = document.createElement("div");
	lbPlay.innerHTML = "&#9199;";
	const lbImages = document.createElement("div");

	// Design the lightbox title
	lightbox.appendChild(lbTitle);
	lbTitle.id = "lbTitle";

	// Design the lightbox slide counter
	lightbox.appendChild(lbCounter);
	lbCounter.id = "lbCounter";

	// Design the lightbox previous slide button
	lightbox.appendChild(lbPrev);
	lbPrev.id = "lbPrev";

	// Design the lightbox next slide button
	lightbox.appendChild(lbNext);
	lbNext.id = "lbNext";

	// Design the lightbox Play-Pause button
	lightbox.appendChild(lbPlay);
	lbPlay.id = "lbPlay";

	// Design the lightbox image container
	lightbox.appendChild(lbImages);
	lbImages.id = "lbImages";

	// Add images from the imgFiles array to the container
	for (let i = 0; i < imgCount; i++) {
		const image = document.createElement("img");
		image.src = imgFiles[i];
		image.alt = imgCaptions[i];
		lbImages.appendChild(image);
	}
}

function setupGallery() {
	const imageCount = imgFiles.length;
	const galleryBox = document.getElementById("gallery");
	let currentSlide = 1;
	let runShow = true;
	let showRunning;

	const galleryTitle = document.createElement("h1");
	galleryTitle.id = "galleryTitle";
	galleryTitle.textContent = slidesTitle;
	galleryBox.appendChild(galleryTitle);

	const slideCounter = document.createElement("div");
	slideCounter.id = "slideCounter";
	slideCounter.textContent = currentSlide + "/" + imageCount;
	galleryBox.appendChild(slideCounter);

	const leftBox = document.createElement("div");
	leftBox.id = "leftBox";
	leftBox.innerHTML = "&#9664;";
	leftBox.onclick = moveToLeft;
	galleryBox.appendChild(leftBox);

	const rightBox = document.createElement("div");
	rightBox.id = "rightBox";
	rightBox.innerHTML = "&#9654;";
	rightBox.onclick = moveToRight;
	galleryBox.appendChild(rightBox);

	const playPause = document.createElement("div");
	playPause.id = "playPause";
	playPause.innerHTML = "&#9199;";
	playPause.onclick = startStopShow;
	galleryBox.appendChild(playPause);

	const slideBox = document.createElement("div");
	slideBox.id = "slideBox";
	galleryBox.appendChild(slideBox);

	for (let i = 0; i < imageCount; i++) {
		const image = document.createElement("img");
		image.src = imgFiles[i];
		image.alt = imgCaptions[i];
		image.onclick = createModal;
		slideBox.appendChild(image);
	}

	function moveToRight() {
		const firstImage = slideBox.firstElementChild.cloneNode("true");
		firstImage.onclick = createModal;
		slideBox.appendChild(firstImage);
		slideBox.removeChild(slideBox.firstElementChild);
		currentSlide++;
		if (currentSlide > imageCount) {
			currentSlide = 1;
		}
		slideCounter.textContent = currentSlide + " / " + imageCount;
	}

	function moveToLeft() {
		const lastImage = slideBox.lastElementChild.cloneNode("true");
		lastImage.onclick = createModal;
		slideBox.removeChild(slideBox.lastElementChild);
		slideBox.insertBefore(lastImage, slideBox.firstElementChild);
		currentSlide--;
		if (currentSlide === 0) {
			currentSlide = imageCount;
		}
		slideCounter.textContent = currentSlide + " / " + imageCount;
	}

	function startStopShow() {
		if (runShow) {
			showRunning = window.setInterval(moveToRight, 2000);
			runShow = false;
		} else {
			window.clearInterval(showRunning);
			runShow = true;
		}
	}

	function createModal() {
		const modalWindow = document.createElement("div");
		modalWindow.id = "activeModal";
		const figureBox = document.createElement("figure");
		modalWindow.appendChild(figureBox);

		const modalImage = this.cloneNode("true");
		figureBox.appendChild(modalImage);

		const figureCaption = document.createElement("figcaption");
		figureCaption.textContent = modalImage.alt;
		figureBox.appendChild(figureCaption);

		const closeBox = document.createElement("div");
		closeBox.id = "modalClose";
		closeBox.innerHTML = "&times;";
		closeBox.onclick = () => {
			document.body.removeChild(modalWindow);
		};

		modalWindow.appendChild(closeBox);

		document.body.appendChild(modalWindow);
	}
}
