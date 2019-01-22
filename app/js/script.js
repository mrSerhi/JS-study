{
  ("use strict");

  function sayHi() {
    setTimeout(() => {
      console.log("Async");
    }, 2000);
  }

  function init() {
    //   console.log("Init function");
    setTimeout(() => {
      console.log("Init function");
    }, 1000);
  }

  function doIt() {
    console.log("Do IT...");
  }

  function inProcess() {
    init();
    sayHi();
    doIt();
  }

  // inProcess();

  // callback hell (example)

  // recipe();

  function recipe() {
    // imagine, we receives data from server
    setTimeout(() => {
      const IDs = [122, 144, 44, 155, 200, 201];
      console.dir(IDs);

      // tries to receives data again
      setTimeout(
        id => {
          const recipe = {
            title: "tomato pizza italyno",
            cockName: "Domingo",
            id: id[2]
          };
          console.log(`${recipe.cockName}^${recipe.id} cooked ${recipe.title}`);

          // tries to receives data again
          setTimeout(
            id => {
              const recipe = {
                title: "big testy burger",
                cockName: "Djoan",
                id: id[4]
              };

              console.log(
                `${recipe.cockName}^${recipe.id} cooked ${recipe.title}`
              );

              // tries to receives data again
              setTimeout(
                id => {
                  const recipe = {
                    title: "spaggety",
                    cockName: "Bill",
                    id: id[id.length - 1]
                  };

                  console.log(
                    `${recipe.cockName}^${recipe.id} cooked ${recipe.title}`
                  );

                  // update IDs
                  setTimeout(() => {
                    const updIds = [1002, 456, 899, 900, 512];
                    updIds.forEach(el => IDs.push(el));

                    console.dir(IDs);
                    console.log(`IDs was update`);

                    // tries to receives data again
                    setTimeout(
                      id => {
                        const recipe = {
                          title: "mind of elephant",
                          cockName: "Cocorubba",
                          id: id[6]
                        };

                        console.log(
                          `${recipe.cockName}^${recipe.id} cooked ${
                            recipe.title
                          }`
                        );
                      },
                      1500,
                      IDs
                    );
                  }, 1500);
                },
                1500,
                IDs
              );
            },
            1500,
            IDs
          );
        },
        1500,
        IDs
      );
    }, 1500);
  }
}
