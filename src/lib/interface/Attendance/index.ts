export interface AttendanceType {
  student_id: string;
  name: string;
  director_id?: string | null;
  period: string;
  state: string;
  memo: string;
  reason: string;
}
