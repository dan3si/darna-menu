import HookahItem from './components/HookahItem'
import hookahs from './hookahs'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <h2 className={styles.heading}>Al Fakher - $25</h2>

      {hookahs.map(
        ({ brand, flavor, picture, available }) => {
          if (!available || brand !== 'Al Fakher') return null

          return (
            <HookahItem
              flavor={flavor}
              picture={picture}
            />
          )
        }
      )}

      <h2 className={styles.heading}>Social smoke - $30</h2>

      {hookahs.map(
        ({ brand, flavor, picture, available }) => {
          if (!available || brand !== 'Social smoke') return null

          return (
            <HookahItem
              flavor={flavor}
              picture={picture}
            />
          )
        }
      )}

      <h2 className={styles.heading}>Fumari - $30</h2>

      {hookahs.map(
        ({ brand, flavor, picture, available }) => {
          if (!available || brand !== 'Fumari') return null

          return (
            <HookahItem
              flavor={flavor}
              picture={picture}
            />
          )
        }
      )}
    </div>
  );
}

export default App;
