// The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

// But it's not working properly.

// Notes
// There are 3 attributes

// name
// age
// sex ('M' or 'F')
// When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.

// Examples
// Hello.
// Hello. My name is Bob. I am 27. I am male.
// Hello. I am 27. I am male. My name is Bob.
// Hello. My name is Alice. I am female.
// Hello. My name is Batman.
// Task
// Fix the code so we can all go home early.

class Dinglemouse {

    constructor() {
        this.props = {}           
        this.order = []           
    }

    setName(name) {
        if (!this.order.includes('name')) this.order.push('name')
        this.props.name = name
        return this
    }

    setAge(age) {
        if (!this.order.includes('age')) this.order.push('age')
        this.props.age = age
        return this
    }

    setSex(sex) {
        if (!this.order.includes('sex')) this.order.push('sex')
        this.props.sex = sex
        return this
    }

    hello() {
        let parts = ['Hello.']
        for (const prop of this.order) {
            if (prop === 'name') parts.push(`My name is ${this.props.name}.`)
            else if (prop === 'age') parts.push(`I am ${this.props.age}.`)
            else if (prop === 'sex') parts.push(`I am ${this.props.sex === 'M' ? 'male' : 'female'}.`)
        }
        return parts.join(' ')
    }

}