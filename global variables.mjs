console.log = (message) => {
    let div = document.getElementById("console");
    div.innerHTML += message + "<br />";
    div.scrollTop = div.scrollHeight;
}

window.onerror = (message, source, lineno, colno, error) => {
    console.log(
        message + "<br>"
        + "source: " + source + "<br>"
        + "line number: " + lineno + "<br>"
        + "column number: " + colno + "<br>"
    );
};


export let chunkSize = 16;
export let quadrantSize = chunkSize/4;
export let miniQuadrantSize = QuadrantSize/4;
export let chunks = {};
/* chunk format: quadtree? but different? idk
    chunks = {
        "x,y": { 16x16 block
            "0,0": { 4x4 block
                "0,0": block,
                "1,0": block,
                "0,1": block,
                "1,1": block
            "next coord, etc": {},
            so this part is what's cool.
            if all the blocks are the same, it's one big block, and can be rendered faster probably
            "filled": true,
            "filledWith": block
            },
        } 
    }
*/