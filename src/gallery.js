import React from 'react';
import Posting from './posting';

export default function Gallery({postings}){
    return (
        <div className='Gallery'>
            <ul>
                {postings.map(post => {
                    return <Posting key={post.title}{...post}/>
                })}
            </ul>
        </div>
    )
  }

