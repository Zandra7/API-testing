let out = ""
let ut = document.getElementById("out")
let checkmark

function klikk(){
 fetch("https://v2.jokeapi.dev/joke/Any")
	 .then(respons => {
		 return respons.json()
	 })
	 .then(data => {
		 checkmark = data.joke
		 out += checkmark
         ut.innerHTML = out
	 })
	
 out = ""
}

ut.textContent = out
