import axios from 'axios';

const fileUploader = async (file) => {

	const formData = new FormData();
	formData.append('upload_preset', 'test-upload')
	formData.append('cloud_name', 'dkirigha18')
	formData.append('file', file)


	const result = await axios.post("https://api.cloudinary.com/v1_1/dkirigha18/image/upload", formData)

	return result.data.url
}

export default fileUploader