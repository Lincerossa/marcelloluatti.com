import theme from './styles/theme'

const data = {
  routes: [
    {
      slug: "",
      label: "Marcello Luatti",
      metaTitle: "Marcello Luatti | CavLince",
      metaDescription: "Marcello Luatti description",
      metaImage: null,
      hidden: true,
      componentIds: ["R3F_homepage","RichText_homepage"]
    },
    {
      slug: "projects",
      label: "Projects",
      metaTitle: "Marcello Luatti | Projects",
      metaDescription: "List of Projects",
      metaImage: null,
      componentIds: ["Hero_projects", "RichText_projects", "ListOfCards_projects"]
    },
    {
      slug: "blog",
      label: "blog",
      metaTitle: "Marcello Luatti | CavLince",
      metaDescription: "Marcello Luatti description",
      metaImage: null,
      componentIds: ["RichText_homepage"]
    },
  ],
  components: [
    {
      id: "R3F_homepage",
      component: "R3F",
    },
    {
      id: "RichText_homepage",
      component: "RichText",
      text: "<h3>This website is under developement 🚁</h3>",
      background: theme.colors.secondary,
      color: theme.colors.primary,
      padder: "large",
      wrapper: "large",
    },
    {
      id: "Hero_projects",
      component: "Hero",
      image: {
        src: "http://www.unsplash.it/1000/1300"
      },
      supertitle: "work",
      title: "Projects",
      subtitle: "Here I want to show a list of my work projects",
    },
    {
      id: "RichText_projects",
      component: "RichText",
      text: "Here there is a list of my work projects",
      background: theme.colors.secondary,
      color: theme.colors.primary,
      padder: "large",
      wrapper: "large",
    },
    {
      id: "ListOfCards_projects",
      component: "ListOfCards",
      items: [
        {
          slug: "projects/bpmn",
          media:{url:"http://www.unsplash.it/1000/1300"} ,
          supertitle: "dashboard | bpmn",
          title: "Godoo bpmn",
          tags: ["react",  "styled-components", "gatsby"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/godoo",
          media:{url:"http://www.unsplash.it/1000/1300"} ,
          supertitle: "website",
          title: "Godoo website",
          tags: ["react",  "styled-components", "gatsby"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/salini",
          media:{url:"http://www.unsplash.it/1000/1300"} ,
          supertitle: "dashboard",
          title: "Salini Impregilo",
          tags: ["react", "cra", "styled-components", "prisma"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/corneliani",
          media:{url:"http://www.unsplash.it/1000/1300"} ,
          supertitle: "ecommerce",
          title: "Moleskine blog",
          tags: ["react", "next", "styled-components", "graphql"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/fai",
          media:{url:"http://www.unsplash.it/1000/1300"} ,
          supertitle: "istutuzionale",
          title: "Fondoambiente",
          tags: ["react", "next", "styled-components"],
          subtitle: "to do",
          content: "",
        },

        {
          slug: "projects/moleskine",
          media:{url:"http://www.unsplash.it/1000/1300"} ,
          supertitle: "blog",
          title: "Moleskine blog",
          tags: ["blade", "scss", "es6", "webpack"],
          subtitle: "This was my first blog website made with Alkemy",
          content: "",
        },

        {
          slug: "projects/supermoney",
          media:{url:"http://www.unsplash.it/1000/1300"} ,
          supertitle: "product",
          title: "Supermoney",
          tags: ["es6", "bem"],
          subtitle: "to do",
          content: "",
        },


      ],
      background: theme.colors.secondary,
      color: theme.colors.primary,
      padder: "large",
      wrapper: "large",
    },

  ]
}

module.exports = data