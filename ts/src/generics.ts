function WrapArray<T>(item: T ) : T[]{
    return [item]
}

WrapArray("Choclate");
WrapArray(55);
WrapArray({flavor: "Coconut"})