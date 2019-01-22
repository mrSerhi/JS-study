{
  ("use strict");
  // ==============================================================
  // promosis over callback hell

  /*
new Promise((resolve, reject) => {});
resolve - разрешать
reject - отклонять
*/

  const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
      const IDs = [132, 155, 240, 45, 89, 67];
      resolve(IDs);
      // reject(IDs);
    }, 1500);
  });

  const getRecipe = resID => {
    return new Promise((resolve, reject) => {
      setTimeout(
        Id => {
          const recipe = {
            title: "Pizza Italyno",
            cook: "Farentino I.V",
            id: Id[4]
          };
          resolve(recipe);
        },
        1500,
        resID
      );
    });
  };

  const getRelated = recipeObj => {
    return new Promise((resolve, reject) => {
      setTimeout(
        obj => {
          const recipe = {
            title: "Tomato le Pasta",
            cook: obj.cook,
            id: obj.id
          };
          resolve(recipe);
        },
        1500,
        recipeObj
      );
    });
  };
  /*
  getIDs
    .then(IDs => {
      console.dir(IDs);
      return getRecipe(IDs);
    })

    .then(recipe => {
      console.log(`${recipe.id}^${recipe.cook}: ${recipe.title}`);
      return getRelated(recipe);
    })

    .then(recipe => {
      console.log(`${recipe.id}^${recipe.cook}: ${recipe.title}`);
    });

  getIDs.catch(() => {
    console.error("Error: Data rejected!!!");
  });
  */
}
