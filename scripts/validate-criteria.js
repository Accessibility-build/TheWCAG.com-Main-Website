// Validation script for WCAG criteria data
// Run with: node scripts/validate-criteria.js

const fs = require('fs');
const path = require('path');

// Get all criteria files
const wcagDir = path.join(__dirname, '../lib/wcag');
const criteriaFiles = [
  path.join(wcagDir, 'perceivable/1.1-text-alternatives.ts'),
  path.join(wcagDir, 'perceivable/1.2-time-based-media.ts'),
  path.join(wcagDir, 'perceivable/1.3-adaptable.ts'),
  path.join(wcagDir, 'perceivable/1.4-distinguishable.ts'),
  path.join(wcagDir, 'operable/2.1-keyboard-accessible.ts'),
  path.join(wcagDir, 'operable/2.2-enough-time.ts'),
  path.join(wcagDir, 'operable/2.3-seizures.ts'),
  path.join(wcagDir, 'operable/2.4-navigable.ts'),
  path.join(wcagDir, 'operable/2.5-input-modalities.ts'),
  path.join(wcagDir, 'understandable/3.1-readable.ts'),
  path.join(wcagDir, 'understandable/3.2-predictable.ts'),
  path.join(wcagDir, 'understandable/3.3-input-assistance.ts'),
  path.join(wcagDir, 'robust/index.ts'),
];

// Extract all criterion IDs and numbers
const allCriteria = new Map();
const allNumbers = new Set();

criteriaFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  const content = fs.readFileSync(file, 'utf8');
  
  // Extract id and number pairs
  const idMatches = content.matchAll(/id:\s*"([^"]+)"/g);
  const numberMatches = content.matchAll(/number:\s*"([^"]+)"/g);
  
  const ids = Array.from(idMatches, m => m[1]);
  const numbers = Array.from(numberMatches, m => m[1]);
  
  ids.forEach((id, index) => {
    if (numbers[index]) {
      allCriteria.set(id, numbers[index]);
      allNumbers.add(numbers[index]);
    }
  });
});

console.log(`Found ${allCriteria.size} criteria`);
console.log(`Found ${allNumbers.size} unique criterion numbers\n`);

// Validate relatedCriteria
let totalRelated = 0;
let validRelated = 0;
let invalidRelated = [];

criteriaFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  const content = fs.readFileSync(file, 'utf8');
  
  // Find relatedCriteria sections
  const relatedMatches = content.matchAll(/relatedCriteria:\s*\[([^\]]+)\]/gs);
  
  for (const match of relatedMatches) {
    const relatedBlock = match[1];
    const numberMatches = relatedBlock.matchAll(/number:\s*"([^"]+)"/g);
    
    for (const numMatch of numberMatches) {
      totalRelated++;
      const relatedNumber = numMatch[1];
      
      if (allNumbers.has(relatedNumber)) {
        validRelated++;
      } else {
        invalidRelated.push(relatedNumber);
      }
    }
  }
});

console.log('Related Criteria Validation:');
console.log(`Total related criteria links: ${totalRelated}`);
console.log(`Valid links: ${validRelated}`);
console.log(`Invalid links: ${invalidRelated.length}`);
if (invalidRelated.length > 0) {
  console.log(`Invalid criterion numbers: ${invalidRelated.slice(0, 10).join(', ')}`);
}

// Check officialResources URLs
let totalResources = 0;
let w3cResources = 0;
let invalidUrls = [];

criteriaFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  const content = fs.readFileSync(file, 'utf8');
  
  // Find officialResources sections
  const resourceMatches = content.matchAll(/officialResources:\s*\[([^\]]+)\]/gs);
  
  for (const match of resourceMatches) {
    const resourceBlock = match[1];
    const urlMatches = resourceBlock.matchAll(/url:\s*"([^"]+)"/g);
    
    for (const urlMatch of urlMatches) {
      totalResources++;
      const url = urlMatch[1];
      
      if (url.includes('w3.org') || url.includes('wai')) {
        w3cResources++;
      } else if (!url.startsWith('http')) {
        invalidUrls.push(url);
      }
    }
  }
});

console.log('\nOfficial Resources Validation:');
console.log(`Total resource URLs: ${totalResources}`);
console.log(`W3C/WAI URLs: ${w3cResources}`);
console.log(`Invalid URLs: ${invalidUrls.length}`);
if (invalidUrls.length > 0) {
  console.log(`Invalid URLs: ${invalidUrls.slice(0, 5).join(', ')}`);
}

console.log('\n✅ Validation complete!');

