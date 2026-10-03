import { BranchInfo, Notice, FeeItem, GalleryItem, FacultyMember, Testimonial } from '../types';

export const SCHOOL_INFO = {
  name: 'K.G. Senior Secondary School',
  shortName: 'K.G.S.S.S.',
  alternateName: 'Kitty Garden Senior Secondary School',
  tagline: 'Empowering Minds, Building Character, Inspiring Excellence',
  motto: 'Excellence in Education and Character Building',
  established: 1990,
  founder: 'K.G. Educational Society',
  groupName: 'K.G. Educational Society',
  societyName: 'K.G. Educational Society',
  director: 'School Management Committee',
  principal: 'Principal Office, K.G. Senior Secondary School',
  contactPerson: 'Mr. Jitender (Admin / Liaison)',
  schoolType: 'Private Unaided Recognized Co-educational Day School',
  gender: 'Co-Educational',
  dayBoarding: 'Day School',
  medium: 'English (with Hindi as core language)',
  udiseCode: '06180100104',
  affiliationBoard: 'State Board (HBSE) Recognized / CBSE Aligned Curriculum & NIOS Study Centre',
  schoolCode: '06180100104',
  levels: 'Nursery / KG to Senior Secondary (Class XII)',
  streams: ['Science (PCM / PCB)', 'Commerce with IP/Maths', 'Humanities / Arts'],
  studentStrength: '320+ Students (UDISE+ Verified)',
  studentTeacherRatio: '20:1 (Individual Mentorship)',
  address: 'Palam Gurgaon Road, Dundahera, Near Hanuman Mandir, Sector 21, Gurugram, Haryana - 122016',
  fullAddress: 'Palam Gurgaon Road, Dundahera, Near Hanuman Mandir, Sector 21 / Udyog Vihar, Gurugram, Haryana 122016, India',
  locality: 'Dundahera / Sector 21',
  city: 'Gurugram (Gurgaon)',
  district: 'Gurugram',
  state: 'Haryana',
  pincode: '122016',
  landmark: 'Near Hanuman Mandir, Dundahera (Close to Kapashera Border & Sector 21)',
  phoneMain: '(0124) 2365126',
  phoneAlt: '+91-9811523651',
  email: 'kgseniorsecondaryschool@gmail.com',
  website: 'https://kgseniorsecondaryschool.edu.in',
  schoolTimings: 'Summer: 7:45 AM - 1:45 PM | Winter: 8:15 AM - 2:15 PM',
  workingDays: 'Monday to Saturday (Second Saturday off)',
  logoMain: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=400&q=80',
  logoFooter: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=400&q=80',
  appGooglePlay: 'https://vishwanathacademy.com/wp-content/uploads/2023/07/ggle.png',
  appAppleStore: 'https://vishwanathacademy.com/wp-content/uploads/2023/07/apple_2.png',
  whyImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
  admissionImage: 'https://vishwanathacademy.com/wp-content/uploads/2023/11/1.png',
  scholarshipIcon: 'https://vishwanathacademy.com/wp-content/uploads/2023/08/Scholarship-News.png',
  curriculumIcon: 'https://vishwanathacademy.com/wp-content/uploads/2023/08/Curriculum.png',
  noticeBoardIcon: 'https://vishwanathacademy.com/wp-content/uploads/2023/08/Notice-Board.png',
  syllabusIcon: 'https://vishwanathacademy.com/wp-content/uploads/2023/08/Latest-News.png',
  sliderImages: [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
  ]
};

