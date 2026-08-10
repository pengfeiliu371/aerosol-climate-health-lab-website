// Edit this file to update website content without changing page layout.

export type Member = {
  name: string;
  role: string;
  image?: string;
  initials?: string;
};

export const members: Member[] = [
  {
    name: "Minhan Park",
    role: "Postdoctoral fellow · co-advised with Dr. Weber · 2024–",
    image: "/images/people/minhan-park.jpg"
  },
  {
    name: "Bin Bai",
    role: "Ph.D. student · 2021–",
    image: "/images/people/bin-bai.jpg"
  },
  {
    name: "Shreya Suri",
    role: "Ph.D. student · 2022–",
    image: "/images/people/shreya-suri.jpg"
  },
  {
    name: "Longkun He",
    role: "Ph.D. student · 2024–",
    image: "/images/people/longkun-he.jpg"
  },
  {
    name: "Siqi Wang",
    role: "Ph.D. student · 2026–",
    image: "/images/people/siqi-wang.jpg",
  },
  {
    name: "Zishu Wang",
    role: "Master’s student · 2026–",
    image: "/images/people/zishu-wang.jpg",
  }
];
export const formerMembers = [
  {
    name: "Bingqing Zhang",
    roleAndPeriod: "Ph.D. student · 2021–2025",
    currentPosition: "Postdoctoral fellow, University of Chicago",
  },
  {
    name: "Lifei Yin",
    roleAndPeriod: "Ph.D. student · 2021–2025",
    currentPosition: "California Air Resources Board",
  },
  {
    name: "Yuhan Yang",
    roleAndPeriod: "Postdoctoral fellow · 2024–2025",
    currentPosition: "California Air Resources Board",
  },
  {
    name: "Nara Shin",
    roleAndPeriod: "Master’s student · 2020–2023",
    currentPosition: "Ph.D. student, Purdue University",
  },
];

export const visitingScholars = [
  {
    name: "Shailina Srivastava",
    homeInstitution: "IIT Madras, India",
    visitPeriod: "October 2024–January 2025 · October 2025–July 2026",
    honor: "Fulbright Fellow",
  },
  {
    name: "Aishwarya Singh",
    homeInstitution: "IIT Madras, India",
    visitPeriod: "September–December 2022",
  },
];

