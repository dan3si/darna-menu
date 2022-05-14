import rootPath from './utils/rootPath'

import styles from './App.module.scss'
import Header from './components/Header'
import ItemsList from './components/ItemsList'
import menu from './menu/menu'

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import ScrollToTop from 'react-router-scroll-top'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <ScrollToTop>
          <Header />

          <Switch>
            <ItemsList category={menu} path={rootPath} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
