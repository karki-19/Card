const random = document.getElementById("RandomColor")
const image = document.getElementById('image')
let savedData = localStorage.getItem('src')
if (savedData && savedData.length !== 0) {
    image.setAttribute('src', savedData)
}
random.addEventListener("click", () => {
    fetch('https://source.unsplash.com/random').then(resolved => {
        return resolved.blob();
    }).then(data => {
        const objectURL = URL.createObjectURL(data)
        image.setAttribute('src', objectURL)
        localStorage.setItem('src', objectURL)
    }).catch(err => {
        console.log("error coming while fetching it")
    })
})
