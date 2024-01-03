import {useState} from "react";
import {AddCategory, GifGrid} from "./components/index.js";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory onNewCategory={(event) => onAddCategory(event)}/>
            {
                categories.map(category => <GifGrid key={category} category={category}/>)
            }
        </>
    )
}