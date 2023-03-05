import { useState } from "react";
import { useMemo } from "react";
import { memo, Profiler } from "react";
import "./Memo.css";

function CommentItem({title, content, likes, onClick}) {
    const [clickCount, setClickCount] = useState(0);

    function onRenderCallback(
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
    ) {
        // Aggregate or log render timings...
        console.log(`actualDuration ${title} : ${actualDuration}`);
    }

    const handleClick = () => {
        onClick();
        setClickCount((prev) => prev+1)
        alert(`${title} 눌림`);
    }

    const rate = useMemo(() => {
        return likes > 10 ? 'good' : 'bad';
    },[likes]);

    return (
        <Profiler id="CommentItem" onRender={onRenderCallback}>
            <div className="CommentItem" onClick={handleClick}>
                <span>{title}</span>
                <br/>
                <span>{content}</span>
                <br/>
                <span>{likes}</span>
                <p>{rate}</p>
                <br/>
                <p>클릭한 수 : {clickCount}</p>
            </div>
        </Profiler>
    )
}

export default memo(CommentItem);