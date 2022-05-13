import styles from './App.module.scss'
import Header from './components/Header'
import ItemsList from './components/ItemsList'
import menu from './menu/menu'

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />

        <Switch>
          <ItemsList items={menu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
