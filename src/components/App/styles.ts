import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(1)
        }
    })
);

export default useStyles;