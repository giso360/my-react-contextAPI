import React from 'react'
import { Consumer } from "./Context"

function Child() {

    return (
        <Consumer>
            {context => (
                <div>
                    <h1>Child Component</h1>
                    {context.people.map(person => {
                        return (
                            <div>
                                <p key={person.id}>
                                    Hi, I am {person.name} and I am {person.age} years old.
                                    <button onClick={context.inc} style={{marginLeft: 2}}>+</button>
                                    <button onClick={context.dec} style={{marginLeft: 2}}>-</button>
                                </p>                                    
                            </div>
                        )
                    })}

                </div>
            )}
        </Consumer>
    )
}

export default Child