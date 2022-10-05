import { Grid } from "@mui/material";
import HightLightCard from "./HightLightCard";



export default function Highlight({ report }) {

    // const data = report && report.length ? report[report.leng - 1] : [];
    // const sumary = [
    //     {
    //         title: 'Số ca nhiễm',
    //         count: data.Confirmed,
    //         type: 'confirmed',
    //     },
    //     {
    //         title: 'khỏi',
    //         count: data.Recovered,
    //         type: 'recovered',
    //     },
    //     {
    //         title: 'Tử vong',
    //         count: data.Deaths,
    //         type: 'death',
    //     }
    // ]

    return (
        <Grid container spacing={3}>
            {/* {
                sumary.map((item) => 
                <Grid item sm={4} xs={12} >
                    <HightLightCard  title={item.title} count={item.count} type={item.type} />
                </Grid>)
            } */}

        </Grid>
    )
}