const memeTitle = document.querySelector('.title');
const memeImage = document.querySelector('.img')
const memeAuthor = document.querySelector('.meme-author')

const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomemes")
    .then(res => res.json())
    .then(data =>{
        memeTitle.textContent = data.title;
        memeAuthor.textContent = data.author;
        memeImage.src = data.url;
    })
    .catch(err =>console.log(err))
}

window.onload(generateMeme())