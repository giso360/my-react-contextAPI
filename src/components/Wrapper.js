import React, { Component } from 'react'
import { Provider } from './Context'
import Child from './Child'
import Test from './Test'
import Test2 from './Test2'
import Test3 from './Test3'

class Wrapper extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            people: [
                { id: 0, name: "Bob", age: 24 },
                { id: 1, name: "Jack", age: 22 },
                { id: 2, name: "Jill", age: 26 },
            ],
            current: 0,
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

    // increase = (k) =>{
    //     const g = this.state.people;
    //     const f = this.state.current;
    //     const k = [];
    //     g.forEach(person => {
    //         let a = {};
    //         a.id = person.id;
    //         a.name = person.name;
    //         if(person.id===f){
        
    //             a.age = person.age + 1
    //             console.log("OK " + a.age) 
    //         } else{
    //             a.age = person.age;
    //             console.log("OK " + a.age) 
    //         }
    //         k.push(a);
    //     })
    //     this.setState({
    //         people: k
    //     })
        
    // }

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
                <hr/>
                <Test2/>
                <hr/>

                


            </React.Fragment>
        )
    }
}
export default Wrapper
