export function filterRepetition(l) {
  let arr = {};
  l = l.reduce(function (item, next) {
    arr[next.name] ? '' : arr[next.name] = true && item.push(next);
    return item;
  }, []);
  return l;
}
