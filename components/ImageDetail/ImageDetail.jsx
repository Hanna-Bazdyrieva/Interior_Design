import s from "./ImageDetail.module.css";

function ImageDetail({ id }) {
	return <img src={`/images/portfolio/${id}.jpg`} className={s.container} />;
}

export default ImageDetail;
