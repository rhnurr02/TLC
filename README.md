# Trade/Buy Calculator

A streamlined, interactive calculator designed for collectible card game vendors and traders. This tool enables fast, accurate trade or buy evaluations using customizable percentages. The app is fully responsive and built for practical, real-world usage at events, vendor booths, and casual meetups.

## Features

- Dual modes:
  - Trade: compares customer vs. seller card values using a percentage split
  - Buy: calculates a buy price based on only the customer’s cards
- Live balance calculations that update in real time
- Auto-percentage presets:
  - Trade: defaults to 80%
  - Buy: defaults to 70%
- Color-coded result zones:
  - Green: user receives value
  - Red: user owes value
  - Blue: flat result (Buy mode only)
- Card-level removal with a compact hoverable "×" button
- Fully responsive design, mobile-friendly and desktop-optimized
- Reset button clears all card entries and restores defaults

## How It Works

- Select Trade or Buy using the mode toggle
- Add card entries for the customer and seller as needed
- Input card values directly — calculations update instantly
- Adjust the percentage if needed (within 0–100%)
- View who owes what in the result section below the toggle

## Technologies Used

- HTML5 for structural layout
- CSS3 with Flexbox and media queries for responsive styling
- Vanilla JavaScript (ES6) for dynamic behavior and calculations
- Google Fonts (Nunito) for modern, legible typography

## File Structure

| File         | Description |
|--------------|-------------|
| `index.html` | Main structure of the calculator layout and controls |
| `style.css`  | Handles responsive design, layout, theme colors, and animations |
| `script.js`  | Core business logic: dynamic rendering, calculations, and UI updates |

## Setup Instructions

1. Download or clone the repository.
2. Open `index.html` in any modern browser.
3. Use the mode toggle to switch between Trade and Buy.
4. Input card values and observe real-time result updates.
5. Use the Reset button to clear all values and revert to default settings.

## Customization

- Default percentages can be changed in `script.js` within the `switchMode()` function.
- UI spacing and responsiveness can be modified via Flexbox in `style.css`.
- Visual tweaks (colors, animations, etc.) can be edited under the `.side-section`, `.remove-btn`, or `@keyframes` rules.

## License

This project is open source and available under the MIT License.

## Author

**Raihan Nurrahman**  
Developer and Pokémon card vendor  
GitHub: [github.com/rhnurr02](https://github.com/rhnurr02)