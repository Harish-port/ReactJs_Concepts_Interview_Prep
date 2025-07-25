import { useEffect } from 'react';

const useClickOutside = (ref, onOutsideClick) => {
    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onOutsideClick();
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [ref, onOutsideClick]);
};

export default useClickOutside;
