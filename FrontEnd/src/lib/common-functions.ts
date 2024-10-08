export const getAverage = (numbers: number[]): number => {
    return numbers.reduce((number, i) => number + i, 0) / numbers.length;
}

const deepEqual = (obj1: any, obj2: any): boolean => {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
};


export const arraysAreEqual = <T>(arr1: T[], arr2: T[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!deepEqual(arr1[i], arr2[i])) {
            return false;
        }
    }

    return true;
};