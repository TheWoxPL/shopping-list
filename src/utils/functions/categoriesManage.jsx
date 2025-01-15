import VegetablesSVG from '../../assets/svgs/vegetables.svg';
import FruitsSVG from '../../assets/svgs/fruits.svg';
import AlcoholSVG from '../../assets/svgs/alcohol.svg';
import AnySVG from '../../assets/svgs/question.svg';
import MeatSVG from '../../assets/svgs/meat.svg';
import BreadSVG from '../../assets/svgs/bread.svg';
import MedicineSVG from '../../assets/svgs/medicine.svg';
import ClothesSVG from '../../assets/svgs/clothes.svg';

const categories = [
  { name: 'Any', icon: AnySVG },
  { name: 'Vegetable', icon: VegetablesSVG },
  { name: 'Fruit', icon: FruitsSVG },
  { name: 'Meat', icon: MeatSVG },
  { name: 'Breadstuff', icon: BreadSVG },
  { name: 'Medicine', icon: MedicineSVG },
  { name: 'Clothes', icon: ClothesSVG },
  { name: 'Alcohol', icon: AlcoholSVG }
];

function getAllCategories() {
  return categories;
}

function getCategorySVG(name) {
  const category = categories.find(category => category.name === name);
  return category ? category.icon : AnySVG;
}

export { getAllCategories, getCategorySVG };
export default getAllCategories;