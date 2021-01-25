import { makeStyles } from "@material-ui/core";

export const useShowDetailsStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        columnGap: '3em',
        rowGap: '3em'
    },
    cover: {
        width: '300px'
    }
}));

export default useShowDetailsStyles;