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
      componentIds: ["R3F_homepage", "RichText_homepage", "ListOfCards_projects"]
    },
    {
      slug: "projects",
      label: "Projects",
      metaTitle: "Marcello Luatti | Projects",
      metaDescription: "List of Projects",
      metaImage: null,
      componentIds: ["RichText_projects", "ListOfCards_projects"]
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
      text: "<h2>Here you have the list of my last projects</h2>",
      background: theme.colors.secondary,
      color: theme.colors.primary,
      padder: "large",
      wrapper: "large",
    },
    {
      id: "RichText_projects",
      component: "RichText",
      text: "<h2>Here there is a list of my work projects</h2>",
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
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"} ,
          supertitle: "dashboard | bpmn",
          title: "Godoo bpmn",
          tags: ["react",  "styled-components", "gatsby"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/godoo",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"} ,
          supertitle: "website",
          title: "Godoo website",
          tags: ["react",  "styled-components", "gatsby"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/salini",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"} ,
          supertitle: "dashboard",
          title: "Salini Impregilo",
          tags: ["react", "cra", "styled-components", "prisma"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/corneliani",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"} ,
          supertitle: "ecommerce",
          title: "Moleskine blog",
          tags: ["react", "next", "styled-components", "graphql"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/fai",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"} ,
          supertitle: "istutuzionale",
          title: "Fondoambiente",
          tags: ["react", "next", "styled-components"],
          subtitle: "to do",
          content: "",
        },

        {
          slug: "projects/moleskine",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"} ,
          supertitle: "blog",
          title: "Moleskine blog",
          tags: ["blade", "scss", "es6", "webpack"],
          subtitle: "This was my first blog website made with Alkemy",
          content: "",
        },

        {
          slug: "projects/supermoney",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"} ,
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