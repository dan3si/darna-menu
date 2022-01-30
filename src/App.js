import HookahItem from './components/HookahItem'
import hookahs from './hookahs'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <h2 className={styles.heading}>Al Fakher</h2>
      {hookahs.map(
        ({ brand, flavor, picture, available }) => available
          ? <HookahItem
              brand={brand}
              flavor={flavor}
              picture={picture}
            />
          : null
      )}
    </div>
  );
}

export default App;
