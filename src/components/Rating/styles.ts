import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useRatingStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            alignItems: 'center'
        }
    })
);