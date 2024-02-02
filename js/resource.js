document.addEventListener("DOMContentLoaded", function () {
  i18next.init({
    lng: "pt-BR", // Idioma padrão
    resources: {
      "pt-BR": {
        translation: {
          quem_somos: "Quem somos",
          atuacao: "Atuação",
          servicos: "Projetos",
          contato: "Contato",
          address: "Endereço",
          hour: "Segunda à sexta das 08:00h às 18:00h",
          close: "Fechar",
          email: "*E-mail",
          carreira: "Carreira",
          footer_description:
            "Com a força dos vikings transformando cliques em conquistas.",
          back_to_top: "Voltar ao topo",

          hero_subtitle: "Bem-vindo à Valhalla Digital",
          hero_title: "Desbravamos o ",
          hero_title_span: "território digital",

          hero_description:
            "Com a força dos vikings transformando cliques em conquistas virtuais. A saga da sua presença online começa conosco.",
          hero_button: "Comece um projeto",
          hero_sfcc: "Projetos SFCC",
          hero_lp: "Landing pages",

          about_us: "Sobre nós",
          about_description:
            "Somos uma equipe de jovens cujas jornadas digitais se entrelaçaram em projetos ousados, tanto em terras brasileiras quanto além-mar. Cada membro carrega a bagagem da exploração incansável dos caminhos do ciberespaço, esculpindo o panorama online com doses generosas de criatividade e inovação. Nossas habilidades são forjadas nas diversas batalhas do mundo digital, onde enfrentamos desafios em uma variedade de projetos, abrangendo não apenas o Brasil, mas também os horizontes globais.",
          about_mission_description:
            "Fornecer soluções de tecnologia de ponta para nossos clientes que agreguem valor e impulsionem o crescimento de seus negócios, por meio de uma abordagem colaborativa e de parceria.",
          about_vision: "Somos uma equipe de jovens destemidos",

          resources_title: "Atuação",
          resources_description:
            "Seja para dar vida a uma nova marca, expandir sua presença digital ou impulsionar suas vendas online , a Valhalla Digital está aqui para transformar suas aspirações em realidade.",
          resources_lp: "Landing Pages Persuasivas",
          resources_lp_description:
            "Transformamos visitantes em clientes com landing pages envolventes, destacando seus produtos ou serviços para capturar leads e incentivar ações.",
          resources_blog: "Blogs Dinâmicos",
          resources_blog_description:
            "Conteúdo é crucial online. Criamos blogs que informam e engajam, com layouts intuitivos, design responsivo e SEO otimizado, tornando-se uma fonte confiável para seu público.",

          resources_commerce: "E-commerces de Alto Desempenho",
          resources_commerce_description:
            "Maximize suas vendas online com e-commerces visualmente atraentes e funcionais. De navegação fácil a checkout seguro, nossas soluções são projetadas para uma experiência de compra sem atritos.",

          resources_projects: "Projetos",
          resources_projects_description: "Confira alguns dos nossos projetos!",
          resources_seeprojects: "Ver projeto",

          contact_title:
            "Embarque nesta Jornada Épica com os Vikings Digitais!",
          contact_description:
            "Pronto para desbravar os mares digitais e conquistar territórios online? Estamos aqui para forjar estratégias digitais robustas e projetos incríveis. Entre em contato com os Vikings Digitais e prepare-se para uma aventura única na criação online!",
          contact_name: "*Nome:",
          contact_tel: "*Celular:",
          contact_company: "Empresa:",
          contact_msg: "Mensagem:",
          contact_send: "Enviar",
        },
      },
      en: {
        translation: {
          quem_somos: "About Us",
          atuacao: "Activities",
          servicos: "Projects",
          contato: "Contact",
          address: "Address",
          hour: "Monday to Friday from 8:00 am to 6:00 pm",
          close: "Close",
          email: "*Email",
          carreira: "Career",
          footer_description:
            "With the strength of the Vikings transforming clicks into achievements.",
          back_to_top: "Back to the top",

          hero_subtitle: "Welcome to Valhalla Digital",
          hero_title: "We explore ",
          hero_title_span: "digital territory",
          hero_description:
            "With the strength of Vikings, turning clicks into virtual triumphs. The saga of your online presence begins with us.",
          hero_button: "start a project",
          hero_sfcc: "SFCC Projects",
          hero_lp: "Landing pages",

          about_us: "About Us",
          about_description:
            "We are a team of young people whose digital journeys have been intertwined in bold projects, both in Brazil and abroad. Each member carries the baggage of tireless exploration of the paths of cyberspace, sculpting the online panorama with generous doses of creativity and innovation. Our skills are forged in the diverse battles of the digital world, where we face challenges in a variety of projects, spanning not only Brazil, but also global horizons.",

          about_mission_description:
            "Provide cutting-edge technology solutions to our clients that add value and drive their business growth, through a collaborative and partnership approach.",
          about_vision: "We are a team of fearless young people",

          resources_title: "Areas of expertise",
          resources_description:
            "Whether you want to bring a new brand to life, expand your digital presence or boost your online sales, Valhalla Digital is here to turn your aspirations into reality.",

          resources_lp: "Persuasive Landing Pages",
          resources_lp_description:
            "We turn visitors into customers with engaging landing pages, highlighting your products or services to capture leads and encourage action.",

          resources_blog: "Dynamic Blogs",
          resources_blog_description:
            "Content is crucial online. We create blogs that inform and engage, with intuitive layouts, responsive design and optimized SEO, becoming a trusted source for your audience.",

          resources_commerce: "High Performance E-commerce",
          resources_commerce_description:
            "Maximize your online sales with visually attractive and functional e-commerce sites. From easy navigation to secure checkout, our solutions are designed for a frictionless shopping experience.",

          resources_projects: "Our projects",
          resources_projects_description: "Check out some of our projects!",
          resources_seeprojects: "See project",

          contact_title: "Embark on this Epic Journey with Digital Vikings!",
          contact_description:
            "Ready to explore the digital seas and conquer territories online? We are here to forge robust digital strategies and incredible projects. Get in touch with Digital Vikings and get ready for a unique adventure in online creation!",
          contact_name: "*Name:",
          contact_tel: "*Phone:",
          contact_company: "Company:",
          contact_msg: "Message:",
          contact_send: "To send",
        },
      },
    },
  });

  // Função para mudar o idioma quando o usuário selecionar um novo idioma
  document
    .getElementById("selectLanguage")
    .addEventListener("change", function () {
      const newLanguage = this.value;
      i18next.changeLanguage(newLanguage);
    });

  // Função para atualizar a tradução quando o idioma é alterado
  i18next.on("languageChanged", () => {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = i18next.t(key);
      // console.log(key, element.textContent);
    });
  });
});
