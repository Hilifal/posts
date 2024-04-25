type PostProps = {
    title: string,
    text: string,
    autorName: string,
    key?: number
}

function Post({text,title,autorName}:PostProps){
    return(
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <i>{autorName}</i>
        </div>
    )
}

export default Post