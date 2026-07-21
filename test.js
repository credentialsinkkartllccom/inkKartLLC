const productSpec = `<p>[{"name":"Supply Type","value":"Toner"},{"name":"Page Yield Per Cartridge (Up to)","value":"1,200"}]</p>`;

let parsed = null;
let isParsed = false;
try {
  let cleanText = productSpec.replace(/&quot;/g, '"');
  const match = cleanText.match(/(\[.*\]|\{.*\})/s);
  if (match) {
     cleanText = match[0];
  }
  cleanText = cleanText.replace(/(<([^>]+)>)/gi, "").trim();
  
  try {
    parsed = JSON.parse(cleanText);
    isParsed = true;
  } catch (e1) {
    console.error('e1:', e1.message);
  }
} catch (e) {}

console.log('isParsed:', isParsed, 'parsed:', parsed);

const productSpec2 = `<p>[{&quot;name&quot;:&quot;Supply Type&quot;,&quot;value&quot;:&quot;Toner&quot;}]</p>`;
let parsed2 = null;
let isParsed2 = false;
try {
  let cleanText = productSpec2.replace(/&quot;/g, '"');
  const match = cleanText.match(/(\[.*\]|\{.*\})/s);
  if (match) {
     cleanText = match[0];
  }
  cleanText = cleanText.replace(/(<([^>]+)>)/gi, "").trim();
  
  try {
    parsed2 = JSON.parse(cleanText);
    isParsed2 = true;
  } catch (e1) {
    console.error('e1 (2):', e1.message);
  }
} catch (e) {}

console.log('isParsed2:', isParsed2, 'parsed2:', parsed2);
