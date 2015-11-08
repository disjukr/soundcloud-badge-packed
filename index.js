import fonts from 'google-fonts';
import minstache from 'minstache';
import insertCss from 'insert-css';
import querystring from 'querystring';

import styleCss from 'raw!style.css';
import templateHtml from 'raw!badge.html';

const icons = {
    black: 'https://developers.soundcloud.com/assets/logo_black.png',
    white: 'https://developers.soundcloud.com/assets/logo_white.png'
};

let inserted = false;
let gwfadded = false;
let template = null;

export default function badge({
        el=document.createElement('div'),
        dark=true, client_id='', song='', getFonts=true
    }, callback=noop) {
    if (!inserted) insertCss(styleCss), inserted = true;
    if (!template) template = minstache.compile(templateHtml);
    if (!gwfadded && getFonts) fonts.add({ 'Open Sans': [300, 600] }), gwfadded = true;
    let icon = dark ? 'black' : 'white';
    let fetchUrl = `http://api.soundcloud.com/resolve.json?${
        querystring.stringify({ client_id, url: song })
    }`;
    fetch(fetchUrl).then(response => response.json()).then(json => {
        if (json.kind !== 'track') throw new Error(
            'soundcloud-badge only supports individual tracks at the moment'
        );
        el.classList[icon === 'black' ? 'remove' : 'add']('npm-scb-white');
        el.innerHTML = template({
            artwork: json.artwork_url || json.user.avatar_url,
            artist: json.user.username,
            title: json.title,
            icon: icons[icon],
            urls: {
                song: json.permalink_url,
                artist: json.user.permalink_url
            }
        });
        document.body.appendChild(el);
        callback(null, json.stream_url + '?client_id=' + client_id, json, el);
    }).catch(err => callback(err));
    return el;
};

function noop(err) { if (err) throw err; }
