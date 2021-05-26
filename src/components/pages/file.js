import React, { useState, useEffect } from 'react'

export default function file() {
    const [data, setData] = useState([])
    const [files, setFiles] = useState([])

    const apiCalls = async () => {
        let localData = []

        await fetch("https://may24th-file-share-api-aoj.herokuapp.com/file/get/data")
        .then(response => response.json())
        .then(responseData => {
            setData(responseData)
            localData = responseData
        })
        .catch(error => console.log(error))

        const filesContainer = []
        localData.forEach(async fileData => {
            await fetch(`https://may24th-file-share-api-aoj.herokuapp.com/file/get/${fileData.id}`)
            .then(response => console.log(response.blob()))
            .then(blobData => {
                const file = new File([blobData], fileData.name, { type: fileData.type })
                filesContainer.push(file)
            })
            .catch(error => console.log(error))
        })
        setFiles(filesContainer)
    }

    useEffect(() => {
        apiCalls()
    }, [])

    const renderFiles = () => {
        return files.map(file => {
            return (
                <div className="file-wrapper">
                    <h3>{file.name}</h3>
                </div>
            )
        })
    }

    return (
        <div className='file-wrapper'>
            <h3>File</h3>
            <hr/>
            {renderFiles()}
        </div>
    )
}