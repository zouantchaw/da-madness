export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "da.madness",
  description:
    "Welcome to da.madness! Your one-stop solution for event planning.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    }
  ],
  links: {
    twitter: "https://twitter.com/da.madness",
    instagram: "https://instagram.com/da.madness",
  },
}
