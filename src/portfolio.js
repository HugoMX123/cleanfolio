const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://sosapavon.com',
  title: 'HSC',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hugo Sosapavón Canseco',
  role: 'M.Sc. in Image Processing & Computer Vision',
  picture: 'cv.jpeg',

  description: [
  '🇲🇽 Mexican — currently based in San Luis Potosí, Mexico.',
  'Mechatronics Engineer with a Master\'s degree in Image Processing and Computer Vision (Hungary, Spain, and France).',
  'Thesis in R&D of object detection and tracking using Event sensors (DVS) and RGB cameras, applying advanced deep learning.',
  'Strong experience in Python, OpenCV, and PyTorch, as well as machine learning frameworks such as TensorFlow and Keras, focused on computer vision.',
],
  resume: 'https://example.com', // CHANGE FOR THE RESUME IN GITHUB
  social: {
    linkedin: 'https://linkedin.com/in/hugosoca',
    github: 'https://github.com/HugoMX123',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Object Detection and Tracking using Fusion of Event and RGB Cameras.',
    description:
      'Algorithm development that integrates RGB and event cameras for robustness at high speeds and critical lighting conditions. Implementation of RF-DETR and RVT (Recurrent Vision Transformers) architec-tures.',
    stack: ['OpenCV', 'PyTorch Lightning', 'Python'],
    image: 'thesis.png',
  },
  {
    name: 'Presentation Controller via Hand-gestures using Haar-cascade algorithm',
    description:
      'Development of a real-time hand gesture recognition system for presentation control in low light conditions, using Cascade Classifiers and Haar features in OpenCV.',
    stack: ['OpenCV', 'Python', 'Raspberry-pi'],
    sourceCode: 'https://github.com',
    livePreview: 'https://www.youtube.com/watch?v=ntEBDLPvchk&feature=youtu.be',
    image: 'haar.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // AI, Computer Vision, and Image Processing
  { name: 'OpenCV',       icon: 'opencv/opencv-original' },
  { name: 'PyTorch',      icon: 'pytorch/pytorch-original' },
  { name: 'TensorFlow',   icon: 'tensorflow/tensorflow-original' },
  { name: 'Keras',        icon: 'keras/keras-original' },
  { name: 'Scikit-learn', icon: 'scikitlearn/scikitlearn-original' },
  { name: 'Pandas',       icon: 'pandas/pandas-original' },
  { name: 'NumPy',        icon: 'numpy/numpy-original' },
  { name: 'MATLAB',       icon: 'matlab/matlab-original' },
  
  // Programming Languages
  { name: 'Python',       icon: 'python/python-original' },
  { name: 'C++',          icon: 'cplusplus/cplusplus-original' },
  { name: 'C',            icon: 'c/c-original' },
  { name: 'C#',           icon: 'csharp/csharp-original' },
  { name: 'Java',         icon: 'java/java-original' },
  { name: 'SQL',          icon: 'mysql/mysql-original' }, // Using MySQL icon for general SQL
  
  // Development and Prototyping
  { name: 'Unity 3D',     icon: 'unity/unity-original' },
  { name: 'Arduino',      icon: 'arduino/arduino-original' },
  { name: 'SolidWorks' }, // Placeholder (SolidWorks lacks a native devicon)
  { name: 'AutoCAD' }, // Placeholder
  { name: 'Linux',        icon: 'linux/linux-original' },
  
  // Tools and Cloud
  { name: 'Git',          icon: 'git/git-original' },
  { name: 'Docker',       icon: 'docker/docker-original' },
  { name: 'LaTeX',        icon: 'latex/latex-original' },
  { name: 'Microsoft Office' },
]

const education = [
  {
    degree: "Master's in Image Processing and Computer Vision (IPCV)",
    institution: 'PPKE • UAM • Université de Bordeaux',
    period: '2023 – 2025',
    location: 'Europe',
    description:
      'Erasmus Mundus joint master´s program across three European universities, specializing in computer vision and image processing.',
    url: 'https://www.ipcv.eu',
      highlights: [
      'PPKE – Pázmány Péter Catholic University (Budapest, Hungary)',
      'UAM – Universidad Autónoma de Madrid (Madrid, Spain)',
      'Université de Bordeaux (Bordeaux, France)'
    ],
  },
  {
    degree: "Bachelor's in Mechatronics Engineering",
    institution: 'Facultad de Ingenieria de la Universidad Autónoma de San Luis Potosí',
    period: '2016 – 2021',
    location: 'San Luis Potosí, Mexico',
    url:'https://www.ingenieria.uaslp.mx/#gsc.tab=0',
    description:
      'Faculty of Engineering. Foundational studies in mechanical, electronic, and software systems integration.',
    highlights: [],
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hugo_sosapavon@hotmail.com',
}

const experience = [
  {
    role: 'Research Intern',
    institution: 'Vicomtech',
    location: 'Guipúzcoa, Spain',
    period: 'Mar 2025 – Aug 2025',
    url: 'https://www.vicomtech.org/en', 
    highlights: ['4th semester of Master\'s degree in Image Processing and Computer Vision.',
      'Development of an object detection and tracking algorithm using RGB cameras and event cameras (DVS sensors).',
    ],
  },
  {
    role: 'Systems Engineer',
    institution: 'Infosys Limited',
    location: 'Monterrey, Mexico',
    period: 'Dec 2021 – Jul 2023',
    url: 'https://www.infosys.com/mx/',
    highlights: [
      'Quality assurance (QA) testing for a global hotel and resort brand website, using Selenium and manual testing.',
      'Completed a 6-month training program in Java 11, SQL, Cucumber, and Selenium.',
    ],
  },
  {
    role: 'Intern',
    institution: 'FYWARE S.C.',
    location: 'San Luis Potosí, Mexico',
    period: 'Jan 2021 – Jun 2021',
    url: 'https://www.fyware.com/',
    highlights: [
      'Design of Mixed Reality (MR) and Virtual Reality (VR) applications using Unity 3D.',
      'Creation of multimedia content for VR and MR projects in SparkAR and Unity 3D.',
    ],
  },
]


const languages = [
  {
    language: 'Spanish',
    level: 'Native',
  },
  {
    language: 'English',
    level: 'C1 Proficient',
  },
]

// add to export:
export { header, about, experience, projects, skills, education, languages, contact }


