import { Line } from "react-chartjs-2";
import { chart as chartJS } from "chart.js/auto"

const miDataLine = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [{
        data: [10, 20, 5, 50, 45, 60, 15],
        fill: false,
        tension: 0.1,
        borderColor: 'rgba(0, 88, 255)',
        borderWidth: 2,
        pointRadius: 0
    }],
}

const miOption = {
    scales: {
        x: {
            grid: {
                color: function (context) {
                    return context.index === 0 ? ("rgba(255, 255, 255)") : ("rgba(0, 0, 0, 0)")
                }
            }
        },
        y: {
            grid: {
                color: function (context) {
                    return context.index === 0 ? ("rgba(255, 255, 255)") : ("rgba(0, 0, 0, 0)")
                }
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
    },
}

function UserGraphLine() {
    return <Line data={miDataLine} options={miOption} />
}

export default UserGraphLine