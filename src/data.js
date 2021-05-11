const data = {
  routes: [
    {
      slug: "",
      label: "Marcello Luatti",
      metaTitle: "Marcello Luatti | CavLince",
      metaDescription: "Marcello Luatti description",
      metaImage: null,
      hidden: true,
      componentIds: ["R3F_homepage", "RichText_homepage"]
    },
    {
      slug: "projects",
      label: "projects",
      metaTitle: "Marcello Luatti | CavLince",
      metaDescription: "Marcello Luatti description",
      metaImage: null,
      componentIds: ["RichText_homepage"]
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
      text: "Prova 2",
    },
    {
      id: "RichText_homepage",
      component: "RichText",
      text: "Prova",
      background: "red",
      padder: "large",
    },

  ]
}

module.exports = data