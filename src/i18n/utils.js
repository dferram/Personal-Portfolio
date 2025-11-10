export function getLocalizedValue(value, language) {
  if (value == null) return value;

  if (typeof value === 'object' && !Array.isArray(value)) {
    const hasLocalizedKeys = value.es !== undefined || value.en !== undefined;
    if (hasLocalizedKeys) {
      return value[language] ?? value.es ?? value.en;
    }
  }

  return value;
}

export function getLocalizedList(listObject, language) {
  if (!listObject) return [];
  if (Array.isArray(listObject)) return listObject;
  if (typeof listObject === 'object') {
    const localized = listObject[language] ?? listObject.es ?? listObject.en;
    return Array.isArray(localized) ? localized : [];
  }
  return [];
}
