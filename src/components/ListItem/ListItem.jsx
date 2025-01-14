import styles from './ListItem.module.scss';
// import PropTypes from 'prop-types'; 
import CategorySVG from '../../assets/svgs/vegetables.svg'
import RemoveSVG from '../../assets/svgs/remove.svg'

export default function ListItem() {
  return (
    <div className={styles.listItem}>
      <img className={styles.category} src={CategorySVG} />
      <span className={styles.name}>Name</span>
      <img className={styles.remove} src={RemoveSVG} />
    </div>
  )
}    

// OneList.defaultProps = {
//   abstract: 'No abstract provided',
//   complete: [0,0],
// };

// OneList.propTypes = {
//   title: PropTypes.string.isRequired,
//   abstract: PropTypes.string,
//   complete: PropTypes.array,
// };