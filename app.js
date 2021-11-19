const lookup = (obj, path) => {
  const location = path.split(".");
  return obj[location[0]][location[1]];
};

const obj = {
  property1: {
    property2: "Apple",
    property3: "Orange",
  },
};

const path = "property1.property2";

console.log(lookup(obj, path));
