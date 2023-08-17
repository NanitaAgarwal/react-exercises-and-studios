const RecipeAuthor = () => {
   let authorLink = "https://downshiftology.com/about-lisa/";
   let authorPhoto = "https://downshiftology.com/wp-content/uploads/2023/06/Lisa-Bryan-square-4-720x720.webp";
   let authorName = "Lisa";

   return (
      <div>
         <img src={authorPhoto} alt = "Lisa" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = (ingredients) => {
    ingredients = ["Chickpeas","Onion","Parsley","Garlic","Green Chile Pepper"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Falafel</h1>
            <p>Traditional falafel is made from ground chickpeas or fava beans, herbs and spices. The mixture is then formed into balls or patties and deep fried for a texture that’s crispy on the outside and soft on the inside, sort of like a fritter. It’s a classic Middle Eastern and Mediterranean recipe that’s enjoyed as street food and often served up as part of mezze (a group of small meals).</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-12.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}