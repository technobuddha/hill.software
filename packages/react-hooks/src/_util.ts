export function changed(a: readonly unknown[], b: readonly unknown[]): boolean {
    return !a.reduce<boolean>((acc, value, index) => acc && b[index] === value, true);
}

export default changed;
