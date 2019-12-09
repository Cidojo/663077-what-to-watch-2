const evalRatingLevel = (rating) => {
  if (rating === undefined) {
    return rating;
  }

  const breakPointToLevel = new Map([
    [3, `bad`],
    [5, `normal`],
    [8, `good`],
    [10, `very good`],
    [-1, `awesome`]
  ]);

  const breakpointValue = [...breakPointToLevel.keys()].find((breakpoint) => {
    return breakpoint > rating;
  }) || -1;

  return breakPointToLevel.get(breakpointValue);
};

const formatRunTime = (minutes) => {
  const clearMinutes = minutes % 60;
  const clearHours = Math.floor(minutes / 60);

  return `${clearHours}h ${clearMinutes < 10 ? `0${clearMinutes}` : clearMinutes}m`;
};

const formatDate = (date) => {
  if (Object.prototype.toString.call(date) !== `[object Date]`) {
    return {};
  }

  const monthNames = [
    `January`, `February`, `March`,
    `April`, `May`, `June`, `July`,
    `August`, `September`, `October`,
    `November`, `December`
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return {
    verbose: `${monthNames[monthIndex]} ${day}, ${year}`,
    dateTime: `${year}-${monthIndex < 9 ? `0${monthIndex + 1}` : monthIndex + 1}-${day < 10 ? `0${day}` : day}`
  };
};

const formatCurrentTime = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().match(/[0-9:]{8}/)[0];
};

const evalProgress = (seconds, duration) => {
  return duration ? Math.floor((seconds / duration) * 10000) / 100 : 0;
};

export {
  evalRatingLevel,
  formatDate,
  formatRunTime,
  formatCurrentTime,
  evalProgress
};
