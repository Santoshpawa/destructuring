const people = [ {  name: "Alice", 
                    address: { city: "New York", 
                                street: { name: "Broadway", 
                                            number: 123 } } }, 
                { name: "Bob", 
                    address: { city: "Los Angeles", 
                        street: { name: "Sunset Boulevard", 
                            number: 456 } } } ];


let person=people.map(({name:n,address:{city:c,street:{name:s}}})=>
                (
                    `${n} lives in ${c} on ${s}`
                ))

console.log(person)