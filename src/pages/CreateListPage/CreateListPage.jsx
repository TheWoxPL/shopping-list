import styles from './CreateListPage.module.scss'
import CreateListForm from '../../components/CreateListForm/CreateListForm'
import Shortcuts from '../../components/Shortcuts/Shortcuts'

export default function CreateListPage() {

  return (
    <div className={styles.createListPage}>
      <CreateListForm/>
      <Shortcuts />
    </div>
  )
}