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
      linkName: "Pro UI",
      children: [
        {
          linkName: "UI Guidelines",
          link: "ui-guidelines",
        },
        {
            linkName: "Colors",
            children: [
              {
                linkName: "Brand Colors",
                link: "/ui-guidelines/colors/brand",
              },
              {
                linkName: "Semantic Colors",
                link: "/ui-guidelines/colors/semantic",
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