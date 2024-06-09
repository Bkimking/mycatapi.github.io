//my cat api: {live_MbwzwWjXDn1vdd31naSl4yw0QcMKoL0cJojpSSD7hDzMDwJraMQioMPM0jAIiLte}

document.getElementById('fetchCatButton').addEventListener('click', fetchCatImage);

async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?include_breeds=true', {
            headers: {
                'x-api-key': 'live_MbwzwWjXDn1vdd31naSl4yw0QcMKoL0cJojpSSD7hDzMDwJraMQioMPM0jAIiLte' // Replace 'YOUR_API_KEY_HERE' with your actual Cat API key
            }
        });
        const data = await response.json();
        const catImageUrl = data[0].url;
        const breedInfo = data[0].breeds.length > 0 ? data[0].breeds[0].description : 'Unknown breed';

        document.getElementById('catImage').src = catImageUrl;
        document.getElementById('breedInfo').textContent = breedInfo;
    } catch (error) {
        console.error('Error fetching cat image:', error);
        document.getElementById('breedInfo').textContent = 'Failed to fetch cat image. Please try again.';
    }
}