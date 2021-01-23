import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useCarouselStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'row',
            overflowY: 'auto'
        },
        sliderContainer: {
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 2,
            overflow: 'hidden'
        },
        slider: {
            display: 'flex',
            flexDirection: 'row',
        },
        title: {
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            marginRight: theme.spacing(1)
        },
        paddle: {
            borderRadius: 0
        }
    })
);

export default useCarouselStyles;