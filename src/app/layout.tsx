type Children = {
	children: React.ReactNode
}
export const metadata = {
  title: 'prod-front',
  theme_color: '#000',
  icons: {},
};

const RootDefault = ({ children }: Children) => {
	return (
		<html lang={"en"}>
			<body>
				{ children }
			</body>
		</html>
	)
}
export default RootDefault
