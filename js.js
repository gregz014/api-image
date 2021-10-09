const food_btn = document.getElementById('food_btn');
const food_result = document.getElementById('food_result');
const dog_btn = document.getElementById('dog_btn');
const dog_result = document.getElementById('dog_result');

food_btn.addEventListener('click', getFood)
dog_btn.addEventListener('click', getRandomDog)



function getFood(){
    fetch('https://foodish-api.herokuapp.com/api/')
    .then(res => res.json())
    .then(data => {
        food_result.innerHTML=`<img src = ${data.image} alt='food'/>`
    });
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}