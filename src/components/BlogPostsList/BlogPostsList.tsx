import React from 'react'
import { BlogPost } from '../../common/interfaces'
import BlogPostBox from '../BlogPostBox/BlogPostBox'

interface Props {
    data: BlogPost[]
}

function BlogPostsList({data}: Props) {
  return (
    <div className="flex flex-col items-center">
        {data.map(({title, date, assetUrl, idBlurb}) => {
            return (
                <div>
                    <BlogPostBox title={title} date={date} assetUrl={assetUrl} idBlurb={idBlurb}/>
                </div>
            )
        })}
    </div>
  )
}

export default BlogPostsList