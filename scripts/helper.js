class Helper {
  playPauseAndUpdate(song) {
      player.playPause(song);
      let duration = player.getDuration();
      if (duration === "--") {
        duration = song.duration;
      }

      $('#time-control .total-time').text( duration );
  }
}

const helper = new Helper();
