import HighchartsReact from "highcharts-react-official";
import Highchart, { setOptions } from 'highcharts';
import { useEffect, useState } from "react";









const generateOptions = (data) => {

}




export default function LineChart({ data }) {

    const [options, setOptions] = useState({})

    useEffect(() => {
        setOptions(generateOptions(data));
    }, [data])

    return (
        <div>
            <HighchartsReact
                hightcharts={Highchart}
                option={{ options }}
            />
        </div>
    )
}