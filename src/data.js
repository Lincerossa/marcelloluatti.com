import theme from './styles/theme';

const bpmn = {
  slug: 'projects/bpmn',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png' },
  title: 'Godoo bpmn',
  tags: ['React', 'Styled-components', 'Bpmn', 'Cra'],
  subtitle: 'Business Process Modeling Notation',
}

const asutkin = {
  slug: 'projects/asutkin',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935351/marcelloluatti.com/Screenshot_2021-05-13_at_21.46.57_lqx2wf.png' },
  title: 'Asutkin',
  tags: ['Next', 'Pagebuilder', 'React', 'Netlify'],
  subtitle: 'Personal blog for our hikings',
}
const godoo = {
  slug: 'projects/godoo',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934295/marcelloluatti.com/Screenshot_2021-05-13_at_21.30.23_zuwq54.png' },
  title: 'Godoo website',
  tags: ['React', 'Styled-components', 'Gatsby', 'Pagebuilder'],
  subtitle: 'product website developed with gatsby + Pb',
}

const salini = {
  slug: 'projects/salini',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg' },
  title: 'Salini Impregilo',
  tags: ['React', 'Cra', 'Styled-components', 'Prisma'],
  subtitle: 'Complex management dashboard tool',
}

const corneliani = {
  slug: 'projects/corneliani',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934560/marcelloluatti.com/Screenshot_2021-05-13_at_21.35.07_g8q5by.png' },
  title: 'Corneliani ecommerce',
  tags: ['React', 'Next', 'Graphql', 'Nodejs server'],
  subtitle: 'Really beautiful and fast ecommerce',
}

const fai = {
  slug: 'projects/fai',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934997/marcelloluatti.com/Screenshot_2021-05-13_at_21.42.21_ef54qh.png' },
  title: 'Fondoambiente',
  tags: ['React', 'Next', 'Styled-components', 'Aws'],
  subtitle: 'Huge and super beautiful project',
}

const moleskine = {
  slug: 'projects/moleskine',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934715/marcelloluatti.com/Screenshot_2021-05-13_at_21.37.58_r85ej1.png' },
  title: 'Moleskine blog',
  tags: ['Scss', 'Es6', 'Webpack'],
  subtitle: 'Really nice company blog website',
}

const supermoney = {
  slug: 'projects/supermoney',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935554/marcelloluatti.com/Screenshot_2021-05-13_at_21.52.16_cmrbqe.png' },
  title: 'Supermoney',
  tags: ['Es6', 'Bem', 'Webpack'],
  subtitle: 'Product website (comparative)',
}

