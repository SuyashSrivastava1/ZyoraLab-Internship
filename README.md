# Developer Launch Page — ZyoraLab Internship

An interactive, multi-section **Developer Launch Page** and **15-Day Roadmap Portfolio** created by [Suyash Srivastava](https://github.com/SuyashSrivastava1) for the ZyoraLab Internship.

---

## 📅 Challenge Progress & Architecture

### Day 02: Semantic HTML Deep-Dive & Multi-Section Upgrade (`Current`)
For Day 2, `index.html` has been structured as a **pure semantic HTML5 document (no CSS yet)** to master structural foundations, accessibility landmarks, and native browser interactions:
- **`header` & `nav`**: Clear site header with anchor links (`#about`, `#roadmap`, `#skills`, `#education`, `#contact`) enabling instant section jump navigation across the page.
- **`main` landmark**: Wraps all core content regions (`section`, `article`, `figure`) with explicit `aria-labelledby` headings.
- **`#about`**: Features profile branding, bio `p`, `blockquote` with `cite`, and an accessible `img` with descriptive `alt` text (`Portrait of Suyash Srivastava...`).
- **`#roadmap`**: The 15-Day challenge timeline converted into a semantic `ol` (ordered list) using **native `details` & `summary` elements** for zero-JS accordion expansion and collapse.
- **`#skills`**: Structured categorized lists (`ul` / `li`) dividing skills into Frontend Architecture, Tooling/Workflow, and Core Engineering concepts.
- **`#education`**: An accessible HTML data `table` complete with `caption`, `thead`, `tbody`, `th scope="col"`, `th scope="row"`, and `td` entries.
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

- **Structure**: Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `figure`, `details`/`summary`, `table`, `form`, `footer`)
- **Accessibility**: WAI-ARIA landmarks, explicit form labels, image `alt` attributes, semantic table scopes (`col` / `row`)

---

## 👤 Author

**Suyash Srivastava**
- GitHub: [@SuyashSrivastava1](https://github.com/SuyashSrivastava1)
- Repository: [ZyoraLab-Internship](https://github.com/SuyashSrivastava1/ZyoraLab-Internship)
