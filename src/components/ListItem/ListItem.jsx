import styles from './ListItem.module.scss';
import RemoveSVG from '../../assets/svgs/remove.svg'
import PropTypes from 'prop-types';
import { getCategorySVG } from '../../utils/functions/categoriesManage';

export default function ListItem({ item, onRemove, onToggleComplete }) {
  const handleItemClick = () => {
    onToggleComplete(item.id);
    console.log(item);
  };
  
  const handleRemoveClick = (e) => {
    e.stopPropagation(); 
    onRemove(item.id);
  };
  
  const itemClass = item.complete ? `${styles.listItemGray} ${styles.listItem}` : styles.listItem;

  return (
    <div className={itemClass} onClick={handleItemClick}>
      <img className={styles.category} src={getCategorySVG(item.category)} />
      <span className={styles.name}>{item.name}</span>
      {/* <img className={styles.done} src={DoneSVG} /> */}
      <img className={styles.remove} src={RemoveSVG} onClick={handleRemoveClick} />
    </div>
  )
}    
ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

