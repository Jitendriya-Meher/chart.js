/* eslint-disable no-unused-vars */
import { Scatter } from 'react-chartjs-2'
import { data } from './data'
import { Chart as ChartJS } from 'chart.js/auto'

const ScatterChart = () => {

    const garphData = {
        labels: data.map((d) => (d.year)),
        datasets: [
            {
                label: "Counts",
                data : data.map((d) => (d.count)),
                backgroundColor: ['red', 'green', 'blue','pink','orange','cyan','white'],
                borderColor: ['black'],
                borderWidth: 2
            }
        ]
    }

  return (
    <div>

        <h1>
            Scatter Chart
        </h1>

        <div className="" style={{
            height: 400
        }}>

            <Scatter data={garphData}></Scatter>

        </div>

    </div>
  )
}

export default ScatterChart