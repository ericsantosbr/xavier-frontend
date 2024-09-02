import { useParams } from "react-router-dom"

export default function EditStudent () {
    const params = useParams();
    return <>Hello from EditStudent!{params.id}</>
}