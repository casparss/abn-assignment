import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useShowDashboardStyles = makeStyles((theme: Theme) =>
    createStyles({
        itemListWrappedRowContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }
    })
);

export const useDashboardControlStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2),
        }
    })
);

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
        },
        ratingContainer: {
            display: 'flex',
            alignItems: 'center'
        }
    })
);