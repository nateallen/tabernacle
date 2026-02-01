"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { tabernacleItems, getItemById } from "@/data/furniture";
import FurnitureSelector from "@/components/FurnitureSelector";
import InfoPanel from "@/components/InfoPanel";

// Dynamically import ARViewer to avoid SSR issues with model-viewer
const ARViewer = dynamic(() => import("@/components/ARViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] md:h-[600px] bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center">
      <div className="animate-pulse text-amber-600">Loading 3D viewer...</div>
    </div>
  ),
});

export default function Home() {
  const [selectedId, setSelectedId] = useState("ark-of-the-covenant");
  const selectedItem = getItemById(selectedId) || tabernacleItems[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-amber-800 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Tabernacle AR</h1>
          <p className="text-amber-200 mt-1">
            Explore the sacred furniture of the biblical tabernacle in augmented reality
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Furniture Selector */}
        <div className="mb-6">
          <FurnitureSelector
            items={tabernacleItems}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* AR Viewer and Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AR Viewer - Takes 2/3 on large screens */}
          <div className="lg:col-span-2">
            {selectedItem.available ? (
              <ARViewer
                modelSrc={selectedItem.modelSrc}
                modelAlt={selectedItem.name}
                poster={selectedItem.posterSrc}
              />
            ) : (
              <div className="w-full h-[500px] md:h-[600px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mb-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <p className="text-lg font-medium">3D Model Coming Soon</p>
                <p className="text-sm mt-1">
                  The {selectedItem.name} model is currently in development
                </p>
              </div>
            )}

            {/* AR Instructions */}
            <div className="mt-4 bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">How to View in AR</h3>
              <ol className="text-sm text-amber-700 space-y-1 list-decimal list-inside">
                <li>Rotate and zoom the 3D model to explore it</li>
                <li>Tap &quot;View in Your Space&quot; to launch AR mode</li>
                <li>Point your camera at a flat surface (floor or table)</li>
                <li>Tap to place the object and walk around it</li>
              </ol>
              <p className="text-xs text-amber-600 mt-2">
                Works on iOS Safari and Android Chrome. For best experience, use a well-lit room.
              </p>
            </div>
          </div>

          {/* Info Panel - Takes 1/3 on large screens */}
          <div className="lg:col-span-1">
            <InfoPanel item={selectedItem} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>
            Explore the tabernacle as described in the Book of Exodus
          </p>
          <p className="mt-2 text-amber-400">
            Built with Next.js and Model-Viewer
          </p>
        </div>
      </footer>
    </div>
  );
}
