import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import teacher from "../../../../lib/api/teacher";
import { StudentType } from "../../../../lib/interface/teacher";
import { attendanceData } from "../../../../modules/atom/attendance";
import { MainColor } from "../../../../utils/color/color";
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

const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding: 9px 0;
`;

const EnrollmentItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .field-item {
    display: flex;
  }

  .react-datepicker-wrapper {
    width: auto;
  }

  .example-custom-input {
    background: white;
    border: none;
  }

  .text-input {
    border-bottom: 1px solid black;
    outline: none;
    border: none;
    text-align: center;
    font-size: 18px;
  }
`;

const SaveButton = styled.button`
  outline: none;
  border: none;
  background-color: ${MainColor};
  padding: 0 15px;
  font-size: 17px;
  color: white;
  border-radius: 3px;
  margin: 2px 0;
`;

export default NameItem;
