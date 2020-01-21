import React, { Component } from 'react'

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [
                { name: "Mark", age: 10 },
                { name: "Rob", age: 20 }
            ]
        }
    }

    increaseAge = () => {
        const ar = [];
        this.state.people.map(p => {
            let r = {};
            r.name = p.name;
            r.age = p.age + 1;
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
                        <h1 key={index}>{p.name} / {p.age}</h1>
                    )
                    )}
                    <button onClick={this.increaseAge}>increase age</button>
                    <button onClick={this.decreaseAge}>decrease age</button>
                </div>
            </>
        )
    }

}
