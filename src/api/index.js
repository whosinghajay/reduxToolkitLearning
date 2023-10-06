import Chance from "chance";

const chance = Chance();

export const fakeUserData = () => {
    // return 
    // console.log(chance.name({ middle: true }));s
    return chance.name({ middle: true });
}

// fakeUserData();