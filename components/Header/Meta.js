import config from '../../config/meta.json'
import Head from "next/head";

export default function Meta({ title, keywords, description }) {
	// Print the title, keywords, and description
	return (
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="keywords" content={keywords || config.keywords} />
				<meta name="description" content={description || config.description} />
				<meta name="author" content={config.author} />
				<meta name="theme-color" content={config["theme-color"]} />
				<meta name="og:title" content={title || config.title} />
				<meta name="og:description" content={description || config.description} />
				<meta name="og:type" content="website" />
				<meta name="og:url" content={config.url} />
				<meta name="og:site_name" content={config.title} />
				<meta name="og:image" content={`${config.image}`} />
				<meta name="og:image:alt" content={config.description} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content={config.twitter} />
				<meta name="twitter:creator" content={config.twitter} />
				<meta name="twitter:title" content={title || config.title} />
				<meta name="twitter:description" content={description || config.description} />
				<meta name="twitter:image" content={`${config.image}`} />
				<title>{title ? `${title} | ${config.title}` : config.title}</title>

				<link rel="stylesheet" href="https://use.typekit.net/dtd7qbi.css"></link>
			</Head>
	)
}