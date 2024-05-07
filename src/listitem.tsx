import { FC } from "react";
import "./todolist.css"


export interface Props{
    title: string;
    content: string;
    priority: number;
     resolved: boolean;
}

export const Listitem:FC<Props> = ({title, content, resolved}) => {
     const itemClassName = resolved ? "listitem-resolved" : "listitem-unresolved";
    return(
        <>
        <div className={`listitem ${itemClassName}`}>
           <h3 className="itemtitle">{ title } </h3>
           <p className="content">{content}</p>
        </div>
        </>
    )
}