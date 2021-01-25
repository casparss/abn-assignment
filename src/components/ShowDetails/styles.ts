import { makeStyles } from "@material-ui/core";

export const useShowDetailsStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        columnGap: '1.5em',
        rowGap: '1.5em'
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
    avatar: {
        backgroundColor: theme.palette.secondary.main
    }
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
    image: {
        width: '100px'
    }
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
    castItemContainer: {
        border: `1px solid ${theme.palette.grey[100]}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1)
    }
}));

export const useCardStyles = makeStyles((theme) => ({
    titleBar: {
        padding: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.grey[200]}`
    },
    title: {
        color: theme.palette.primary.main
    },
    main: {
        padding: theme.spacing(2)
    }
}));

export default useShowDetailsStyles;