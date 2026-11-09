# SRFEC Stones & Granite — Image Slots Inventory & Generation Prompts

This document lists every image slot required by the SRFEC Stones & Granite website, indicates whether the asset was present in the two source PDFs (`SRFEC BRICKS BRANDBOOK.pdf` and `Srfec Company Profile.pdf`), and provides the exact generation prompt for each missing photographic slot.

---

## 1. Summary of Source PDF Image Audit

- **`SRFEC BRICKS BRANDBOOK.pdf` (14 pages):**
  - Pages 1–11: Vector brand identity, logos, typography, color system, and repeating brand pattern.
  - Pages 12–14: Brand application mockup grids (`brand-applications-overview-1.webp`, `brand-applications-overview-2.webp`, `brand-digital-mockups-reference.webp`) saved under `/public/images/misc/` strictly as reference/brand-application visuals.
- **`Srfec Company Profile.pdf` (11 pages):**
  - Pages 1, 2, 10, 11: Wireframe text-only placeholders (`Cover`, `كلمة ال CEO / صورة لل ceo`, `عملاؤنا`, `Contact us / البيانات`).
  - Pages 3–9: Structured Arabic copy cards on solid off-white backgrounds (`#F5F3EF`) with no embedded photographs.

---

## 2. Image Slots & Exact Generation Prompts

Global visual direction applied to all prompts:
> Warm natural light, premium editorial architectural and industrial photography, Granite Navy (`#192D4C`), Soft Champagne Gold (`#C9A96A`), Warm Cream (`#F5F0E6`), and Cool Stone Gray (`#E9EAEE`) tonality. No pure black-heavy dark scenes, no text, no watermarks, no baked-in logos, and no recognizable faces.

### A. Hero & Editorial Section Visuals

| Slot | Target Path | Aspect Ratio | Status in PDFs | Prompt |
| :--- | :--- | :--- | :--- | :--- |
| **Home Hero & Page Banners** | `/images/hero/hero-architectural-stone.webp` | `16:9` | Missing (inspired by Brand Book p.13–14 stone cube visual) | *"Architectural photography of a modern monolithic pavilion clad in book-matched grey-navy veined marble and warm cream limestone cubes, warm golden hour sunlight casting soft shadows across a travertine plaza, deep twilight navy-blue sky, ultra-clean minimalist Saudi luxury architecture, editorial photography, 8k, no people, no text."* |
| **Our Story Visual** | `/images/misc/story-quarry-blocks.webp` | `4:3` | Missing (inspired by Brand Book p.13 quarry blocks) | *"Editorial photography of monumental raw natural granite and warm cream limestone quarry blocks stacked in an organized stone yard under warm golden sunlight, crisp chiseled stone textures and natural mineral veining, soft cream and slate-navy color palette, no people, no text."* |
| **Our Vision Visual** | `/images/misc/vision-architectural-detail.webp` | `4:3` | Missing | *"Architectural detail photography of a colonnade crafted from precision-cut warm cream limestone and champagne-veined marble slabs, sunlight grazing the honed stone surfaces, geometric symmetry, calm luxury architectural aesthetic, no people, no text."* |

---

### B. Factory Capabilities & Mosaic Gallery (6 Slots)

| Slot | Target Path | Aspect Ratio | Status in PDFs | Prompt |
| :--- | :--- | :--- | :--- | :--- |
| **1. Gang Saw Cutting** | `/images/factory/factory-gang-saw-cutting.webp` | `4:3` | Missing | *"Clean modern industrial stone manufacturing facility interior, a large multi-blade diamond gang saw slicing through a massive raw granite block with clean water cooling mist, warm natural daylight streaming through high factory windows, navy-painted steel machinery and cream stone slabs, editorial industrial photography, no people, no text."* |
| **2. CNC Bridge Saw** | `/images/factory/factory-cnc-bridge-saw.webp` | `4:3` | Missing | *"High-precision automated CNC bridge saw with a diamond blade cutting a polished natural cream and navy-veined marble slab on a clean calibration table, water spray, modern stone fabrication plant, warm editorial lighting, no people, no text."* |
| **3. Carving & Shaping** | `/images/factory/factory-carving-shaping.webp` | `4:3` | Missing | *"Close-up editorial photograph of an intricate architectural limestone relief panel and fluted stone column capital being precision-milled and carved in a stone workshop, fine cream stone texture, warm directional sunlight, high craftsmanship, no people, no text."* |
| **4. Slab Polishing Line** | `/images/factory/factory-polishing-line.webp` | `4:3` | Missing | *"Modern automated stone slab polishing line inside a bright stone processing factory, multiple polishing heads buffing a large veined granite and cream marble slab to a mirror gloss finish, clean industrial setting with navy steel accents, no people, no text."* |
| **5. Quality Inspection** | `/images/factory/factory-quality-inspection.webp` | `4:3` | Missing | *"Finished cut-to-size architectural granite and honed cream limestone facade panels neatly arranged on steel inspection racks inside a sunlit stone manufacturing hall, crisp chamfered stone edges, precision engineering feel, no people, no text."* |
| **6. Stone Slab Yard** | `/images/factory/factory-slab-yard.webp` | `4:3` | Missing | *"Expansive organized stone slab gallery yard with rows of oversized book-matched natural granite, marble, and warm travertine slabs standing upright on navy steel A-frames under warm sunlight, architectural stone supplier, no people, no text."* |

