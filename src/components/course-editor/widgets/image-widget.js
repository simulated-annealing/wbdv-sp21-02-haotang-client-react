import React, { useState } from 'react'

const ImageWidget = ({
    editing, 
    cached, 
    setCached}) => {

    const [imgRatio, setImageRatio] = useState(16/9)
    const [keepRaito, setKeepRatio] = useState(false)

    const maxWidth = "752"
    const minWidth = "50"
    const maxHeight = "1024"
    const minHeight = "50"
    
    return (<> 
    {
        editing && <div className="mb-3">
            <label className="form-label colorViolet fontBold Cursor-Pointer" 
                htmlFor="imageURL"> Image URL </label>
            <div className="row">
            <div className="col-12">
            <input id="imageURL" className="form-control Cursor-Pointer" 
                placeholder="Edit image url here" value={cached.url ? cached.url : ""} 
                onChange={e => setCached({
                    ...cached,
                    url: e.target.value
                })}/>
            </div>
            </div>
            <br/>

            <div className="row">
            <div className="col-4">
            <label className="form-label colorViolet fontBold Cursor-Pointer" 
                htmlFor="widthRange"> {`Image Width ${cached.width ? cached.width : minWidth}`} </label>
            </div>
            <div className="col-4">
            <label className="form-label colorViolet fontBold Cursor-Pointer" 
                htmlFor="heightRange"> {`Image Height ${cached.height ? cached.height : minHeight}`} </label>
            </div>
            <div className="col-4">
                <input className="form-check-input" type="radio" name="ratioRadio" id="fixedRatio" 
                    checked={keepRaito} onChange={() => {
                        setCached({
                            ...cached,
                            height: Math.ceil(cached.width/imgRatio)
                        })
                        setKeepRatio(true)
                    }}/>
                <label className="form-check-label colorViolet fontBold Cursor-Pointer" htmlFor="fixedRatio">
                    Keep Original Ratio
                </label>
            </div>
            </div>

            <div className="row">
            <div className="col-4">
            <input type="range" className="form-range imageWHRange"
                min={minWidth} value={cached.width ? cached.width : minWidth} 
                max={maxWidth} id="widthRange" onChange = {e => setCached({
                    ...cached,
                    width: e.target.value,
                    height: keepRaito ? Math.floor(e.target.value/imgRatio) : cached.height
                })}>
            </input>
            </div>
            <div className="col-4">
            <input type="range" className="form-range imageWHRange" disabled={keepRaito}
                min={minHeight} value={cached.height ? cached.height : minHeight} 
                max={maxHeight} id="heightRange" onChange = {e => setCached({
                    ...cached,
                    height: e.target.value
                })}>
            </input>
            </div>
            <div className="col-4">
                <input className="form-check-input" type="radio" name="ratioRadio" id="freeRatio" 
                    checked={!keepRaito} onChange={() => setKeepRatio(false)} />
                <label className="form-check-label colorViolet fontBold Cursor-Pointer" htmlFor="freeRatio">
                    Free Ratio
                </label>
            </div>
            </div>
            <br/>
            <img src={`${cached.url}?nocache=${Date.now}`} id="imageEditWidget" alt="image preview" 
                width={cached.width} height={cached.height} onLoad={({target:img}) => {
                    setImageRatio(img.naturalWidth/img.naturalHeight)
                    setCached({
                        ...cached,
                        height: keepRaito ? Math.floor(cached.width/imgRatio) : cached.height
                    })}}/>
        </div>

    }
    {
        !editing && 
        <img src={cached.url} id="imageEditWidget" alt="image preview" className="Cursor-Pointer" 
            width={cached.width} height={cached.height}/>
    }
    </>)
}

export default ImageWidget