"use client";

import React, { useRef, useState, useEffect } from "react";

const VideoPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [videoSpeed, setVideoSpeed] = useState(1);
  const [videoUrl, setVideoUrl] = useState("");
  const [isYouTube, setIsYouTube] = useState(false);

  const isYouTubeLink = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}?enablejsapi=1` : "";
  };

  const handlePlayPause = () => {
    if (isYouTube && iframeRef.current) {
      const iframe = iframeRef.current.contentWindow;
      iframe?.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    } else if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handlePause = () => {
    if (isYouTube && iframeRef.current) {
      const iframe = iframeRef.current.contentWindow;
      iframe?.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    }
  };

  const handleSpeedChange = (speed: number) => {
    setVideoSpeed(speed);
    if (isYouTube && iframeRef.current) {
      const iframe = iframeRef.current.contentWindow;
      iframe?.postMessage(`{"event":"command","func":"setPlaybackRate","args":[${speed}]}`, "*");
    } else if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  useEffect(() => {
    setIsYouTube(isYouTubeLink(videoUrl));
  }, [videoUrl]);

  return (
    <div className="flex flex-col grow max-h-screen bg-gradient-to-b from-purple-900 to-purple-950 text-white">
      {/* Search Bar */}
      <div className="p-6 bg-purple-800 shadow-md flex items-center justify-center">
        <input
          type="text"
          placeholder="Type Link to the video"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full max-w-2xl p-3 border border-purple-700 rounded-lg bg-purple-900 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Video Player */}
      <div className="flex-1 flex flex-col items-center justify-center  space-y-6 ">
        <div className="w-full max-w-7xl aspect-video rounded-lg shadow-lg border border-purple-700 flex items-center justify-center bg-purple-800">
          {videoUrl ? (
            isYouTube ? (
              <iframe
                ref={iframeRef}
                src={getYouTubeEmbedUrl(videoUrl)}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full rounded-lg"
                controls={false}
              />
            )
          ) : (
            <p className="text-purple-300">No video link provided.</p>
          )}
        </div>

        {/* Custom Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePlayPause}
            className="px-6 py-2 bg-purple-700 rounded-lg hover:bg-purple-600 transition text-sm font-semibold"
          >
            Play
          </button>
          <button
            onClick={handlePause}
            className="px-6 py-2 bg-purple-700 rounded-lg hover:bg-purple-600 transition text-sm font-semibold"
          >
            Pause
          </button>
          <button
            onClick={() => handleSpeedChange(0.5)}
            className={`px-6 py-2 rounded-lg text-sm font-semibold ${
              videoSpeed === 0.5 ? "bg-purple-600" : "bg-purple-700"
            } hover:bg-purple-600 transition`}
          >
            0.5x
          </button>
          <button
            onClick={() => handleSpeedChange(1)}
            className={`px-6 py-2 rounded-lg text-sm font-semibold ${
              videoSpeed === 1 ? "bg-purple-600" : "bg-purple-700"
            } hover:bg-purple-600 transition`}
          >
            1x
          </button>
          <button
            onClick={() => handleSpeedChange(1.5)}
            className={`px-6 py-2 rounded-lg text-sm font-semibold ${
              videoSpeed === 1.5 ? "bg-purple-600" : "bg-purple-700"
            } hover:bg-purple-600 transition`}
          >
            1.5x
          </button>
          <button
            onClick={() => handleSpeedChange(2)}
            className={`px-6 py-2 rounded-lg text-sm font-semibold ${
              videoSpeed === 2 ? "bg-purple-600" : "bg-purple-700"
            } hover:bg-purple-600 transition`}
          >
            2x
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
