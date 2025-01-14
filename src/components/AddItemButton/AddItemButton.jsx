import styles from './AddItemButton.module.scss';
import PlusSVG from '../../assets/svgs/add-circle.svg'
import PropTypes from 'prop-types';
export default function AddItemButton({onClick}) {
  return (
    <button className={styles.addItemButton} onClick={onClick}>
      <img src={PlusSVG} />
      <span>
        Add item
      </span>
    </button>
  )
}

AddItemButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};