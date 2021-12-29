import teacher from "../../../lib/api/teacher";
import { STUDENT_GET } from "../types";

export async function studentGet(name: string) {
  try {
    const res = await teacher.getStudentNameApi(name);
    return res.data;
  } catch (e) {
    console.log(e);
  }
  return { type: STUDENT_GET, name };
}
