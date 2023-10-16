export class Matrix {
  matrixRows: number[][]; // ex:  [[1, 2],
  //       [3, 4]  ]
  column: number[][];

  constructor(matrix: string) {
    // "1 2\n10 20"
    const rows = matrix.split("\n");
    this.matrixRows = rows.map((i) => i.split(" ").map(Number));
    const nCols = matrix[0].length;
    this.column = [];
  }

  get rows(): number[][] {
    return this.matrixRows;
  }

   get columns(): number[][] {
    const numOfRows = this.matrixRows.length;
    const numOfCols = this.matrixRows[0].length;

  for (let col = 0; col < numOfCols; col++) {
    const column: number[] = [];

    for (let row = 0; row < numOfRows; row++) {
      const value = this.matrixRows[row][col];
      column.push(value);
    }

    this.column.push(column);
  }
    return this.column;
  }
}
