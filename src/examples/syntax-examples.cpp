#include <iostream>
#include <vector>
#include <string>

template<typename T>
class Container {
private:
    std::vector<T> elements;
    
public:
    void add(const T& element) {
        elements.push_back(element);
    }
    
    size_t size() const {
        return elements.size();
    }
};

int main() {
    Container<int> numbers;
    numbers.add(42);
    
    std::string message = "Hello World";
    for(char c : message) {
        std::cout << c << std::endl;
    }
    
    // 智能指针示例
    auto ptr = std::make_unique<int>(100);
    return 0;
} 