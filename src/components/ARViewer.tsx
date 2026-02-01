"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface ARViewerProps {
  modelSrc: string;
  modelAlt: string;
  poster?: string;
  /** Scale multiplier for the model (default: 1) */
  scale?: number;
}

export default function ARViewer({
  modelSrc,
  modelAlt,
  poster,
  scale = 1
}: ARViewerProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scriptLoaded && containerRef.current) {
      const modelViewer = containerRef.current.querySelector("model-viewer");
      if (modelViewer) {
        modelViewer.setAttribute("src", modelSrc);
      }
    }
  }, [scriptLoaded, modelSrc]);

  const scaleValue = `${scale} ${scale} ${scale}`;

  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        type="module"
        onLoad={() => setScriptLoaded(true)}
      />
      <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700">
        <div
          ref={containerRef}
          className="w-full h-full"
          dangerouslySetInnerHTML={{
            __html: `
              <model-viewer
                src="${modelSrc}"
                alt="${modelAlt}"
                ar
                ar-modes="webxr scene-viewer quick-look"
                ar-scale="fixed"
                ar-placement="floor"
                scale="${scaleValue}"
                camera-controls
                touch-action="pan-y"
                shadow-intensity="1"
                shadow-softness="1"
                auto-rotate
                ${poster ? `poster="${poster}"` : ""}
                loading="eager"
                environment-image="neutral"
                exposure="1"
                min-camera-orbit="auto auto auto"
                max-camera-orbit="auto auto auto"
                camera-orbit="0deg 75deg 105%"
                style="width: 100%; height: 100%; background-color: transparent;"
              >
                <button
                  slot="ar-button"
                  style="
                    position: absolute;
                    bottom: 16px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #5b8def;
                    color: white;
                    font-weight: 600;
                    padding: 12px 24px;
                    border-radius: 9999px;
                    border: none;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                  "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                  View in Your Space
                </button>
              </model-viewer>
            `,
          }}
        />
        {!scriptLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-blue-400">Loading 3D viewer...</div>
          </div>
        )}
      </div>
    </>
  );
}
