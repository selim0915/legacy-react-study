import { useCallback } from "react";
import CommentItem from "./CommentItem";

export default function CommentList({commentList}) {
    const handleChange = useCallback(() => {
        //alert(`눌림`)
    }, [])

    return (
        <div>
            {commentList.map(comment => 
                <CommentItem
                    key={comment.title}
                    title={comment.title}
                    content={comment.content}
                    likes={comment.likes}
                    onClick={handleChange}
                />
            )}
        </div>
    )
        
}