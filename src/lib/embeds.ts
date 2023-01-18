// Get Youtube video id
export	function getYouTubeID(source_url){
    if (!source_url)
    return
    let ID;
    let url = source_url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    if(url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    } else {
        ID = url
    }

    return ID;
};

// https://www.mixcloud.com/DJBasBijleveld/dj-bas-bijleveld-djs-choice-new-jams-2022-week-45/
// <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?autoplay=1&feed=%2FMonkeyShoulder%2Fdj-jazzy-jeff-monkey-shoulder-mix%2F" frameborder="0" allow="autoplay"></iframe>
// Get MixCloud video id
export	function getMixcloudID(source_url){
    if (!source_url)
    return
    let feed:string

    let url = source_url.match(/^.*mixcloud\.com(.*)$/);

    // If filter is
    if(url[1] !== undefined) {
        feed = encodeURIComponent(url[1])
        return feed;
    }

    return false;
};
