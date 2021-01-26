import { makeStyles } from "@material-ui/core";
import { fade } from '@material-ui/core/styles';

export const useSearchInputStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: theme.spacing(2),
        width: 'auto',
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            width: '100%'
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%'
    }
}));

export const useHeaderBarStyles = makeStyles((theme) => ({
    title: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
}));
