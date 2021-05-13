import theme from './styles/theme'

const data = {
  routes: [
    {
      slug: "",
      label: "Marcello Luatti",
      hiddenLabel: true,
      hiddenFooter: true,
      metaTitle: "Marcello Luatti | Lince",
      metaDescription: "Marcello Luatti description",
      metaImage: null,
      hidden: true,
      componentIds: ["R3F_homepage"]
    },
    {
      slug: "about",
      label: "About",
      metaTitle: "Marcello Luatti | About",
      metaDescription: "List of About",
      metaImage: null,
      componentIds: []
    },
    {
      slug: "projects",
      label: "Projects",
      metaTitle: "Marcello Luatti | Projects",
      metaDescription: "List of Projects",
      metaImage: null,
      componentIds: ["RichText_projects", "ListOfCards_projects"]
    },
    {
      slug: "blog",
      label: "Blog",
      metaTitle: "Marcello Luatti | Blog",
      metaDescription: "List of Blog",
      metaImage: null,
      componentIds: []
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
      text: "<h1>Hi, I am Marcello Luatti</h1><p>Here you have the list of my last projects</p>",
      background: theme.colors.secondary,
      color: "white",
      padder: "large",
      wrapper: "large",
    },
    {
      id: "RichText_projects",
      component: "RichText",
      text: "<h2>Here there is a list of my work projects</h2>",
      background: theme.colors.secondary,
      color: "white",
      padder: "large",
      wrapper: "large",
    },
    {
      id: "ListOfCards_projects",
      component: "ListOfCards",
      items: [
        {
          slug: "projects/bpmn",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png"} ,
          supertitle: "dashboard | bpmn",
          title: "Godoo bpmn",
          tags: ["react",  "styled-components", "bpmn", "cra"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/asutkin",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935351/marcelloluatti.com/Screenshot_2021-05-13_at_21.46.57_lqx2wf.png"} ,
          supertitle: "personal blog",
          title: "Asutkin",
          tags: ["next",  "pagebuilder", "react", "netlify"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/godoo",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934295/marcelloluatti.com/Screenshot_2021-05-13_at_21.30.23_zuwq54.png"} ,
          supertitle: "website",
          title: "Godoo website",
          tags: ["react",  "styled-components", "gatsby", "pagebuilder"],
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
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934560/marcelloluatti.com/Screenshot_2021-05-13_at_21.35.07_g8q5by.png"} ,
          supertitle: "ecommerce",
          title: "Corneliani ecommerce",
          tags: ["react", "next", "styled-components", "graphql"],
          subtitle: "to do",
          content: "",
        },
        {
          slug: "projects/fai",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934997/marcelloluatti.com/Screenshot_2021-05-13_at_21.42.21_ef54qh.png"} ,
          supertitle: "istutuzionale",
          title: "Fondoambiente",
          tags: ["react", "next", "styled-components"],
          subtitle: "to do",
          content: "",
        },

        {
          slug: "projects/moleskine",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934715/marcelloluatti.com/Screenshot_2021-05-13_at_21.37.58_r85ej1.png"} ,
          supertitle: "blog",
          title: "Moleskine blog",
          tags: ["blade", "scss", "es6", "webpack"],
          subtitle: "This was my first blog website made with Alkemy",
          content: "",
        },

        {
          slug: "projects/supermoney",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935554/marcelloluatti.com/Screenshot_2021-05-13_at_21.52.16_cmrbqe.png"} ,
          supertitle: "Product",
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