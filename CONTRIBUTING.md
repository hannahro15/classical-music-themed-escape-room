# Contributing to Classical Music Themed Escape Room

Thank you for your interest in contributing! Below you'll find a list of issues and features ready to be worked on. Each section describes what needs to be done and what a good implementation looks like.

---

## 🎹 Issues Ready to Work On

### 1. Make Practice Room Puzzles Interactive

**Label:** `enhancement`

The three puzzles in the Practice Room currently only display static text. They need to become fully interactive.

**Files to edit:**
- `music-escape-room/src/rooms/practice-room/puzzles/PianoScalesPuzzle.jsx`
- `music-escape-room/src/rooms/practice-room/puzzles/KeySignaturePuzzle.jsx`
- `music-escape-room/src/rooms/practice-room/puzzles/ViolinStringsPuzzle.jsx`

**Tasks:**
- [ ] **Piano Scales Puzzle** – The display `_ _ E F _ _ B C` represents a C major scale with missing notes. Add input boxes or clickable buttons so the player can fill in the blanks (`C D E F G A B C`). Show success feedback when all blanks are filled correctly.
- [ ] **Key Signature Puzzle** – Show a series of key signatures (e.g. 1 sharp, 2 sharps) and ask the player to identify each one. Add interactive selection mechanics.
- [ ] **Violin Strings Puzzle** – Allow the player to label the four violin strings (G, D, A, E from low to high). Add drag-and-drop or click-to-assign interactions.
- [ ] Each puzzle should display a success message (e.g. "Well done! Puzzle solved!") when answered correctly, and an error message when answered incorrectly.

---

### 2. Add Navigation Controls to Rooms

**Label:** `enhancement`

Rooms currently have no way to navigate back to the rooms grid or home page. Players must use the browser back button.

**Files to edit:**
- `music-escape-room/src/rooms/practice-room/practice-room.jsx`
- `music-escape-room/src/rooms/practice-room/practice-room.css`

**Tasks:**
- [ ] Add a "Back to Rooms" button/link at the top of each room page that navigates back to `/rooms`
- [ ] Add a "Home" link in the header
- [ ] Apply the same navigation to any new rooms created in future

---

### 3. Implement the Music Library Room

**Label:** `enhancement`, `new-room`

The room image already exists at `music-escape-room/src/assets/music-library.webp`.

**Route:** `/rooms/music-library`

**Tasks:**
- [ ] Create `music-escape-room/src/rooms/music-library/` directory
- [ ] Create `music-library.jsx` and `music-library.css` files
- [ ] Add at least 2 interactive puzzles themed around music notation, composers, or scores
- [ ] Register the route in `App.jsx`
- [ ] Display a room completion message when all puzzles are solved

**Puzzle ideas:**
- Match a musical symbol to its meaning (e.g. treble clef, time signature, dynamic marks)
- Identify the composer from a famous excerpt or description

---

### 4. Implement the Composer's Study Room

**Label:** `enhancement`, `new-room`

The room image exists at `music-escape-room/src/assets/composers-study.webp`.

**Route:** `/rooms/composers-study`

**Tasks:**
- [ ] Create `music-escape-room/src/rooms/composers-study/` directory
- [ ] Create `composers-study.jsx` and `composers-study.css` files
- [ ] Add at least 2 interactive puzzles themed around famous composers
- [ ] Register the route in `App.jsx`

**Puzzle ideas:**
- Match a famous piece to its composer (e.g. "Moonlight Sonata" → Beethoven)
- Put composers in chronological order (Baroque → Classical → Romantic)

---

### 5. Implement the Baroque Room

**Label:** `enhancement`, `new-room`

The room image exists at `music-escape-room/src/assets/baroque-room.webp`.

**Route:** `/rooms/baroque-room`

**Tasks:**
- [ ] Create `music-escape-room/src/rooms/baroque-room/` directory
- [ ] Create `baroque-room.jsx` and `baroque-room.css` files
- [ ] Add at least 2 interactive puzzles themed around Baroque music and Bach
- [ ] Register the route in `App.jsx`

**Puzzle ideas:**
- Identify Baroque instruments (harpsichord, lute, clavichord)
- Decode a message using a simple cipher based on musical notes (A=1, B=2…)

---

### 6. Implement the Mozart Room

**Label:** `enhancement`, `new-room`

The room image exists at `music-escape-room/src/assets/mozart-room.webp`.

**Route:** `/rooms/mozart-room`

**Tasks:**
- [ ] Create `music-escape-room/src/rooms/mozart-room/` directory
- [ ] Create `mozart-room.jsx` and `mozart-room.css` files
- [ ] Add at least 2 interactive puzzles themed around Mozart and the Classical era
- [ ] Register the route in `App.jsx`

**Puzzle ideas:**
- Identify Mozart's famous works from short descriptions
- Complete a short musical phrase (note sequencing puzzle)

