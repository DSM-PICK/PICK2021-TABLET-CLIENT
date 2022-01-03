import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import teacher from "../../../../../lib/api/teacher";
import { StudentType } from "../../../../../lib/interface/teacher";
import { attendanceData } from "../../../../../modules/atom/attendance";
import { EnrollmentItem, SaveButton, SubTitle } from "../style";
import * as S from "./style";

const NameItem = () => {
  const [attendance, setAttendance] = useRecoilState(attendanceData);
  const [student, setStudent] = useState<StudentType[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const { name } = attendance;

  const onStudent = (e: any) => {
    const { value, name } = e.target;

    teacher.getStudentNameApi(value).then((res) => setStudent(res.data));

    setAttendance({
      ...attendance,
      [name]: value,
    });
  };

  useEffect(() => {
    student.length < 1 ? setOpen(false) : setOpen(true);
  }, [student]);

  return (
    <EnrollmentItem>
      <SubTitle>이름</SubTitle>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => onStudent(e)}
        className="text-input"
        placeholder="이름을 입력해주세요"
      />
      <SaveButton>등록</SaveButton>
      <S.StudentList open={open}>
        {student?.map((item) => (
          <span
            onClick={() => {
              setAttendance({
                ...attendance,
                student_id: item.id,
                name: item.name,
              });
              setOpen(false);
            }}
          >
            {item.name}
          </span>
        ))}
      </S.StudentList>
    </EnrollmentItem>
  );
};

export default NameItem;
