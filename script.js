//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function comspare(a, b){
	var aLit = a.toLowerCase();
	var bLit = b.toLowerCase();
	aLit = removeArticles(aLit);
	bLit = removeArticles(bLit);
	if( aLit> bLit){
		return 1;
	}
	if (aLit< bLit){
		return -1;
	}
	return 0;
	
}
function removeArticles(str){
	let arr = str.split(" ");
	let result = arr.filter(word => word !== "a" && word !== "an" && word !== "the").join(" ");
  return result;
}

let arr = bands.sort(compare);
const list = document.getElementById("list");


const listItem = arr.map((item)=>{
	const list_item = document.createElement("li");
	list_item.textContent = item;
	return list_item;
	
})


listItem.forEach((li) => {
  list.appendChild(li);
});
 