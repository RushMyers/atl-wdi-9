# source 'https://rubygems.org'
require 'pry'

shopping_list = ['peanuts', 'apple', 'coffee', 'pretzel sticks', 'fruit snacks', 'pretzel nuggets']
@words = ["hello", "what", "is", "up", "dude"]

def lengths(arr)
  arr.map do |word|
  word.length
  end
end

lengths(@words)

# ========fizzbuzz==========

def fizzbuzz
    (0..20).each do |num|
    if num % 3 == 0 && num % 5 == 0
      puts "fizzbuzz"
    elsif num % 3 == 0
      puts "fizz"
    elsif num % 5 == 0
      puts "buzz"
    else
      puts num
    end
  end
end

fizzbuzz

# ========starts with 'A'=========

if shopping_list[1].start_with? 'a'
  puts "yes"
else
  puts "Srry, doesn't have A"
end

# =====even?======

puts shopping_list.length.even?

# ======== square =========

puts "first item is #{shopping_list[0].length} letters long"

square = shopping_list[0].length**2

puts "the square is #{square} letters"

puts "give me a number to add to it"

response = gets.chomp

puts "#{square.to_i + response.to_i}"

# =========numbered=========

@num = 1

shopping_list.each  do |item|
  puts " #{@num.to_i} #{item} "
  @num += 1
end

shopping_list.each_with_index do |item, index|
  puts " #{ index + 1 }. #{item} "
end


