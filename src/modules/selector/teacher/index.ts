import { selectorFamily } from "recoil";
import { TeacherType } from "../../../lib/interface/teacher";
import request from "../../../lib/api/axios";

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
