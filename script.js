const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newquoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

function getNewQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const res = await fetch(apiUrl);
        apiQuotes = await res.json();
        getNewQuote();
    } catch (err) {
        alert(err);
    }
}

// Event listners
newquoteBtn.addEventListener('click', getNewQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On load
getQuotes();