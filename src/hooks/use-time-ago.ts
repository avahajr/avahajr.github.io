const units = [
  { label: "day", seconds: 86400 },
  { label: "hour", seconds: 3600 },
  { label: "minute", seconds: 60 },
  { label: "second", seconds: 1 },
];

const useTimeAgo = (date: Date | null) => {
  if (!date) return "";
  const time = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);
  const { interval, unit } = calculateTimeDifference(time);
  const suffix = interval === 1 ? "" : "s";

  if (unit === null || (unit === "second" && interval < 30)) {
    return "just now";
  }

  return `${interval} ${unit}${suffix} ago`;
};
const calculateTimeDifference = (time: number) => {
  for (let { label, seconds } of units) {
    const interval = Math.floor(time / seconds);

    if (interval >= 1) {
      return {
        interval: interval,
        unit: label,
      };
    }
  }

  return {
    interval: 0,
    unit: null,
  };
};

export default useTimeAgo;