const data = {
  routes: [
    {
      slug: '',
      label: 'Marcello Luatti',
      layout: 'full',
      metaTitle: 'Marcello Luatti | Lince',
      metaDescription: 'Marcello Luatti description',
      metaImage: 'https://avatars.githubusercontent.com/u/16242899?v=4?s=400',
      hidden: true,
      componentIds: ['R3F_homepage'],
    },
    {
      slug: 'about',
      label: 'About',
      metaTitle: 'Marcello Luatti | About',
      metaDescription: 'Marcello Luatti | About',
      metaImage: null,
      componentIds: ['RichText_about'],
    },
    {
      slug: 'projects',
      label: 'Projects',
      metaTitle: 'Marcello Luatti | Projects',
      metaDescription: 'Marcello Luatti | List of Projects',
      metaImage: null,
      componentIds: ['RichText_projects', 'ListOfCards_projects'],
    },
    {
      slug: 'projects/bpmn',
      label: 'Bpmn',
      metaTitle: 'Marcello Luatti | Bpmn',
      metaDescription: 'Marcello Luatti | Bpmn Project',
      metaImage: null,
      hidden: true,
      componentIds: ['Card_bpmn'],
    },
    {
      slug: 'projects/asutkin',
      label: 'Asutkin',
      metaTitle: 'Marcello Luatti | Asutkin',
      metaDescription: 'Marcello Luatti | Asutkin Project',
      metaImage: null,
      hidden: true,
      componentIds: ['Card_asutkin'],
    },
    {
      slug: 'projects/godoo',
      label: 'Godoo',
      metaTitle: 'Marcello Luatti | Godoo',
      metaDescription: 'Marcello Luatti | Godoo Project',
      metaImage: null,
      hidden: true,
      componentIds: ['Card_godoo'],
    },
    {
      slug: 'projects/salini',
      label: 'Salini',
      metaTitle: 'Marcello Luatti | Salini',
      metaDescription: 'Marcello Luatti | Salini Project',
      metaImage: null,
      hidden: true,
      componentIds: ['Card_salini'],
    },
    {
      slug: 'projects/corneliani',
      label: 'Corneliani',
      metaTitle: 'Marcello Luatti | Corneliani',
      metaDescription: 'Marcello Luatti | Corneliani Project',
      metaImage: null,
      hidden: true,
      componentIds: ['Card_corneliani'],
    },
    {
      slug: 'projects/fai',
      label: 'Fai',
      metaTitle: 'Marcello Luatti | Fai',
      metaDescription: 'Marcello Luatti | Fai Project',
      metaImage: null,
      hidden: true,
      componentIds: ['Card_fai'],
    },
    {
      slug: 'projects/moleskine',
      label: 'Moleskine',
      metaTitle: 'Marcello Luatti | Moleskine',
      metaDescription: 'Marcello Luatti | Moleskine Project',
      metaImage: null,
      hidden: true,
      componentIds: ['Card_moleskine'],
    },
    {
      slug: 'projects/supermoney',
      label: 'Supermoney',
      metaTitle: 'Marcello Luatti | Supermoney',
      metaDescription: 'Marcello Luatti | Supermoney Project',
      metaImage: null,
      hidden: true,
      componentIds: ['Card_supermoney'],
    },
    {
      slug: 'blog',
      label: 'Blog',
      metaTitle: 'Marcello Luatti | Blog',
      metaDescription: 'Marcello Luatti | Blog',
      metaImage: null,
      componentIds: ['RichText_blog'],
    },
    {
      slug: 'hobby',
      label: 'Hobby',
      metaTitle: 'Marcello Luatti | Hobby',
      metaDescription: 'Marcello Luatti | Hobby',
      metaImage: null,
      componentIds: ['RichText_hobby'],
    },
  ],
  components: [
    {
      id: 'R3F_homepage',
      component: 'R3F',
      items: [
        { text: 'About', slug: '/about' },
        { text: 'Projects', slug: '/projects' },
        { text: 'Blog', slug: '/blog' },
        { text: 'Hobby', slug: '/hobby' },
        { text: 'Soon...' },
      ],
    },
    {
      id: 'Card_bpmn',
      component: 'Card',
      ...bpmn,
      wrapper: 'big',
      padder: 'large',
      background: 'white',
    },
    {
      id: 'Card_asutkin',
      component: 'Card',
      ...asutkin,
      wrapper: 'big',
      padder: 'large',
      background: 'white',
    },
    {
      id: 'Card_godoo',
      component: 'Card',
      ...godoo,
      wrapper: 'big',
      padder: 'large',
      background: 'white',
    },
    {
      id: 'Card_salini',
      component: 'Card',
      ...salini,
      wrapper: 'big',
      padder: 'large',
      background: 'white',
    },
    {
      id: 'Card_corneliani',
      component: 'Card',
      ...corneliani,
      wrapper: 'big',
      padder: 'large',
      background: 'white',
    },
    {
      id: 'Card_fai',
      component: 'Card',
      ...fai,
      wrapper: 'big',
      padder: 'large',
      background: 'white',
    },
    {
      id: 'Card_moleskine',
      component: 'Card',
      ...moleskine,
      wrapper: 'big',
      padder: 'large',
      background: 'white',
    },
    {
      id: 'Card_supermoney',
      component: 'Card',
      ...supermoney,
      wrapper: 'big',
      padder: 'large',
      background: 'white',
    },
    {
      id: 'RichText_homepage',
      component: 'RichText',
      text: '<h1>Hi, I am Marcello Luatti</h1><p>Here you have the list of my last projects</p>',
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_projects',
      component: 'RichText',
      text: '<h2>List of my projects</h2><p>I love so much when it comes to describe them through cards ❤️</p>',
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_about',
      component: 'RichText',
      text: "<p>My name is Marcello Luatti. I'm a 30 year old Front End Engineer based by the <strong>Lake Como</strong> ☀️.</br> I describe myself as ....🤔 </br>  In my free time you can find me hiking 🛹, at the gym 🏋️‍♂️, at the beach 🏖 or playing guitar somewhere 🎸</p>",
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_blog',
      component: 'RichText',
      text: '<h2>Coming soon...⏰</h2>',
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_hobby',
      component: 'RichText',
      text: '<h2>Coming soon...⏰</h2>',
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'ListOfCards_projects',
      component: 'ListOfCards',
      items: [bpmn, asutkin, godoo, salini, corneliani, fai, moleskine, supermoney],
      background: 'white',
      color: theme.colors.primary,
      padder: 'large',
      wrapper: 'large',
    },

  ],
};

module.exports = data;
