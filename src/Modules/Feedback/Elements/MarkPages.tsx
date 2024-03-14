import { Select, Space } from "antd";
import { Fragment } from "react/jsx-runtime";
import { IoIosArrowForward } from "react-icons/io";

import { CustomDivider } from "../../../Components";

export const MarkPages = () => {
	return (
		<Fragment>
			<CustomDivider children="Markpages" />
			<Space direction="vertical" style={{ width: "100%" }}>
				<Select
					defaultValue=""
					options={[]}
					size={"large"}
					style={{ marginBottom: ".5rem", width: "100%" }}
					suffixIcon={<IoIosArrowForward size={"18"} />}
				/>
				<Select
					defaultValue=""
					options={[]}
					size={"large"}
					style={{ width: "100%" }}
					suffixIcon={<IoIosArrowForward size={"18"} />}
				/>
			</Space>
		</Fragment>
	);
};
