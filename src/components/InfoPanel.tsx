"use client";

import { TabernacleFurniture } from "@/data/furniture";
import { Badge } from "@/components/ui/badge";

interface InfoPanelProps {
  item: TabernacleFurniture;
}

export default function InfoPanel({ item }: InfoPanelProps) {
  return (
    <div className="space-y-6">
      {/* Biblical Reference */}
      <div className="bg-secondary/30 rounded-xl p-5 border border-border">
        <div className="flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
          <h3 className="font-semibold text-foreground">Biblical Reference</h3>
        </div>
        <Badge variant="secondary" className="text-sm px-3 py-1">
          {item.biblicalReference}
        </Badge>
      </div>

      {/* Materials */}
      <div className="bg-secondary/30 rounded-xl p-5 border border-border">
        <div className="flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <h3 className="font-semibold text-foreground">Materials</h3>
        </div>
        <ul className="space-y-1.5">
          {item.details.materials.map((material, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
              {material}
            </li>
          ))}
        </ul>
      </div>

      {/* Dimensions */}
      {item.details.dimensions && (
        <div className="bg-secondary/30 rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <h3 className="font-semibold text-foreground">Dimensions</h3>
          </div>
          <p className="text-sm text-muted-foreground">{item.details.dimensions}</p>
        </div>
      )}

      {/* Location */}
      <div className="bg-secondary/30 rounded-xl p-5 border border-border">
        <div className="flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 className="font-semibold text-foreground">Location in Tabernacle</h3>
        </div>
        <p className="text-sm text-muted-foreground">{item.details.location}</p>
      </div>

      {/* Symbolism */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20">
        <div className="flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <h3 className="font-semibold text-foreground">Symbolism</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.details.symbolism}</p>
      </div>
    </div>
  );
}
