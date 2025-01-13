import styles from './Shortcuts.module.scss';
import HomeSVG from '../../assets/svgs/home.svg'
import RecipesSVG from '../../assets/svgs/book.svg'
import ProfileSVG from '../../assets/svgs/profile.svg'

export default function Shortcuts() {
  return (
    <>
      <div className={styles.shortcuts}>
        <div className={styles.shortcut}><img src={HomeSVG} /><span>Home</span></div>
        <div className={styles.shortcut}><img src={RecipesSVG} /><span>Recipes</span></div>
        <div className={styles.shortcut}><img src={ProfileSVG} /><span>Me</span></div>
      </div>
    </>
  )
}