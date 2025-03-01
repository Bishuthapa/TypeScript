interface ball {
    name: string
    color: "white" | "black";

}

interface character extends ball {
    size: "small" | "medium" | "large";
}

const football: character = {
    name: "football",
    color: "black",
    size: "medium"

}

for (const key in football) {
    if (football.hasOwnProperty(key)) {
        console.log(`${key}: ${football[key as keyof character]}`);
    }
}