import videoUrl from './video-2.mp4';

function Video() {
  return <video src={videoUrl} width={330} controls />;
}

export default Video;