---

### 7. Implement the Opera Stage Room

**Label:** `enhancement`, `new-room`

The room image exists at `music-escape-room/src/assets/opera-stage.webp`.

**Route:** `/rooms/opera-stage`

**Tasks:**
- [ ] Create `music-escape-room/src/rooms/opera-stage/` directory
- [ ] Create `opera-stage.jsx` and `opera-stage.css` files
- [ ] Add at least 2 interactive puzzles themed around opera
- [ ] Register the route in `App.jsx`

**Puzzle ideas:**
- Match a famous opera aria to the opera it comes from
- Identify voice types (soprano, mezzo-soprano, tenor, baritone, bass)

---

### 8. Implement the String Workshop Room

**Label:** `enhancement`, `new-room`

The room image exists at `music-escape-room/src/assets/string-workshop.webp`.

**Route:** `/rooms/string-workshop`

**Tasks:**
- [ ] Create `music-escape-room/src/rooms/string-workshop/` directory
- [ ] Create `string-workshop.jsx` and `string-workshop.css` files
- [ ] Add at least 2 interactive puzzles themed around string instruments
- [ ] Register the route in `App.jsx`

**Puzzle ideas:**
- Order string instruments by size (violin, viola, cello, double bass)
- Identify parts of a violin from an annotated diagram

---

### 9. Implement the Woodwind Workshop Room

**Label:** `enhancement`, `new-room`

The room image exists at `music-escape-room/src/assets/woodwind-workshop.webp`.

**Route:** `/rooms/woodwind-workshop`

**Tasks:**
- [ ] Create `music-escape-room/src/rooms/woodwind-workshop/` directory
- [ ] Create `woodwind-workshop.jsx` and `woodwind-workshop.css` files
- [ ] Add at least 2 interactive puzzles themed around woodwind instruments
- [ ] Register the route in `App.jsx`

**Puzzle ideas:**
- Classify instruments into woodwind families (flute, oboe, clarinet, bassoon, saxophone)
- Match a woodwind instrument to a description of its sound or playing technique

---

### 10. Implement the Concert Hall Room (Final Room)

**Label:** `enhancement`, `new-room`

The room image exists at `music-escape-room/src/assets/concert-hall.webp`.

**Route:** `/rooms/concert-hall`

**Tasks:**
- [ ] Create `music-escape-room/src/rooms/concert-hall/` directory
- [ ] Create `concert-hall.jsx` and `concert-hall.css` files
- [ ] Add at least 3 challenging puzzles that combine knowledge from previous rooms
- [ ] Register the route in `App.jsx`
- [ ] Add a final "You Escaped!" celebration screen when all puzzles are solved

**Puzzle ideas:**
- Identify a piece of music from multiple clues (composer era, instrumentation, genre)
- Put the elements of a symphony in the correct order (movements, structure)
- Answer a final music trivia question to unlock the exit

---

### 11. Add Game Completion Tracking

**Label:** `enhancement`

Currently there is no state tracking whether a player has completed a room or puzzle. Adding this would make the game feel more cohesive.

**Tasks:**
- [ ] Track which puzzles in each room have been solved (using React state or `localStorage`)
- [ ] Show a visual indicator on the rooms grid for completed rooms (e.g. a tick icon)
- [ ] Show a room completion overlay when all puzzles in a room are solved
- [ ] Add an overall game progress tracker on the rooms grid page

---

### 12. Improve Accessibility

**Label:** `accessibility`

**Tasks:**
- [ ] Add `aria-label` attributes to all interactive elements (hotspots, modals, buttons)
- [ ] Ensure all modals trap keyboard focus correctly (focus should return to the trigger element when a modal closes)
- [ ] Ensure colour contrast meets WCAG AA standards throughout
- [ ] Add keyboard navigation support for all puzzle interactions
- [ ] Add `alt` text improvements for room images

---

### 13. Add Unit Tests

**Label:** `testing`

The project currently has no test infrastructure.

**Tasks:**
- [ ] Install [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ ] Write tests for each puzzle component (correct answer, incorrect answer, reset)
- [ ] Write tests for page routing (home → rooms grid → individual room)
- [ ] Add a `test` script to `music-escape-room/package.json`

---

## Getting Started

1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run the linter: `cd music-escape-room && npm run lint`
5. Test your changes locally: `npm run dev`
6. Commit and push your changes
7. Open a pull request

## Code Style

- Use functional React components with hooks
- Follow the existing file structure: each room lives in `src/rooms/{room-id}/`
- CSS is co-located with components (e.g. `practice-room.css` lives alongside `practice-room.jsx`)
- Puzzles are sub-components inside a `puzzles/` folder within the room directory

## Questions?

If you have any questions about an issue or need clarification, feel free to comment on the relevant issue or open a new discussion.
