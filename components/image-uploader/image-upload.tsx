"use client"
import { UploadButton } from "@/lib/uploadthing"

const ImageUpload = () => {
 return <div>
    <UploadButton endpoint={"imageUploader"} />
     </div>
}

export default ImageUpload