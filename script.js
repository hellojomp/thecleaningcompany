document.addEventListener('DOMContentLoaded', function() {
    function setVideoSource() {
      var video = document.getElementById('background-video');
      var source = document.getElementById('video-source');
      var videoSrc = window.innerWidth <= 640 ? 'videos/mobile.mp4' : 'videos/desktop.mp4';

      // Remove the existing <source> element
      video.innerHTML = '';

      // Create a new <source> element
      var newSource = document.createElement('source');
      newSource.setAttribute('src', videoSrc);
      newSource.setAttribute('type', 'video/mp4');
      video.appendChild(newSource);

      // Use the 'canplay' event to ensure the video is ready
      video.addEventListener('canplay', function () {
        video.play();
      }, { once: true }); // Ensure the event listener is removed after firing

      video.load(); // Reload the video to apply the new source
    }

    if (window.innerWidth > 640) {
      setVideoSource();
    }

    // Update the video source on window resize
    window.addEventListener('resize', () => window.innerWidth > 640 ? setVideoSource : null);
});