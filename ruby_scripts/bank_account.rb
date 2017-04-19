# instance vars: name, balance (use attr_reader for these)

# methods: deposit(amount) and withdraw(amount) that affect the balance

# a to_s method that prints the name and the balance

# Test your code by creating two BankAccount objects, a "Checking" and a "Savings".

# Make some deposits and withdrawals and print the accounts using puts.

class BankAccount
  attr_reader :name, :balance

  def initialize(name, balance)
    @name = name
    @balance = balance
  end

  def deposit(amount)
    @balance = @balance + amount
  end
  def withdrawal(amount)
    @balance = @balance - amount
  end
end
