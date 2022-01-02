import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { dateValue } from "../../../../../modules/atom/calendar";
import {
  teacherListSelector,
  teacherSelector,
} from "../../../../../modules/selector/teacher";
import * as S from "../style";
import schedule from "../../../../../lib/api/schedule/scheduleApi";
import { ToastError, ToastSuccess } from "../../../../../lib/hook/\btoastHook";
import { TeacherType } from "../../../../../lib/interface/teacher";

const TeacherItem = () => {
  const teacherList = useRecoilValue(teacherListSelector);
  const dateContent = useRecoilValue(dateValue);
  const teacherFloor = useRecoilValue(teacherSelector(dateContent));
  const [teacher, setTeacher] = useState({ 2: "", 3: "", 4: "" });

  useEffect(() => {
    setTeacher({
      2: teacherFloor?.[0]?.teacher_name,
      3: teacherFloor?.[1]?.teacher_name,
      4: teacherFloor?.[2]?.teacher_name,
    });
  }, [teacherFloor]);

  const patchTeacher = (floor: number, id: string, name: string) => {
    try {
      setTeacher({ ...teacher, [floor]: name });
      schedule.patchTeacher(dateContent, floor, id);
      ToastSuccess("자습감독 선생님이 교체되었습니다.");
    } catch (e) {
      console.log(e);
      ToastError("자습감독 선생님 교체를 실패했습니다.");
    }
  };

  const num = [2, 3, 4];

  const teacherHandler = (teacher: any) => {
    for (let i = 2; i <= 4; i++) {
      return (
        <>
          {num.map((i) => (
            <div className="teacher_wrap" key={i}>
              <span>{i}층</span>
              <span>{teacher[i]}</span>
            </div>
          ))}
        </>
      );
    }
  };

  const teacherListHandler = (list: TeacherType[], patchTeacher: any) => {
    for (let i = 2; i <= 4; i++) {
      return (
        <>
          {num.map((i) => (
            <div className="teacher_wrap" key={i}>
              {list?.map((item) => (
                <span
                  key={item.teacher_id}
                  onClick={() => patchTeacher(i, item.teacher_id, item.name)}
                >
                  {item.name}
                </span>
              ))}
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <S.TeacherInfoWrapper>
      <S.FloorItemBox>{teacherHandler(teacher)}</S.FloorItemBox>
      <S.TeacherItemBox>
        {teacherListHandler(teacherList, patchTeacher)}
      </S.TeacherItemBox>
    </S.TeacherInfoWrapper>
  );
};

export default TeacherItem;