export const BRANCHES_DATA: Record<'aashiana' | 'dhawapur', BranchInfo> = {
  aashiana: {
    id: 'aashiana',
    name: 'K.G. Senior Secondary School',
    tagline: 'Recognized Senior Secondary Campus, Sector 21 / Dundahera, Gurugram',
    shortAddress: 'Palam Gurgaon Road, Dundahera, Gurugram - 122016',
    fullAddress: 'Palam Gurgaon Road, Opposite Dundahera, Near Hanuman Mandir, Sector 21, Gurugram, Haryana 122016',
    affiliationNo: 'UDISE: 06180100104',
    schoolCode: '06180100104',
    principalName: 'Principal Office',
    principalQualification: 'M.A., M.Ed. (Academic Head)',
    principalMessage: 'At K.G. Senior Secondary School, our core aim is to cultivate disciplined, inquisitive, and ethically grounded citizens equipped for higher academic challenges.',
    phones: ['(0124) 2365126', '+91-9811523651'],
    emails: ['kgseniorsecondaryschool@gmail.com'],
    timings: 'Summer: 7:45 AM - 1:45 PM | Winter: 8:15 AM - 2:15 PM',
    campusArea: 'Urban Senior Secondary Campus, Sector 21 Dundahera',
    classroomsCount: 24,
    established: 1990,
    features: [
      'Recognized Senior Secondary School (Classes 1 to 12)',
      'Science (PCM/PCB), Commerce & Humanities Streams',
      'Smart Interactive Digital Classrooms',
      'Physics, Chemistry & Biology Composite Science Labs',
      'Computer & IT Education Workstation Center',
      'School Resource Library & Reading Room',
      'Safe R.O. Purified Drinking Water & Power Backup',
      'CCTV Monitored Campus & Transport Facilities'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8752256747514!2d77.0652!3d28.5134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1964259be393%3A0x673967d4f9bf7df7!2sDundahera%2C%20Sector%2021%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  },
  dhawapur: {
    id: 'dhawapur',
    name: 'Junior & Primary Wing',
    tagline: 'Foundational & Primary Learning Wing, Dundahera Border',
    shortAddress: 'Near Kapashera Border, Dundahera, Gurugram - 122016',
    fullAddress: 'Palam Gurgaon Road, Near Kapashera Border, Dundahera, Gurugram, Haryana 122016',
    affiliationNo: 'UDISE: 06180100104',
    schoolCode: '06180100104',
    principalName: 'Headmistress Office',
    principalQualification: 'B.El.Ed., M.A. (Child Development)',
    principalMessage: 'Early childhood education at K.G. School is crafted around joyful phonics, sensory engagement, and structured foundational literacy and numeracy.',
    phones: ['(0124) 2365126'],
    emails: ['kgseniorsecondaryschool@gmail.com'],
    timings: 'Summer: 8:00 AM - 1:00 PM | Winter: 8:30 AM - 1:30 PM',
    campusArea: 'Dedicated Primary & Activity Block',
    classroomsCount: 14,
    established: 1990,
    features: [
      'Early Childhood Care & Education (ECCE)',
      'Playgroup, Nursery, LKG & UKG Wings',
      'Child-Safe Indoor Play & Activity Zone',
      'Storytelling & Phonetics Listening Sessions',
      'Foundational Mathematics & Science Explorations',
      'Art, Craft & Color Discovery Studios',
      'Clean Child-Friendly Sanitation & First Aid Care',
      'CCTV Monitored Premises & Caring Support Staff'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8752256747514!2d77.0652!3d28.5134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1964259be393%3A0x673967d4f9bf7df7!2sDundahera%2C%20Sector%2021%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  }
};

export const NOTICES_DATA: Notice[] = [
  {
    id: 'n1',
    title: 'Admissions Open for Session 2026-27 (Nursery to Class IX & XI)',
    date: '15 Mar, 2026',
    category: 'Circular',
    isNew: true,
    content: 'Registration forms for admission to Pre-Primary, Primary, Middle, Secondary and Senior Secondary (Science, Commerce, Arts) are available at the school office.'
  },
  {
    id: 'n2',
    title: 'Senior Secondary Annual Examination & Practical Evaluation',
    date: '28 Feb, 2026',
    category: 'Examination',
    isNew: true,
    content: 'Practical examination and internal assessments for Class XI & XII students are scheduled in the respective science and computer labs.'
  },
  {
    id: 'n3',
    title: 'Parent Teacher Meeting (PTM) for Result Discussion',
    date: '10 Feb, 2026',
    category: 'Circular',
    isNew: false,
    content: 'All parents are cordially invited to interact with class teachers and review student performance between 9:00 AM and 1:00 PM.'
  },
  {
    id: 'n4',
    title: 'Republic Day Cultural Celebrations & Flag Hoisting',
    date: '26 Jan, 2026',
    category: 'Holiday',
    isNew: false,
    content: 'Grand patriotic cultural program, parade, and flag hoisting organized at the school grounds. Students performed folk dances and patriotic songs.'
  },
  {
    id: 'n5',
    title: 'Winter Vacation Announcement (As per Haryana Directorate Guidelines)',
    date: '01 Jan, 2026',
    category: 'Holiday',
    isNew: false,
    content: 'School will observe winter break following instructions from Haryana Education Department. Classes resume with winter timings.'
  }
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Managing Committee & Patron',
    role: 'School Management',
    group: 'K.G. Educational Society',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    message: 'To provide quality, value-based education accessible to families in Dundahera, Sector 21, and the surrounding Gurugram industrial corridors.'
  },
  {
    name: 'Principal',
    role: 'Head of Institution',
    group: 'K.G. Senior Secondary School',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    message: 'We focus on each individual student, instilling discipline, intellectual honesty, and strong foundational knowledge in languages, mathematics, and sciences.'
  },
  {
    name: 'Mr. Jitender',
    role: 'Administrative Coordinator & Liaison',
    group: 'Administration & Admissions',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    message: 'Our administrative desk ensures seamless parent communication, timely document processing, and a secure learning environment for every child.'
  },
  {
    name: 'Academic Coordinator',
    role: 'Senior Secondary Wing Head',
    group: 'Science, Commerce & Humanities',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
    message: 'Through structured classroom pedagogy, laboratory work, and regular tests, we prepare students for board examinations and higher education careers.'
  }
];

export const FEE_STRUCTURE_DATA: FeeItem[] = [
  {
    classLevel: 'Nursery & KG',
    branch: 'aashiana',
    admissionFee: 3500,
    monthlyTuition: 1200,
    examFeeAnnually: 1000,
    compositeAnnualFee: 18900,
    installments: 'Quarterly / Monthly'
  },
  {
    classLevel: 'Class I to V (Primary)',
    branch: 'aashiana',
    admissionFee: 4000,
    monthlyTuition: 1400,
    examFeeAnnually: 1200,
    compositeAnnualFee: 22000,
    installments: 'Quarterly / Monthly'
  },
  {
    classLevel: 'Class VI to VIII (Middle)',
    branch: 'aashiana',
    admissionFee: 4500,
    monthlyTuition: 1600,
    examFeeAnnually: 1400,
    compositeAnnualFee: 25100,
    installments: 'Quarterly / Monthly'
  },
  {
    classLevel: 'Class IX & X (Secondary)',
    branch: 'aashiana',
    admissionFee: 5000,
    monthlyTuition: 1800,
    examFeeAnnually: 1600,
    compositeAnnualFee: 28200,
    installments: 'Quarterly / Monthly'
  },
  {
    classLevel: 'Class XI & XII (Science)',
    branch: 'aashiana',
    admissionFee: 6000,
    monthlyTuition: 2200,
    examFeeAnnually: 2000,
    compositeAnnualFee: 34400,
    installments: 'Quarterly / Monthly'
  },
  {
    classLevel: 'Class XI & XII (Commerce / Arts)',
    branch: 'aashiana',
    admissionFee: 5500,
    monthlyTuition: 2000,
    examFeeAnnually: 1800,
    compositeAnnualFee: 31300,
    installments: 'Quarterly / Monthly'
  },
  // Dhawapur (Junior Wing representation)
  {
    classLevel: 'Playgroup & Nursery',
    branch: 'dhawapur',
    admissionFee: 3000,
    monthlyTuition: 1100,
    examFeeAnnually: 900,
    compositeAnnualFee: 17100,
    installments: 'Quarterly / Monthly'
  },
  {
    classLevel: 'LKG & UKG',
    branch: 'dhawapur',
    admissionFee: 3200,
    monthlyTuition: 1200,
    examFeeAnnually: 1000,
    compositeAnnualFee: 18600,
    installments: 'Quarterly / Monthly'
  },
  {
    classLevel: 'Class I to V',
    branch: 'dhawapur',
    admissionFee: 3800,
    monthlyTuition: 1350,
    examFeeAnnually: 1100,
    compositeAnnualFee: 21100,
    installments: 'Quarterly / Monthly'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Classroom Interactive Learning',
    category: 'Academics',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Engaging classroom sessions emphasizing fundamental conceptual clarity.',
    branch: 'aashiana'
  },
  {
    id: 'g2',
    title: 'Composite Science Laboratory',
    category: 'Labs',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Hands-on practical experiments in physics, chemistry, and biology.',
    branch: 'aashiana'
  },
  {
    id: 'g3',
    title: 'Computer & IT Training Lab',
    category: 'Labs',
    imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Digital literacy, basic programming, and IT applications.',
    branch: 'aashiana'
  },
  {
    id: 'g4',
    title: 'Annual Sports & Athletic Meet',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80',
    caption: 'Races, volleyball, and physical fitness competitions.',
    branch: 'aashiana'
  },
  {
    id: 'g5',
    title: 'Cultural Celebrations & National Festivals',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    caption: 'Celebrating Republic Day, Independence Day, and Teachers Day.',
    branch: 'aashiana'
  },
  {
    id: 'g6',
    title: 'Early Years Play & Discovery Room',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    caption: 'Child-friendly activity room nurturing cognitive and motor skills.',
    branch: 'aashiana'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Suresh Kumar Sharma',
    role: 'Parent (Sector 21 Resident)',
    childName: 'Rahul Sharma',
    childClass: 'Class XII (Science Stream)',
    branch: 'aashiana',
    comment: 'K.G. Senior Secondary School provides dedicated teaching at reasonable fees. The teachers are approachable and helped my son excel in his board examinations.',
    rating: 5,
    year: '2025'
  },
  {
    id: 't2',
    name: 'Geeta Devi',
    role: 'Parent (Dundahera)',
    childName: 'Priya Yadav',
    childClass: 'Class X',
    branch: 'aashiana',
    comment: 'The location on Palam Gurgaon Road is very accessible. The school maintains good discipline and individual student attention.',
    rating: 5,
    year: '2025'
  }
];

export const MANDATORY_PUBLIC_DISCLOSURE = {
  generalInfo: [
    { label: 'NAME OF THE SCHOOL', value: 'K.G. SENIOR SECONDARY SCHOOL' },
    { label: 'AFFILIATION / UDISE CODE', value: '06180100104' },
    { label: 'SCHOOL CODE', value: '06180100104' },
    { label: 'COMPLETE ADDRESS WITH PIN CODE', value: 'Palam Gurgaon Road, Dundahera, Near Hanuman Mandir, Sector 21, Gurugram, Haryana - 122016' },
    { label: 'PRINCIPAL NAME & QUALIFICATION', value: 'Principal Office (Academic Head), M.A., B.Ed.' },
    { label: 'SCHOOL EMAIL ID', value: 'kgseniorsecondaryschool@gmail.com' },
    { label: 'CONTACT DETAILS (LANDLINE/MOBILE)', value: '(0124) 2365126, +91-9811523651' }
  ],
  documents: [
    { name: 'STATE EDUCATION DEPARTMENT RECOGNITION (HARYANA GOVT.)', status: 'Recognized Senior Secondary Institution', docId: 'DOC-HRY-REC' },
    { name: 'UDISE+ VERIFICATION CERTIFICATE (CODE: 06180100104)', status: 'Active Verified Urban School Profile', docId: 'DOC-UDISE-06180100104' },
    { name: 'BUILDING SAFETY & NATIONAL BUILDING CODE CERTIFICATE', status: 'Approved Building Safety Status', docId: 'DOC-BLD-SAFE' },
    { name: 'FIRE SAFETY COMPLIANCE CERTIFICATE', status: 'Certified by Municipal Fire Authorities', docId: 'DOC-FIRE-HRY' },
    { name: 'POTABLE WATER & SANITARY HYGIENE CERTIFICATE', status: 'Tested R.O. Water & Clean Sanitation', docId: 'DOC-SAN-HRY' }
  ],
  infrastructure: [
    { label: 'TOTAL CAMPUS AREA', value: 'Urban Educational Premises, Dundahera / Sector 21' },
    { label: 'TOTAL NUMBER OF CLASSROOMS', value: '24+ Classrooms' },
    { label: 'LABORATORIES AVAILABLE', value: 'Composite Science Lab, Computer Lab, Library' },
    { label: 'INTERNET FACILITY', value: 'YES (High-Speed Broadband Internet in Computer Lab)' },
    { label: 'DRINKING WATER FACILITY', value: 'YES (R.O. Purified Water System)' },
    { label: 'POWER BACKUP', value: 'YES (Inverter & Generator Backup System)' }
  ],
  boardResults: [
    { year: '2024-25', classX_registered: 38, classX_passed: 38, classX_percent: '100%', classXII_registered: 32, classXII_passed: 31, classXII_percent: '96.8%' },
    { year: '2023-24', classX_registered: 35, classX_passed: 35, classX_percent: '100%', classXII_registered: 29, classXII_passed: 28, classXII_percent: '96.5%' },
    { year: '2022-23', classX_registered: 32, classX_passed: 32, classX_percent: '100%', classXII_registered: 27, classXII_passed: 26, classXII_percent: '96.2%' }
  ]
};
