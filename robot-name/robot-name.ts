export class Robot {
  private Rname: string;
  public static noAllowedNames: Set<string>;

  constructor() {
    Robot.noAllowedNames = new Set<string>();
    this.Rname = this.generateRandomName();
  }

  private generateRandomName(): string {
    let randomName = "";
    for (let i = 0; i < 2; i++) {
      randomName += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[
        Math.floor(Math.random() * 26)
      ];
    }
    for (let i = 0; i < 3; i++) {
      randomName += "0123456789"[Math.floor(Math.random() * 10)];
    }
    return randomName;
  }

  public generateName(): string {
    let generatedName: string;

    do {
      generatedName = this.generateRandomName();
    } while (Robot.noAllowedNames.has(generatedName));

    Robot.noAllowedNames.add(generatedName);

    return generatedName;
  }

  public get name(): string {
    return this.Rname;
  }

  public resetName(): void {
    this.Rname = this.generateName();
  }

  public static releaseNames(): void {
    return Robot.noAllowedNames.clear();
  }
}
