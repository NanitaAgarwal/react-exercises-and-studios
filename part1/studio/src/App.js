import logo from './logo.svg';
import RecipeDescription from './components/Description.js'
import RecipeIngredients from './components/Ingredients.js'
import RecipePhoto from './components/photo.js'

import './App.css';

function App() {
  return (
<div className="App">
  <div className="recipePhotoBlock"><RecipePhoto />
  <div>
  <RecipeDescription />
  <RecipeIngredients />
</div>
  </div>
</div>
  );
}

export default App;
