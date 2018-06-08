
const accessToken = (
    process.env.MapboxAccessToken ||
    process.env.MAPBOX_ACCESS_TOKEN ||
    getURLParameter('access_token') ||
    localStorage.getItem('accessToken')
);

let styleURL = (
    process.env.MapboxStyleURL ||
    process.env.MAPBOX_STYLE_URL ||
    getURLParameter('style_url') ||
    localStorage.getItem('styleURL')
);

// local storage coerces a null value to a string so if that happens, fall back to a default style url
styleURL = !styleURL || styleURL === 'null' ? ['mapbox://styles/mapbox/streets-v10'] : styleURL.split(',');
console.log('styleUrl', styleURL)

localStorage.setItem('accessToken', accessToken);
localStorage.setItem('styleURL', styleURL);

export { accessToken, styleURL };

function getURLParameter(name) {
    const regexp = new RegExp(`[?&]${name}=([^&#]*)`, 'i');
    const output = regexp.exec(window.location.href);
    return output && output[1];
}
