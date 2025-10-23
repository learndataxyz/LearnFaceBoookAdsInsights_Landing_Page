// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'LearnFacebookAds Insights - AI-Powered Facebook Ads Analytics',
	siteDescription:
		'Connect your Facebook Ads data to Google Sheets. Get AI-powered insights and automation for Shopify stores, digital agencies, and freelancers.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'LearnFacebookAds Insights logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
