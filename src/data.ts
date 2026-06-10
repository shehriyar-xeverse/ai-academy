import { Batch, StudyNote, Assignment, QuizQuestion } from './types';

export const BATCHES: Batch[] = [
  {
    id: 'batch-creative-coding',
    name: 'Creative Coding Adventurer Circle',
    schedule: 'Mon, Wed, Fri • 4:00 PM - 5:30 PM UTC',
    mentor: 'Prof. Evelyn Thrasher',
    difficulty: 'Beginner',
    spotsLeft: 7,
    color: 'from-cyan-500 to-blue-600',
    topics: ['Three.js basics', 'Canvas draw loops', 'Interactive animations', 'Physics physics engine']
  },
  {
    id: 'batch-neural-networks',
    name: 'Neural Network Pathfinder Guild',
    schedule: 'Tue, Thu • 6:00 PM - 8:00 PM UTC',
    mentor: 'Dr. Aaron Vance',
    difficulty: 'Intermediate',
    spotsLeft: 4,
    color: 'from-purple-500 to-fuchsia-600',
    topics: ['Transformer modeling', 'LLM finetuning', 'Neural weight matrices', 'AI model ethics']
  },
  {
    id: 'batch-cyber-future',
    name: 'Cosmic Tech & Quantum Cryptography',
    schedule: 'Saturday Intensive • 10:00 AM - 2:00 PM UTC',
    mentor: 'Dr. Seraphina Moon',
    difficulty: 'Advanced',
    spotsLeft: 12,
    color: 'from-emerald-500 to-teal-600',
    topics: ['Quantum bits & superposition', 'Cryptographic ledgers', 'Decentralized cloud matrices']
  }
];

export const STUDY_NOTES: StudyNote[] = [
  {
    id: 'note-01',
    title: 'Understanding WebGL and Canvas Coordinates',
    category: 'Coding',
    readTime: '6 min read',
    summary: 'Master how the Cartesian plane maps inside browser canvas nodes for absolute pixel control.',
    content: `## Cartesian coordinates in WebGL
In typical web developement, the top-left is (0,0) and coordinates increase down and right. However, in standard WebGL and Three.js environments:
- The origin **(0,0,0)** sits exactly at the geometric center of the canvas viewport.
- **X coordinates** increase to the right (positive) and decrease to the left (negative).
- **Y coordinates** increase upwards (positive) and decrease downwards (negative).
- **Z coordinates** point directly out of the screen toward you (positive) or deeper into the screen (negative).

### Setting up manual resize listeners
Always attach custom \`ResizeObserver\` triggers rather than relying on standard \`window.innerWidth\` properties. This allows your nested container boundaries to maintain a pixel-perfect rendering scale on ultra-wide or high-density screens!`,
    difficulty: 'Basic'
  },
  {
    id: 'note-02',
    title: 'How Transformer Attention Mechanisms Work',
    category: 'AI',
    readTime: '10 min read',
    summary: 'A mathematical and conceptual deep dive into query, key, and value vectors in modern large language models.',
    content: `## The Core Formula: Scale Dot-Product Attention
At the heart of modern LLMs lies the attention mechanism, represented as:
$$Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V$$

### Breaking down the variables:
1. **Query (Q):** What the current token is actively searching for in context.
2. **Key (K):** What qualities previous tokens possess, matching against the query.
3. **Value (V):** The actual informational content retrieved when Query and Key align.

By dividing by the square root of key dimensions ($d_k$), we prevent softmax values from saturating at extreme scales, ensuring beautiful and stable gradients during neural backpropagation processes!`,
    difficulty: 'Deep Dive'
  },
  {
    id: 'note-03',
    title: 'Visualizing Multidimensional Matrix Clusters',
    category: 'Data',
    readTime: '8 min read',
    summary: 'Using Principal Component Analysis (PCA) to collapse high-dimensional vectors onto 2D interactive graphs.',
    content: `## Collapsing Hyperdimensional Spaces
Real-world data embeddings can have hundreds of dimensions (e.g. 1536 dimensions for text embeddings). Since human eyes only comprehend tri-dimensional space, data scientists employ reduction pipelines:
- **PCA (Principal Component Analysis):** Finds orthogonal eigenvectors that maximize data variance.
- **t-SNE & UMAP:** Non-linear mappings that focus on keeping local neighbors close together, making cluster shapes highly organic.

These cluster islands represent concepts. Our adventurer mascot Alex uses these coordinates to target Three.js camera transitions!`,
    difficulty: 'Medium'
  }
];

