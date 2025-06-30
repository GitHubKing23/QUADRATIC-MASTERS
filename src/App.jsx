import EquationForm from './components/EquationForm'
import SolutionSteps from './components/SolutionSteps'
import Graph from './components/Graph'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Quadratic Solver</h1>
      <EquationForm />
      <SolutionSteps />
      <Graph />
    </div>
  )
}

export default App
