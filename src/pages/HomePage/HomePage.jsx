import styles from './HomePage.module.scss'
import Navbar from "../../components/Navbar/Navbar"
import MainList from "../../components/MainList/MainList"
import Shortcuts from "../../components/Shortcuts/Shortcuts"
import AddListButton from '../../components/AddListButton/AddListButton'

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <MainList />
      <Shortcuts/>
      <AddListButton/>
    </div>
  )
}