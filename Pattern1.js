function printStarPattern(rows) {
    // Print the top part
    for (let i = 1; i <= rows - 1; i++) {
        let row = '';
        for (let j = 1; j <= (2 * rows - 1); j++) {
            if (j === (rows - i) || j === (rows + i - 2)) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
  
    // Print the bottom row (filled with stars)
    let bottomRow = ('*' + " ").repeat(rows)
    console.log(bottomRow);
}

printStarPattern(4);