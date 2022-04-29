import HookahsPage from './pages/Hookahs'
import styles from './App.module.scss'
import Header from './components/Header'
import HookahBrandPage from './pages/HookahBrand'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />

        <Routes>
            <Route path="/darna-menu" element={<HookahsPage />} />

            <Route path="/darna-menu/hookahs/al-fakher" element={<HookahBrandPage brand="Al Fakher" price={25} />} />

            <Route path="/darna-menu/hookahs/adalya" element={<HookahBrandPage brand="Adalya" price={25} />} />

            <Route path="/darna-menu/hookahs/social-smoke" element={<HookahBrandPage brand="Social Smoke" price={30} />} />

            <Route path="/darna-menu/hookahs/fumari" element={<HookahBrandPage brand="Fumari" price={30} />} />

            <Route path="/darna-menu/hookahs/tangiers" element={<HookahBrandPage brand="Tangiers" price={35} />} />

            <Route path="/darna-menu/hookahs/darkside" element={<HookahBrandPage brand="Darkside" price={35} />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
