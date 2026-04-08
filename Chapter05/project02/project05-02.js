"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Ike Patterson
      Date:   3/18/2026

      Filename: project05-02.js
*/

var images = document.querySelectorAll("img");
var photoBucket = document.getElementById("photo_bucket");
var photoList = document.getElementById("photo_list");

for (var i = 0; i < images.length; i++) {
	images[i].onclick = function () {
		if (this.parentNode.id === "photo_bucket") {
			const newItem = document.createElement("li");
			newItem.appendChild(this);
			photoList.appendChild(newItem);
		} else {
			var oldItem = this.parentNode;
			photoBucket.appendChild(this);
			oldItem.parentNode.removeChild(oldItem);
		}
	};
}
