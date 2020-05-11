const React = require('react')

module.exports = {
    title: 'Kea 2.0',
    tagline: 'Production Ready State Management for React',
    url: 'https://kea.js.org',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'keajs',
    projectName: 'kea',
    themeConfig: {
        navbar: {
            title: 'Kea 2.0',
            logo: {
                alt: 'Kea Logo',
                src: 'img/logo.svg',
            },
            hideOnScroll: true,
            links: [
                {
                    to: 'docs/introduction/what-is-kea',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/keajs/kea',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'What is Kea?',
                            to: 'docs/introduction/what-is-kea',
                        },
                        {
                            label: 'Core Concepts',
                            to: 'docs/guide/concepts',
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/keajs/kea',
                        },
                    ],
                },
                {
                    title: 'Support Kea',
                    items: [
                        {
                            label: 'OpenCollective',
                            href: 'http://opencollective.com/kea',
                        },
                        {
                            label: 'GitHub Sponsors',
                            href: 'https://github.com/sponsors/mariusandra',
                        },
                    ],
                },
                {
                    title: 'Give a star!',
                    items: [
                        {
                            html: `<iframe src="https://ghbtns.com/github-btn.html?user=keajs&amp;repo=kea&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px" style="vertical-align: sub;"></iframe>`,
                        },
                    ],
                },
            ],
            copyright: `<br/>Copyright © 2015-${new Date().getFullYear()} <a href='https://twitter.com/mariusandra' style='color:var(--ifm-footer-color);text-decoration: underline;'>Marius Andra</a> and other Kea contributors.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/keajs/kea-docs/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
}
