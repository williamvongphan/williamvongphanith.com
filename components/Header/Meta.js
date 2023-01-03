// Meta component
// This component is used to display the meta information of the page based on the props passed to it. It is used in the Layout component.

// Load default meta info from config
import config from '../../config/meta.json'

export default function Meta({ title, keywords, description }) {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charset="utf-8" />
			<meta name="keywords" content={keywords || config.keywords} />
			<meta name="description" content={description || config.description} />

		</Head>
	)
}