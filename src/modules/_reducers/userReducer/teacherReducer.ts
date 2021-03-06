import { StudentType } from "../../../lib/interface/teacher";
import { STUDENT_GET } from "../../_actions/types";
import { studentGet } from "../../_actions/userAction/teacherAction";

const initialState: { studentList: StudentType[] } = {
  studentList: [],
};

function StudentReducer(state = initialState, action: any) {
  switch (action.type) {
    case STUDENT_GET:
      const { name } = action as StudentType & { type: string };
      return studentGet(name);
    default:
      return state;
  }
}

export default StudentReducer;
