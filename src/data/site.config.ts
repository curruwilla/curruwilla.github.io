interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://uilia.com.br/', // Write here your website url
	author: 'Uilia', // Site author
	title: 'Guias e Reviews Pro de Produtos Tech', // Site title.
	description: 'Análise inteligente e reviews completos de eletrônicos, gadgets e mais. Descubra qual produto comprar e encontre as melhores ofertas na Amazon, Shopee e ML. Curadoria do Dev Uilia.', // Description to display in the meta tags
	lang: 'pt-BR',
	ogLocale: 'pt_BR',
	shareMessage: 'Dá uma olhada neste artigo que achei interessante!', // Message to share a post on social media
	paginationSize: 30 // Number of posts per page
}
