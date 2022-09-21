import { Grid } from "@mui/material";
import LineChart from "../Charts/LineChart";




export default function Summary(){
    return(
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={[]} />
            </Grid>
            <Grid item sm={4} xs={12}>

            </Grid>
        </Grid>
    )
}