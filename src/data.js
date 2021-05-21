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
const dallara = {
  slug: 'projects/dallara',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1621590784/marcelloluatti.com/Screenshot_2021-05-21_at_11.51.10_en06za.png' },
  title: 'Dallara',
  tags: ['cssdesignawards', 'React', 'Interaction-design'],
  subtitle: 'Dallara stradale (cssdesignawards)',
}
const godoo = {
  slug: 'projects/godoo',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934295/marcelloluatti.com/Screenshot_2021-05-13_at_21.30.23_zuwq54.png' },
  title: 'Godoo website',
  tags: ['React', 'Styled-components', 'Gatsby', 'Pagebuilder'],
  subtitle: 'Product website developed using gatsby + Md',
}

const salini = {
  slug: 'projects/salini',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1621587810/marcelloluatti.com/Screenshot_2021-05-21_at_11.03.06_mot0no.png' },
  title: 'Salini Impregilo',
  tags: ['React', 'Cra', 'Styled-components', 'Prisma'],
  subtitle: 'Complex management dashboard tool',
}

const corneliani = {
  slug: 'projects/corneliani',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934560/marcelloluatti.com/Screenshot_2021-05-13_at_21.35.07_g8q5by.png' },
  title: 'Corneliani ecommerce',
  tags: ['React', 'Next', 'Graphql', 'Nodejs server'],
  subtitle: 'SSR Next ecommerce',
}

const fai = {
  slug: 'projects/fai',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934997/marcelloluatti.com/Screenshot_2021-05-13_at_21.42.21_ef54qh.png' },
  title: 'Fondoambiente',
  tags: ['React', 'Next', 'Styled-components', 'Aws'],
  subtitle: 'Institutional website',
}

