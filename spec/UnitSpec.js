describe('Unit', function(){
  var unit
  var health, power, defense, position, movement, range

  beforeEach(function(){
    health = Math.floor((Math.random()*10 )+1)
    power = Math.floor((Math.random()*10 )+1)
    defense = Math.floor((Math.random()*10 )+1)
    position = {x:10, y:10}
    movement = Math.floor((Math.random()*2 )+1)
    range = Math.floor((Math.random()*2)+1)
    unit = new Unit(health, power, defense, position, movement, range)
  })

  describe('Functions', function(){
    it('should have a canAttack function', function(){
      expect(typeof(unit.canAttack)).toBe('function')
    })
    it('should have an attack function', function(){
      expect(typeof(unit.attack)).toBe('function')
    })
    it('should have a receive damage function', function(){
      expect(typeof(unit.receiveDamage)).toBe('function')
    })
    it('should have a isDead function', function(){
      expect(typeof(unit.isDead)).toBe('function')
    })
    it('should have a movement function', function(){
      expect(typeof(unit.canMove)).toBe('function')
    })
    it('should have a move function', function(){
      expect(typeof(unit.move)).toBe('function')
    })
  })

  describe('Functions behaviour', function(){
    describe('canAttack', function(){
      it('should permit to attack less or equal than its range', function(){
        unit.range = 2
        expect(unit.canAttack(unit.position.x+1, unit.position.y+1)).toBe(true)
      })
      it('should not permit to attack more than its range', function(){
        unit.range = 2
        expect(unit.canAttack(unit.position.x+2, unit.position.y+2)).toBe(false)
      })
    })
    describe('isDead', function(){
      it('should return if unit is dead', function(){
        unit.health = 0
        expect(unit.health <= 0).toBe(true)
      })
    })
    describe('attack', function(){
      it('should return power attribute', function(){
        expect(unit.attack()).toEqual(power)
      })
    })
    describe('receiveDamage', function(){
      it('should return actual health', function(){
        var actualHealth = health-(power-defense)
        expect(unit.receiveDamage(power)).toEqual(actualHealth)
      })
    })
    describe('canMove', function(){
      it('should permit to move less or equal than its movement', function(){
        unit.movement = 2
        expect(unit.canMove(unit.position.x+1, unit.position.y+1)).toBe(true)
      })
      it('should not permit to move more than its movement', function(){
        unit.movement = 2
        expect(unit.canMove(unit.position.x+2, unit.position.y+2)).toBe(false)
      })
    })
    describe('move', function(){
      it('should move to the designed position', function(){
        var finalPosition = {x: 11, y: 11}
        expect(unit.move(11,11)).toEqual(finalPosition)
      })
    })
  })
})
