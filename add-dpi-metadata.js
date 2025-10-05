// Add 300 DPI metadata to PNG
const sharp = require('sharp');

sharp('BASIC_AF_Logo_300DPI.png')
  .withMetadata({
    density: 300  // 300 DPI
  })
  .toFile('BASIC_AF_Logo_300DPI_final.png')
  .then(() => {
    console.log('✅ Created BASIC_AF_Logo_300DPI_final.png with 300 DPI metadata');
  })
  .catch(err => {
    console.error('Error:', err);
  });
