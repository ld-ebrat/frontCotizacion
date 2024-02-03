import { Line } from "react-chartjs-2";
import { chart as chartJS } from "chart.js/auto"

const miData = {
    labels: ["Prueba1", "Prueba2", "Prueba3", "prueba4", "prueba5", "prueba6"],
    datasets: [{
        data: [10, 20, 5, 50, 45, 60],
        fill: false,
        tension: 0.1,
        borderColor: 'rgba(0, 85, 255)',
        borderWidth: 2,
        pointRadius: 0
    }],
}
const miOption = {
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        }
    },
    plugins: {
        legend:{
            display:false
        },
    }
}
function LineGraph() {
    return <Line data={miData} options={miOption} />
}

export default LineGraph