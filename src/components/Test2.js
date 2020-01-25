import React, { Component } from 'react'

export default class Test2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            people: [
                { id: 0, name: "Mark", age: 10, clicked: false },
                { id: 1, name: "Rob", age: 20, clicked: false }
            ]
        }
    }
    
    add = (i) => {
        const b = []
        
        this.state.people.map(person => {
            const indexx = person.id
            const a = {}
            a.id = person.id
            a.name = person.name
            
            
            if(i === person.id){
                console.log(i + "//" + person.id)
                a.age = person.age + 1
                
            } else{
                a.age = person.age

            }
            b.push(a)
        })
        this.setState({
            people: b
        })
    }


    render() {
        const g = this.state.people
        return (
            <div>
                
                {g.map((p, i) => (            
                    <div key={i}>
                        <h1>{p.name}/{p.age}</h1><button id={i} onClick={(event)=>{                   
                            this.add(parseInt(event.target.id));                            
                        }}>+</button>     
                    </div>
                )               
                )}

            </div>
        )
    }
}
