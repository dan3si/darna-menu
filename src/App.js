import HookahsPage from './pages/Hookahs'
import styles from './App.module.scss'

import AlFakherPage from './pages/AlFakher'
import SocialSmokePage from './pages/SocialSmoke'
import FumariPage from './pages/Fumari'
import TangiersPage from './pages/Tangiers'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
            <Route path="/hookahs/al-fakher" element={<AlFakherPage />} />

            <Route path="/hookahs/social-smoke" element={<SocialSmokePage />} />

            <Route path="/hookahs/fumari" element={<FumariPage />} />

            <Route path="/hookahs/tangiers" element={<TangiersPage />} />

            <Route path="/hookahs" element={<HookahsPage />} />

            <Route path="/" element={<>home</>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
