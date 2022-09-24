import { memo } from "react";
import { Layer, Stage } from "react-konva";
import sectorsToDraw from "../json/sectors.json";
import { useWarState } from "../warStateContext";
import BattlefieldPoint from "./battlefieldPoint";
import Supplyline from "./supplyline";

const totalWidth = 16384;
const totalHeight = 11520;

const numberOfChunks = 16;
const baseWidth = totalWidth / numberOfChunks;
const baseHeight = totalHeight / numberOfChunks;

const Sector = memo(({
    y,
    x,
}: {
    y: number,
    x: number,
}) => {
    const warState = useWarState();

    const sectorInList = sectorsToDraw.findIndex(
        v => v.index === y * numberOfChunks + x,
    );
    if (sectorInList !== -1) {
        const sectorData = sectorsToDraw[sectorInList];
        return <Stage
            style={{
                position: "absolute",
                top: `${baseHeight * y}px`,
                left: `${baseWidth * x}px`,
                width: `${baseWidth}px`,
                height: `${baseHeight}px`,
            }}
            key={`sector${sectorData.index}`}
            width={baseWidth}
            height={baseHeight}
            offsetX={baseWidth * x}
            offsetY={baseHeight * y}
            listening={false}
        >
            <Layer
                key={`sectorlayer${sectorData.index}`}
                listening={false}
            >
                {sectorData.supsSector.map(e => (
                    <Supplyline
                        key={`supplyline${e}sector${sectorData.index}`}
                        // key={e}
                        id={e}
                        warState={warState} />
                ))}
                {sectorData.bfsSector.map(e => (
                    <BattlefieldPoint
                        key={`battlefield${e}sector${sectorData.index}`}
                        // key={e}
                        id={e}
                        warState={warState} />
                ))}
            </Layer>
        </Stage>;
    }
    return <></>;
});

export default Sector;
