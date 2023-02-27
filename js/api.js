const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = (data) => {
    const quote = document.getElementById('quote');
    quote.innerHTML = data.quote;
}


loadQuotes();