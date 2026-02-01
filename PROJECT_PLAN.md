# Tabernacle AR - Project Plan

## Project Overview

An augmented reality (AR) web application that allows users to visualize and explore the sacred furniture of the biblical tabernacle in their own physical space. Users can view detailed 3D models of items like the Ark of the Covenant, Golden Lampstand, and other pieces described in the Book of Exodus.

## Goals

1. Create an immersive, educational AR experience for exploring tabernacle furniture
2. Provide biblical context, symbolism, and historical details for each piece
3. Support iOS and Android devices via web browser (no app install required)
4. Start with the Ark of the Covenant, expand to all 6 major pieces

---

## Technical Decisions

### Platform & Delivery
- **Web-based AR** (browser experience, no app store)
- **Primary target**: iOS Safari (using AR Quick Look)
- **Secondary target**: Android Chrome (using WebXR/Scene Viewer)
- **No specific hardware required** - standard smartphones/tablets

### AR Approach
- **Surface-based AR**: Users place objects on detected floors/tables
- **Framework**: Google Model-Viewer (`@google/model-viewer`)
  - Handles cross-platform AR automatically
  - Uses AR Quick Look on iOS, WebXR on Android
  - Simple integration with React/Next.js

### Tech Stack
| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| AR Engine | Google Model-Viewer |
| 3D Formats | GLB (primary), USDZ (iOS optimization) |

### Why These Choices?
- **Next.js + TypeScript**: Matches developer experience (React/Next background)
- **Model-Viewer**: Best cross-platform web AR solution, handles iOS limitations
- **shadcn/ui**: Accessible, customizable components, works great with Tailwind
- **GLB format**: Universal 3D format, works everywhere
- **USDZ**: Native iOS AR format for best iPhone experience

---

## 3D Models

### Sourcing Strategy

1. **Free downloads with proper licensing** (CC BY 4.0)
   - Sketchfab: [The Ark Of The Covenant by VHM777](https://sketchfab.com/3d-models/the-ark-of-the-covenant-d8fb87c24f3f40edaf564d770101552c)
   - CGTrader free section

2. **AI Generation** (for items without free models)
   - Meshy.ai - Text-to-3D and Image-to-3D
   - Tripo3D - Fast image-to-3D generation
   - Use public domain reference images as input

3. **Commission** (if needed for high-quality items)
   - Fiverr/Upwork 3D artists
   - Estimated $100-500 per model

### Model Requirements
- **Format**: GLB (required), USDZ (recommended for iOS)
- **Polygon count**: < 500k triangles for mobile performance
- **Textures**: PBR materials, compressed textures
- **Scale**: Real-world dimensions based on biblical cubits

### Tabernacle Items

| Item | Status | Model Source | Notes |
|------|--------|--------------|-------|
| Ark of the Covenant | Ready | Sketchfab (VHM777) | CC BY 4.0, needs download |
| Brazen Altar | Pending | TBD | Altar of burnt offering |
| Bronze Laver | Pending | TBD | Ceremonial washing basin |
| Golden Lampstand | Pending | TBD | Seven-branched menorah |
| Table of Showbread | Pending | TBD | Twelve loaves display |
| Altar of Incense | Pending | TBD | Golden incense altar |

---

## Project Structure

```
tabernacle/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main AR viewer page
│   │   ├── layout.tsx         # App layout with metadata
│   │   └── globals.css        # Global styles + Tailwind
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── tabs.tsx
│   │   ├── ARViewer.tsx       # Model-Viewer wrapper
│   │   ├── FurnitureSelector.tsx
│   │   └── InfoPanel.tsx
│   ├── data/
│   │   └── furniture.ts       # Tabernacle items data
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   └── models/                # 3D model files (.glb, .usdz)
├── PROJECT_PLAN.md            # This document
└── package.json
```

---

## Development Phases

### Phase 1: MVP (Current)
- [x] Project setup (Next.js, TypeScript, Tailwind)
- [x] shadcn/ui integration
- [x] AR Viewer component with Model-Viewer
- [x] Furniture data structure
- [x] Basic UI (selector, info panel)
- [x] GitHub repository
- [ ] Download and integrate Ark of the Covenant model
- [ ] Deploy to Vercel for testing
- [ ] Test AR on iOS device

### Phase 2: Content Expansion
- [ ] Add remaining 5 tabernacle furniture models
- [ ] Source/create 3D models (AI generation or purchase)
- [ ] Convert all models to USDZ for iOS optimization
- [ ] Add model attribution in UI

### Phase 3: Enhanced Experience
- [ ] Add audio narration for each item
- [ ] Implement tabernacle floor plan view
- [ ] Add guided tour mode
- [ ] Improve loading states and error handling

### Phase 4: Polish & Launch
- [ ] Performance optimization
- [ ] SEO and social sharing
- [ ] Analytics integration
- [ ] User feedback collection
- [ ] Documentation and about page

---

## Reference Resources

### Biblical References
- Exodus 25-27: Tabernacle furniture specifications
- Exodus 30: Altar of incense, bronze laver
- Exodus 37-38: Construction details
- Hebrews 9: Symbolic meaning

### 3D Model Sources
- [Sketchfab - Ark Model](https://sketchfab.com/3d-models/the-ark-of-the-covenant-d8fb87c24f3f40edaf564d770101552c)
- [FreeBibleimages - 3D Reconstructions](https://www.freebibleimages.org/illustrations/bs-ark-covenant/)
- [PICRYL - Public Domain Images](https://picryl.com/topics/ark+of+the+covenant)
- [Pixabay - Royalty Free Illustrations](https://pixabay.com/illustrations/search/ark%20of%20the%20covenant/)

### Technical Documentation
- [Model-Viewer Documentation](https://modelviewer.dev/)
- [AR Quick Look (Apple)](https://developer.apple.com/augmented-reality/quick-look/)
- [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)

---

## Deployment

### Recommended: Vercel
```bash
npm install -g vercel
vercel
```

### Alternative: Netlify
```bash
npm run build
# Deploy .next folder
```

### Requirements for AR
- HTTPS required (AR APIs require secure context)
- Proper MIME types for .glb and .usdz files
- No special server configuration needed

---

## Next Steps (Immediate)

1. **Download the Ark model**
   - Create Sketchfab account
   - Download GLB format from the linked model
   - Place in `public/models/ark-of-the-covenant.glb`

2. **Test locally**
   - Run `npm run dev`
   - Open http://localhost:3000
   - Verify 3D model loads and rotates

3. **Deploy to Vercel**
   - Connect GitHub repo to Vercel
   - Deploy for HTTPS access
   - Test AR on iPhone

4. **Iterate**
   - Gather feedback
   - Add more models
   - Enhance features

---

## Repository

**GitHub**: https://github.com/nateallen/tabernacle

---

*Last updated: February 1, 2026*
