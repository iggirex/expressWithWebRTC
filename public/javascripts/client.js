console.log("WE are in CLIENT")
var socket = io();

console.log("YO THIS IS ROOM!!!")

var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: true
});

webrtc.on('connection', function (data) {
    // you can name it anything
    console.log('HHHEEEYYYY numClients', data)
    webrtc.joinRoom('your awesome room name');
});

// we have to wait until it's ready
webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('your awesome room name');
});
