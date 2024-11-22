<?php
// PHP 示例
namespace App\Examples;

class Database {
    private $connection;
    
    public function __construct(string $dsn) {
        $this->connection = new \PDO($dsn);
    }
    
    public function query(string $sql): array {
        return $this->connection->query($sql)->fetchAll();
    }
}

// 特征(Trait)示例
trait Loggable {
    protected function log($message): void {
        error_log("[" . date('Y-m-d H:i:s') . "] $message");
    }
}

// 接口示例
interface Repository {
    public function find(int $id): ?array;
    public function save(array $data): bool;
}

// 闭包示例
$numbers = array_map(function($n) {
    return $n * 2;
}, [1, 2, 3, 4, 5]);
?> 