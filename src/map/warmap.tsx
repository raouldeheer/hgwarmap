import image from "hagcp-assets/images/background.webp";
import { lazy, useState } from "react";
// @ts-expect-error
import { MapInteractionCSS } from "react-map-interaction";
import { useWarState } from "../warStateContext";

const Sector = lazy(() => import('./Sector'));

const totalWidth = 16384;
const totalHeight = 11520;

const numberOfChunks = 16;
const baseWidth = totalWidth / numberOfChunks;
const baseHeight = totalHeight / numberOfChunks;

const Warmap = (): JSX.Element => {
    const warState = useWarState();
    const [warid, setWarid] = useState("");
    warState.onNewWar = setWarid;

    const sectors = [];
    for (let x = 0; x < numberOfChunks; x++) {
        for (let y = 0; y < numberOfChunks; y++) {
            sectors.push(<Sector x={x} y={y} />);
        }
    }

    return (
        <MapInteractionCSS
            minScale={0.1}
            defaultValue={{ scale: 0.1, translation: { x: 0, y: 0 } }}
        >
            <img
                id={warid}
                src={image}
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: `${baseWidth * numberOfChunks}px`,
                    height: `${baseHeight * numberOfChunks}px`,
                }}
                alt="background map"
            />
            {sectors}
        </MapInteractionCSS>
    );
};

export default Warmap;
