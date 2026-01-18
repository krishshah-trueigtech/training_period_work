export function createCounter (initialValue = 0){
    let count = initialValue;

    const getValue = () => count;
    
    const setValue = (setter) => {
        count = setter(count);
    }

    return {
        increment: () => setValue(prev => prev + 1),
        decrement: () => setValue(prev => prev - 1),
        reset: () => setValue(() => initialValue),
        getValue
    }
};