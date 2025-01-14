import styles from './OneList.module.scss';
import DotsVerticalSVG from '../../assets/svgs/dots-vertical.svg'
import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';

export default function OneList({id, title, abstract, complete}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/edit-list/${id}`);
  }

  return (
    <div className={styles.oneList} onClick={handleClick}>
      <div className={styles.left}>
        <span className={styles.title}>{title}</span>
        <span className={styles.abstract}>{abstract}</span>
      </div>
      <div className={styles.right}>
        <img src={DotsVerticalSVG}/>
        <div className={styles.complete}>{complete[0]}/{complete[1]}</div>
      </div>
    </div>
  )
}    

OneList.defaultProps = {
  abstract: 'No abstract provided',
  complete: [0,0],
};

OneList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string,
  complete: PropTypes.array,
};