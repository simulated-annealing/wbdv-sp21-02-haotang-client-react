import React, { useState } from 'react'

export const ParagraphWidget = ({widget, editing}) => {
    const [content, setContent] = useState(widget.text)

    return (<>
    {
        editing &&
        <textarea value={content}>

        </textarea> 

    }
    {
        !editing && 
        <p>
            {widget.text}
        </p>
    }
    </>)
} 