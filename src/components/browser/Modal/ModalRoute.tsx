import React, {useEffect, useState} from "react";

import {ModalClassType} from "../../../modules/modal/modalClass";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {closeModal} from "../../../modules/modal";

interface ModalRouteProps {
    route: ModalClassType,
    children: JSX.Element
}

function ModalRoute({route, children}: ModalRouteProps) {
    const {modalClass} = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();
    const close = () => dispatch(closeModal());

    const show: boolean = (route === modalClass);
    const [render, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
    };

    return (
        render ? (
            <div
                style={{animation: `${show ? "fade-in" : "fade-out"} .18s`}}
                onAnimationEnd={onAnimationEnd}
            >
                <div className="overlay" onClick={close} />
                {children}
            </div>
        ) : null
    );
}

export default React.memo(ModalRoute);
