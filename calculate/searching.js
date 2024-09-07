function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return NaN;
}

module.exports = {
  linearSearch,
};

// module.exports.linearSearch = linearSearch
