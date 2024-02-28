import Header from "./sections/Header"
import Info from "./sections/Info"

function App() {
  

  return (
    <main className="flex min-w-full p-4">
      <div className="w-2/5 min-h-screen">
      <Header/>
      </div>
      <div className="w-3/5">
        <Info/>
      </div>
    </main>
  )
}

export default App
