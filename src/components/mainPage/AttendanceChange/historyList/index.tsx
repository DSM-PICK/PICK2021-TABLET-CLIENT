import { Close } from "../../../../utils/assets";
import { useRecoilState } from "recoil";
import {
  attendanceData,
  attendanceDataList,
} from "../../../../modules/atom/attendance";
import { AttendancePostType } from "../../../../lib/interface/Attendance";
import attendance from "../../../../lib/api/attendance";
import { ToastError, ToastSuccess } from "../../../../lib/hook/toastHook";
import { useMutation, useQueryClient } from "react-query";
import styled from "@emotion/styled";
import { MainColor } from "../../../../utils/color/color";

const EnrollmentHistory = () => {
  const queryClient = useQueryClient();

  const [attendanceValue, setAttendanceValue] = useRecoilState(attendanceData);
  const [attendanceList, setAttendanceList] =
    useRecoilState(attendanceDataList);

  const attendanceFilter = (id: number) => {
    setAttendanceList(attendanceList.filter((item) => item.student_id !== id));
  };

  const { mutate: PostAttendanceHandle } = useMutation(
    () => attendance.postAttendance(attendanceValue),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("attendance_list_value");
        ToastSuccess("출결이 등록되었습니다.");
        setAttendanceValue({
          student_id: 0,
          name: "",
          state: "",
          term: "",
          reason: "",
        });
        setAttendanceList([]);
      },
      onError: () => {
        ToastError("출결 등록에 실패했습니다.");
      },
    }
  );

  return (
    <EnrollmentHistoryWrap
      onSubmit={(e) => {
        e.preventDefault();
        PostAttendanceHandle();
      }}
    >
      <div className="history-list-wrapper">
        {attendanceList.length > 0 ? (
          <>
            {attendanceList.map((item: AttendancePostType, index) => (
              <div key={index} className="history-wrapper">
                <div className="std-info">
                  <span>{item.state}</span>
                  <span>{item.name}</span>
                </div>
                <span>{item.reason}</span>
                <img
                  src={Close}
                  alt="삭제버튼"
                  onClick={() => attendanceFilter(item.student_id)}
                />
              </div>
            ))}
          </>
        ) : (
          <>학생을 추가해주세요.</>
        )}
      </div>
      <button>출결 변경 등록</button>
    </EnrollmentHistoryWrap>
  );
};

const EnrollmentHistoryWrap = styled.form`
  width: 35%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .history-list-wrapper {
    overflow: auto;
    margin-bottom: 7px;
  }

  .history-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    padding: 3px 0;

    .std-info {
      width: 50%;

      span:nth-of-type(1) {
        margin-right: 10px;
      }
    }

    img {
      width: 15px;
    }
  }

  & button {
    padding: 6px 0;
    outline: none;
    border: none;
    border-radius: 3px;
    width: 100%;
    background: ${MainColor};
    font-size: 18px;
    color: white;
  }
`;

export default EnrollmentHistory;
