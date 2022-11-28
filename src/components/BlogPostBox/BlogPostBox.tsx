import React from 'react'
import { Link } from 'react-router-dom'
import { BlogPost } from '../../common/interfaces'

export interface BlogPostBoxProps extends BlogPost {
}

function BlogPostBox({date, title, assetUrl, idBlurb}: BlogPostBoxProps) {
  return (
    <Link to={`/blog/${idBlurb}`}>
        <div className="flex items-center" >
            <div>
                <h4>{date.toLocaleString()}</h4>
            </div>
            <div>
                <h4>{title}</h4>
            </div>
        </div>
    </Link>
  )
}

export default BlogPostBox