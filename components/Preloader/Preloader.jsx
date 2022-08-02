import s from './Preloader.module.scss';
import cn from "classnames";
import {useEffect, useState} from "react";

const Preloader = ({delay}) => {
    const [classes, setClasses] = useState([s.preloader]);

    useEffect(() => {
        const timer = setTimeout(() => setClasses(prev => [...prev, s.fadeOut]), delay);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={cn(classes)}>
            <h1>Weyaland</h1>
            <div role='progressbar'>
                <span/>
            </div>
        </div>
    )
}

export default Preloader;