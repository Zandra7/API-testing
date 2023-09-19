let out = ""
let ut = document.getElementById("out")
let randJoke

function klikk(){
 fetch("https://v2.jokeapi.dev/joke/Any")
	.then(respons => {
		return respons.json()
	})
	.then(data => {
		if(data.type == "single"){
			randJoke = data.joke
		} else {
			randJoke = data.setup + "<br>" + "<br>" + data.delivery
		}
		out += randJoke
        ut.innerHTML = out
	})
	
 out = ""
}

ut.textContent = out
