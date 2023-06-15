// Soldier
class Soldier {

    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -=damage
    }

}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name= name;
    }
    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
            return`${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
            return`A Saxon has received ${damage} points of damage`
        }
        else{
            return `A Saxon has died in combat`
        }

    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    genericAttack(attacker,defender){
        let objectArmies = { "Viking" : this.vikingArmy,
                            "Saxon" : this.saxonArmy}
        
        let indexAttacker = Math.floor(Math.random()*objectArmies[attacker].length);
        let indexDefender = Math.floor(Math.random()*objectArmies[defender].length);
 
        let damage = objectArmies[attacker][indexAttacker].attack();
        let result = objectArmies[defender][indexDefender].receiveDamage(damage);
        let health = objectArmies[defender][indexDefender].health
        if (health<=0){
            objectArmies[defender].splice(indexDefender,1);
        }
        return result;
        

        
    }
    vikingAttack(){
        return this.genericAttack('Viking','Saxon')
        /*let indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let indexViking= Math.floor(Math.random()*this.vikingArmy.length);
        
        let damage = this.vikingArmy[indexViking].attack();
        
        let result = this.saxonArmy[indexSaxon].receiveDamage(damage);
        if (this.saxonArmy[indexSaxon].health<=0){
            this.saxonArmy.splice(indexSaxon,1);
        }
        return result;*/
        
    }
    saxonAttack(){
        return this.genericAttack('Saxon','Viking')
        /*let indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let indexViking= Math.floor(Math.random()*this.vikingArmy.length);
        
        let damage = this.saxonArmy[indexSaxon].attack();
        
        let result = this.vikingArmy[indexViking].receiveDamage(damage);
        if (this.vikingArmy[indexViking].health<= 0){
            this.vikingArmy.splice(indexViking,1);
        }
        return result;*/

    }
    showStatus(){
        if(this.saxonArmy.length==0){
            return  "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length==0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
