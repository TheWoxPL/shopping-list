import styles from './EditListPage.module.scss'
import { useParams } from 'react-router-dom';
import BackSVG from '../../assets/svgs/back.svg'
import DotsVerticalSVG from '../../assets/svgs/dots-vertical.svg'
import ListItem from '../../components/ListItem/ListItem';
import AddItemButton from '../../components/AddItemButton/AddItemButton';
import { Link } from 'react-router-dom';

export default function EditListPage() {
  const { id } = useParams();
  return (
    <div className={styles.editListPage}>
      <div className={styles.navigator}>
        <Link to='/'>
          <img className={styles.back} src={BackSVG}/>
        </Link>
        <span className={styles.title} >Title</span>
        <img src={DotsVerticalSVG} className={styles.options} />
      </div>
      {/* <div className={styles.groups}>
        <div className={styles.groupsCategory}>Suggested</div>
        <div className={styles.groupsCategory}>Added</div>
        <div className={styles.groupsCategory}>Done</div>
      </div> */}
      <ListItem />
      <ListItem />
      <ListItem />
      {id}
      <AddItemButton />
    </div>
  )
}