export const ASSIGNMENTS: Assignment[] = [
  {
    id: 'assign-01',
    title: 'Custom Canvas Solar System Orbits',
    subject: 'Creative Coding Basics',
    dueDate: '2026-06-15',
    points: 100,
    description: 'Render a custom animated canvas scene showcasing at least 4 orbiting planets revolving around a sun. Set custom rotation velocities and render orbital trails utilizing clean stroke patterns.',
    status: 'Pending'
  },
  {
    id: 'assign-02',
    title: 'Supervised Learning Regression Matrix',
    subject: 'Neural Net Fundamentals',
    dueDate: '2025-06-25',
    points: 150,
    description: 'Train a basic linear regression coordinate feed using stochastic gradient descent. Plot historical epochs and print final mean squared errors inside the logs.',
    status: 'Graded',
    grade: 'A+ (145/150)'
  },
  {
    id: 'assign-03',
    title: 'Responsive Portfolio with Parallax Backgrounds',
    subject: 'Web Storytelling Aesthetics',
    dueDate: '2026-07-01',
    points: 120,
    description: 'Structure a modular multi-section timeline. Layered cloud parallax elements must trigger on active scroll bounds with smooth easing interpolators.',
    status: 'Submitted'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q-01',
    question: 'Why do WebGL rendering canvases require manual listener disposals?',
    options: [
      'Browsers automatically clean WebGL bindings, so custom disposals are purely optional.',
      'To prevent GPU memory leaks from holding onto geometries, textures, and shader programs.',
      'To accelerate compile times inside standard TypeScript bundlers.',
      'To make the cartoon character move faster across section dividers.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Unused WebGL objects are not automatically collected by the garbage collector since they live directly on the GPU. You must call disposal routines (.dispose()) on geometries, materials, and textures during cleanup cycles!',
    category: 'Coding'
  },
  {
    id: 'q-02',
    question: 'Which vector type holds the actual contextual information in multi-head attention blocks?',
    options: [
      'The Key vector (K)',
      'The Target vector (T)',
      'The Query vector (Q)',
      'The Value vector (V)'
    ],
    correctAnswerIndex: 3,
    explanation: 'While Queries and Keys calculate the relative attention weights (how much tokens relate), the Value vector (V) contains the actual semantic payload retrieved and blended to construct the next token prediction.',
    category: 'AI'
  },
  {
    id: 'q-03',
    question: 'Which easing model produces the most natural cartoon organic speed decay?',
    options: [
      'Linear Constant Interpolation',
      'Sudden Clamp Step Animations',
      'Quadratic or Cubic Ease-Out Deceleration',
      'Symmetric Sinusoidal Oscillators'
    ],
    correctAnswerIndex: 2,
    explanation: 'An Ease-Out function decelerates motion as it approaches its target. This mimics realistic physical friction, giving a friendly, Pixar-style cartoon feel to characters!',
    category: 'Coding'
  },
  {
    id: 'q-04',
    question: 'In the transformer attention scale dot-product, why do we divide QK^T by the square root of key dimensions (d_k)?',
    options: [
      'To reduce the numeric size of input vectors to save GPU memory space.',
      'To scale down high-magnitude dot products to prevent softmax values from saturating at extreme gradients.',
      'To multiply the attention matrix with a secret key token before encryption.',
      'To convert Cartesian coordinate offsets into three.js camera parameters.'
    ],
    correctAnswerIndex: 1,
    explanation: 'For large values of key dimensions (d_k), dot products grow extremely large in magnitude, pulling the softmax function into regions with dangerously small gradients (saturation). Dividing by sqrt(d_k) stabilizes training gradients.',
    category: 'AI'
  },
  {
    id: 'q-05',
    question: 'What is the primary architectural purpose of Principal Component Analysis (PCA) in data reduction?',
    options: [
      'To compress file dimensions to bypass uploader size locks on homework assignments.',
      'To convert deep-learning embeddings into encrypted high-security hash registers.',
      'To find orthogonal directions (principal components) that maximize variance, mapping hyperdimensional slots down to 2D coordinates.',
      'To render animated circular planet routes inside SVG background containers.'
    ],
    correctAnswerIndex: 2,
    explanation: 'PCA finds the directions of maximum variance in high-dimensional data and projects the points onto these orthogonal components, preserving as much geometric structured information as possible in fewer coordinates.',
    category: 'Data'
  },
  {
    id: 'q-06',
    question: 'What constitutes the key conceptual difference between linear PCA and non-linear data projection tools like UMAP or t-SNE?',
    options: [
      'UMAP and t-SNE focus strictly on preserving local neighbor structures organically, whereas PCA focuses on macro-level variance.',
      'PCA runs entirely on GPU blocks, while UMAP is handled by manual scroll event observers.',
      'UMAP only supports three-dimensional coordinates inside WebGL models.',
      't-SNE deletes outliers automatically to reduce standard deviation calculations.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Linear PCA is optimal for preserving global distance structures and macro-variance. Non-linear techniques like t-SNE and UMAP focus on local similarities, keeping neighborhood clusters intact at the expense of exact global distances.',
    category: 'Data'
  },
  {
    id: 'q-07',
    question: 'In a quantum computation sequence, what physical principle defines the concept of Superposition?',
    options: [
      'The ability of a system to double its hardware clock speed through parallel optical links.',
      'The state where a Qubit exists simultaneously in multiple potential basis states with probability amplitudes.',
      'The sudden halt of compilation execution threads on high-density graphics servers.',
      'The geometric overlap of 3D orbital trails rendered by the browser render loops.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Unlike classical bits (which must be strictly 0 or 1), a quantum bit (Qubit) can exist in a superposition of both states simultaneously. It collapses to a single value only when an external measurement is executed.',
    category: 'Future Tech'
  },
  {
    id: 'q-08',
    question: 'How do decentralized cryptography ledgers authenticate transaction integrity without centralized database nodes?',
    options: [
      'Using localized backup servers connected via peer-to-peer visual chatbot lines.',
      'By requiring active scholars to solve interactive puzzles to generate temporary passkeys.',
      'By signing messages with asymmetric private keys that peers verify in real-time using public key algorithms.',
      'Through rotating linear coordinate projections calculated on three.js rendering planes.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Ledger registers use asymmetric keys cryptography. A sender signs transactions with a secret Private Key, and all other peer nodes can evaluate the authenticity instantly using the sender\'s published Public Key.',
    category: 'Future Tech'
  }
];

export const LANDING_SECTIONS = [
  {
    id: 'hero',
    title: 'Discover Technology Through Adventure',
    subtitle: 'Step into the dark-academic world of the AI Academy. Meet Alex, your energetic, classic cartoon learning companion, and master coding, neural math, and futuristic space tech!',
    badge: '★ The Ultimate Learn-To-Code Odyssey'
  },
  {
    id: 'guide',
    title: 'Meet Alex, Your Interactive Explorer Mascot',
    subtitle: 'With his trusty adventurer backpack, academic specs, and glowing cosmic tablet, Alex leaps alongside your viewport to point out courses, celebrate milestones, and cheer you on!',
    badge: '★ Your Academic Companion'
  },
  {
    id: 'worlds',
    title: 'Interactive Learning Worlds',
    subtitle: 'We group our curricula into four distinct multidimensional worlds. Each world shifts the layout atmosphere and updates Alex\'s energetic stance!',
    badge: '★ Choose Your Path'
  },
  {
    id: 'roadmap',
    title: 'An Inspired Scroll-Driven Scrollway',
    subtitle: 'From a complete beginner to a recognized global certification. Progress down the path and watch the cosmic coordinates unlock!',
    badge: '★ Academic Roadmap'
  },
  {
    id: 'features',
    title: 'Crafted for Ultimate Learning Engagement',
    subtitle: 'Our virtual classroom embeds 3D interactive canvases, real puzzle-based assignments, and chatbot assistance inside elegant glassmorphism nodes.',
    badge: '★ Fully Loaded Core features'
  },
  {
    id: 'success',
    title: 'Acclaimed Scholar Achievements',
    subtitle: 'Celebrate our explorers\' global records. Over 15,000 active stargazers are deploying code to production right now!',
    badge: '★ Graduated Explorer Metrices'
  },
  {
    id: 'cta',
    title: 'Ready for Your New Cosmic Quest?',
    subtitle: 'Enroll in AI Academy today to unlock full dashboard privileges. Alex is already waving you onto the platform!',
    badge: '★ Instant Enrollment Open'
  }
];

export const COMPANION_QUOTES: Record<string, string> = {
  'home-hero': "Hey there! I am Alex! Ready to explore the AI Academy? Scroll down and let the adventure begin!",
  'home-guide': "Look! I have my backpack packed and my navigation specs calibrated. Let's study technology together!",
  'home-worlds': "These are our Learning Worlds! Click any world below to study detailed course paths. I've lit my torch for you!",
  'home-roadmap': "This is our learning roadmap. As you scroll, we will walk from basic syntax up to global certifications!",
  'home-testimonials': "These are high-affinity reviews from verified scholars! They compiled vector orbits and secured A+ ratings!",
  'home-success': "Whoa! Look at those score numbers go up! I'm doing a double-arm wave to celebrate our legendary graduates!",
  'home-cta': "Let's join today! Click 'Get Access Free' to set up your profile and join a cohort!",
  'courses': "Welcome to Courses & Batches! Select an active scholar cohort, explore lesson maps, and read library archives below.",
  'assignments': "The Guild Homework Board! Submit your completed projects below. You can drag and drop your file directly!",
  'quizzes': "It's quiz time! Give it your best shot, select an option and view immediate feedback notes!",
  'profile': "Your Scholar Station customizer & command telemetry. Calibrate your cyber hair, eyeglasses, or message me!"
};
