# Developer Launch Page — ZyoraLab Internship

An interactive, multi-section **Developer Launch Page** and **15-Day Roadmap Portfolio** created by [Suyash Srivastava](https://github.com/SuyashSrivastava1) for the ZyoraLab Internship.

---

## 📅 Challenge Progress & Architecture

### Day 03: CSS I — Box Model & Flexbox (`Current`)
For Day 3, `style.css` was crafted to transform the clean semantic structure into a high-performance, visually stunning developer portfolio with deliberate box model spacing:
- **ONE Color Scheme & Font Pairing**: A cohesive 3-color palette (`#0b0f19` obsidian midnight, `#151c2e` glassmorphic slate cards, `#6366f1` electric indigo accent) paired with modern Google Fonts (`Outfit` for headings, `Inter` for body).
- **Horizontal Flexbox Bar (`header`)**: Sticky navigation styled using Flexbox alignment (`justify-content: space-between`, `align-items: center`) with smooth underline hover micro-animations.
- **Skills Section & Flexbox Cards**: Added `#skills` showcasing core competencies inside responsive Flexbox cards (`flex: 1 1 calc(...)`) featuring consistent box model padding, `border-radius`, gradient top-borders, and interactive `translateY` hover lifts.
- **Education Table (`#education`) & Accessible Contact Form (`#contact`)**: Styled the academic table with clean row borders and hover highlights, and the contact form with custom card borders, focused input ring glows, and button transition effects.
- **Deliberate Box Model Spacing**: Strict universal reset, predictable `box-sizing: border-box`, controlled `padding` across section boundaries (`5rem 6%`), and intentional margins between elements.

### Day 02: Semantic HTML Deep-Dive & Multi-Section Upgrade
For Day 2, `index.html` has been structured as a **pure semantic HTML5 document (no CSS yet)** to master structural foundations, accessibility landmarks, and native browser interactions:
- **`header` & `nav`**: Clear site header with anchor links (`#about`, `#skills`, `#education`, `#roadmap`, `#contact`) enabling instant section jump navigation across the page.
- **`main` landmark**: Wraps all core content regions (`section`, `article`) with explicit `aria-labelledby` headings.
- **`#about`**: Features profile branding, bio `p`, and `blockquote` with `cite`.
- **`#roadmap`**: The 15-Day challenge timeline converted into a semantic `ol` (ordered list) using **native `details` & `summary` elements** for zero-JS accordion expansion and collapse.
- **`#contact`**: An accessible `form` using `fieldset`, `legend`, explicitly associated `label for="..."` tags, required `input` fields (`text`, `email`), `textarea`, and submit `button` (submission logic to be wired up on Day 5).

---

## 🚀 Quick Start

Since the entire application is contained inside `index.html` and `style.css`, no build steps or external dependencies are needed!

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SuyashSrivastava1/ZyoraLab-Internship.git
   cd ZyoraLab-Internship
   ```
2. **Open in Browser**:
   Double-click `index.html` directly or serve via local development server (`npx serve .` or VS Code Live Server) to experience the interactive Flexbox layout.

---

## 🛠️ Tech Stack

- **Structure**: Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `details`/`summary`, `form`, `table`, `footer`)
- **Styling**: Vanilla CSS3 (`Flexbox`, `CSS Variables`, `CSS Grid/Card Box Model`, `Google Fonts: Outfit & Inter`, `Glassmorphism Backdrop Blur`)
- **Accessibility**: WAI-ARIA landmarks, explicit form labels, semantic headings, and focus indicators

---

## 👤 Author

**Suyash Srivastava**
- GitHub: [@SuyashSrivastava1](https://github.com/SuyashSrivastava1)
- Repository: [ZyoraLab-Internship](https://github.com/SuyashSrivastava1/ZyoraLab-Internship)
