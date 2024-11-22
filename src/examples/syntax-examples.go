package main

import "fmt"

func main() {
    // 切片
    numbers := []int{1, 2, 3, 4, 5}
    
    // range 循环
    for i, num := range numbers {
        fmt.Printf("索引:%d 值:%d\n", i, num)
    }
    
    // 结构体
    type Person struct {
        Name string
        Age  int
    }
} 