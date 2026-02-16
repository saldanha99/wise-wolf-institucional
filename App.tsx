import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/ui/Loading';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const CoursesChildren = lazy(() => import('./pages/CoursesChildren'));
const CoursesBusiness = lazy(() => import('./pages/CoursesBusiness'));
const CoursesTravel = lazy(() => import('./pages/CoursesTravel'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cursos/criancas" element={<CoursesChildren />} />
          <Route path="/cursos/business" element={<CoursesBusiness />} />
          <Route path="/cursos/viagens" element={<CoursesTravel />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/teste-nivel" element={<QuizPage />} />
          {/* Fallback route - directs to home */}
          <Route path="*" element={<Home caseType="institutional" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;