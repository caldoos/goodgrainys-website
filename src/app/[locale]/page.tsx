import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, Arrow, Grid, SmartImage } from '@/once-ui/components';
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources'; 
import { Connect } from '@/components/Connect';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	const t = await getTranslations();
    const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { home, about, person, connect, gallery } = renderContent(t) as any;

    return (
        <div>
            {/* Spline Animation Section */}
            <div style={{
                width: '100vw',
                height: '100vh',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                marginTop: '-4rem',
                marginBottom: '0',
                position: 'relative'
            }}>
                <iframe
                    src='https://my.spline.design/parallaxinteractivewebsiteclassic-265e0c430c253c339b351c81f029c09a/'
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                    frameBorder="0"
                />
            </div>

            {/* Your Original Layout */}
            <Flex
                maxWidth="m" fillWidth gap="xl"
                direction="column" alignItems="center">
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebPage',
                            name: home.title,
                            description: home.description,
                            url: `https://${baseURL}`,
                            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
                            publisher: {
                                '@type': 'Person',
                                name: person.name,
                                image: {
                                    '@type': 'ImageObject',
                                    url: `${baseURL}${person.avatar}`,
                                },
                            },
                        }),
                    }}
                />
                <Flex
                    fillWidth
                    direction="column"
                    paddingY="l" gap="m">
                    <Flex
                        direction="column"
                        fillWidth maxWidth="s" gap="m">
                        <RevealFx translateY="4">
                            <Heading
                                wrap="balance"
                                variant="display-strong-l">
                                {home.headline}
                            </Heading>
                        </RevealFx>
                        <RevealFx translateY="8" delay={0.2}>
                            <Flex fillWidth>
                                <Text
                                    wrap="balance"
                                    onBackground="neutral-weak"
                                    variant="heading-default-xl">
                                    {home.subline}
                                </Text>
                            </Flex>
                        </RevealFx>
                        <RevealFx translateY="12" delay={0.4}>
                            <Flex fillWidth>
                                <Button
                                    id="about"
                                    data-border="rounded"
                                    href={`/${locale}/about`}
                                    variant="tertiary"
                                    size="m">
                                    <Flex gap="8" alignItems="center">
                                        {about.avatar.display && (
                                            <Avatar
                                                style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
                                                src={person.avatar}
                                                size="m"/>
                                        )}
                                        {t("about.title")}
                                        <Arrow trigger="#about"/>
                                    </Flex>
                                </Button>
                            </Flex>
                        </RevealFx>
                    </Flex>
                </Flex>
            </Flex>

            {/* Gallery and Other Sections Container */}
            <div style={{ 
                width: '90vw', 
                maxWidth: '1600px',
                margin: '0 auto',
                paddingLeft: '2rem',
                paddingRight: '2rem'
            }}>
                <Flex 
                    fillWidth 
                    direction="column" 
                    gap="24">
                    <RevealFx translateY="4">
                        <Heading
                            as="h2"
                            variant="display-strong-xs"
                            wrap="balance">
                            {gallery.title}
                        </Heading>
                    </RevealFx>
                    <div style={{ width: '100%' }}>
                        <MasonryGrid />
                    </div>
                </Flex>

                {/* Blog Section */}
                {routes['/blog'] && (
                    <Flex
                        fillWidth gap="24"
                        mobileDirection="column">
                        <Flex flex={1} paddingLeft="l">
                            <Heading
                                as="h2"
                                variant="display-strong-xs"
                                wrap="balance">
                                Latest from the blog
                            </Heading>
                        </Flex>
                        <Flex flex={3} paddingX="20">
                            <Posts range={[1,2]} columns="2" locale={locale}/>
                        </Flex>
                    </Flex>
                )}

                {/* Connect Section */}
                {connect.display && (
                    <Flex
                        fillWidth
                        direction="column"
                        gap="24">
                        <RevealFx translateY="4">
                            <Heading
                                as="h2"
                                variant="display-strong-xs"
                                wrap="balance">
                                {connect.title}
                            </Heading>
                            <Text
                                wrap="balance"
                                onBackground="neutral-weak"
                                variant="body-default-l">
                                {connect.description}
                            </Text>
                        </RevealFx>
                        <RevealFx translateY="8">
                            <Connect connect={connect} />
                        </RevealFx>
                    </Flex>
                )}
            </div>
        </div>
    );
}
