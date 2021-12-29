import { selectorFamily } from "recoil";
import { StudentType, TeacherType } from "../../../lib/interface/teacher";
import request from "../../../lib/api/axios";
import teacher from "../../../lib/api/teacher";

export const teacherInfoSelector = selectorFamily<TeacherType, string | null>({
  key: "teacherInfoSelector/get",
  get: (id) => async () => {
    if (!id) return "";

    try {
      const res = await request(`/teacher/${id}/information`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const studentNameSelector = selectorFamily<StudentType[], string>({
  key: "studentNameSelector/get",
  get: (name) => async () => {
    try {
      const res = await teacher.getStudentNameApi(name);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});
