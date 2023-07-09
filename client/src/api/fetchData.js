import Chance from "chance";

const chance = Chance();
function fetchDetails() {
  return chance.name();
}

export default fetchDetails;
