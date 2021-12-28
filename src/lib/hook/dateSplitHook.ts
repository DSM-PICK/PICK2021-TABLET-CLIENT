export function DateSplitHook(date: any) {
  //return date.split("/");

  return date.toISOString().split("T")[0].split('-');
}
