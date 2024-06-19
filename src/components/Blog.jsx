import React from 'react';

function Blog({title, description, createdDate, createdBy}){
  return(
   <div>
    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">{title}</h2>
                            <h3 className="post-subtitle">{description}</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">{createdBy}</a>
                            on {createdDate}
                        </p>
                    </div>
              
                    <hr className="my-4" />
   </div>
  )
}

export default Blog;