const random = document.getElementById("RandomColor");
const key = "fS9y9F-Mn7d4bIRugsrBvgX-at9TGZIIEONIAA8X-5A";
const image = document.getElementById("image");
const form = document.querySelector("form");
const input = document.getElementById("form-input");

let imageURL = localStorage.getItem("src");

if (imageURL && imageURL.length !== 0) {
  image.setAttribute("src", imageURL);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let imgCategory = input.value.trim();
  form.reset();
  getFilteredImage(imgCategory)
    .then((url) => image.setAttribute("src", url))
    .catch((err) => console.log(err));
});

const getFilteredImage = async (imgCategory) => {
  const url = "https://api.unsplash.com/search/photos";
  const base = `?query=${imgCategory}&client_id=${key}`; // apply try catch in the async function
  const response = await fetch(url + base);
  const data = await response.json();
  let min = 0;
  let max = data.results.length - 1;
  let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  localStorage.setItem("src",data?.results[randomIndex]?.urls?.full);
  return data?.results[randomIndex]?.urls?.full;
};

random.addEventListener("click", async () => {
});

//radio button - 5 radio buttons - allign within cards - random value
// value of radio button 
// value pass into getFlitered image
// then we will consume it by .then 