const moleskine = {
  slug: 'projects/moleskine',
  image: { src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620934715/marcelloluatti.com/Screenshot_2021-05-13_at_21.37.58_r85ej1.png' },
  title: 'Moleskine blog',
  tags: ['Scss', 'Es6', 'Webpack'],
  subtitle: 'A graphically beautiful blog website',
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
      metaTitle: 'Marcello Luatti',
      metaDescription: 'Front End Engineer based by the Lake Como',
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
      componentIds: ['ListOfCards_projects'],
    },
    {
      slug: 'projects/bpmn',
      label: 'Bpmn',
      metaTitle: 'Marcello Luatti | Bpmn',
      metaDescription: 'Marcello Luatti | Bpmn Project',
      metaImage: null,
      hidden: true,
      componentIds: ['RichText_bpmn', 'Card_bpmn'],
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
      slug: 'projects/dallara',
      label: 'Dallara',
      metaTitle: 'Marcello Luatti | Dallara',
      metaDescription: 'Marcello Luatti | Dallara Project',
      metaImage: null,
      hidden: true,
      componentIds: ['RichText_dallara', 'Card_dallara'],
    },
    {
      slug: 'projects/godoo',
      label: 'Godoo',
      metaTitle: 'Marcello Luatti | Godoo',
      metaDescription: 'Marcello Luatti | Godoo Project',
      metaImage: null,
      hidden: true,
      componentIds: ['RichText_godoo', 'Card_godoo'],
    },
    {
      slug: 'projects/salini',
      label: 'Salini',
      metaTitle: 'Marcello Luatti | Salini',
      metaDescription: 'Marcello Luatti | Salini Project',
      metaImage: null,
      hidden: true,
      componentIds: ['RichText_salini', 'Card_salini'],
    },
    {
      slug: 'projects/corneliani',
      label: 'Corneliani',
      metaTitle: 'Marcello Luatti | Corneliani',
      metaDescription: 'Marcello Luatti | Corneliani Project',
      metaImage: null,
      hidden: true,
      componentIds: ['RichText_corneliani', 'Card_corneliani'],
    },
    {
      slug: 'projects/fai',
      label: 'Fai',
      metaTitle: 'Marcello Luatti | Fai',
      metaDescription: 'Marcello Luatti | Fai Project',
      metaImage: null,
      hidden: true,
      componentIds: ['RichText_fai', 'Card_fai'],
    },
    {
      slug: 'projects/moleskine',
      label: 'Moleskine',
      metaTitle: 'Marcello Luatti | Moleskine',
      metaDescription: 'Marcello Luatti | Moleskine Project',
      metaImage: null,
      hidden: true,
      componentIds: ['RichText_moleskine', 'Card_moleskine'],
    },
    {
      slug: 'projects/supermoney',
      label: 'Supermoney',
      metaTitle: 'Marcello Luatti | Supermoney',
      metaDescription: 'Marcello Luatti | Supermoney Project',
      metaImage: null,
      hidden: true,
      componentIds: ['RichText_supermoney', 'Card_supermoney'],
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
      id: 'Card_dallara',
      component: 'Card',
      ...dallara,
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
      items: [bpmn, asutkin, godoo, dallara, salini, corneliani, fai, moleskine, supermoney],
      background: 'white',
      color: theme.colors.primary,
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_salini',
      component: 'RichText',
      text: `<h2>Salini Impregilo - Dashboard tool</h2>
      <p>Software architecture has been designed for daily purposes of Salini Management team: adding, modifying and displaying different types of complex data.</p><p> Challenged by the data quantity, its complexity and the performance issues, we built a GraphQL server layer upon a Prisma server.</p><p> Thanks to this solution we managed to send to the client the smallest possible payload.</p><p>
      Authentication is handled by Auth0 and the frontend is built with React and Redux and tested with Jest.</p><p> The project is based on AWS (Route 53, EC2, S3 Buckets).</p>`,
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_corneliani',
      component: 'RichText',
      text: `<h2>Corneliani - E-commerce</h2>
      <p>In <a target="_blank" href="https://www.corneliani.com/">this project</a> we managed to use part of the <a href="/projects/fai">previous stack</a>, which involved Next.js, React, Redux, Storybook and Jest for testing purposes.</p>
      <p>Compared to the previous project, we built a GraphQL layer in order to solve issue performances (for example the payload server-client) and other side effects while the application was scaling.</p><p> This layer had the task of handling the communication between the frontend and both Wordpress (for the CMS side) and Magento (the e- commerce side).
      The project is based on AWS.</p>`,
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_fai',
      component: 'RichText',
      text: `<h2>Fondoambiente - Institutional website</h2>
      
      
      <p>The complexity of <a href="https://www.fondoambiente.it/" target="_blank">this project</a> led us to the definition of the new development stack.</p><p> This stack included: Node.js, React, Redux, Next.js with Express, Lerna, Styled components, ES6, Headless Wordpress (as the cms for the data input).</p>
      <p>We learnt the importance and the benefits of UI testing, and of adopting the React patters (hoc, context, redux patterns, render props, compose...) to keep the project reusable, simple and readable while application was scaling.</p>
      <p>The project is based on AWS.</p>`,
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_moleskine',
      component: 'RichText',
      text: `<h2>Fold by Moleskine</h2>
      <p><a href="https://thefoldmag.com/" target="_blank">This project</a> involved: Laravel, Blade, Sass (with BEM Naming), Webpack.</p><p>Working on this Blog gave me a clear understanding of the advantages of adopting a
      structured software architecture and the importance of testing.</p>`,
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_supermoney',
      component: 'RichText',
      text: `<h2>Supermoney</h2><p>I developed the front-end of the new website and several company web applications.</p><p> I was
      involved in the development of single landing pages, as well as the entire information flows
      for lead generation. The realization of the News section raised more than 25.000 daily visualizations.</p><p>Technology:Javascript, CSS3 (Less), Html5, Node.js, Gulp, Webpack, Git, Bootstrap.</p>`,
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_godoo',
      component: 'RichText',
      text: `<p>Update of the old legacy product code, simplification of the product’s architecture</p><p>Development of static websites, library components, npm
      private package</p><p>Technology stack: React, Redux/provider-consumer patterns, styled-components, Cra, Next.js</p>`,
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_bpmn',
      component: 'RichText',
      text: '<p>I have developed from scratch this new tool (SAS) in order to let our clients to create their personal product flows</p><p>Technology stack: React, ES6, Node.js, TDD, Continuous integration, Cra (seo was not required here), versioning and releasing libraries (npm, github actions, semantic versioning, babel).</p>',
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },
    {
      id: 'RichText_dallara',
      component: 'RichText',
      text: '<h2>Dallara Stradale</h2><p>This project was judged by <a href="https://www.cssdesignawards.com/sites/dallara-stradale/35316/" target="_blank">www.cssdesignawards.com</a></p><p>The Technology stack involved: React, styled-components, complex animations (managed using react-spring) and Provider/consumer patterns.</p>',
      background: theme.colors.secondary,
      color: 'white',
      padder: 'large',
      wrapper: 'large',
    },

  ],
};

module.exports = data;
