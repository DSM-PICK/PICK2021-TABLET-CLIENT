export interface AttendanceType {
  state: string;
  term: string;
  reason: string;
  student: studentType | null;
  director: directorType | null;
}

export interface AttendancePostType {
  state: string;
  term: string;
  student_id: number;
  name?: string;
  reason: string;
}

interface studentType {
  id: string;
  name: string;
  gcn: string;
  state: string;
}

interface directorType {
  id: string;
  floor: number;
}
