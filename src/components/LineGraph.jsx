/* eslint-disable no-unused-vars */
import { Line } from 'react-chartjs-2'
import { data } from './data'
import { Chart as ChartJS } from 'chart.js/auto'

const LineGraph = () => {

    const garphData = {
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
            Line Graph
        </h1>

        <div className="" style={{
            width: 700
        }}>

            <Line data={garphData}></Line>

        </div>

    </div>
  )
}

export default LineGraph