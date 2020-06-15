let quotes = [{
        quote: "“Every child is an artist, the problem is staying an artist when you grow up”",
        author: "Pablo Picasso"
    },
    {
        quote: "“If you hear a voice within you say, ‘You cannot paint,’ then by all means paint, and that voice will be silenced”",
        author: "Vincent Van Gogh"
    },
    {
        quote: "“Curiosity about life in all of its aspects, I think, is still the secret of great creative people”",
        author: "Leo Burnett"
    },
    {
        quote: "“You can’t wait for inspiration, you have to go after it with a club”",
        author: "Jack London"
    },
    {
        quote: "“Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will”",
        author: "George Bernard Shaw"
    },
    {
        quote: "“Think left and think right and think low and think high. Oh, the thinks you can think up if only you try”",
        author: "Dr. Seuss"
    },
    {
        quote: "“Creativity is more than just being different. Anybody can plan weird; that’s easy. What’s hard is to be as simple as Bach. Making the simple, awesomely simple, that’s creativity”",
        author: "Charles Mingus"
    },
    {
        quote: "“Originality is nothing but judicious imitation”",
        author: "Voltaire"
    },

]

const btn = document.querySelector(".btn")
const quote = document.querySelector(".quote")
const author = document.querySelector(".author")


function newQuote() {
    console.log("click")
    let n = Math.floor(Math.random() * (quotes.length - 1))
    for (var i = 0; i < quotes.length; i++) {

        quote.innerHTML = quotes[n].quote
        author.innerHTML = quotes[n].author
    }

}

btn.addEventListener("click", newQuote)