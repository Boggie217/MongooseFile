let y = 12

const x = () => {

    try {
        if (y === 10) {
            console.log("yes y is 10")
        } else {
            throw new Error("no y is not 10")
        }
    } catch (error) {
        console.log(error)
    }
}

x()