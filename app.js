const months = ['january','february','march','april','may','june','july','august','september','october','november','december']
const weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// let futureDate = new Date(2022,0,8,17,00,00)
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 16)
const year = futureDate.getFullYear()
const date = futureDate.getDate()
const hour = futureDate.getHours()
const munite = futureDate.getMinutes()
const second = futureDate.getSeconds()
let day = futureDate.getDay()
day = weekdays[day]
let month = futureDate.getMonth()
month = months[month]
giveaway.textContent = `Give Away Ends On ${day}, ${date} ${month} ${year} ${hour}: ${munite}`

const futureTime = futureDate.getTime()
function getRemainingTime(){
    const presentTime = new Date().getTime()
    const remaining = futureTime - presentTime
    //times in ms
    const oneDay = 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMinute = 60*1000
    //calculate rest time in ms
    let days = Math.floor(remaining / oneDay)
    let hours = Math.floor((remaining % oneDay) / oneHour)
    let minutes = Math.floor((remaining % oneHour) / oneMinute)
    let seconds = Math.floor((remaining % oneMinute) / 1000)

    function format(item) {
        if (item < 10) {
            return(item = `0${item}`)
        } else {
            return item
        }
    }
    
    const values = [days, hours, minutes, seconds]
    items.forEach(function(item, index){
        item.innerHTML = format(values[index])
    })

    if(remaining < 0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class='expired'>Sorry, Give Away Has Expired</h4>`
    }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()