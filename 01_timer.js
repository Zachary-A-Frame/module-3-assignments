let greet = () => {
     console.log("Hemlo")
}

const repeatThreeTimes = (func) => {
     func()
     func()
     func()
}

repeatThreeTimes(greet)