// Export archive lawsuit data to JSON for Python script consumption
const fs = require('fs');
const path = require('path');

// Read the TypeScript file
const archiveFile = path.join(__dirname, '../lib/lawsuit-archive.tsx');
const content = fs.readFileSync(archiveFile, 'utf8');

// Extract the archiveLawsuits array using regex
const arrayMatch = content.match(/export const archiveLawsuits: ArchiveLawsuit\[\] = \[([\s\S]*?)\]/);
if (!arrayMatch) {
  console.error('Could not find archiveLawsuits array');
  process.exit(1);
}

// Parse the array content - this is a simplified parser
// We'll extract each object manually
const arrayContent = arrayMatch[1];
const lawsuits = [];

// Split by object boundaries (rough approximation)
const objectPattern = /\{\s*year:\s*"([^"]+)",\s*plaintiff:\s*"([^"]+)",\s*defendant:\s*"([^"]+)",\s*citation:\s*"([^"]+)",\s*citationText:\s*"([^"]+)"\s*\}/g;
let match;

while ((match = objectPattern.exec(arrayContent)) !== null) {
  lawsuits.push({
    year: match[1],
    plaintiff: match[2],
    defendant: match[3],
    citation: match[4],
    citationText: match[5]
  });
}

// Write to JSON
const outputPath = path.join(__dirname, '../archive-lawsuits.json');
fs.writeFileSync(outputPath, JSON.stringify(lawsuits, null, 2));
console.log(`Exported ${lawsuits.length} lawsuits to ${outputPath}`);

