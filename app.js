var playlist = new Playlist();

var ifOnly = new Song("ifOnly", "Queens of the Stone Age", "3:23");
var comeWithUs = new Song("comeWithUs", "The Chemical Brothers", "4:58");

var manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");

playlist.add(ifOnly);
playlist.add(comeWithUs);

playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById('stop');
stopButton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}