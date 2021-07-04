const middle = (a, b, c) => {
    let x = a - b;

    let y = b - c;
    let z = a - c;

    if (x * y > 0)
        return b;

    else if (x * z > 0)
        return c;
    else
        return a;
}

function scrollTransition(start, end, initial, final, y) {
    const slider = middle(start, y, end)
    return ((initial - final) * slider + (final*start) - (initial*end)) / (start - end);
}

export default scrollTransition;