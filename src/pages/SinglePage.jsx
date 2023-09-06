import { useParams } from 'react-router-dom'

const SinglePage = () => {

    const { slug } =  useParams()

    return(
        <>
        {slug}
        </>
    )

}

export default SinglePage