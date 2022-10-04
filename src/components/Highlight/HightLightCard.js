import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' }
        if (props.type === 'recovered') return { borderLeft: '5px solid #28a745' }
        else return { borderLeft: '5px solid gray' }
    },
    title: {
        fontSize: 18, marginBottom: 5,
    },
    count: {
        fontWeight: 700,
        fontSize: 18
    }
})


export default function HightLightCard({ title, count, type }) {
    const styles = useStyles({ type });



    return (
        <Card className={styles.wrapper}>
            <CardContent>
                <Typography className={styles.title} component={'p'} variant={'body2'}>{title}</Typography>
                <Typography className={styles.count} component={'span'} variant={'body2'}>{count}</Typography>
            </CardContent>
        </Card>
    )
}