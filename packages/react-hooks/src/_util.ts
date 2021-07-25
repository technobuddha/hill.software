export function changed(a: readonly unknown[], b: readonly unknown[]) {
    return !a.reduce<boolean>((acc, value, index) => acc && b[index] === value, true);
}

export default changed;
