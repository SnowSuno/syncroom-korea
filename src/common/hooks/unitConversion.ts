export const remToPx = (rem: number) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
export const pxToRem = (px: number) => {
    return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
}