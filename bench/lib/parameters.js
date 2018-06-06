
const accessToken = (
    process.env.MapboxAccessToken ||
    process.env.MAPBOX_ACCESS_TOKEN ||
    getURLParameter('access_token') ||
    localStorage.getItem('accessToken')
);

const styleURL = (
    process.env.MapboxStyleURL ||
    process.env.MAPBOX_STYLE_URL ||
    getURLParameter('style_url') ||
    localStorage.getItem('styleURL')
);

localStorage.setItem('accessToken', accessToken);
localStorage.setItem('styleURL', styleURL);

export { accessToken, styleURL };

function getURLParameter(name) {
    const regexp = new RegExp(`[?&]${name}=([^&#]*)`, 'i');
    const output = regexp.exec(window.location.href);
    return output && output[1];
}
