const requestURL = 'data/data.json';
fetch(requestURL)
	.then(function (response) {
	return response.json();
	})
.then(function (jsonObject) {
console.table(jsonObject);  // temporary checking for valid response and data parsing
const Rental = jsonObject['Rental'];
for (let i = 0; i < Rental.length; i++ ) {
let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement ('p');
        let p4 = document.createElement('p');
        let image = document.createElement('img');
  h2.textContent = Rental[i].rental;
        p1.textContent = "make: " + Rental[i].make + ' ' 
        p2.textContent = "model: " + Rental[i].model;
        p3.textContent = "halfday: " + Rental[i].halfday;
        p4.textContent = "fullday: " + Rental[i].fullday;
        image.setAttribute('src', Rental[i].image);
        image.setAttribute('alt', Rental[i].make + ' ' + Rental[i].model + " - " + Rental[i].order);
  card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(image)
document.querySelector('div.cards').appendChild(card);
}	
});
