export function DateChangeHook(date: string) {
  const data = date.split("-");
  return data[0] + "년 " + data[1] + "월 " + data[2] + "일";
}
