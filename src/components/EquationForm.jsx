import { useState } from 'react'
import { sqrt } from 'mathjs'

function EquationForm() {
  const [coeffs, setCoeffs] = useState({ a: '', b: '', c: '' })
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setCoeffs({ ...coeffs, [e.target.name]: e.target.value })
  }

  const solve = (e) => {
    e.preventDefault()
    const a = parseFloat(coeffs.a)
    const b = parseFloat(coeffs.b)
    const c = parseFloat(coeffs.c)
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || a === 0) {
      setResult('Please enter valid numbers and ensure a \u2260 0.')
      return
    }
    const discriminant = b * b - 4 * a * c
    if (discriminant > 0) {
      const root1 = (-b + sqrt(discriminant)) / (2 * a)
      const root2 = (-b - sqrt(discriminant)) / (2 * a)
      setResult(`Two real roots: ${root1.toFixed(4)}, ${root2.toFixed(4)}`)
    } else if (discriminant === 0) {
      const root = -b / (2 * a)
      setResult(`One real root: ${root.toFixed(4)}`)
    } else {
      setResult('No real roots')
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={solve} className="space-y-2">
        <div className="flex items-center space-x-2">
          <label className="w-4">a</label>
          <input
            type="number"
            name="a"
            value={coeffs.a}
            onChange={handleChange}
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="w-4">b</label>
          <input
            type="number"
            name="b"
            value={coeffs.b}
            onChange={handleChange}
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="w-4">c</label>
          <input
            type="number"
            name="c"
            value={coeffs.c}
            onChange={handleChange}
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Solve
        </button>
      </form>
      {result && <p className="font-semibold">{result}</p>}
    </div>
  )
}

export default EquationForm
