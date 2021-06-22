// Source from https://www.measurethat.net/Benchmarks/Show/5306/0/lodash-clonedeep-vs-jsonparsestringify-vs-recursivecopy#latest_results_block

function cloneDeep(o) {
    var newO,
      i;
  
    if (typeof o !== 'object') {
      return o;
    }
    if (!o) {
      return o;
    }
  
    if ('[object Array]' === Object.prototype.toString.apply(o)) {
      newO = [];
      for (i = 0; i < o.length; i += 1) {
        newO[i] = cloneDeep(o[i]);
      }
      return newO;
    }
  
    newO = {};
    for (i in o) {
      if (o.hasOwnProperty(i)) {
        newO[i] = cloneDeep(o[i]);
      }
    }
    return newO;
  }

export default cloneDeep