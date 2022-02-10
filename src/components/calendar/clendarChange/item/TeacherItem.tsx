import React from "react";
import { useRecoilValue } from "recoil";
import { dateValue } from "../../../../modules/atom/calendar";
import { teacherListSelector } from "../../../../modules/selector/teacher";
import * as S from "../style";
import schedule from "../../../../lib/api/schedule/scheduleApi";
import teacherApi from "../../../../lib/api/teacher";
import { ToastError, ToastSuccess } from "../../../../lib/hook/toastHook";
import {
  TeacherFloorType,
  TeacherType,
} from "../../../../lib/interface/teacher";
import { useMutation, useQuery, useQueryClient } from "react-query";

const TeacherItem = () => {
  const queryClient = useQueryClient();

  const teacherList = useRecoilValue(teacherListSelector);
  const dateContent = useRecoilValue(dateValue);

  // 층별 선생님 리스트
  const { data: teacherFloor } = useQuery("teacherFloor", () =>
    teacherApi.getTeacherApi(dateContent)
  );

  const { mutate: patchTeacherHandle } = useMutation(
    ({ floor, id }: any) => schedule.patchTeacher(dateContent, floor, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("teacherFloor");
        ToastSuccess("자습감독 선생님이 교체되었습니다.");
      },
      onError: () => {
        ToastError("자습감독 선생님 교체를 실패했습니다.");
      },
    }
  );

  const teacherListHandler = (list: TeacherType[]) => {
    const num = [2, 3, 4];
    for (let i = 2; i <= 4; i++) {
      return (
        <>
          {num.map((i) => (
            <div className="teacher_wrap" key={i}>
              {list?.map((item) => (
                <span
                  key={item.teacher_id}
                  onClick={() =>
                    patchTeacherHandle({ floor: i, id: item.teacher_id })
                  }
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
      <S.FloorItemBox>
        {teacherFloor?.data?.teachers?.map((item: TeacherFloorType) => {
          return (
            <div className="teacher_wrap" key={item.floor}>
              <span>{item.floor}층</span>
              <span>{item.teacher_name}</span>
            </div>
          );
        })}
      </S.FloorItemBox>
      <S.TeacherItemBox>{teacherListHandler(teacherList)}</S.TeacherItemBox>
    </S.TeacherInfoWrapper>
  );
};

export default TeacherItem;
