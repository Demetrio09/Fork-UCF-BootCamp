import { useEffect, useState } from ("react");

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)
    }, [value, delay]);

    return debouncedValue;
};