import React from 'react'
import { Link } from 'react-router-dom'
import { BlogPost } from '../../common/interfaces'

export interface BlogPostBoxProps extends BlogPost {
}

function BlogPostBox({date, title, assetUrl, idBlurb}: BlogPostBoxProps) {
  const dateDigit = date.getDate().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  });
  const monthDigit = date.getMonth().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  });
  return (
    <Link to={`/blog/${idBlurb}`}>
        <div className="flex items-center" >
            <div>
                <h4>{monthDigit}-{dateDigit}-{date.getFullYear()}</h4>
            </div>
            <span className="mx-5">
              {"|"}  
            </span>
            <div>
                <h4>{title}</h4>
            </div>
        </div>
    </Link>
  )
}

export default BlogPostBox