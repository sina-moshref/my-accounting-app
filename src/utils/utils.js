export const toPersianNumber = (num) => {
  if (num === null || num === undefined) return "";
  return String(num).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};
