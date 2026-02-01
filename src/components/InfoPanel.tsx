"use client";

import { TabernacleFurniture } from "@/data/furniture";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface InfoPanelProps {
  item: TabernacleFurniture;
}

export default function InfoPanel({ item }: InfoPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{item.name}</CardTitle>
        {item.hebrewName && (
          <CardDescription className="text-lg text-amber-700 font-medium" dir="rtl">
            {item.hebrewName}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{item.description}</p>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            {item.biblicalReference}
          </Badge>
        </div>

        <div className="border-t pt-4 space-y-3">
          <h3 className="font-semibold text-foreground">Details</h3>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Materials</h4>
            <ul className="text-sm text-foreground list-disc list-inside">
              {item.details.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>

          {item.details.dimensions && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Dimensions</h4>
              <p className="text-sm text-foreground">{item.details.dimensions}</p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-medium text-muted-foreground">
              Location in Tabernacle
            </h4>
            <p className="text-sm text-foreground">{item.details.location}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Symbolism</h4>
            <p className="text-sm text-foreground leading-relaxed">
              {item.details.symbolism}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="text-xs text-muted-foreground border-t pt-4">
        3D Model: &quot;The Ark Of The Covenant&quot; by VHM777 (CC BY 4.0)
      </CardFooter>
    </Card>
  );
}
