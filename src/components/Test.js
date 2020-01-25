import React, { Component } from 'react'

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [
                { id: 1, name: "Mark", age: 10 },
                { id: 2, name: "Rob", age: 20 }
            ],
            current: [1,2]
        }
    }

    // increaseAge = () => {
    //     const ar = [];
    //     this.state.people.map(p => {
    //         let r = {};
    //         r.name = p.name;
    //         r.age = p.age + 1;
    //         ar.push(r);
    //     });
    //     this.setState({
    //         people: ar
    //     })
    // }

    increaseAge = () => {
        const ar = [];
        this.state.people.map(p => {
            let r = {};
            r.name = p.name;
            console.log(p.id)
            if (p.id === this.state.current[0]) {
                r.age = p.age + 1;
            } else {
                r.age = p.age;
            }
            
            ar.push(r);
        });
        
        this.setState({
            people: ar
        })
    }

    decreaseAge = () => {
        const ar = [];
        this.state.people.map(p => {
            let r = {};
            r.name = p.name;
            r.age = (p.age >= 1) ? p.age - 1 : p.age;
            ar.push(r);
        });
        this.setState({
            people: ar
        })
    }

    render() {
        return (
            <>
                <hr />
                <div>
                    {this.state.people.map((p, index) => (
                        <div key={index}>
                            
                                <p>{p.name} / {p.age}
                                    <button onClick={this.increaseAge}>increase age</button>
                                    <button onClick={this.decreaseAge}>decrease age</button>
                                </p>
                           
                        </div>
                    )
                    )}

                </div>
            </>
        )
    }

}
