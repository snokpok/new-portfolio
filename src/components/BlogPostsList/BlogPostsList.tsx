import React from 'react'
import { BlogPost } from '../../common/interfaces'
import BlogPostBox from '../BlogPostBox/BlogPostBox'
import { InlineLink } from '../Miscs/InlineLink'

interface Props {
    data: BlogPost[]
}

function BlogPostsList({data}: Props) {
  return (
    <div className="flex flex-col items-center">
        {data.map(({title, date, assetUrl, idBlurb}) => {
            return (
                <div className="py-2 hover:underline">
                    <BlogPostBox title={title} date={date} assetUrl={assetUrl} idBlurb={idBlurb}/>
                </div>
            )
        })}
    </div>
  )
}

export default BlogPostsList