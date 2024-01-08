class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random() 
    }
    getSignature(): number{
return this.signature
}


}
class Person{
    private key: Key;
    constructor(key: Key) { this.key = key }
    getKey(): Key{return this.key}

}

abstract class House{
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = []
    constructor(key: Key) { this.key = key }
    
    abstract openDoor(key: Key): void
    
    comeIn(person: Person): void{
        if (this.door) {
            this.tenants.push(person);
            console.log('Привіт дім')
        }
        else {
            console.log('Будинок заблоковано')
        }
    }

}
class MyHouse extends House{
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door == true;
            console.log('Двері відчинено')
        }
        else {
            console.log('Invalid key. Двері залишаються зачинені!')
        }
    }
}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};