import {DataService, IPhotoDTO} from "../../services/Data/data";
import {useEffect, useState} from "react";
import {Image, notification, Typography} from "antd";

const {Title, Paragraph} = Typography;

export const Photos = () => {
    const [photos, setPhotos] = useState<Array<IPhotoDTO>>([])
    useEffect(() => {
        DataService.getPhotos()
            .then((result) => {
                console.log(photos)
                setPhotos(result.results)
            })
            .catch(() => notification.error({message: "Ошибка при загрузке фото"}))
    }, [])
    return (<>
        <Title>Фотографии</Title>
        <Typography>
            {photos.map((photo) => <>
                <Title>Фотография №{photo.id}</Title>
                <Paragraph>
                    <Image
                        width={200}
                        src={photo.photo}
                    />
                    <div>Дата создания: {new Date(photo.created_at).toLocaleTimeString() + " "
                        + new Date(photo.created_at).toLocaleDateString()}</div>
                </Paragraph>
            </>)}

        </Typography>
    </>)
}