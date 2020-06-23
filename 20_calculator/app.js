const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector(".all-clear")
const backspace = document.querySelector(".delete")
const equals = document.querySelector(".result")
const historyText = document.querySelector(".history-value")
const outputText = document.querySelector(".result-value")

class Calculator {
    constructor(historyText, outputText) {
        this.historyText = historyText
        this.outputText = outputText
        this.clear()
    }

    //Clear out the display
    clear() {
        this.history = ''
        this.output = ''
        this.operation = undefined
    }

    //Delete number on backspace
    delete() {
        this.output = this.output.toString().slice(0, -1)
    }

    //Get the number to display on the screen
    appendNumber(number) {
        if (number === '.' && this.output.includes('.')) return
        this.output = this.output.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.operation === '') return
        if (this.operation !== '') {
            this.calculate()
        }
        this.operation = operation
        this.history = this.output
        this.output = ''
    }

    //Display output
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    display() {
        this.outputText.innerText = this.getDisplayNumber(this.output)
        if (this.operation !== null) {
            this.historyText.innerText = `${this.getDisplayNumber(this.history)}${this.operation}`
            if (this.operation === undefined) {
                this.historyText.innerText = ''
            }
        }
    }



    //Calculate value
    calculate() {
        let result
        const numberHistory = parseFloat(this.history)
        const numberOutput = parseFloat(this.output)
        if (isNaN(numberHistory) || isNaN(numberOutput)) return
        console.log(this.operation)
        switch (this.operation) {
            case '+':
                debugger
                result = numberHistory + numberOutput
                break
            case '-':
                result = numberHistory - numberOutput
                break;
            case '*':
                result = numberHistory * numberOutput
                break;
            case '/':
                result = numberHistory / numberOutput
                break;
            default:
                return

        }

        this.output = result
        this.operation = undefined
        this.history = ''
    }


}
const calculator = new Calculator(historyText, outputText)

clear.addEventListener("click", () => {
    calculator.clear()
    calculator.display()
})

backspace.addEventListener("click", () => {
    calculator.delete()
    calculator.display()
})


numbers.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.display()
    })
})


operators.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.display()
    })
})

equals.addEventListener("click", () => {
    calculator.calculate()
    calculator.display()
})