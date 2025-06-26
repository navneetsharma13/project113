document.getElementById('shortenBtn').addEventListener('click', () => {
    const longUrl = document.getElementById('longUrl').value;
    if (longUrl) {
        // In a real application, you would call a URL shortening API here.
        // For this example, we'll just simulate it.
        const shortUrl = "http://short.url/" + Math.random().toString(36).substring(2, 8);

        const shortUrlContainer = document.getElementById('shortUrlContainer');
        const shortUrlLink = document.getElementById('shortUrl');

        shortUrlLink.href = longUrl;
        shortUrlLink.textContent = shortUrl;
        shortUrlContainer.style.display = 'block';
    }
});