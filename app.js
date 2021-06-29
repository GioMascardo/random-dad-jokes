const joke = document.querySelector("#joke");
const button = document.querySelector("#new");

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No jokes available! Sorry :(";
  }
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newP = document.createElement("P");
  newP.setAttribute("class", "text-gray-800 text-lg text-center");
  newP.append(jokeText);
  if (joke.childNodes.length > 0) {
    joke.replaceChildren(newP);
  }
  joke.append(newP);
};

button.addEventListener("click", addNewJoke);
