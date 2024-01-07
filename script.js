const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
	"Apple",
	"Apricot",
	"Avocado 🥑",
	"Banana",
	"Bilberry",
	"Blackberry",
	"Blackcurrant",
	"Blueberry",
	"Boysenberry",
	"Currant",
	"Cherry",
	"Coconut",
	"Cranberry",
	"Cucumber",
	"Custard apple",
	"Damson",
	"Date",
	"Dragonfruit",
	"Durian",
	"Elderberry",
	"Feijoa",
	"Fig",
	"Gooseberry",
	"Grape",
	"Raisin",
	"Grapefruit",
	"Guava",
	"Honeyberry",
	"Huckleberry",
	"Jabuticaba",
	"Jackfruit",
	"Jambul",
	"Juniper berry",
	"Kiwifruit",
	"Kumquat",
	"Lemon",
	"Lime",
	"Loquat",
	"Longan",
	"Lychee",
	"Mango",
	"Mangosteen",
	"Marionberry",
	"Melon",
	"Cantaloupe",
	"Honeydew",
	"Watermelon",
	"Miracle fruit",
	"Mulberry",
	"Nectarine",
	"Nance",
	"Olive",
	"Orange",
	"Clementine",
	"Mandarine",
	"Tangerine",
	"Papaya",
	"Passionfruit",
	"Peach",
	"Pear",
	"Persimmon",
	"Plantain",
	"Plum",
	"Pineapple",
	"Pomegranate",
	"Pomelo",
	"Quince",
	"Raspberry",
	"Salmonberry",
	"Rambutan",
	"Redcurrant",
	"Salak",
	"Satsuma",
	"Soursop",
	"Star fruit",
	"Strawberry",
	"Tamarillo",
	"Tamarind",
	"Yuzu",
  ];

function search(keywordInput) {
	let results = []; // new array results
	if (keywordInput.length) {
		results = fruit.filter(keyword => keyword.toLowerCase().includes(keywordInput.toLowerCase())); // filters the fruit array for the keyword input and sets it to lowercase
	}
	return results;
}

function searchHandler(event) {
	suggestions.innerHTML = '';
	let results = search(event.target.value); // calls the search function with the target value and sets it to results
	showSuggestions(results, event.target.value); // calls the showSuggestions function with the results and the target value as arguments
}

function showSuggestions(results, inputVal) {
	const listOfSuggestions = results.map((inputVal) => {
		return `<li>${inputVal}</li>`; // new list of items created from the results
	});
	suggestions.innerHTML = listOfSuggestions.join(""); //joins the suggestions together and sets it to the innerHTML
}

function useSuggestion(event) {
	input.value = event.target.innerHTML; // sets the input value to the target value
	suggestions.innerHTML = ""; // clears the suggestions
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);