import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { allBlogPostsMetadata } from '../common/blog';
import { BlogPost } from '../common/interfaces';
import { InlineLink } from '../components/Miscs/InlineLink';

function BlogPostPage() {
    
    const [content,setContent] = useState("");
    const params = useParams();
    const [metaBlog, setMetaBlog] = useState<BlogPost|null>(null);
    useEffect(() => {
        const id =(params as any).id;
        const metaBlog = allBlogPostsMetadata.find(item => item.idBlurb===id)
        // TODO: if can't find blog post then return 404 page.
        if (!metaBlog) return;
        setMetaBlog(metaBlog);
        fetch(metaBlog.assetUrl).then(res=>res.text()).then(text => setContent(text));
    }, [])

  return (
    <div className="flex flex-col items-center">
        <div className="my-5">
            <h1 className="text-2xl">{metaBlog?.title}</h1>
        </div>
        <hr className="w-1/6 mb-4" />
        <div className="flex flex-col items-center px-16 leading-10 font-mono">
        <Markdown
            components={{
                a: ({node, ...props}) => <InlineLink {...props}/>
            }}
        >
            {content}
        </Markdown>
        </div>
    </div>
  )
}

export default BlogPostPage