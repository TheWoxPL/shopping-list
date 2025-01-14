import styles from './CreateListPage.module.scss'
import  CreateListForm from '../../components/CreateListForm/CreateListForm'

export default function CreateListPage() {

  return (
    <div className={styles.createListPage}>
      <CreateListForm/>
    </div>
  )
}