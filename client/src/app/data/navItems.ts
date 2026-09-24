interface NavItem {
  linkName: string;
  link?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    linkName: "Home",
    link: "/",
  },
  {
    linkName: "Tech",
    children: [
      {
        linkName: "Career Goals",
        link: "/tech/career-goals",
      },
    ],
  },
  {
    linkName: "Pro UI",
    children: [
      {
        linkName: "UI Guidelines",
        link: "/proui/ui-guidelines",
      },
      {
        linkName: "Colors",
        children: [
          {
            linkName: "Brand Colors",
            link: "/proui/colors/brand",
          },
          {
            linkName: "Semantic Colors",
            link: "/proui/colors/semantic",
          },
        ],
      },
      {
        linkName: "Typography",
        link: "/ui-guidelines/typography",
      },
      {
        linkName: "Components",
        link: "/ui-guidelines/components",
      },
    ],
  },
];