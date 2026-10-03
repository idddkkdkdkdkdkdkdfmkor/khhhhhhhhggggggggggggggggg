export type BranchId = 'aashiana' | 'dhawapur';

export interface BranchInfo {
  id: BranchId;
  name: string;
  tagline: string;
  shortAddress: string;
  fullAddress: string;
  affiliationNo: string;
  schoolCode: string;
  principalName: string;
  principalQualification: string;
  principalMessage: string;
  phones: string[];
  emails: string[];
  timings: string;
  campusArea: string;
  classroomsCount: number;
  established: number;
  features: string[];
  bannerImage: string;
  mapEmbedUrl: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Academic' | 'Examination' | 'Event' | 'Holiday' | 'Circular';
  isNew?: boolean;
  content: string;
  downloadUrl?: string;
}

export interface FeeItem {
  classLevel: string;
  branch: BranchId;
  admissionFee: number;
  monthlyTuition: number;
  examFeeAnnually: number;
  compositeAnnualFee: number;
  installments: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Academics' | 'Sports' | 'Events' | 'Labs' | 'Art';
  imageUrl: string;
  caption: string;
  branch?: BranchId | 'all';
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  branch: BranchId | 'both';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  childName?: string;
  childClass?: string;
  branch: BranchId;
  comment: string;
  rating: number;
  year: string;
}

export interface AdmissionApplication {
  studentName: string;
  gender: string;
  dob: string;
  branch: BranchId;
  appliedClass: string;
  fatherName: string;
  motherName: string;
  phone: string;
  email: string;
  address: string;
  previousSchool: string;
  transportRequired: boolean;
  notes?: string;
}
