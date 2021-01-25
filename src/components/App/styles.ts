import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            margin: theme.spacing(3)
        }
    })
);

export default useStyles;