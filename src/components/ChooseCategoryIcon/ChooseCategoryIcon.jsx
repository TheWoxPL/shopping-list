import styles from './ChooseCategoryIcon.module.scss';
import CategorySVG from '../../assets/svgs/vegetables.svg'

export default function ChooseCategoryIcon
() {
  return (
    <div className={styles.chooseCategoryIcon}>
      <img src={CategorySVG}/>
      <span> Vegetable</span>
    </div> 
  )
}    