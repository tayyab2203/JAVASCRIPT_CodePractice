console.log("Hello Worldd");
console.log("Following are the child nodes of the documents")
document.body.childNodes;
console.log(document.body.childNodes);
console.log("Following are the First element child  of the document")
document.body.firstElementChild;
console.log(document.body.firstElementChild);
console.log("Following are the childNodes of the first child element of the document")
document.body.firstElementChild.childNodes;
console.log(document.body.firstElementChild.childNodes)
console.log("Following are the children of the first element child of the document")
document.body.firstElementChild.children;
console.log(document.body.firstElementChild.children);

document.body.firstElementChild[1];
console.log("Following are the children of the first element child of the document")
// document.body.firstElementChild.children[1];
console.log(document.body.firstElementChild.children[1]);
// document.body.firstElementChild.children[3];
console.log(document.body.firstElementChild.children[3]);
// Next Element Sibling of the first element child of the document
console.log("Following are the next element sibling of the first element child of the document")
console.log(document.body.firstElementChild.children[3].nextElementSibling);
