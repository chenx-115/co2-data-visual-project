const fs = require("fs");

const inputPath = "consumption-co2-per-capita-vs-gdppc.csv";
const outputPath = "owid_energy_problem_scatter_assets.js";

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        cell += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

const regionColors = {
  "North America": "#e88373",
  "South America": "#a25456",
  Africa: "#b66ab3",
  Europe: "#7487a8",
  Asia: "#2d9c9a",
  Oceania: "#5cb9c1"
};

const labelCountries = new Set([
  "China",
  "India",
  "United States",
  "Russia",
  "Germany",
  "France",
  "Norway",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Singapore",
  "Oman",
  "Malta",
  "South Korea",
  "Turkey",
  "Iran",
  "Pakistan",
  "Nigeria",
  "Indonesia",
  "Mexico",
  "Brazil",
  "Uruguay",
  "Albania",
  "Mozambique",
  "Ethiopia",
  "Guinea"
]);

const rows = parseCsv(fs.readFileSync(inputPath, "utf8").replace(/^\uFEFF/, ""));
const header = rows.shift();
const index = Object.fromEntries(header.map((name, i) => [name, i]));
const pointsByYear = {};
const years = new Set();
let maxPopulation = 0;
let minGdp = Infinity;
let maxGdp = 0;
let maxEmissions = 0;

for (const row of rows) {
  const name = (row[index.Entity] || "").trim();
  const code = (row[index.Code] || "").trim();
  const region = (row[index["World region according to OWID"]] || "").trim();
  const year = Number(row[index.Year]);
  const co2 = Number(row[index["Consumption-based emissions per capita"]]);
  const gdp = Number(row[index["GDP per capita"]]);
  const population = Number(row[index.Population]);

  if (!name || !code || !region || !year) continue;
  if (year > 2023) continue;
  if (!Number.isFinite(co2) || !Number.isFinite(gdp) || !Number.isFinite(population)) continue;
  if (co2 < 0 || gdp <= 0 || population <= 0) continue;

  years.add(year);
  maxPopulation = Math.max(maxPopulation, population);
  minGdp = Math.min(minGdp, gdp);
  maxGdp = Math.max(maxGdp, gdp);
  maxEmissions = Math.max(maxEmissions, co2);

  const key = String(year);
  if (!pointsByYear[key]) pointsByYear[key] = [];
  pointsByYear[key].push({
    name,
    code,
    year,
    region,
    co2: Number(co2.toFixed(4)),
    gdp: Number(gdp.toFixed(2)),
    population: Math.round(population),
    label: labelCountries.has(name)
  });
}

for (const points of Object.values(pointsByYear)) {
  points.sort((a, b) => b.population - a.population);
}

const yearList = Array.from(years).sort((a, b) => a - b);
const asset = {
  years: yearList,
  defaultYear: yearList.includes(2023) ? 2023 : yearList[yearList.length - 1],
  regionOrder: ["North America", "South America", "Africa", "Europe", "Asia", "Oceania"],
  regionColors,
  maxPopulation: Math.round(maxPopulation),
  minGdp,
  maxGdp,
  maxEmissions,
  pointsByYear
};

fs.writeFileSync(
  outputPath,
  `window.OWID_ENERGY_PROBLEM_SCATTER=${JSON.stringify(asset)};\n`,
  "utf8"
);

console.log(`Generated ${outputPath}: ${yearList.length} years, ${Object.values(pointsByYear).flat().length} points.`);
