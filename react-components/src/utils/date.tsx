export const pad = (time: number) => {
  return `0${time}`.slice(-2);
}

export const getSimpleDateFormat = (d: Date, separator: string = '-') => {
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join(separator);
}

export const isSameDay = (a: Date, b: Date): boolean => {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}