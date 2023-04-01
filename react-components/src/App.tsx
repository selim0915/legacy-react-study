import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const ComponentsUi = lazy(() => import('./components/common/index'));
const Calendar = lazy(() => import('./components/common/Calender/Calender'));

const App = () => (
  <RecoilRoot>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/components/common" element={<ComponentsUi />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Suspense>
    </Router>

    <h1>목록</h1>
    <ul>
      <li>
        <a href="/components/common">component ui</a>
      </li>
      <li>
        <a href="/calendar">calendar</a>
      </li>
    </ul>
  </RecoilRoot>
);

export default App;