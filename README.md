# Developer Launch Page — ZyoraLab Internship

An interactive, multi-section **Developer Launch Page** and **15-Day Roadmap Portfolio** created by [Suyash Srivastava](https://github.com/SuyashSrivastava1) for the ZyoraLab Internship.

---

## 📅 Challenge Progress & Architecture

### Day 02: Semantic HTML Deep-Dive & Multi-Section Upgrade (`Current`)
For Day 2, `index.html` has been structured as a **pure semantic HTML5 document (no CSS yet)** to master structural foundations, accessibility landmarks, and native browser interactions:
- **`header` & `nav`**: Clear site header with anchor links (`#about`, `#roadmap`, `#contact`) enabling instant section jump navigation across the page.
- **`main` landmark**: Wraps all core content regions (`section`, `article`) with explicit `aria-labelledby` headings.
- **`#about`**: Features profile branding, bio `p`, and `blockquote` with `cite`.
- **`#roadmap`**: The 15-Day challenge timeline converted into a semantic `ol` (ordered list) using **native `details` & `summary` elements** for zero-JS accordion expansion and collapse.
- **`#contact`**: An accessible `form` using `fieldset`, `legend`, explicitly associated `label for="..."` tags, required `input` fields (`text`, `email`), `textarea`, and submit `button` (submission logic to be wired up on Day 5).

---

## 🚀 Quick Start

Since the entire application is contained inside `index.html`, no build steps or external dependencies are needed!

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SuyashSrivastava1/ZyoraLab-Internship.git
   cd ZyoraLab-Internship
   ```
2. **Open in Browser**:
   Double-click `index.html` directly or serve via local development server to inspect the clean semantic HTML structure.

---

## 🛠️ Tech Stack

- **Structure**: Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `details`/`summary`, `form`, `footer`)
- **Accessibility**: WAI-ARIA landmarks, explicit form labels, and semantic headings

---

## 👤 Author

**Suyash Srivastava**
- GitHub: [@SuyashSrivastava1](https://github.com/SuyashSrivastava1)
- Repository: [ZyoraLab-Internship](https://github.com/SuyashSrivastava1/ZyoraLab-Internship)