---

### C. Natural Stones Collection (5 Slots)

| Slot | Target Path | Aspect Ratio | Status in PDFs | Prompt |
| :--- | :--- | :--- | :--- | :--- |
| **1. Marble** | `/images/stones/stone-marble.webp` | `4:3` | Missing | *"Full-frame close-up studio photograph of a polished luxury natural marble slab, warm ivory and alabaster white surface crossed by flowing organic veins of soft champagne gold and deep slate-navy, high-resolution stone texture, no text."* |
| **2. Granite** | `/images/stones/stone-granite.webp` | `4:3` | Missing | *"Full-frame close-up studio photograph of a polished natural Saudi granite slab, rich crystalline mineral grain combining deep granite navy-grey, warm feldspar cream, quartz, and subtle golden mica flecks, durable architectural stone texture, no text."* |
| **3. Travertine** | `/images/stones/stone-travertine.webp` | `4:3` | Missing | *"Full-frame close-up studio photograph of a vein-cut honed natural travertine stone slab, warm sand, cream, and champagne horizontal sedimentary layers with natural fine porous cavities, soft raking sunlight, no text."* |
| **4. Onyx** | `/images/stones/stone-onyx.webp` | `4:3` | Missing | *"Full-frame close-up studio photograph of a polished translucent natural onyx stone slab, flowing bands of warm honey champagne, ivory cream, and amber crystal layers softly glowing with warm directional light, luxury stone surface, no text."* |
| **5. Limestone** | `/images/stones/stone-limestone.webp` | `4:3` | Missing | *"Full-frame close-up studio photograph of a honed natural Riyadh architectural limestone slab, uniform warm cream and soft beige calcareous grain with subtle natural sedimentary texture and crisp chamfered edge detail, warm daylight, no text."* |

---

### D. Representative Project Placeholders (6 Slots — Marked `isPlaceholder: true` in `src/data/projects.ts`)

| Slot | Target Path | Aspect Ratio | Status in PDFs | Prompt |
| :--- | :--- | :--- | :--- | :--- |
| **1. Commercial & Administrative Complex** | `/images/projects/placeholder-project-commercial-facade.webp` | `4:3` | Missing | *"Architectural exterior photography of a prestigious contemporary commercial office building in Riyadh clad in precision-cut warm cream limestone and deep grey-navy granite facade panels, geometric stone fins, warm afternoon sunlight, clear blue-navy sky, no people, no text."* |
| **2. Hospitality Development Cladding** | `/images/projects/placeholder-project-hospitality-lobby.webp` | `4:3` | Missing | *"Luxury five-star hotel grand atrium lobby interior featuring soaring book-matched cream and champagne-veined marble wall cladding, honed travertine stone floors, and monolithic stone reception colonnade in warm ambient daylight, no people, no text."* |
| **3. Institutional Architectural Landmark** | `/images/projects/placeholder-project-public-landmark.webp` | `4:3` | Missing | *"Monumental cultural and civic landmark building featuring carved Riyadh limestone geometric arches, colonnades, and bush-hammered granite plinths under warm golden sunlight, timeless Saudi architectural heritage and modern precision, no people, no text."* |
| **4. Luxury Residential Compound** | `/images/projects/placeholder-project-residential-villa.webp` | `4:3` | Missing | *"Architectural exterior of a contemporary luxury private villa courtyard clad in honed warm cream limestone, travertine stepped terraces, and intricately carved natural stone screen panels in warm sunlight, no people, no text."* |
| **5. Urban Plaza & Podium Hardscaping** | `/images/projects/placeholder-project-urban-plaza.webp` | `4:3` | Missing | *"Expansive modern architectural urban plaza paved with flamed and bush-hammered grey granite slabs, warm cream stone planters, monolithic carved granite benches, and a reflective stone water channel in warm sunlight, no people, no text."* |
| **6. Bespoke Interior Stonework** | `/images/projects/placeholder-project-interior-stonework.webp` | `4:3` | Missing | *"Architectural interior photography of a sculptural monolithic staircase and double-height feature wall crafted from book-matched cream marble and fluted limestone panels, mitered stone joints, warm natural skylight, no people, no text."* |

---

### E. CEO Portrait & Client Logos Placeholders

| Slot | Target Path | Status in PDFs | Notes |
| :--- | :--- | :--- | :--- |
| **CEO Portrait** | `/images/ceo/placeholder-ceo-portrait.svg` | Missing (`صورة لل ceo` placeholder text on Company Profile p.2) | Tasteful architectural SVG placeholder frame until official executive portrait is provided. |
| **Client Logos (1–6)** | `/images/clients/placeholder-client-1.svg` .. `placeholder-client-6.svg` | Missing (`عملاؤنا` placeholder text on Company Profile p.10) | Clean architectural SVG partner emblem placeholders until official client logos are provided. |

