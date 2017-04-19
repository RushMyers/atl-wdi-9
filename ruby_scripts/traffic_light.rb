class Traffic_Light
  attr_reader :name, :color

  def initialize(name)
    @name = name
    @color = "red"
  end

  def go_red
    @color = "red"
  end

  def go_yellow
    @color = "yellow"
  end

  def go_green
    @color = "green"
  end

  def next
    if @color == "red"
      @color = "yellow"
    elsif @color == "yellow"
      @color = "green"
    else @color = "red"
    end
  end

  def to_s
    puts "the light at #{@name} is currently #{@color}."
  end
end

