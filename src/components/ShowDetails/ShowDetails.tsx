import React, { useRef } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/StoreProvider";
import useShowDetailsStyles from "./styles";
import Cover from "./Cover";
import Info from "./Info";
import Cast from "./Cast";
import Seasons from "./Seasons";

export const ShowDetails = observer(() => {
    const classes = useShowDetailsStyles();
    const { showId } = useParams<{ showId: string }>();
    const { show: showStore } = useStore();
    const { current: showModel } = useRef(
        showStore.selectShowModelById(Number(showId))
    );

    if (!showModel) {
        return null;
    }

    return (
        <div className={classes.container}>
            <Cover showModel={showModel} />
            <Info showModel={showModel} />
            <Seasons showModel={showModel} />
            <Cast showModel={showModel} />
        </div>
    );
});

export default ShowDetails;
