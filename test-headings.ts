const fs = require('fs');
const path = require('path');

// Read the installation.md file
const filePath = path.join(__dirname, 'docs', 'guide', 'installation.md');
const content = fs.readFileSync(filePath, 'utf-8');

// Extract headings from markdown content (same logic as FloatingToc)
const lines = content.split('\n');
const tocItems = [];

lines.forEach((line) => {
  // Clean the line to remove any invisible characters
  const cleanLine = line.trim();
  
  // Check if line starts with # and has content after
  if (cleanLine.startsWith('#') && cleanLine.length > 1) {
    // Try a more permissive regex
    const permissiveRegex = /^(#{1,6})\s*(.+)$/;
    const match = cleanLine.match(permissiveRegex);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      // Create an ID similar to what markdown would generate
      const id = text
        .toLowerCase()
        .replace(/[\u{0080}-\u{FFFF}]/gu, '')
        .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '') || text.toLowerCase().replace(/\s+/g, '-');
      
      tocItems.push({
        id,
        text,
        level
      });
    }
  }
});

console.log('Extracted headings:');
tocItems.forEach(item => {
  console.log(`Level ${item.level}: ${item.text} (ID: ${item.id})`);
});