// 1. Definisikan tipe data menggunakan 'type'
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

// 2. Gunakan tipe tersebut untuk membuat objek
const user1: User = {
  id: 1,
  name: "Alice",
  isActive: true,
};

// 3. Fungsi dengan parameter bertipe User
function greetUser(user: User): string {
  return `Hello, ${user.name}! Your account is ${user.isActive ? "active" : "inactive"}.`;
}

// 4. Panggil fungsi
console.log(greetUser(user1));
