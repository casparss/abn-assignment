import { makeStyles } from "@material-ui/core";

export const useShowDetailsStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        columnGap: '3em',
        rowGap: '3em'
    }
}));

export const useCoverStyles = makeStyles((theme) => ({
    titleBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cover: {
        width: '300px'
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));

export const useInfoStyles = makeStyles((theme) => ({
    listContaier: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const useSeasonsStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1),
        }
    },
}));

export const useCastStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1),
        }
    },
}));




export default useShowDetailsStyles;