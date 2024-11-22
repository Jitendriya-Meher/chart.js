/* eslint-disable no-unused-vars */
import { Pie } from 'react-chartjs-2'
import { data } from './data'
import { Chart as ChartJS } from 'chart.js/auto'

const PieChart = () => {

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
            Pie Chart
        </h1>

        <div className="" style={{
            height: 400
        }}>

            <Pie data={garphData}></Pie>

        </div>

    </div>
  )
}

export default PieChart