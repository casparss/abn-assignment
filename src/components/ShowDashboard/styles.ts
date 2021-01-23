import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useShowCarouselStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: theme.spacing(2)
        },
        title: {
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            marginRight: theme.spacing(1)
        }
    })
);

export const useShowItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: 220,
            width: 140,
            marginRight: theme.spacing(1),
            flexShrink: 0
        },
        media: {
            height: 140,
        }
    })
);