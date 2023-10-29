export default function normalize (name = '') {
  let normalized = name;
  // перевести в малый регистр
  normalized = normalized.toLowerCase();
  // Заменить ё на е
  normalized = normalized.replace(/ё/g, 'е');
  if (normalized.match(/данила|даниил|данил/)) {
    normalized = 'даниил'
  }
  return normalized;
}