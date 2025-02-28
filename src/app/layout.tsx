type Children = {
	children: React.ReactNode
}
export const metadata = {
  title: 'My PWA',
  description: 'Это пример Progressive Web App на Next.js',
  theme_color: '#ffffff',
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
