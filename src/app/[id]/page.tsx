"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { tabernacleItems, getItemById } from "@/data/furniture";
import FurnitureNav from "@/components/FurnitureNav";
import InfoPanel from "@/components/InfoPanel";
import { Button } from "@/components/ui/button";

// Dynamically import ARViewer to avoid SSR issues with model-viewer
const ARViewer = dynamic(() => import("@/components/ARViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square max-h-[600px] bg-secondary/50 rounded-2xl flex items-center justify-center">
      <div className="animate-pulse text-primary">Loading 3D viewer...</div>
    </div>
  ),
});

export default function FurniturePage() {
  const params = useParams();
  const id = params.id as string;
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);

  const item = getItemById(id);

  if (!item) {
    notFound();
  }

  // Get the current model source and scale (from variant or base item)
  const selectedVariant = item.variants?.find(v => v.id === selectedVariantId);
  const currentModelSrc = selectedVariant?.modelSrc || item.modelSrc;
  const currentScale = selectedVariant?.arScale ?? item.arScale;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground tracking-tight">Tabernacle AR</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Explore the sacred furniture in augmented reality
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4">
            <FurnitureNav items={tabernacleItems} currentId={id} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Item Title */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-foreground">{item.name}</h2>
          {item.hebrewName && (
            <p className="text-xl text-primary/80 mt-1 font-medium">{item.hebrewName}</p>
          )}
          <p className="text-muted-foreground mt-2">{item.description}</p>
        </div>

        {/* AR Viewer and Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* AR Viewer - Takes 3/5 on large screens */}
          <div className="lg:col-span-3">
            {item.available ? (
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-border bg-gradient-to-b from-secondary/30 to-secondary/10">
                  <ARViewer
                    modelSrc={currentModelSrc}
                    modelAlt={item.name}
                    poster={item.posterSrc}
                    scale={currentScale}
                  />
                </div>

                {/* Variant Selector */}
                {item.variants && item.variants.length > 1 && (
                  <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                    <span className="text-sm font-medium text-muted-foreground">Model version:</span>
                    <div className="flex gap-2">
                      {item.variants.map((variant) => (
                        <Button
                          key={variant.id}
                          size="sm"
                          variant={selectedVariantId === variant.id || (!selectedVariantId && variant.id === "v1") ? "default" : "outline"}
                          onClick={() => setSelectedVariantId(variant.id)}
                        >
                          {variant.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* AR Instructions */}
                <div className="bg-secondary/30 rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    How to View in AR
                  </h3>
                  <ol className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                      <span>Rotate and zoom the 3D model to explore it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                      <span>Tap &quot;View in Your Space&quot; to launch AR mode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                      <span>Point your camera at a flat surface (floor or table)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                      <span>Tap to place the object and walk around it</span>
                    </li>
                  </ol>
                  <p className="text-xs text-muted-foreground/70 mt-4 pt-3 border-t border-border">
                    Works on iOS Safari and Android Chrome. For best experience, use a well-lit room.
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-square max-h-[600px] bg-secondary/30 rounded-2xl flex flex-col items-center justify-center text-muted-foreground border border-border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 mb-4 text-muted-foreground/30"
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
                <p className="text-xl font-medium">3D Model Coming Soon</p>
                <p className="text-sm mt-2 text-muted-foreground/70">
                  The {item.name} model is currently in development
                </p>
              </div>
            )}
          </div>

          {/* Info Panel - Takes 2/5 on large screens */}
          <div className="lg:col-span-2">
            <InfoPanel item={item} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            Explore the tabernacle as described in the Book of Exodus
          </p>
          <p className="mt-2 text-sm text-muted-foreground/60">
            Built with Next.js and Model-Viewer
          </p>
        </div>
      </footer>
    </div>
  );
}
