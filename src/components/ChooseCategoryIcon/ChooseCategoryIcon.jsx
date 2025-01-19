import styles from "./ChooseCategoryIcon.module.scss";
import PropTypes from "prop-types";

export default function ChooseCategoryIcon({
  name,
  icon,
  handleCategoryClick,
  choosenCategory,
}) {
  return (
    <div
      className={
        choosenCategory === name
          ? styles.chooseCategoryIconClicked
          : styles.chooseCategoryIcon
      }
      onClick={() => handleCategoryClick(name)}
    >
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
}

ChooseCategoryIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
  choosenCategory: PropTypes.string.isRequired,
};
