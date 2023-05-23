export function camelizeObjFields(entity) {
  if (Array.isArray(entity)) {
    const newArr = [];
    entity.forEach((item) => {
      newArr.push(camelizeObjFields(item));
    });
    return newArr;
  } if (entity && typeof entity === 'object') {
    const result = {};
    Object.keys(entity).forEach((key) => {
      const camelizeKey = key
        .split('_')
        .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
        .join('');
      result[camelizeKey] = camelizeObjFields(entity[key]);
    });
    return result;
  }
  return entity;
}
