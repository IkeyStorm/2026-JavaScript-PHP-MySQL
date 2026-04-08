"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Ike Patterson
      Date:   3/18/2026

      Filename: project05-03.js
*/

var sourceDoc = document.getElementById("source_doc");
var toc = document.getElementById("toc");
var headingCount = 1;
const heading = "H2";

for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
	if (n.nodeName === heading) {
		const anchor = document.createElement("a");
		anchor.name = '"doclink" + headingCount';
		n.insertBefore(anchor, n.firstChild);
		const listItem = document.createElement("li");
		const link = document.createElement("a");
		listItem.appendChild(link);
		link.textContent = n.textContent;
		link.href = '"#doclink" + headingCount';
		toc.appendChild(listItem);
		headingCount++;
	}
}
