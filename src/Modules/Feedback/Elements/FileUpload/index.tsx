import { Upload } from "antd";
import React, { useState } from "react";

import { CustomButton } from "~/Components";

import styles from "./FileUpload.module.css";

export const FileUpload: React.FC = () => {
	const [imageUrl, setImageUrl] = useState<null | string>(null);

	const handleCustomRequest = (options: any) => {
		// just simulate an uploading image
		// because of antd's action url returns cors
		setTimeout(() => {
			const imageUrl = URL.createObjectURL(options.file);
			setImageUrl(imageUrl);
		}, 1000);
	};
	return (
		<div className={styles.imageContainer}>
			{imageUrl ? (
				<img height={250} src={imageUrl} width="100%" />
			) : (
				<>
					<p className={styles.defaultTitle}>Survey logo</p>
					<Upload
						customRequest={handleCustomRequest}
						listType="picture"
						maxCount={1}
					>
						<CustomButton>Browse</CustomButton>
					</Upload>
				</>
			)}
		</div>
	);
};
