import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

const tambahTodo = () => {
  if (input.trim() === "") return
  setTodos([...todos, input])
  setInput("")
}

const hapusTodo = (index) => {
  setTodos(todos.filter((_, i) => i !== index))
}

return (
  <div style={{ maxWidth: 500, margin: "40px auto", padding: "0 20px" }}>
    <h1>Todo App React</h1>

    {/* Input dan tombol tambah */}
    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambahkan tugas..."
        style={{ flex: 1, padding: "8px 12px", borderRadius: 6, border: "1px solid #ddd" }}
        />
        <button onClick={tambahTodo}>Tambah</button>
    </div>

    {/* Daftar todos */}
    {todos.map((todo, index) => (
      <div key={index} style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", border: "1px solid #ddd", borderRadius: 8, marginBottom: 8 }}>
        <p>{todo}</p>
        <button onClick={() => hapusTodo(index)}>Hapus</button>
      </div>
    ))}

    {/* Pesan kalau kosong */}
    {todos.length === 0 && (
      <p style={{ textAlign: "center", color: "#aaa" }}>Belum ada tugas.</p>
    )}
  </div>
)

}

export default App