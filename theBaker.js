function cakes(recipe, available) {
    let numbers = [];

    for(let ingredient in recipe) {
        if(available[ingredient] == undefined)
        {
            return 0;
        }
        else
        {
            let res = available[ingredient] / recipe[ingredient];
            switch (res) {
                case res < 1:
                    return 0;

                default:
                    numbers.push(res);
                    break;
            }
        }
    }

    return Math.floor(numbers.sort()[0]);
}

let recipe = {flour: 500, sugar: 200, eggs: 1};

let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

//let available = {flour: 1000, sugar: 400, eggs: 2}

console.log(cakes(recipe, available));