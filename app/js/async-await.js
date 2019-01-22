{
  ("use strict");

  // promises

  const getID = new Promise((resolve, reject) => {
    setTimeout(() => {
      const IDs = [133, 45, 23, 118, 340, 55];
      resolve(IDs);
      // reject(IDs);
    }, 1500);
  });

  const getRecipe = resIDs => {
    return new Promise((resolve, reject) => {
      setTimeout(
        objIds => {
          const recipe = {
            title: "Porto re Majorno",
            author: "J.Robingo",
            id: objIds[4]
          };
          resolve(recipe);
        },
        1500,
        resIDs
      );
    });
  };

  const getRelated = recipeObj => {
    return new Promise((resolve, reject) => {
      setTimeout(
        obj => {
          const recipe = {
            title: "Burrito Valwa Dronko",
            author: obj.author,
            id: obj.id
          };
          resolve(recipe);
        },
        1500,
        recipeObj
      );
    });
  };

  // async/await
  async function workWithRecipiens() {
    const IDs = await getID;
    console.dir(IDs);

    const recipeObj = await getRecipe(IDs);
    console.dir(recipeObj);

    const related = await getRelated(recipeObj);
    console.dir(related);

    // fn can return Promise
    return recipeObj;
  }
  // workWithRecipiens();

  /*
// may work with returns promises
workWithRecipiens().then(recipe => {
    console.log(`Execution below ${recipe}`);
});
*/
}
