

let yourName = "Zach Norton" // HINT: Replace this with your own name!
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`


let gb = 0 
let cc = 0 
let sugar = 0 
let total = gb + cc + sugar


const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')

const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')

const totalQty = document.querySelector('#qty-total')


gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1
    document.querySelector('#qty-gb').textContent = gb
    total = gb + cc + sugar
    document.querySelector('#qty-total').textContent = total
})
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    document.querySelector('#qty-cc').textContent = cc
    total = gb + cc + sugar
    document.querySelector('#qty-total').textContent = total
})
sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    document.querySelector('#qty-sugar').textContent = sugar
    total = gb + cc + sugar
    document.querySelector('#qty-total').textContent = total
    })    


gbMinusBtn.addEventListener('click', function() {
    gb = gb - 1
    document.querySelector('#qty-gb').textContent = gb
    total = gb + cc + sugar
    document.querySelector('#qty-total').textContent = total
})
ccMinusBtn.addEventListener('click', function() {
    cc = cc - 1
    document.querySelector('#qty-cc').textContent = cc
    total = gb + cc + sugar
    document.querySelector('#qty-total').textContent = total
})
sugarMinusBtn.addEventListener('click', function() {
    sugar = sugar - 1
    document.querySelector('#qty-sugar').textContent = sugar
    total = gb + cc + sugar
    document.querySelector('#qty-total').textContent = total
})


