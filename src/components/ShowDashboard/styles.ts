import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useShowCarouselStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'row'
        },
        slidesContainer: {
            display: 'flex',
            flexDirection: 'row'
        },
        title: {
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
        }
    })
);

export const useShowItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: 250,
            width: 140
        },
        media: {
            height: 140,
        }
    })
);