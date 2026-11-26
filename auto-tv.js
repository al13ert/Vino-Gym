(function(){
  'use strict';
  var config=window.VINO_CONFIG;
  var root=document.getElementById('autoStreams');
  var box=document.createElement('div');
  box.className='auto-tv-box';
  var mount=document.createElement('div');
  mount.id='vinoYoutubePlayer';
  box.appendChild(mount);
  root.appendChild(box);
  var playlistId=String(config.youtubePlaylistId||'').trim();
  var videoIds=Array.isArray(config.youtubeVideoIds)?config.youtubeVideoIds.filter(function(id){return /^[A-Za-z0-9_-]{11}$/.test(id)}):[];
  if(!playlistId&&!videoIds.length){
    var empty=document.createElement('div');
    empty.className='youtube-empty';
    empty.textContent='Add YouTube video IDs or a playlist ID in config.js.';
    box.appendChild(empty);
    return;
  }
  var label=document.createElement('div');
  label.className='auto-label';
  label.textContent='YOUTUBE VIDEO PLAYLIST';
  box.appendChild(label);
  window.onYouTubeIframeAPIReady=function(){
    var player=new YT.Player(mount.id,{
      width:'100%',height:'100%',
      videoId:videoIds[0]||undefined,
      playerVars:{autoplay:0,controls:1,playsinline:1,rel:0,origin:window.location.origin},
      events:{onReady:function(event){
        var p=event.target;
        p.mute();
        p.setLoop(true);
        p.setShuffle(false);
        if(playlistId){p.loadPlaylist({list:playlistId,listType:'playlist',index:0})}
        else if(videoIds.length>1){p.loadPlaylist(videoIds,0,0)}
        else if(videoIds.length===1){p.loadVideoById(videoIds[0])}
        p.playVideo();
      }}
    });
  };
  var api=document.createElement('script');
  api.src='https://www.youtube.com/iframe_api';
  api.async=true;
  document.head.appendChild(api);
})();
