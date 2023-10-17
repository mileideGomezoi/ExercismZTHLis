export class Robot {
  constructor() {}

  private generateRandomName(): string {
    const alphabetChars: string = "ABCDEFGHIJKLMNOPQRSTUVXZ";
    let randomName: string = "";
    let twoUpperCaseLetters: string;
    let threeDigits: string;

    // pick two random chars from alphabetChars var;
    const randomNum1 = Math.floor(Math.random() * alphabetChars.length);
    const randomNum2 = Math.floor(Math.random() * alphabetChars.length);
    const char1 = alphabetChars.charAt(randomNum1).toUpperCase;
    const char2 = alphabetChars.charAt(randomNum2).toUpperCase;
    twoUpperCaseLetters = `${char1}${char2}`;

    //generate three random numbers
    const num1 = Math.floor(Math.random() * 9);
    const num2 = Math.floor(Math.random() * 9);
    const num3 = Math.floor(Math.random() * 9);
    threeDigits = `${num1}${num2}${num3}`;

    randomName = `${twoUpperCaseLetters}${threeDigits}`;

    return randomName;
  }

  public get name(): string {
    return this.name;
  }

  public resetName(): void {
    throw new Error("Implement Robot#resetName");
  }

  public static releaseNames(): void {
    throw new Error("Implement Robot.releaseNames");
  }
}
