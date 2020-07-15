//Определение склонения слова в зависимости от остатка числа
//к которому оно относится
export const numberToString = (number, wordForms) => {
  number = Math.abs(number) % 100
  let remainder = number % 10
  if (number > 10 && number < 20) {
    return wordForms[2]
  }
  if (remainder > 1 && remainder < 5) {
    return wordForms[1]
  }
  if (remainder == 1) {
    return wordForms[0]
  }
  return wordForms[2]
}
