const get = (objectParam, pathParam, defaultValue) => {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let index = 0;
  let length = path.length;
  let object = objectParam;

  while (object != null && index < length) {
    object = object[String(path[index])];
    index++;
    console.log("object", object);
  }

  const value = index && index === length ? object : undefined;
  console.log("value", value !== undefined ? value : defaultValue);
  return value !== undefined ? value : defaultValue;
};
