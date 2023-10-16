export const colorCode = (color: string) : string => {

  const resistor = new Map();

  resistor.set("black", 0);
  resistor.set("brown", 1);
  resistor.set("red", 2);
  resistor.set("orange", 3);
  resistor.set("yellow", 4);
  resistor.set("green", 5);
  resistor.set("blue", 6);
  resistor.set("violet", 7);
  resistor.set("grey", 8);
  resistor.set("white", 9);
  
  return resistor.get(color);
  
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
