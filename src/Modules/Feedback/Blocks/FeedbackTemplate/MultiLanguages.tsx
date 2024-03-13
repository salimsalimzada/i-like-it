import { Fragment } from "react/jsx-runtime";
import { CiCirclePlus } from "react-icons/ci";

import { CustomButton, CustomDivider } from "../../../../Components";

export const MultiLanguages = () => {
	return (
		<Fragment>
			<CustomDivider children="Multi Languages" />

			<CustomButton
				alignment="left"
				icon={<CiCirclePlus />}
				style={{ marginBottom: ".75rem" }}
				type="default"
			>
				English
			</CustomButton>

			<CustomButton alignment="left" icon={<CiCirclePlus />} type="default">
				Add new language
			</CustomButton>
		</Fragment>
	);
};
