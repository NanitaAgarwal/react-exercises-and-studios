import styles from './Description.module.css';
import React from 'react';



 function RecipeAuthor(){
    let authorLink="https://www.alyonascooking.com/olive-garden-five-cheese-ziti-al-forno-copycat-recipe/";
    let authorPhoto="https://www.alyonascooking.com/wp-content/uploads/2020/02/alyona-160x160.jpg";
    let authorName="Alyona Demyanchuk";
    return(
            <div className = {styles.recipeAuthorBlock}>
               <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
               <div>
                  <h3>{authorName}</h3>
                  <a href={authorLink}>Blog name</a> 
               </div>
            </div>
    );
 }
 class RecipeDescription extends React.Component{
    render(){
        return(
    
         <div> 
         <div>
            <h1>Five Cheese Ziti Pasta</h1>
            <p>This Copycat Olive Garden Five Cheese Ziti Al Forno Recipe is made with marinara, heavy cream (no canned alfredo), a blend of Italian cheeses, and a breadcrumb crust that gets baked before serving. Super easy Olive Garden Dinner right at home! 

</p>
         </div>
         
         <RecipeAuthor />
      </div>
        )
    }
}

export default RecipeDescription;
