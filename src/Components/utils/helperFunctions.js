/**
 *
 * @param {*} totalSecond
 * @returns
 */

export const formatTimer = totalSecond => {
  const second = totalSecond % 60;
  const minute = (totalSecond - second) / 60;

  return appendZero(minute) + ':' + appendZero(second);
};

const appendZero = val => {
  if (val >= 0 && val <= 9) {
    return '0' + val;
  }
  return val;
};
