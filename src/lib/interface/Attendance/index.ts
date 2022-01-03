export interface AttendanceType {
  id: string;
  name: string;
  period: number;
  state: string;
  memo: string;
  term: string;
  reason: string;
}

export interface AttendancePostType {
  state: string;
  term: string;
  student_id: number;
  name?: string;
  reason: string;
}
