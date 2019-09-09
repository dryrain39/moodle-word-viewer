var filtered_keys = function (obj, filter) {
    var key, keys = [];
    for (key in obj) {
        if (obj.hasOwnProperty(key) && filter.test(key)) {
            keys.push(key);
        }
    }
    return keys;
}

var findcid = filtered_keys(H5PIntegration.contents, /cid-*/)[0];
var windowOpen = false;
var url = 'http://dryra.in/pe'

window.addEventListener('message', function (e) {
    
    if (e.data === "givemewords") {
        var item = JSON.stringify(JSON.parse(H5PIntegration.contents[findcid].jsonContent).dialogs);
        document.getElementById('iiiiframe').contentWindow.postMessage(item, '*');

        if (!windowOpen) {
            windowOpen = true;
            console.info("New window will open.")
            window.open(url);
        }
    }
});

$('<iframe>', {
    src: url,
    id: 'iiiiframe',
    frameborder: 0,
    scrolling: 'no',
    width: 1,
    height: 1
}).appendTo('body');
