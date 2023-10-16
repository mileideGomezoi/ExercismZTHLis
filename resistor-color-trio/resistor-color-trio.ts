function getZeroCount(convertedNum: number) : number {
  let zeroCount: number = 0;
  let numStr: string = convertedNum.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === "0") {
      zeroCount++;
    }
  }
  return zeroCount;
}

function convertMetricPrefix(convertedNum:number): string {
  let zeroCount:number = getZeroCount(convertedNum);

  console.log(zeroCount);
  console.log("--" + convertedNum/Math.pow(10, 3));
  if(zeroCount === 3 || zeroCount === 4){
    return `${convertedNum/Math.pow(10, 3)} kiloohms` ;
  } else if(zeroCount === 6){
    return `${convertedNum/Math.pow(10, 6)} megaohms`;
  } else if (zeroCount === 9){
    return `${convertedNum/Math.pow(10, 9)} gigaohms`;
  } else {
    return `${convertedNum} ohms`;
  }
}

export function decodedResistorValue(arr: string[]) : string {
  const [color1, color2, color3] = arr;
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

  const thirdNum = parseInt(resistor.get(color3)) ;
  let first2Digits = parseInt(`${resistor.get(color1)}${resistor.get(color2)}`);
  let convertedNum = first2Digits * Math.pow(10, thirdNum);

  const resistorPrefix:string = convertMetricPrefix(convertedNum);
  
  return resistorPrefix;
}

