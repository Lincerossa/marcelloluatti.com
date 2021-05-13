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
      metaDescription: "Marcello Luatti | About",
      metaImage: null,
      componentIds: ["RichText_about"]
    },
    {
      slug: "projects",
      label: "Projects",
      metaTitle: "Marcello Luatti | Projects",
      metaDescription: "Marcello Luatti | List of Projects",
      metaImage: null,
      componentIds: ["RichText_projects", "ListOfCards_projects"]
    },
    {
      slug: "blog",
      label: "Blog",
      metaTitle: "Marcello Luatti | Blog",
      metaDescription: "Marcello Luatti | Blog",
      metaImage: null,
      componentIds: ["RichText_blog"]
    },
    {
      slug: "hobby",
      label: "Hobby",
      metaTitle: "Marcello Luatti | Hobby",
      metaDescription: "Marcello Luatti | Hobby",
      metaImage: null,
      componentIds: ["RichText_hobby"]
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
      text: "<h2>List of my projects</h2><p>I love so much when it comes to describe them through cards ❤️</p>",
      background: theme.colors.secondary,
      color: "white",
      padder: "large",
      wrapper: "large",
    },
    {
      id: "RichText_about",
      component: "RichText",
      text: "<p>My name is Marcello Luatti. I'm a 30 year old Front End Engineer based by the <strong>Lake Como</strong> ☀️.</br> I describe myself as ....🤔 </br>  In my free time you can find me hiking 🛹, at the gym 🏋️‍♂️, at the beach 🏖 or playing guitar somewhere 🎸</p>",
      background: theme.colors.secondary,
      color: "white",
      padder: "large",
      wrapper: "large",
    },
    {
      id: "RichText_blog",
      component: "RichText",
      text: "<h2>Coming soon...⏰</h2>",
      background: theme.colors.secondary,
      color: "white",
      padder: "large",
      wrapper: "large",
    },
    {
      id: "RichText_hobby",
      component: "RichText",
      text: "<h2>Coming soon...⏰</h2>",
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
          tags: ["React",  "Styled-components", "Bpmn", "Cra"],
          subtitle: "Business Process Modeling Notation",
        },
        {
          slug: "projects/asutkin",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935351/marcelloluatti.com/Screenshot_2021-05-13_at_21.46.57_lqx2wf.png"} ,
          supertitle: "personal blog",
          title: "Asutkin",
          tags: ["Next",  "Pagebuilder", "React", "Netlify"],
          subtitle: "Personal blog for our hikings",
        },
        {
          slug: "projects/godoo",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934295/marcelloluatti.com/Screenshot_2021-05-13_at_21.30.23_zuwq54.png"} ,
          supertitle: "website",
          title: "Godoo website",
          tags: ["React",  "Styled-components", "Gatsby", "Pagebuilder"],
          subtitle: "product website developed with gatsby + Pb",
        },
        {
          slug: "projects/salini",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"} ,
          supertitle: "dashboard",
          title: "Salini Impregilo",
          tags: ["React", "Cra", "Styled-components", "Prisma"],
          subtitle: "Complex management dashboard tool",
        },
        {
          slug: "projects/corneliani",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934560/marcelloluatti.com/Screenshot_2021-05-13_at_21.35.07_g8q5by.png"} ,
          supertitle: "ecommerce",
          title: "Corneliani ecommerce",
          tags: ["React", "Next", "Graphql", "Nodejs server"],
          subtitle: "Really beautiful and fast ecommerce",
        },
        {
          slug: "projects/fai",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934997/marcelloluatti.com/Screenshot_2021-05-13_at_21.42.21_ef54qh.png"} ,
          supertitle: "istutuzionale",
          title: "Fondoambiente",
          tags: ["React", "Next", "Styled-components", "Aws"],
          subtitle: "Huge and super beautiful project",
        },

        {
          slug: "projects/moleskine",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934715/marcelloluatti.com/Screenshot_2021-05-13_at_21.37.58_r85ej1.png"} ,
          supertitle: "blog",
          title: "Moleskine blog",
          tags: ["Scss", "Es6", "Webpack"],
          subtitle: "Really nice company blog website",
        },

        {
          slug: "projects/supermoney",
          image:{src:"https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935554/marcelloluatti.com/Screenshot_2021-05-13_at_21.52.16_cmrbqe.png"} ,
          supertitle: "Product",
          title: "Supermoney",
          tags: ["Es6", "Bem", "Webpack"],
          subtitle: "Product website (comparative)",
        },


      ],
      background: "white",
      color: theme.colors.primary,
      padder: "large",
      wrapper: "large",
    },

  ]
}

module.exports = data