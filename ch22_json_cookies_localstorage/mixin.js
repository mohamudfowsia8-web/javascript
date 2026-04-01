const canEat = {
    eat() {
        console.log(this.name + " is eating");

    
    }
    };

    const canwalk = {
        walk() {
            console.log(this.name + " is walking");
        }
        };

        class person {
            constructor(name){
                this.name = name;
            }
        }

        // const p1 = new person("Ali");
        // console.log(p1)

        Object.assign(person.prototype, canEat, canwalk);
        const p1 = new person("Ali");
        p1.eat()
        p1.walk()
        

    
