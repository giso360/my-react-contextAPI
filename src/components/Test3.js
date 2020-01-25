// This class is the POC for backward/forward action


import React, { Component } from 'react'




export default class Test3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    id: 1,
                    name: "cat",
                    imageUrl: "https://bit.ly/2sSTt2A",
                    title: "My Pet Cat",
                    subtitle: "The cat is either a house cat, a farm cat or a feral cat; latter ranges freely and avoids\
                     human contact. Domestic cats are valued by humans for companionship and for their ability to hunt rodents\
                     About 60 cat breeds are recognized by various cat registries." ,
                    status: true
                },
                {
                    id: 2,
                    name: "dog",
                    imageUrl: "https://bit.ly/2RIIyB0",
                    title: "My Pet Dog",
                    subtitle: "The domestic dog (Canis lupus familiaris when considered a subspecies of the wolf or Canis \
                        familiaris when considered a distinct species)] is a member of the genus Canis (canines), which forms\
                         part of the wolf-like canids.",
                    status: false
                },
                {
                    id: 3,
                    name: "lizard",
                    imageUrl: "https://bit.ly/3aHoHLi",
                    title: "My Pet Lizard",
                    subtitle: "Lizards are a widespread group of squamate reptiles, with over 6,000 species,\
                     ranging across all continents except Antarctica, as well as most oceanic island chains. \
                     The group is paraphyletic as it excludes the snakes and Amphisbaenia",
                    status: false
                },
                {
                    id: 4,
                    name: "parrot",
                    imageUrl: "https://bit.ly/36kYgHL",
                    title: "My Pet Parrot",
                    subtitle: "Parrots, also known as psittacines are birds of the roughly 393 species in 92 genera\
                     comprising the order Psittaciformes, found mostly in tropical and subtropical regions.",
                    status: false
                }
            ]

        }
    }

    clickMeNext = () => {
        const g = this.state.data;
        
        let liveIndex = this.getCurrentlyShownIndex();
        let newArray = [];
        g.map((pet) => {
            const { id, name, imageUrl, title, subtitle } = pet;
            
            let a = { id, name, imageUrl, title, subtitle };
   
            if(pet.id === liveIndex){
                a.status = !pet.status;
            }
            if(pet.id === liveIndex + 1){
                a.status = !pet.status;
            }
            if(liveIndex === this.getMinMax()[1]){
                a = pet
            }
            newArray.push(a);
        });
        this.setState({
            data: newArray
        })        
    }
    
    clickMePrevious = () => {        
        const g = this.state.data;
        const l = g.length;
        let liveIndex = this.getCurrentlyShownIndex();
        let newArray = [];
        g.map((pet) => {
            const { id, name, imageUrl, title, subtitle } = pet;
            let a = { id, name, imageUrl, title, subtitle };   
            if(pet.id === liveIndex){
                a.status = !pet.status;
            }
            if(pet.id === liveIndex - 1){
                a.status = !pet.status;
            }
            if(liveIndex === this.getMinMax()[0]){
                a = pet
            }
            newArray.push(a);
        });
        this.setState({
            data: newArray
        })

    }

    getMinMax = () =>{        
        const g = this.state.data;
        const u = [];
        const res = [];
        g.map((p) => {
            u.push(p.id);
        })
        res.push(Math.min(...u));
        res.push(Math.max(...u));     
        return res;        
    }
    
    // Helper functiom
    getCurrentlyShownIndex = () => {
        let a = this.state.data.filter(p => p.status === true);
        // alert(`${a[0].id} : ${typeof(a[0].id)}`)
        return a[0].id;
    }

    render() {
        return (
            <div>                
                {this.state.data.map((pet, i) => (
                    <div key={i}>
                        {pet.status ?
                            <>
                            <img src={pet.imageUrl} style={{width: 300, height:300}}/>
                            <h1>{pet.title}</h1>
                            <hr />
                            <p>{pet.subtitle}</p>
                            <hr />
                            <hr />
                            </> : ""
                    }
                    </div>
                )
                )}
                <button onClick={this.clickMeNext}>NEXT</button>
                <button onClick={this.clickMePrevious}>PREVIOUS</button>
            </div>
        )
    }
}
