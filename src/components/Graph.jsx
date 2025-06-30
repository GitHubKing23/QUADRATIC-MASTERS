import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

function Graph({ a = 1, b = 0, c = 0 }) {
  const xValues = []
  const yValues = []
  for (let x = -10; x <= 10; x += 0.5) {
    const roundedX = parseFloat(x.toFixed(2))
    xValues.push(roundedX)
    yValues.push(a * roundedX * roundedX + b * roundedX + c)
  }

  const data = {
    labels: xValues,
    datasets: [
      {
        label: 'f(x)',
        data: yValues,
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.5)',
        fill: false,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        title: { display: true, text: 'x' },
      },
      y: {
        title: { display: true, text: 'f(x)' },
      },
    },
  }

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded border">
      <Line data={data} options={options} />
    </div>
  )
}

export default Graph
