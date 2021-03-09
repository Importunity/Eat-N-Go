import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
    let domNode = useRef();
    useEffect(() =>{
        const checkHandler = (event) => {
            if(!domNode.current.contains(event.target)){
                callback();
            }
        };
        document.addEventListener("mousedown", checkHandler);
        return () => {
            document.removeEventListener("mousedown", checkHandler);
        };
    });
    return domNode;
};

export default useOutsideClick;
