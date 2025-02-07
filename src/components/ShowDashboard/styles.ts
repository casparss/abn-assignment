import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useShowDashboardStyles = makeStyles((theme: Theme) =>
    createStyles({
        itemListWrappedRowContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '& > div, a': {
                marginBottom: theme.spacing(1)
            }
        },
        loadingContainer: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        },
        spinner: {
            marginBottom: theme.spacing(1)
        },
        searchResultsText: {
            marginBottom: theme.spacing(3)
        }
    })
);

export const useDashboardControlStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center'
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
            height: 250,
            width: 140,
            marginRight: theme.spacing(1),
            flexShrink: 0,
            justifyContent: 'center'
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'

        },
        media: {
            height: 140,
        },
        ratingContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
);