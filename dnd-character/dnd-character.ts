export class DnDCharacter {

   strength: number;
   dexterity: number;
   constitution: number;
   intelligence: number;
   wisdom: number;
   charisma: number;
   hitpoints: number;

  constructor(){

    let strengthGenerator = DnDCharacter.generateRandomNumbers();  //generate 4 random numbers (dice)
    strengthGenerator = DnDCharacter.find3MaxNumbers(strengthGenerator);  //find the 3 max nums
    let strength = DnDCharacter.sum3Nums(strengthGenerator); 
    this.strength = strength;
    
    let dexterityGenerator = DnDCharacter.generateRandomNumbers();
    dexterityGenerator = DnDCharacter.find3MaxNumbers(dexterityGenerator);
    let dexterity = DnDCharacter.sum3Nums(dexterityGenerator);
    this.dexterity = dexterity;
    
    let constitutionGenerator = DnDCharacter.generateRandomNumbers();
 //   console.log(constitutionGenerator);
    constitutionGenerator = DnDCharacter.find3MaxNumbers(constitutionGenerator);
    let constitution = DnDCharacter.sum3Nums(constitutionGenerator);
    this.constitution = constitution;
    
    let intelligenceGenerator = DnDCharacter.generateRandomNumbers();
    intelligenceGenerator = DnDCharacter.find3MaxNumbers(intelligenceGenerator);
    let intelligence = DnDCharacter.sum3Nums(intelligenceGenerator);
    this.intelligence = intelligence;
    
    let wisdomGenerator = DnDCharacter.generateRandomNumbers();
    wisdomGenerator = DnDCharacter.find3MaxNumbers(wisdomGenerator);                                     
    let wisdom = DnDCharacter.sum3Nums(wisdomGenerator);
    this.wisdom = wisdom;
    
    let charismaGenerator = DnDCharacter.generateRandomNumbers();
    charismaGenerator = DnDCharacter.find3MaxNumbers(charismaGenerator);
    let charisma = DnDCharacter.sum3Nums(charismaGenerator);
    this.charisma = charisma;

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }



  public static find3MaxNumbers(arrayOfNumbers: number[]): number[]{
    //const arrayOfNumbers = [n1, n2, n3, n4];

    const max1 = Math.max(...arrayOfNumbers); // the spread operator is used to pass the elements of the array as individual arguments 
    arrayOfNumbers.splice(arrayOfNumbers.indexOf(max1), 1); //  this line of code removes the first occurrence of max1 from the arr array,
    const max2 = Math.max(...arrayOfNumbers); 
    arrayOfNumbers.splice(arrayOfNumbers.indexOf(max2), 1);
    const max3 = Math.max(...arrayOfNumbers); 
    arrayOfNumbers.splice(arrayOfNumbers.indexOf(max3), 1);

    return [max1,max2,max3];
  }

  public static generateRandomNumbers(): number[] {
    const randomNums: number[] = [];
    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      randomNums.push(randomNumber);
    }
   // console.log(randomNums);
    return randomNums;
  }

  public static sum3Nums(arrayOf3Nums: number[]) : number{
    var sumOf3Nums = 0;

    for(let i=0; i<arrayOf3Nums.length; i++){
      sumOf3Nums += arrayOf3Nums[i];
    }    
    return sumOf3Nums;
  }

  public static generateAbilityScore(): number  {

    let constitutionGenerator = DnDCharacter.generateRandomNumbers();
 //   console.log(constitutionGenerator);
    constitutionGenerator = DnDCharacter.find3MaxNumbers(constitutionGenerator);
    let constitution = DnDCharacter.sum3Nums(constitutionGenerator);
    return constitution;
    
  }

  public static getModifierFor(abilityValue: number): number {
    const charConstituitionModifier = Math.floor((abilityValue - 10 ) / 2); //and round down. -7 /2 = -3.5 = -4 
   return charConstituitionModifier;
  }
}
