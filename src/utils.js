export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const makeTimer = (time) => {
  const convertTime = (num) => num < 10 ? `0${num}` : num;
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  return `${hours}:${convertTime(minutes)}:${convertTime(seconds)}`;
};

export const getFormatDate = (date) => {
  return new Date(date).toLocaleDateString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`});
};

export const convertToCamelCase = (str) => {
  const replacer = (s) => {
    return s[1].toUpperCase();
  };

  return str.replace(/-.|_./g, replacer);
};

export const makeDuration = (time) => {
  const hours = time < 60 ? 0 : Math.floor(time / 60);
  const minutes = time < 60 ? time : time % 60;

  return `${hours}h ${minutes}m`;
};
