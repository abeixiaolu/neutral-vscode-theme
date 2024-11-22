# Ruby 示例
module Greeting
  def greet
    puts "Hello, #{@name}!"
  end
end

class Person
  include Greeting
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  # 符号和块
  def do_something
    [:a, :b, :c].each do |symbol|
      yield symbol if block_given?
    end
  end
end

# 元编程示例
class String
  def palindrome?
    self == self.reverse
  end
end

# 哈希示例
config = {
  host: 'localhost',
  port: 3000,
  debug: true
} 