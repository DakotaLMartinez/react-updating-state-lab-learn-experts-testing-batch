var state = {
      errors: [],
      user: null, 
      settings: {
        bitrate: 8, 
        video: {
          resolution: '1080p'
        }
      }
    };

output = Object.assign({},state.settings, {
  video: {
    resolution: '720p'
  }
});

console.log(output);