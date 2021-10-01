// funcao recursiva (chama a si propria)
function recursive(max) {
  if (max > 10) return;

  console.log(max);
  max++
  recursive(max);
}

recursive(0)