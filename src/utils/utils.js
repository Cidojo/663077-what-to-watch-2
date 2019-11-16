const evalRatingLevel = (rating) => {
  const BreakPointToLevel = {
    0: `bad`,
    3: `normal`,
    5: `good`,
    8: `very good`,
    10: `awesome`
  };
  const breakPoints = Object.keys(BreakPointToLevel);
  let score = 0;
  let counter = 0;

  while (breakPoints[counter] < rating && counter < breakPoints.length) {
    score = breakPoints[counter];
    counter++;
  }
  return BreakPointToLevel[score];
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

export {
  evalRatingLevel,
  formatDate,
  formatRunTime
};
