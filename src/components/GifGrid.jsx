import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <p>Loading...</p>}
            <div className={"card-grid"}>
                {images.map((img) => (
                    <GifItem
                        key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}