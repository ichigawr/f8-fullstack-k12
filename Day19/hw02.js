const printMultiplicationTable = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      document.write(`${i} x ${j} = ${i * j} <br />`);
    }

    if (i < 10) document.write(`***** <br />`);
  }
};

printMultiplicationTable();
