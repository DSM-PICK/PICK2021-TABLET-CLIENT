export interface TeacherType {
  name: string;
  teacher_id: string;
}

export interface TeacherFloorType {
  teacher_id: string;
  teacher_name: string;
  floor: number;
}

export interface TeacherInfoType extends TeacherType {
  location_id: number;
  location_name: string;
  name: string;
}

export interface StudentType {
  id: number;
  gcn: number;
  name: string;
}
