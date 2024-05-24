/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  console.log(this);
  const len = this.length;
  const results = [];

  for (let k = 0; k < len; k++) {
    const kValue = this[k];
    if (Object.hasOwn(this, k) && callbackFn.call(thisArg, kValue, k, this)) {
      results.push(kValue);
    }
  }

  return results;
};
