import { Children } from "@/shared/models/chilren.js";
import { Menu } from "@/shared/menu";

const UserLayout = ({ children }: Children) => {
	return (
		<>
			{ children }
			<Menu />
		</>
	)
}
export default UserLayout;
