const DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const getDateDiffs = (timestamp) => {
  const now = Date.now();
  const elapsed = (now - timestamp) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (elapsed > secondsInUnit || unit == 'second') {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp) {
  const { value, unit } = getDateDiffs(timestamp);
  const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' });
  const data = rtf.format(-1 * value, unit);
  console.log(-1 * value, unit);
  return data;
}
