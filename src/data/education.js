// Learning journey stages for Thanu (Second-year IT student at ISTAD)
// This data showcases the First-Year learning journey, clearly grouping
// university semesters with their concurrent intensive courses.

export const educationStages = [
  {
    id: 'stage-1',
    stageNumber: '01',
    stageTitle: 'Semester 1 & Preuniversity Course',
    periodNote: 'First-Year First Half • Concurrent Studies',
    tracks: [
      {
        id: 'sem-1',
        type: 'university',
        badge: 'University Track',
        title: 'Year 1 — Semester 1',
        institution: 'ISTAD',
        timing: 'University Studies',
        summary: 'Core foundational semester establishing computer science fundamentals, structured programming logic, networking, and modern web styling.',
        subjects: [
          { name: 'Networking Fundamentals' },
          { name: 'Intensive English Program' },
          { name: 'Academic Skill Development' },
          {
            name: 'Web Design',
            topics: ['HTML', 'CSS', 'Tailwind CSS'],
          },
          { name: 'C++ Programming' },
        ],
      },
      {
        id: 'preuni',
        type: 'course',
        badge: 'Parallel Course • ~2.5 Months',
        title: 'Preuniversity Course',
        institution: 'ISTAD',
        timing: 'Taken alongside Semester 1',
        summary: 'Intensive supplementary training taken concurrently with Semester 1 to reinforce syntax, object-oriented principles, and practical problem-solving.',
        subjects: [
          { name: 'C++ Basic Syntax' },
          { name: 'Conditional Statements & Control Flow' },
          { name: 'Object-Oriented Programming (OOP) Concepts' },
          { name: 'Problem-Solving' },
          { name: 'Hands-on Project' },
        ],
      },
    ],
  },
  {
    id: 'stage-2',
    stageNumber: '02',
    stageTitle: 'Semester 2 & Foundation Gen 6',
    periodNote: 'First-Year Second Half • Concurrent Studies',
    tracks: [
      {
        id: 'sem-2',
        type: 'university',
        badge: 'University Track',
        title: 'Year 1 — Semester 2',
        institution: 'ISTAD',
        timing: 'University Studies',
        summary: 'Advanced first-year semester exploring discrete mathematics, Linux environments, data structures & algorithms, OOP in Java, and modern frontend foundations.',
        subjects: [
          {
            name: 'Mathematics',
            topics: ['Discrete Mathematics'],
          },
          {
            name: 'System Administration',
            topics: ['Linux'],
          },
          { name: 'Data Structures and Algorithms' },
          {
            name: 'Java Programming',
            note: 'Focused on OOP',
          },
          {
            name: 'Frontend Fundamentals',
            topics: [
              'JavaScript',
              'TypeScript',
              'React JS',
              'Introductory Next.js',
              'Working with APIs provided by teacher',
            ],
            note: 'Next.js was introductory in Year 1; deeper study is part of Year 2',
          },
        ],
      },
      {
        id: 'foundation-gen-6',
        type: 'course',
        badge: 'Parallel Course • 4 Months',
        title: 'Foundation Gen 6',
        institution: 'ISTAD',
        timing: 'Taken alongside Semester 2',
        summary: 'A 4-month web development training at ISTAD focused on modern UI design, component-driven React, Java programming, databases, and version control.',
        subjects: [
          { name: 'UX/UI Design' },
          { name: 'React JS' },
          { name: 'Java Programming' },
          { name: 'Database Essentials' },
          { name: 'Version Control Systems' },
          { name: 'Hands-on Projects' },
        ],
      },
    ],
  },
]

export default educationStages
