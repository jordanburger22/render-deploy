import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentContainer() {

    const [isHidden, setIsHidden] = useState(true)

    function toggleView(){
        setIsHidden(!isHidden)
    }

    return ( 
        <div>
            <CommentForm />
            <button onClick={toggleView}>{isHidden ? 'Show Comments' : 'Hide Comments'}</button>
            {!isHidden && <CommentList />}
        </div>
     );
}

export default CommentContainer;
