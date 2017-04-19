class Pet
  attr_reader :type, :age
  attr_accessor :name

  def initialize( name, type, age )
    @name = name
    @type = type
    @age = age
  end

  def to_s
    "#{@name} is a #{@type} and their age is #{@age}."
  end

  def inc_age
    @age += 1
  end

end

miko   = Pet.new("Miko", "Dog", 45)
ginger = Pet.new("Ginger", "Cat", 12)

puts miko.name
puts ginger

miko.name = "michael"
puts miko.name

puts miko.age
miko.inc_age
miko.inc_age
miko.inc_age
puts miko.age
