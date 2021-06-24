const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.display')
const keys = calculator.querySelector('.keys')

const calculate = (n1, operator, n2) => {
  const num1 = parseFloat(n1)
  const num2 = parseFloat(n2)
  if (operator === 'add') return num1 + num2
  if (operator === 'subtract') return num1 - num2
  if (operator === 'multiply') return num1 * num2
  if (operator === 'divide') return num1 / num2
}

const getKeyType = key => {
  const { action } = key.dataset
  if (!action) return 'number'
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' |
    action === 'divide'
  ) return 'operator'
  return action
}

const result = (key, displayedNum, state) => {
  const keyContent = key.textContent
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = state

  if (keyType === 'number') {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent
  }

  if (keyType === 'operator') {
    return firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum
  }

  if (keyType === 'clear') return 0

  if (keyType === 'calculate') {
    return firstValue
      ? previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum)
      : displayedNum
  }
}

const updateCalculation = (key, calculator, calculatedValue, displayedNum) => {
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = calculator.dataset

  calculator.dataset.previousKeyType = keyType

  if (keyType === 'operator') {
    calculator.dataset.operator = key.dataset.action
    calculator.dataset.firstValue = firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculatedValue
      : displayedNum
  }

  if (keyType === 'calculate') {
    calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
      ? modValue
      : displayedNum
  }

  if (keyType === 'clear') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  }
}

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return
  const key = e.target
  const displayedNum = display.textContent
  const resultString = result(key, displayedNum, calculator.dataset)

  display.textContent = resultString
  updateCalculation(key, calculator, resultString, displayedNum)
})
