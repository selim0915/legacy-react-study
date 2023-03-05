import { useEffect } from "react";
import { useState } from "react"
import CommentList from "./CommentList";

const commentList = [
    {title: "comment1", content: "message1", likes: 1},
    {title: "comment2", content: "message2", likes: 2},
    {title: "comment3", content: "message3", likes: 3},
]
export default function Memo() {
    const [comments, setCommnets] = useState(commentList);

    // 1초마다 게시글 추가하면서 렌더링 범위 확인하기
    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //         setCommnets((prevComments) => [
    //             ...prevComments,
    //             {
    //                 title: `comment${prevComments.length +1}`, 
    //                 content: `message${prevComments.length +1}`, 
    //                 likes: `${prevComments.length +1}`
    //             }
    //         ]);
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, [])

    return <CommentList commentList={comments} />
}