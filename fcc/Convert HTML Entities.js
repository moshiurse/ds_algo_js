function convertHTML(str) {
  // &colon;&rpar;
var entities = {
  '&': '&amp;',
  '<':'&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
}
  return str.replace(/[&<>"']/g, function(match) {
    return entities[match]
  });
}

convertHTML("Dolce & Gabbana");
