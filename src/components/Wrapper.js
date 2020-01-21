import React, { Component } from 'react'
import { Provider } from './Context'
import Child from './Child'
import Test from './Test'

class Wrapper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [
                { id: 0, name: "Bob", age: 24 },
                { id: 1, name: "Jack", age: 22 },
                { id: 2, name: "Jill", age: 26 },
            ],
            inc: this.increase,
            dec: this.decrease,
            
        }
    }

    increase = () =>{
        const g = this.state.people;
        const k = [];
        g.map(person =>{
            let a = {};
            a.id = person.id;
            a.name = person.name;
            a.age = person.age + 1;
            k.push(a);      
        });
        this.setState({
            people: k
        })
    }

    
    decrease = () =>{
        const g = this.state.people;
        const k = [];
        g.map(person =>{
            let a = {};
            a.id = person.id;
            a.name = person.name;
            a.age = person.age - 1;
            k.push(a);      
        });
        this.setState({
            people: k
        })
    }

    render() {
        const stateOne = this.state;
        console.log(stateOne);
        return (
            <React.Fragment>
                <Provider value={stateOne}>
                    <Child />

                </Provider>
                <Test/>
            </React.Fragment>
        )
    }
}
export default Wrapper
