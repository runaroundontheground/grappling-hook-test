import { chunks, quadrantSize, miniQuadrantSize } from "./global variables.mjs";

const makeSpawn = () => {
    chunks["0,0"].filled = true;
    chunks["0,0"].filledWith = "dirt";

    for (let x in range(quadrantSize)) {
        for (let y in range(quadrantSize)) {
            chunks["0,0"] = {
                "filled": true,
                "filledWith": "dirt"
            }
            chunks["0,0"][[x, y].toString()] = {
                "filled": true,
                "filledWith": "dirt"
            }

            for (let x2 in range(miniQuadrantSize)) {
                for (let y2 in range(miniQuadrantSize)) {
                    chunks["0,0"][[x, y].toString()][[x2, y2].toString()] = "dirt";
                }
            }
        }
    }
}

makeSpawn();

console.log(chunks);