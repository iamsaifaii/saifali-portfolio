import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Midsection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundAlert, setShowSoundAlert] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          videoRef.current.play()
            .then(() => {
              // Agar video muted chal rahi hai, toh alert aur button dono active rakho
              if (videoRef.current && videoRef.current.muted) {
                setShowSoundAlert(true);
              }
            })
            .catch((err) => {
              console.log("Autoplay blocked:", err);
            });
        } else {
          videoRef.current.pause();
          setShowSoundAlert(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Sound Toggle Karne Ka Function (One Click Unmute)
  const toggleSound = () => {
    if (videoRef.current) {
      const currentMuteStatus = videoRef.current.muted;
      videoRef.current.muted = !currentMuteStatus;
      setIsMuted(!currentMuteStatus);
      
      // Agar unmute ho gaya hai toh alert chhupa do
      if (currentMuteStatus) {
        setShowSoundAlert(false);
      }
    }
  };

  // Agar user browser ke apne controls se volume change kare tab bhi state sync rahegi
  const handleVolumeChange = () => {
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted) {
        setShowSoundAlert(false);
      }
    }
  };

  return (
    <section className="relative w-full bg-[#030303] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* BADGE */}
        <div className="mb-10">
          <button className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-full text-xs font-medium hover:bg-white/5 transition tracking-wide">
            EXPLORE MY WORKFLOW
            <span className="bg-white text-black rounded-full p-1 ml-1">
              <FaPlay size={10} />
            </span>
          </button>
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl text-center mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
            My Services <br />
            <span className="text-gray-500 italic">How I Work</span>
          </h2>

          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            I bridge the gap between design and development, ensuring every project
            is delivered with high performance and pixel-perfect precision.
          </p>
        </div>

        {/* VIDEO CONTAINER */}
        <div className="relative w-full max-w-[400px] mx-auto rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-3 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          {/* TOP ALERT BADGE */}
          {showSoundAlert && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg animate-bounce whitespace-nowrap border border-white/20">
              <FaVolumeMute className="text-red-500" />
              Click button to unmute! 🔊
              <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
            </div>
          )}

          <div className="relative overflow-hidden rounded-[1.5rem] aspect-[9/16] bg-black group">
            
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              autoPlay
              loop
              controls
              playsInline
              onVolumeChange={handleVolumeChange}
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* FLOATING VOLUME BUTTON (By Default Visible) */}
            <button
              onClick={toggleSound}
              className="absolute bottom-16 right-4 z-20 bg-black/70 hover:bg-black/90 text-white p-3.5 rounded-full border border-white/20 shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center backdrop-blur-sm"
              title={isMuted ? "Unmute Sound" : "Mute Sound"}
            >
              {isMuted ? (
                <div className="flex items-center gap-1.5">
                  <FaVolumeMute className="text-xl text-red-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider pr-1">TAP FOR SOUND</span>
                </div>
              ) : (
                <FaVolumeUp className="text-xl text-green-400" />
              )}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Midsection;