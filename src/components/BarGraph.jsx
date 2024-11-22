/* eslint-disable no-unused-vars */
import { Bar } from 'react-chartjs-2'
import { data } from './data'
import { Chart as ChartJS } from 'chart.js/auto'

const BarGraph = () => {

    const barData = {
        labels: data.map((d) => (d.year)),
        datasets: [
            {
                label: "Counts",
                data : data.map((d) => (d.count)),
                backgroundColor: ['red', 'green', 'blue'],
                borderColor: ['black','yellow'],
                borderWidth: 2
            }
        ]
    }

  return (
    <div>

        <h1>
            Bar Graph
        </h1>

        <div className="" style={{
            width: 700
        }}>

            <Bar data={barData}></Bar>

        </div>

    </div>
  )
}

export default BarGraph