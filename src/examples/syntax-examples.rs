// Rust 示例
fn main() {
    let mut x = 5;
    println!("x 的值是: {}", x);

    // 使用 match 表达式
    match x {
        1 => println!("一"),
        2 => println!("二"),
        _ => println!("其他"),
    }

    // 结构体
    struct Point {
        x: f64,
        y: f64,
    }
}
