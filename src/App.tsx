import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from './config/socialLinks';
import { PDFViewer } from './components/PDFViewer';

const backgroundImages = [
  'https://raw.githubusercontent.com/sronilsson/website_sronilsson/main/assets/bg_4.png',
  'https://raw.githubusercontent.com/sronilsson/website_sronilsson/main/assets/bg_0.webp',
  'https://raw.githubusercontent.com/sronilsson/website_sronilsson/main/assets/bg_1.webp',
  'https://raw.githubusercontent.com/sronilsson/website_sronilsson/main/assets/bg_2.webp',
  'https://raw.githubusercontent.com/sronilsson/website_sronilsson/main/assets/bg_3.webp',
  'https://raw.githubusercontent.com/sronilsson/website_sronilsson/main/assets/bg_5.webp',
  'https://raw.githubusercontent.com/sronilsson/website_sronilsson/main/assets/bg_6.webp',
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  const nextIndex = (activeIndex + 1) % backgroundImages.length;

  const transition = useCallback(() => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveIndex(current => (current + 1) % backgroundImages.length);
      setIsTransitioning(false);
    }, 3000);
  }, []);

  useEffect(() => {
    Promise.all(
      backgroundImages.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      })
    ).catch(console.error);

    const intervalId = setInterval(transition, 10000);
    return () => clearInterval(intervalId);
  }, [transition]);

  const handleCVClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowPDF(true);
  };

  // Split social links into two rows
  const firstRowLinks = socialLinks.slice(0, 5);
  const secondRowLinks = socialLinks.slice(5);

  return (
    <div className="min-h-screen">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          {backgroundImages.map((url, index) => (
            <img
              key={url}
              src={url}
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-3000 ease-in-out ${
                index === activeIndex 
                  ? isTransitioning ? 'opacity-0' : 'opacity-100'
                  : index === nextIndex && isTransitioning ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <div className="text-center text-white mb-8">
            <div className="mb-8 relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-white/80"></div>
              <img
                src="https://raw.githubusercontent.com/sronilsson/website_sronilsson/main/assets/SimonN_2.png"
                alt="Dr. Simon R.O Nilsson"
                className="w-full h-full rounded-full object-cover opacity-75"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Dr. Simon R.O. Nilsson</h1>
          </div>

          <div className="max-w-4xl mx-auto px-4 space-y-8">
            {/* First row */}
            <div className="flex justify-center gap-8">
              {firstRowLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={link.name === 'CV' ? handleCVClick : undefined}
                  className="flex flex-col items-center h-24 text-white group"
                >
                  <div className="relative h-8">
                    <FontAwesomeIcon 
                      icon={link.icon} 
                      className="w-8 h-8 transform transition-all duration-300 group-hover:scale-200 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] absolute left-1/2 -translate-x-1/2" 
                    />
                  </div>
                  <span className="text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-12 px-3 py-1 rounded bg-gray-500/50">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Second row */}
            <div className="flex justify-center gap-8">
              {secondRowLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={link.name === 'CV' ? handleCVClick : undefined}
                  className="flex flex-col items-center h-24 text-white group"
                >
                  <div className="relative h-8">
                    <FontAwesomeIcon 
                      icon={link.icon} 
                      className="w-8 h-8 transform transition-all duration-300 group-hover:scale-200 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] absolute left-1/2 -translate-x-1/2" 
                    />
                  </div>
                  <span className="text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-12 px-3 py-1 rounded bg-gray-500/50">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showPDF && (
        <PDFViewer 
          url="https://raw.githubusercontent.com/sronilsson/website_sronilsson/main/docs/cv.pdf"
          onClose={() => setShowPDF(false)}
        />
      )}
    </div>
  );
}

export default App;