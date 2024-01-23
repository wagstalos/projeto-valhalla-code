document.addEventListener("DOMContentLoaded", function () {
  i18next.init({
    lng: "pt-BR", // Idioma padrão
    resources: {
      "pt-BR": {
        translation: {
          quem_somos: "Quem somos",
          atuacao: "Atuação",
          servicos: "Serviços",
          contato: "Contato",
          address: "Endereço",
          hour: "Segunda à sexta das 08:00h às 18:00h",
          close: "Fechar",
          email: "*E-mail",
          carreira: "Carreira",

          hero_title: "Gerando soluções e oportunidades",
          hero_description:
            "Potencializamos o crescimento dos seus negócios, através da implementação e sustentação de soluções estruturadas nas nuvens e serviços Salesforce.",
          hero_button: "Falar com especialista",
          hero_partners: "Conheça nossos parceiros:",

          about_us: "Sobre nós",
          about_description:
            "A empresa Backlgrs , cujo nome se pronuncia “backloggers”, é sua parceira para implementar soluções e ajudá-lo a alcançar seus objetivos. Oferecemos serviços abrangentes, desde a análise de negócios até a implantação do sistema, e acompanhamos você em sua jornada de manutenção e evolução contínua.",
          about_mission: "Missão",
          about_mission_description:
            "Fornecer soluções de tecnologia de ponta para nossos clientes que agreguem valor e impulsionem o crescimento de seus negócios, por meio de uma abordagem colaborativa e de parceria.",
          about_vision: "Visão",
          about_vision_description:
            "Ser a empresa líder em implementação e desenvolvimento de soluções na plataforma Salesforce, fornecendo soluções personalizadas e inovadoras para ajudar nossos clientes a alcançar seus objetivos de negócios.",
          about_values: "Valores",
          about_values_description:
            "Compromisso com a excelência, inovação, integridade e ética profissional.",
          about_100: "+100 projetos",
          about_experience: "+15 anos de mercado",
          about_team: "Equipe especializada",
          about_partner: "Parceiros Salesforce",

          resources_title: "Áreas de atuação",
          resources_description: "Mais de 100 projetos entregues",
          resources_commerce:
            "E-commerce, focado na melhoria da experiência do consumidor e crescimento de vendas.",
          resources_sales:
            "Gerencie as vendas com recursos automatizados. Desde a prospecção de leads até o fechamento.",
          resources_tableu:
            " Gerencie as vendas com recursos automatizados. Desde a prospecção de leads até o fechamento.",
          resources_mkt:
            " Plataforma de análise e visualização de dados. Obtenha insights valiosos para tomadas de decisões.",
          resources_service:
            "Unifique todos os canais de contato, gerencie e automatize a performance no atendimento.",
          resources_mule:
            "Integre todos os seus sistemas e dados. Conecte e unifique APIs para o seu negócio.",
          resources_360:
            "Todos os dados de clientes em um único lugar, conectados em tempo real e gere experiências diferenciadas.",
          resources_seemore: "Ver mais",

          product_knowmore: "SAIBA MAIS",
          product_title: "Nossos Serviços",
          product_description:
            "A Backlgrs pode ajudar sua empresa a implementar e aprimorar soluçõesSalesforce, permitindo que você se concentre em seus negócios principais enquanto cuidamos da implementação e gerenciamento da plataforma.",
          product_consulting: "Consultoria e análise de requisitos",
          product_consulting_txt:
            "Ajudamos a sua empresa a entender suas necessidades de negócios e identificar as soluções Salesforce que melhor atendem às suas necessidades.",
          product_implementation: "Implementação e configuração",
          product_implementation_txt:
            "Implementamos e configuramos soluções e projetos Salesforce de forma personalizada de acordo com a sua regra de negócio.",
          product_support: "Sustentação",
          product_support_txt:
            "Manutenção, suporte e evolução de nuvens e serviços Salesforce, mantendo suas plataformas sempre atualizadas e otimizadas.",
          product_development: "Desenvolvimento personalizado",
          product_development_txt:
            "Criamos soluções específicas e desenvolvemos recursos exclusivos que não são encontrados nas soluções padrão da Salesforce.",
          product_training: "Treinamento e suporte",
          product_training_txt:
            "Ajudamos sua equipe a aprender a utilizar os produtos Salesforce e fornecer suporte contínuo para garantir que sua empresa esteja aproveitando ao máximo a plataforma.",

          contact_title:
            "Estamos aqui para potencializar o sucesso da sua empresa!",
          contact_description:
            "Deixe-nos cuidar disso, enquanto você se concentra no crescimento do seu negócio.",
          contact_name: "*Nome:",
          contact_tel: "*Celular:",
          contact_company: "Empresa:",
          contact_msg: "Mensagem:",
          contact_send: "Enviar",

          carrer_description:
            "Na Backlgrs, investimos em pessoas antes de tudo. Acreditamos que uma equipe feliz e engajada é o caminho para o sucesso, e por isso, estamos sempre em busca de profissionais talentosos e comprometidos que queiram crescer conosco.",
          carrer_sfcc: "Desenvolvedor SFCC",
          carrer_sfdc: "Desenvolvedor SFDC",
          carrer_rh: "Analista de Recursos Humanos",
          carrer_qa: "Quality Assurance",
          carrer_test1:
            "Trabalhar na Empresa Backlgrs é uma experiência única! O cuidado com o colaborador é evidente,com incentivo constante no aprendizado e crescimento profissional. A organização é impecável, com líderes qualificados que criam um clima familiar e acolhedor. Fazer parte de um time de alto nível é motivador e inspirador.",
          carrer_test2:
            "Entrei na Backlgrs como Jr. e não foi fácil muitos desafios e batalhas, mas em todos eu estava acompanhado pelo RH e por gestores extremamente competentes que me desenvolveram e aprimoraram a minha carreira, com conhecimento vivência e apoio tanto no trabalho quanto emocional. A esta empresa feita de pessoas só tenho a agradecer!",
          carrer_test3:
            "A Backlgrs é uma empresa incrível e é extremamente gratificante saber que trabalho em um ambiente onde pessoas são sempre colocadas em primeiro lugar.",
          carrer_test4:
            "A Backlgrs é uma empresa que abre portas e cria oportunidades, me sinto acolhido na equipe e percebo a dedicação de todos em dar o seu melhor e sempre buscar a excelência.",
          carrer_test5:
            "Atuar na Backlgrs é ter a certeza de evolução profissional através da soma de valores e troca de conhecimentos entre prestadores de serviço, empresa e clientes. ",
          carrer_test6:
            "Uma das melhores experiências profissionais que já tive, empresa muito humana e preocupada com o bem-estar do funcionário.",

          modal1_txt1:
            "O Commerce Cloud Salesforce é uma plataforma de comércio eletrônico que permite que as empresas criem e gerenciem lojas online de forma eficiente. Tenha em suas mãos uma série de recursos e ferramentas para impulsionar as operações digitais e proporcione experiências de compra atraentes para os clientes. Abrange várias áreas do comércio eletrônico, incluindo:",
          modal1_txt2:
            "Criação de lojas online: Crie lojas online personalizadas, com designs responsivos e atraentes. Os recursos de criação de catálogos, gerenciamento de produtos e controle de inventário permitem que as empresas exibam seus produtos de forma eficaz e atualizada.",
          modal1_txt3:
            "Experiência de compra personalizada: forneça experiências de compra personalizadas, recomendando produtos com base no comportamento do cliente, histórico de compras e preferências. Isso ajuda a melhorar a relevância das ofertas e aumentar a taxa de conversão.",
          modal1_txt4:
            "Integração de canais: facilita a integração de diferentes canais de venda, como lojas online, dispositivos móveis, redes sociais e marketplaces, obtendo assim, uma experiência de compra omnicanal perfeita. Os clientes podem iniciar uma compra em um canal e concluí-la em outro, mantendo a consistência das informações e preferências.",
          modal1_txt5:
            "Gestão de pedidos e pagamentos: possui recursos de gestão de pedidos e processamento de pagamentos, permitindo que as empresas gerenciem eficientemente o ciclo de vida dos pedidos, rastreiem remessas e forneçam opções de pagamento seguras.",
          modal1_txt6:
            "Personalização e marketing direcionado: Personalize de conteúdo e campanhas de marketing direcionadas com base nas preferências e histórico de compras dos clientes, com segmentação de público, automação de marketing e análise de dados ajudam as empresas a criar experiências personalizadas e relevantes.",
          modal1_txt7:
            "Análise e relatórios: fornece recursos avançados de análise para acompanhar o desempenho das lojas online, monitorar métricas, como taxa de conversão e ticket médio do pedido, além de obter insights sobre o comportamento do cliente. Isso ajuda as empresas a tomar decisões informadas e otimizar suas estratégias de comércio eletrônico.",

          modal2_txt1:
            "É uma plataforma de gerenciamento de vendas. É projetada para ajudar as empresas a gerenciar efetivamente o ciclo de vendas, desde a prospecção inicial até o fechamento do negócio. Obtenha análises e insights, ajudando as equipes de vendas a impulsionar o desempenho, melhorar os resultados e entendendo o comportamento de cada lead.A plataforma oferece uma ampla gama de recursos e funcionalidades, ajudando a otimizar processos e melhorar a eficiência.",
          modal2_txt2:
            "Gerenciamento de contas e contatos: armazene e acesse informações sobre clientes e prospects, incluindo detalhes de contato, histórico de interações, atividades e anotações relevantes.",
          modal2_txt3:
            "Oportunidades e previsão de vendas: acompanhe oportunidades de vendas em diferentes estágios do ciclo de vendas, fornecendo visibilidade sobre a probabilidade de fechamento e auxiliando na previsão de receita.",
          modal2_txt4:
            "Automação de vendas: Inclui recursos como automação de fluxo de trabalho, onde tarefas repetitivas podem ser automatizadas para melhorar a eficiência das equipes de vendas.",
          modal2_txt5:
            "Gestão de leads: Permite o rastreamento e a gestão de leads, desde a geração inicial até a conversão em oportunidades de vendas.",
          modal2_txt6:
            "Colaboração e comunicação: Fornece recursos de colaboração para equipes de vendas, permitindo a comunicação eficaz, o compartilhamento de informações e a colaboração em tempo real.",
          modal2_txt7:
            "Relatórios e análises: Crie e gerencie relatórios e painéis personalizáveis para acompanhar métricas de desempenho, como atividades de vendas, taxas de conversão e receita.",
          modal2_txt8:
            "Além desses recursos, o Sales Cloud Salesforce é altamente personalizável e pode ser integrado a outros produtos da Salesforce, como o Service Cloud, Marketing Cloud e Commerce Cloud, para fornecer uma visão unificada e melhorar a experiência geral do cliente.",

          modal3_txt1:
            "Tableau é uma empresa líder em software de visualização de dados que foi adquirida pela Salesforce em 2019. Também conhecido como Tableau CRM, é uma plataforma de análise e business intelligence (BI) que permite aos usuários explorar, visualizar e analisar dados de maneira intuitiva e interativa.O Tableau Salesforce oferece uma ampla gama de recursos para ajudar as empresas a entender e comunicar insights a partir de seus dados. Alguns dos recursos principais incluem:",
          modal3_txt2:
            "Visualização de dados interativa: Crie visualizações interativas e dinâmicas, como gráficos, mapas, painéis e tabelas, que permitem aos usuários explorar e entender os dados de forma mais eficaz.",
          modal3_txt3:
            "Análise de dados avançada: recursos avançados de análise, como agrupamento, filtragem, cálculos personalizados e análise estatística, permitindo que os usuários descubram padrões, tendências e insights ocultos em seus dados.",
          modal3_txt4:
            "Conexão com várias fontes de dados: A plataforma pode se conectar a uma ampla variedade de fontes de dados, como bancos de dados, planilhas, serviços em nuvem e aplicativos de terceiros, permitindo que os usuários acessem e analisem dados de várias fontes em um único lugar.",
          modal3_txt5:
            "Criação de painéis e relatórios: Crie painéis personalizados e relatórios interativos, fornecendo uma visão consolidada dos dados para comunicação eficaz e compartilhamento de insights com a equipe.",
          modal3_txt6:
            "Integração com outras soluções Salesforce: pode ser integrado perfeitamente com outras soluções Salesforce, permitindo uma análise avançada dos dados gerados nessas plataformas.",
          modal3_txt7:
            "Recursos de autoatendimento: É projetada para permitir que os usuários de negócios explorem e analisem dados por conta própria, sem depender exclusivamente de especialistas em análise de dados.",
          modal3_txt8:
            "O Tableau Salesforce desempenha um papel fundamental na estratégia de análise e BI, permitindo que as empresas tomem decisões baseadas em dados, descubram insights valiosos e comuniquem visualmente os resultados. Ele oferece uma experiência intuitiva e acessível, tornando a análise de dados mais acessível e útil para usuários em todos os níveis de uma organização.",

          modal4_txt1:
            "O Marketing Cloud Salesforce oferece uma variedade de recursos e ferramentas para ajudar as empresas a criar, automatizar e personalizar campanhas de marketing direcionadas aos seus clientes e prospects.O Marketing Cloud Salesforce, CRM nº 1 do mundo, permite que as empresas gerenciem todos os aspectos de suas estratégias de marketing digital em um só lugar.",
          modal4_txt2:
            "Automação de marketing: automatize funcionalidades para criar jornadas personalizadas do cliente. Isso inclui envio automatizado de e-mails, segmentação de público-alvo com base em comportamento e interações anteriores, pontuação de leads e personalização de conteúdo.",
          modal4_txt3:
            "E-mail marketing: Crie e envie campanhas de e-mail personalizadas e segmentadas. É possível criar templates de e-mail, automatizar sequências de e-mails, acompanhar métricas de desempenho, como taxas de abertura e cliques, e realizar testes A/B para otimizar as campanhas.",
          modal4_txt4:
            "Gestão de campanhas multicanal: coordene campanhas em vários canais, incluindo e-mail, mídias sociais, mensagens SMS, WhatsApp e notificações push. É possível criar mensagens personalizadas e acompanhar o desempenho em cada canal.",
          modal4_txt5:
            "Personalização de conteúdo: crie de conteúdos dinâmicos e personalizados com base em dados do cliente, permitindo que as empresas ofereçam experiências mais relevantes.",
          modal4_txt6:
            "Análise e relatórios: fornece recursos de análise para acompanhar o desempenho das campanhas, entender o envolvimento do público-alvo e fazer ajustes com base nos resultados. Relatórios e painéis personalizáveis fornecem insights sobre métricas de marketing.",
          modal4_txt7:
            "Além disso, o Marketing Cloud Salesforce oferece integração com outros produtos da Salesforce, como o Sales Cloud, Service Cloud, Commerce Cloud e muito mais. Para uma visão unificada do cliente e uma experiência de marketing mais coesa, conte também com a ajuda do Einstein, a IA que trará insights que impulsionará a análise de dados e resultados de forma ágil e eficiente.",

          modal5_txt1:
            "O Service Cloud oferece uma variedade de recursos e ferramentas para ajudar as empresas a fornecer um serviço excepcional aos seus clientes, gerenciar casos e resolver problemas de maneira eficiente. Permite que as empresas ofereçam suporte aos clientes em vários canais, como telefone, e-mail, redes sociais, WhatsApp e autoatendimento online. Alguns dos recursos principais incluem:",
          modal5_txt2:
            "Central de atendimento: fornece uma visão centralizada de todos os casos de atendimento ao cliente, permitindo que as equipes de suporte acompanhem e gerenciem os pedidos de suporte de forma eficiente. Isso inclui a capacidade de criar, atribuir e rastrear casos, além de priorizá-los com base em regras de negócio.",
          modal5_txt3:
            "Automação de atendimento: Crie automações para acelerar o processo de atendimento ao cliente. Isso inclui bots de respostas automáticas, roteamento inteligente de casos com base em regras de negócio e criação de fluxos de trabalho automatizados para a resolução de problemas comuns.",
          modal5_txt4:
            "Base de conhecimento: possibilita que as empresas criem uma base de conhecimento centralizada com artigos e recursos úteis para os clientes. Isso ajuda a fornecer respostas rápidas e consistentes, além de permitir que os clientes encontrem soluções para seus problemas por meio do autoatendimento.",
          modal5_txt5:
            "Integração de canais: Integre vários canais de atendimento ao cliente, como e-mail, telefone, WhatsApp e redes sociais. Isso ajuda as empresas a fornecerem um serviço consistente e personalizado em todos os pontos de contato.",
          modal5_txt6:
            "Análise e relatórios: analise resultados para acompanhar o desempenho do atendimento ao cliente, monitorar métricas de satisfação do cliente e identificar áreas de melhoria. Relatórios e painéis personalizáveis fornecem insights sobre a eficácia do serviço de suporte.",
          modal5_txt7:
            "Além disso, o Service Cloud Salesforce pode ser integrado com outros produtos e nuvens da Salesforce, para fornecer uma visão completa e unificada do cliente em todas as interações. Atendimento ao cliente baseada em nuvem que oferece recursos para de atendimento e fornecer análises sobre o desempenho do serviço de suporte. Ele ajuda as empresas a oferecer um serviço excepcional aos clientes, melhorar a eficiência operacional e aumentar a satisfação do cliente.",

          modal6_txt1:
            "MuleSoft é uma empresa de software de integração de sistemas que foi adquirida pela Salesforce em 2018. O MuleSoft Salesforce, também conhecido como MuleSoft Anypoint Platform, é uma plataforma de integração baseada em nuvem que permite conectar diferentes sistemas e aplicativos de uma organização, tanto internamente quanto externamente. Facilita a integração de dados, a orquestração de processos, o gerenciamento de APIs e o desenvolvimento de aplicativos, proporcionando uma visão holística e uma experiência conectada para as empresas.",
          modal6_txt2:
            "Integração de sistemas: permite conectar sistemas legados, aplicativos em nuvem, bancos de dados e APIs de terceiros, facilitando a comunicação e o compartilhamento de dados entre eles.",
          modal6_txt3:
            "Orquestração de processos: oferece recursos de orquestração para facilitar a criação de fluxos de trabalho complexos, permitindo que diferentes sistemas e aplicativos se comuniquem e coordenem a execução de processos de negócios.",
          modal6_txt4:
            "Gerenciamento de APIs: gerenciamento de APIs que permitem criar, implantar e gerenciar APIs de forma centralizada. Isso facilita a exposição segura de dados e funcionalidades para uso interno ou externo.",
          modal6_txt5:
            "Conectividade de dados: Conecte e transforme dados de diferentes fontes, permitindo a criação de uma única visualização unificada dos dados para suportar análises e tomada de decisões.",
          modal6_txt6:
            "Desenvolvimento de aplicativos: Usufrua de ferramentas para o desenvolvimento rápido de aplicativos, permitindo que as empresas criem soluções personalizadas que se integram perfeitamente a seus sistemas e processos existentes.",
          modal6_txt7:
            "Governança e segurança: possui funcionalidades avançados de governança e segurança para garantir o controle e a conformidade dos dados e processos de integração.",
          modal6_txt8:
            "A plataforma desempenha um papel importante na estratégia de integração da Salesforce, permitindo que as empresas conectem e unifiquem seus sistemas, dados e processos de negócios em uma única plataforma. Ele facilita a criação de fluxos de trabalho automatizados, a exposição segura de APIs e a obtenção de insights valiosos por meio da integração de dados de várias fontes.",

          modal7_txt1:
            "É uma solução Salesforce que visa fornecer uma visão unificada e holística dos clientes para as empresas, funcionando como um CDP. Permite que as organizações acessem e integrem dados de clientes provenientes de diferentes sistemas e fontes, consolidando essas informações de forma centralizada e oferecendo experiências personalizadas e consistentes. Alguns dos principais componentes do Customer 360 Salesforce incluem:",
          modal7_txt2:
            "Mapeamento e integração de dados: mapeie e integre dados de diferentes sistemas, como CRM, ERP, serviço de atendimento ao cliente e marketing, em um perfil de cliente centralizado. Isso ajuda a criar uma visão completa e atualizada dos clientes.",
          modal7_txt3:
            "Unificação de identidade: Vincule e unifique dados e identidades de clientes provenientes de diferentes fontes, como endereços de e-mail, IDs de mídias sociais e números de telefone, para criar uma identidade única do cliente.",
          modal7_txt4:
            "Análise e inteligência de dados: obtenha recursos de análise e inteligência artificial (IA) para identificar padrões, tendências e insights nos dados do cliente. Isso ajuda as empresas a entender melhor seus clientes e tomar decisões informadas.",
          modal7_txt5:
            "Experiências personalizadas: Forneça experiências personalizadas e relevantes aos clientes em todos os canais de interação, com base nas informações consolidadas do perfil do cliente.",
          modal7_txt6:
            "Segurança e privacidade de dados: A plataforma oferece informações avançadas de segurança e privacidade para proteger os dados do cliente e garantir o cumprimento das regulamentações de proteção de dados.",
          modal7_txt7:
            "Ao adotar a abordagem Customer 360 Salesforce, as empresas podem melhorar a compreensão do cliente, aprimorar o atendimento ao cliente, otimizar o marketing direcionado e impulsionar a fidelidade do cliente.",
        },
      },
      en: {
        translation: {
          quem_somos: "About Us",
          atuacao: "Activities",
          servicos: "Services",
          contato: "Contact",
          address: "Address",
          hour: "Monday to Friday from 8:00 am to 6:00 pm",
          close: "Close",
          email: "*Email",
          carreira: "Career",

          hero_title: "Generating solutions and opportunities",
          hero_description:
            "We enhance the growth of your business, through the implementation and support of structured cloud solutions and Salesforce services.",
          hero_button: "Speak to an expert",
          hero_partners: "Meet our partners:",

          about_us: "About Us",
          about_description:
            "The company Backlgrs, whose name is pronounced “backloggers”, is your partner to implement solutions and help you achieve your goals. We offer comprehensive services, from business analysis to system implementation, and accompany you on your maintenance journey and continuous evolution. ",
          about_mission: "Mission",
          about_mission_description:
            "Provide cutting-edge technology solutions to our clients that add value and drive their business growth, through a collaborative and partnership approach.",
          about_vision: "Vision",
          about_vision_description:
            "To be the leading company in implementing and developing solutions on the Salesforce platform, providing customized and innovative solutions to help our customers achieve their business objectives.",
          about_values: "Values",
          about_values_description:
            "Commitment to excellence, innovation, integrity and professional ethics",
          about_100: "+ 100 projects",
          about_experience: "+15 years on the market",
          about_team: "Specialized team",
          about_partner: "Salesforce Partners",

          resources_title: "Areas of expertise",
          resources_description: "More than 100 projects delivered",
          resources_commerce:
            "Create personalized campaigns, execute targeted strategies for your company.",
          resources_sales:
            "Manage sales with automated features.From prospecting leads to closing.",
          resources_tableu:
            "Data analysis and visualization platform. Get valuable insights for decision making.",
          resources_mkt:
            "Create personalized campaigns, execute targeted strategies for your company.",
          resources_service:
            "Unify all contact channels, manage and automate service performance.	",
          resources_mule:
            "Integrate all your systems and data.Connect and unify APIs for your business. ",
          resources_360:
            "All customer data in one place, connected in real time and generates differentiated experiences. ",
          resources_seemore: "See more",

          product_knowmore: "KNOW MORE",
          product_title: "Our services",
          product_description:
            "Backlgrs can help your company implement and enhance Salesforce solutions, allowing you to focus on your core business while we take care of platform implementation and management.",
          product_consulting: "Consulting and requirements analysis",
          product_consulting_txt:
            "We help your company understand your business needs and identify the Salesforce solutions that best meet your needs.",
          product_implementation: "Implementation and configuration",
          product_implementation_txt:
            "We implement and configure Salesforce solutions and projects in a personalized way according to your business rules.",
          product_support: "Support",
          product_support_txt:
            "Maintenance, support and evolution of Salesforce clouds and services, keeping your platforms always updated and optimized.",
          product_development: "Custom development",
          product_development_txt:
            "We create specific solutions and develop unique features that are not found in standard Salesforce solutions.",
          product_training: "Training and support",
          product_training_txt:
            "We help your team learn to use Salesforce products and provide ongoing support to ensure your company is getting the most out of the platform.",

          contact_title: "We are here to enhance the success of your company!",
          contact_description:
            "Let us take care of it while you focus on growing your business.",
          contact_name: "*Name:",
          contact_tel: "*Phone:",
          contact_company: "Company:",
          contact_msg: "Message:",
          contact_send: "To send",

          carrer_description:
            "At Backlgrs, we invest in people before anything else. We believe that a happy and engaged team is the path to success, which is why we are always looking for talented and committed professionals who want to grow with us.",
          carrer_sfcc: "SFCC Developer",
          carrer_sfdc: "SFDC Developer",
          carrer_rh: "Human resources analyst",
          carrer_qa: "Quality Assurance",
          carrer_test1:
            "Care for employees is evident, with constant encouragement for learning and professional growth.Being part of a high-level team is motivating and inspiring.",
          carrer_test2:
            "I joined Backlgrs as a Jr. and many challenges and battles were not easy, but in all of them I was accompanied by HR and extremely competent managers who developed me and improved my career, with knowledge, experience and support both at work and emotionally. ",
          carrer_test3:
            "Backlgrs is an incredible company and it is extremely gratifying to know that I work in an environment where people are always put first.",
          carrer_test4:
            "Backlgrs is a company that opens doors and creates opportunities, I feel welcomed into the team and I understand everyone's dedication to doing their best and always striving for excellence.",
          carrer_test5:
            "Working at Backlgrs means having the certainty of professional development through the sum of values ​​and the exchange of knowledge between service providers, companies and clients. ",
          carrer_test6:
            "One of the best professional experiences I've ever had, a very humane company concerned with employee well-being.",

          modal1_txt1:
            "Commerce Cloud Salesforce is an eCommerce platform that allows businesses to efficiently create and manage online stores. Have at your fingertips a series of resources and tools to boost digital operations and provide attractive shopping experiences for customers.It covers several areas of e-commerce, including:",
          modal1_txt2:
            "Online store creation: Create personalized online stores, with responsive and attractive designs. Catalog creation, product management, and inventory control features allow businesses to display their products in an effective and up-to-date way.",
          modal1_txt3:
            "Personalized shopping experience: Provide personalized shopping experiences by recommending products based on customer behavior, purchasing history and preferences. This helps improve the relevance of offers and increase the conversion rate.",
          modal1_txt4:
            "Channel integration: facilitates the integration of different sales channels, such as online stores, mobile devices, social networks and marketplaces, thus obtaining a perfect omnichannel shopping experience. Customers can start a purchase on one channel and complete it on another, maintaining consistency of information and preferences.",
          modal1_txt5:
            "Order and Payment Management: It has order management and payment processing capabilities, allowing businesses to efficiently manage the order lifecycle, track shipments, and provide secure payment options.",
          modal1_txt6:
            "Personalization and Targeted Marketing: Personalize content and targeted marketing campaigns based on customers' preferences and purchasing history, with audience segmentation, marketing automation, and data analytics helping businesses create personalized, relevant experiences.",
          modal1_txt7:
            "Analytics and reporting: Provides advanced analytics capabilities to track the performance of online stores, monitor metrics such as conversion rate and average order ticket, and gain insights into customer behavior. This helps businesses make informed decisions and optimize their eCommerce strategies.",

          modal2_txt1:
            "It is a sales management platform. It is designed to help companies effectively manage the sales cycle, from initial prospecting to closing the deal. Get analytics and insights, helping sales teams drive performance, improve results and understand each lead's behavior.The platform offers a wide range of features and functionalities, helping to optimize processes and improve efficiency.",
          modal2_txt2:
            "Account and contact management: Store and access information about customers and prospects, including contact details, interaction history, activities, and relevant notes.",
          modal2_txt3:
            "Sales opportunities and forecasting: Track sales opportunities at different stages of the sales cycle, providing visibility into the likelihood of closing and assisting in revenue forecasting.",
          modal2_txt4:
            "Sales automation: Includes features like workflow automation, where repetitive tasks can be automated to improve the efficiency of sales teams.",
          modal2_txt5:
            "Lead management: Allows tracking and management of leads, from initial generation to conversion into sales opportunities.",
          modal2_txt6:
            "Collaboration and Communication: Provides collaboration capabilities for sales teams, enabling effective communication, information sharing, and real-time collaboration.",
          modal2_txt7:
            "Reporting and analytics: Create and manage customizable reports and dashboards to track performance metrics such as sales activity, conversion rates, and revenue.",
          modal2_txt8:
            "In addition to these features, Sales Cloud Salesforce is highly customizable and can be integrated with other Salesforce products, such as Service Cloud , Marketing Cloud , and Commerce Cloud , to provide a unified view and improve the overall customer experience.",

          modal3_txt1:
            "Tableau is a leading data visualization software company that was acquired by Salesforce in 2019. Also known as Tableau CRM, it is an analytics and business intelligence (BI) platform that allows users to intuitively explore, visualize, and analyze data. interactive.Tableau Salesforce offers a wide range of features to help businesses understand and communicate insights from their data. Some of the key features include:",
          modal3_txt2:
            "Interactive data visualization: Create interactive and dynamic visualizations, such as charts, maps, dashboards, and tables, that allow users to explore and understand data more effectively.",
          modal3_txt3:
            "Advanced data analysis: Advanced analysis features such as grouping, filtering, custom calculations and statistical analysis, allowing users to discover patterns, trends and insights hidden in their data.",
          modal3_txt4:
            "Connection to multiple data sources: The platform can connect to a wide variety of data sources such as databases, spreadsheets, cloud services and third-party applications, allowing users to access and analyze data from multiple sources in a single place.",
          modal3_txt5:
            "Dashboard and Report Creation: Create custom dashboards and interactive reports, providing a consolidated view of data for effective communication and sharing insights with your team.",
          modal3_txt6:
            "Integration with other Salesforce solutions: can be seamlessly integrated with other Salesforce solutions, allowing advanced analysis of data generated on these platforms.",
          modal3_txt7:
            "Self-service capabilities: It is designed to allow business users to explore and analyze data on their own, without relying solely on data analysis experts.",
          modal3_txt8:
            "Tableau Salesforce plays a key role in analytics and BI strategy, enabling companies to make data-driven decisions, discover valuable insights, and visually communicate results. It offers an intuitive and accessible experience, making data analysis more accessible and useful for users at all levels of an organization.",

          modal4_txt1:
            "Salesforce Marketing Cloud offers a variety of features and tools to help businesses create, automate, and personalize marketing campaigns that target their customers and prospects.Salesforce Marketing Cloud , the world's #1 CRM, allows companies to manage all aspects of their digital marketing strategies in one place.",
          modal4_txt2:
            "Marketing automation: Automate functionality to create personalized customer journeys. This includes automated email sending, audience segmentation based on past behavior and interactions, lead scoring, and content personalization.",
          modal4_txt3:
            "Email marketing: Create and send personalized and segmented email campaigns. You can create email templates, automate email sequences, track performance metrics such as open and click rates, and perform A/B tests to optimize campaigns",
          modal4_txt4:
            "Multi-channel campaign management: Coordinate campaigns across multiple channels, including email, social media, SMS messaging, WhatsApp, and push notifications. You can create personalized messages and track performance on each channel.",
          modal4_txt5:
            "Content personalization: Create dynamic, personalized content based on customer data, enabling businesses to deliver more relevant experiences.",
          modal4_txt6:
            "Analytics and reporting: Provides analytics capabilities to track campaign performance, understand audience engagement, and make adjustments based on results. Customizable reports and dashboards provide insights into marketing metrics.",
          modal4_txt7:
            "Additionally, Marketing Cloud Salesforce offers integration with other Salesforce products such as Sales Cloud , Service Cloud , Commerce Cloud , and more. For a unified view of the customer and a more cohesive marketing experience, also count on the help of Einstein, the AI ​​that will bring insights that will drive data analysis and results in an agile and efficient way.",

          modal5_txt1:
            "Service Cloud offers a variety of features and tools to help businesses provide exceptional service to their customers, manage cases, and resolve issues efficiently.Enables businesses to support customers across multiple channels such as phone, email, social media, WhatsApp, and online self-service. Some of the key features include:",
          modal5_txt2:
            "Help Desk: Provides a centralized view of all customer service cases, enabling support teams to track and manage support requests efficiently. This includes the ability to create, assign, and track cases, as well as prioritize them based on business rules.",
          modal5_txt3:
            "Service automation: Create automations to speed up the customer service process. This includes autoresponder bots, intelligent case routing based on business rules, and creating automated workflows to resolve common issues.",
          modal5_txt4:
            "Knowledge base: Enables companies to create a centralized knowledge base with useful articles and resources for customers. This helps provide quick, consistent responses and allows customers to find solutions to their problems through self-service.",
          modal5_txt5:
            "Channel integration: Integrate multiple customer service channels, such as email, phone, WhatsApp and social media. This helps companies provide consistent, personalized service across all touchpoints.",
          modal5_txt6:
            "Analytics and reporting: Analyze results to track customer service performance, monitor customer satisfaction metrics, and identify areas for improvement. Customizable reports and dashboards provide ",
          modal5_txt7:
            "Additionally, Service Cloud Salesforce can be integrated with other Salesforce products and clouds to provide a complete, unified view of the customer across all interactions.Cloud-based customer service that offers customer service capabilities and provides analytics on support service performance. It helps companies deliver exceptional service to customers, improve operational efficiency and increase customer satisfaction.",

          modal6_txt1:
            "MuleSoft is a systems integration software company that was acquired by Salesforce in 2018. MuleSoft Salesforce , also known as MuleSoft Anypoint Platform, is a cloud-based integration platform that allows you to connect an organization's different systems and applications, both internally as externally. It facilitates data integration, process orchestration, API management, and application development, providing a holistic view and connected experience for businesses.",
          modal6_txt2:
            "Systems integration: allows you to connect legacy systems, cloud applications, databases and third-party APIs, facilitating communication and data sharing between them.",
          modal6_txt3:
            "Process orchestration: Provides orchestration capabilities to facilitate the creation of complex workflows, enabling different systems and applications to communicate and coordinate the execution of business processes.",
          modal6_txt4:
            "API Management: API management that allows you to create, deploy and manage APIs centrally. This facilitates the secure exposure of data and functionality for internal or external use.",
          modal6_txt5:
            "Data connectivity: Connect and transform data from different sources, enabling the creation of a single, unified view of data to support analysis and decision making.",
          modal6_txt6:
            "Application development: Take advantage of tools for rapid application development, enabling companies to create custom solutions that integrate seamlessly with their existing systems and processes.",
          modal6_txt7:
            "Governance and security: has advanced governance and security features to ensure control and compliance of data and integration processes.",
          modal6_txt8:
            "The platform plays an important role in Salesforce's integration strategy, enabling companies to connect and unify their systems, data and business processes on a single platform. It makes it easy to create automated workflows, securely expose APIs, and gain valuable insights by integrating data from multiple sources.",

          modal7_txt1:
            "It is a Salesforce solution that aims to provide a unified and holistic view of customers for companies, functioning as a CDP. It allows organizations to access and integrate customer data from different systems and sources, consolidating this information centrally and offering personalized and consistent experiences. Some of the key components of Customer 360 Salesforce include:",
          modal7_txt2:
            "Data mapping and integration: Map and integrate data from different systems, such as CRM, ERP, customer service, and marketing, into a centralized customer profile. This helps create a complete and up-to-date view of your customers.",
          modal7_txt3:
            "Identity unification: Link and unify customer data and identities from different sources, such as email addresses, social media IDs, and phone numbers, to create a single customer identity.",
          modal7_txt4:
            "Data analytics and intelligence: Get analytics and artificial intelligence (AI) capabilities to identify patterns, trends, and insights in customer data. This helps businesses understand their customers better and make informed decisions.",
          modal7_txt5:
            "Personalized experiences: Deliver personalized, relevant customer experiences across all interaction channels based on consolidated customer profile information.",
          modal7_txt6:
            "Data security and privacy: The platform offers advanced security and privacy insights to protect customer data and ensure compliance with data protection regulations.",
          modal7_txt7:
            "By adopting the Customer 360 Salesforce approach , companies can improve customer understanding, enhance customer service, optimize targeted marketing, and drive customer loyalty.",
        },
      },
      es: {
        translation: {
          quem_somos: "Quiénes somos",
          atuacao: "Actuación",
          servicos: "Servicios",
          contato: "Contacto",
          endereco: "Dirección",
          hour: "Lunes a viernes de 08:00 a 18:00",
          close: "Cerrar",
          email: "*Correo electrónico",
          carreira: "Carrera",

          hero_title: "Generando soluciones y oportunidades",
          hero_description:
            "Potenciamos el crecimiento de tus negocios,a través de la implementación y sostenimiento de soluciones estructuradas en la nube y servicios Salesforce.",
          hero_button: "Hablar con un experto",
          hero_partners: "Conoce a nuestros socios:",

          about_us: "Sobre nosotros",
          about_description:
            "La empresa Backlgrs, cuyo nombre se pronuncia 'backloggers', es tu aliado para implementar soluciones y ayudarte a alcanzar tus objetivos. Ofrecemos servicios integrales, desde el análisis de negocios hasta la implementación del sistema, y te acompañamos en tu jornada de mantenimiento y evolución continua.",
          about_mission: "Misión",
          about_mission_description:
            "Proporcionar soluciones tecnológicas de vanguardia a nuestros clientes que añadan valor e impulsen el crecimiento de sus negocios, a través de un enfoque colaborativo y de asociación.",
          about_vision: "Visión",
          about_vision_description:
            "Ser la empresa líder en implementación y desarrollo de soluciones en la plataforma Salesforce, ofreciendo soluciones personalizadas e innovadoras para ayudar a nuestros clientes a alcanzar sus objetivos comerciales.",
          about_values: "Valores",
          about_values_description:
            "Compromiso con la excelencia, innovación, integridad y ética profesional.",
          about_100: "+100 proyectos",
          about_experience: "+15 años en el mercado",
          about_team: "Equipo especializado",
          about_partner: "Socios de Salesforce",

          resources_title: "Áreas de actuación",
          resources_description: "Más de 100 proyectos entregados",
          resources_commerce:
            "Comercio electrónico, enfocado en mejorar la experiencia del consumidor y aumentar las ventas.",
          resources_sales:
            "Gestiona las ventas con recursos automatizados, desde la prospección de leads hasta el cierre.",
          resources_tableu:
            "Gestiona las ventas con recursos automatizados, desde la prospección de leads hasta el cierre.",
          resources_mkt:
            "Plataforma de análisis y visualización de datos. Obtén información valiosa para la toma de decisiones.",
          resources_service:
            "Unifica todos los canales de contacto, gestiona y automatiza el rendimiento en la atención al cliente.",
          resources_mule:
            "Integra todos tus sistemas y datos. Conecta y unifica APIs para tu negocio.",
          resources_360:
            "Todos los datos de clientes en un solo lugar, conectados en tiempo real y genera experiencias diferenciadas.",
          resources_seemore: "Ver más",

          product_knowmore: "SABER MÁS",
          product_title: "Nuestros Servicios",
          product_description:
            "Backlgrs puede ayudar a tu empresa a implementar y mejorar soluciones Salesforce, permitiéndote centrarte en tus negocios principales mientras nos ocupamos de la implementación y gestión de la plataforma.",
          product_consulting: "Consultoría y análisis de requisitos",
          product_consulting_txt:
            "Ayudamos a tu empresa a entender sus necesidades comerciales e identificar las soluciones Salesforce que mejor se adapten a tus necesidades.",
          product_implementation: "Implementación y configuración",
          product_implementation_txt:
            "Implementamos y configuramos soluciones y proyectos Salesforce de manera personalizada según tus reglas comerciales.",
          product_support: "Sostenimiento",
          product_support_txt:
            "Mantenimiento, soporte y evolución de nubes y servicios Salesforce, manteniendo tus plataformas siempre actualizadas y optimizadas.",
          product_development: "Desarrollo personalizado",
          product_development_txt:
            "Creamos soluciones específicas y desarrollamos funciones exclusivas que no se encuentran en las soluciones estándar de Salesforce.",
          product_training: "Entrenamiento y soporte",
          product_training_txt:
            "Ayudamos a tu equipo a aprender a utilizar los productos Salesforce y brindamos soporte continuo para asegurar que tu empresa aproveche al máximo la plataforma.",

          contact_title: "¡Estamos aquí para potenciar el éxito de tu empresa!",
          contact_description:
            "Permítenos ocuparnos de esto mientras te enfocas en el crecimiento de tu negocio.",
          contact_name: "*Nombre:",
          contact_tel: "*Teléfono:",
          contact_company: "Empresa:",
          contact_msg: "Mensaje:",
          contact_send: "mandar",

          carrer_description:
            "En Backlgrs, invertimos en las personas antes que nada. Creemos que un equipo feliz y comprometido es el camino hacia el éxito, y por eso siempre estamos buscando profesionales talentosos y comprometidos que quieran crecer con nosotros.",
          carrer_sfcc: "Desarrollador SFCC",
          carrer_sfdc: "Desarrollador SFDC",
          carrer_rh: "Human resources analyst",
          carrer_qa: "Seguro de calidad",
          carrer_test1:
            "El cuidado por los empleados es evidente, con un constante estímulo al aprendizaje y al crecimiento profesional. La organización es impecable, con líderes calificados que crean un ambiente familiar y acogedor. Formar parte de un equipo de alto nivel es motivador e inspirador.",
          carrer_test2:
            "Entré a Backlgrs como Jr. y muchos desafíos y batallas no fueron fáciles, pero en todas estuve acompañado de RRHH y gerentes sumamente competentes que me desarrollaron y mejoraron mi carrera, con conocimiento, experiencia y apoyo tanto en el trabajo como en el emocional. ¡Solo tengo que agradecer a esta empresa hecha de personas! ",
          carrer_test3:
            "Backlgrs es una empresa increíble y es sumamente gratificante saber que trabajo en un entorno donde las personas siempre son lo primero.",
          carrer_test4:
            "Backlgrs es una empresa que abre puertas y crea oportunidades, me siento bienvenido al equipo y entiendo la dedicación de todos por dar lo mejor de sí y buscar siempre la excelencia.",
          carrer_test5:
            "Trabajar en Backlgrs significa tener la certeza del desarrollo profesional a través de la suma de valores y el intercambio de conocimientos entre proveedores de servicios, empresas y clientes. ",
          carrer_test6:
            "Una de las mejores experiencias profesionales que he tenido, una empresa muy humana y preocupada por el bienestar de los empleados.",

          modal1_txt1:
            "Commerce Cloud Salesforce es una plataforma de comercio electrónico que permite a las empresas crear y gestionar tiendas en línea de manera eficiente. Tendrás a tu disposición una serie de funciones y herramientas para impulsar las operaciones digitales y proporcionar experiencias de compra atractivas para los clientes. Aborda varias áreas del comercio electrónico, incluyendo:",
          modal1_txt2:
            "Creación de tiendas en línea: crea tiendas en línea personalizadas, con diseños receptivos y atractivos. Las funciones de creación de catálogos, gestión de productos y control de inventario permiten a las empresas mostrar sus productos de manera efectiva y actualizada.",
          modal1_txt3:
            "Experiencia de compra personalizada: proporciona experiencias de compra personalizadas, recomendando productos en función del comportamiento del cliente, historial de compras y preferencias. Esto ayuda a mejorar la relevancia de las ofertas y aumentar la tasa de conversión.",
          modal1_txt4:
            "Integración de canales: facilita la integración de diferentes canales de venta, como tiendas en línea, dispositivos móviles, redes sociales y marketplaces, logrando así una experiencia de compra omnicanal perfecta. Los clientes pueden iniciar una compra en un canal y completarla en otro, manteniendo la consistencia de la información y preferencias.",
          modal1_txt5:
            "Gestión de pedidos y pagos: cuenta con funciones de gestión de pedidos y procesamiento de pagos, permitiendo que las empresas gestionen eficientemente el ciclo de vida de los pedidos, rastreen envíos y ofrezcan opciones de pago seguras.",
          modal1_txt6:
            "Personalización y marketing dirigido: personaliza contenido y campañas de marketing dirigidas en función de las preferencias e historial de compras de los clientes, con segmentación de audiencia, automatización de marketing y análisis de datos que ayudan a las empresas a crear experiencias personalizadas y relevantes.",
          modal1_txt7:
            "Análisis e informes: proporciona características avanzadas de análisis para seguir el rendimiento de las tiendas en línea, monitorear métricas como la tasa de conversión y el promedio de pedidos, y obtener información sobre el comportamiento del cliente. Esto ayuda a las empresas a tomar decisiones informadas y optimizar sus estrategias de comercio electrónico.",

          modal2_txt1:
            "Es una plataforma de gestión de ventas. Está diseñada para ayudar a las empresas a gestionar eficazmente el ciclo de ventas, desde la prospección inicial hasta el cierre del trato. Obtén análisis e información, ayudando a los equipos de ventas a impulsar el rendimiento, mejorar los resultados y comprender el comportamiento de cada lead. La plataforma ofrece una amplia gama de funciones y capacidades para optimizar procesos y mejorar la eficiencia.",
          modal2_txt2:
            "Gestión de cuentas y contactos: almacena y accede a información sobre clientes y prospectos, incluyendo detalles de contacto, historial de interacciones, actividades y notas relevantes.",
          modal2_txt3:
            "Oportunidades y pronóstico de ventas: sigue oportunidades de ventas en diferentes etapas del ciclo de ventas, proporcionando visibilidad sobre la probabilidad de cierre y ayudando en la previsión de ingresos.",
          modal2_txt4:
            "Automatización de ventas: incluye funciones como automatización de flujo de trabajo, donde las tareas repetitivas pueden automatizarse para mejorar la eficiencia de los equipos de ventas.",
          modal2_txt5:
            "Gestión de leads: permite el seguimiento y gestión de leads, desde la generación inicial hasta la conversión en oportunidades de ventas.",
          modal2_txt6:
            "Colaboración y comunicación: proporciona funciones de colaboración para equipos de ventas, permitiendo una comunicación efectiva, compartir información y colaborar en tiempo real.",
          modal2_txt7:
            "Informes y análisis: crea y gestiona informes y paneles personalizables para seguir métricas de rendimiento, como actividades de ventas, tasas de conversión e ingresos.",
          modal2_txt8:
            "Además de estas funciones, Sales Cloud Salesforce es altamente personalizable y se puede integrar con otros productos de Salesforce, como Service Cloud, Marketing Cloud y Commerce Cloud, para proporcionar una visión unificada y mejorar la experiencia general del cliente.",

          modal3_txt1:
            "Tableau es una empresa líder en software de visualización de datos que fue adquirida por Salesforce en 2019. También conocido como Tableau CRM, es una plataforma de análisis e inteligencia empresarial (BI) que permite a los usuarios explorar, visualizar y analizar datos de manera intuitiva e interactiva. Tableau Salesforce ofrece una amplia gama de funciones para ayudar a las empresas a comprender y comunicar ideas a partir de sus datos. Algunas de las funciones principales incluyen:",
          modal3_txt2:
            "Visualización de datos interactiva: crea visualizaciones interactivas y dinámicas, como gráficos, mapas, paneles y tablas, que permiten a los usuarios explorar y comprender los datos de manera más efectiva.",
          modal3_txt3:
            "Análisis de datos avanzado: funciones avanzadas de análisis, como agrupación, filtrado, cálculos personalizados y análisis estadístico, que permiten a los usuarios descubrir patrones, tendencias e ideas ocultas en sus datos.",
          modal3_txt4:
            "Conexión con varias fuentes de datos: la plataforma puede conectarse a una amplia variedad de fuentes de datos, como bases de datos, hojas de cálculo, servicios en la nube y aplicaciones de terceros, lo que permite a los usuarios acceder y analizar datos de diversas fuentes en un solo lugar.",
          modal3_txt5:
            "Creación de paneles e informes: crea paneles personalizados e informes interactivos, proporcionando una visión consolidada de los datos para una comunicación efectiva y el intercambio de ideas con el equipo.",
          modal3_txt6:
            "Integración con otras soluciones Salesforce: se integra perfectamente con otras soluciones Salesforce, permitiendo un análisis avanzado de los datos generados en esas plataformas.",
          modal3_txt7:
            "Recursos de autoservicio: diseñado para permitir que los usuarios de negocios exploren y analicen datos por sí mismos, sin depender exclusivamente de expertos en análisis de datos. Tableau Salesforce juega un papel clave en la estrategia de análisis y BI, permitiendo que las empresas tomen decisiones basadas en datos, descubran ideas valiosas y comuniquen visualmente los resultados. Ofrece",
          modal3_txt8:
            "Tableau Salesforce juega un papel fundamental en la estrategia de análisis y BI, permitiendo que las empresas tomen decisiones basadas en datos, descubran ideas valiosas y comuniquen visualmente los resultados. Ofrece una experiencia intuitiva y accesible, haciendo que el análisis de datos sea más accesible y útil para usuarios en todos los niveles de una organización.",
          modal4_txt1:
            "Marketing Cloud Salesforce ofrece una variedad de recursos y herramientas para ayudar a las empresas a crear, automatizar y personalizar campañas de marketing dirigidas a sus clientes y prospectos. Marketing Cloud Salesforce, el CRM número 1 del mundo, permite a las empresas gestionar todos los aspectos de sus estrategias de marketing digital en un solo lugar.",
          modal4_txt2:
            "Automatización de marketing: automatiza funciones para crear jornadas personalizadas del cliente. Esto incluye el envío automatizado de correos electrónicos, segmentación de audiencia basada en comportamientos e interacciones anteriores, puntuación de leads y personalización de contenido.",
          modal4_txt3:
            "Email marketing: Crea y envía campañas de correo electrónico personalizadas y segmentadas. Puedes crear plantillas de correo electrónico, automatizar secuencias de correos electrónicos, realizar un seguimiento de métricas de rendimiento como tasas de apertura y clics, y realizar pruebas A/B para optimizar las campañas.",
          modal4_txt4:
            "Gestión de campañas multicanal: coordina campañas en varios canales, incluyendo correo electrónico, redes sociales, mensajes SMS, WhatsApp y notificaciones push. Puedes crear mensajes personalizados y realizar un seguimiento del rendimiento en cada canal.",
          modal4_txt5:
            "Personalización de contenido: crea contenidos dinámicos y personalizados basados en datos del cliente, permitiendo a las empresas ofrecer experiencias más relevantes.",
          modal4_txt6:
            "Análisis e informes: proporciona funciones de análisis para seguir el rendimiento de las campañas, comprender la participación del público objetivo y hacer ajustes basados en los resultados. Los informes y paneles personalizables ofrecen información sobre métricas de marketing.",
          modal4_txt7:
            "Además, Marketing Cloud Salesforce ofrece integración con otros productos de Salesforce, como Sales Cloud, Service Cloud, Commerce Cloud y más. Para una visión unificada del cliente y una experiencia de marketing más cohesiva, cuenta también con la ayuda de Einstein, la IA que proporcionará ideas para impulsar el análisis de datos y los resultados de manera ágil y eficiente.",
          modal5_txt1:
            "Service Cloud ofrece una variedad de recursos y herramientas para ayudar a las empresas a proporcionar un servicio excepcional a sus clientes, gestionar casos y resolver problemas de manera eficiente. Permite a las empresas ofrecer soporte a los clientes en varios canales, como teléfono, correo electrónico, redes sociales, WhatsApp y autoservicio en línea. Algunas de las funciones principales incluyen:",
          modal5_txt2:
            "Centro de atención: proporciona una visión centralizada de todos los casos de atención al cliente, permitiendo que los equipos de soporte hagan un seguimiento y gestionen los pedidos de soporte de manera eficiente. Esto incluye la capacidad de crear, asignar y rastrear casos, además de priorizarlos según reglas de negocio.",
          modal5_txt3:
            "Automatización de atención: crea automatizaciones para acelerar el proceso de atención al cliente. Esto incluye bots de respuestas automáticas, enrutamiento inteligente de casos basado en reglas de negocio y creación de flujos de trabajo automatizados para la resolución de problemas comunes.",
          modal5_txt4:
            "Base de conocimientos: permite a las empresas crear una base de conocimientos centralizada con artículos y recursos útiles para los clientes. Esto ayuda a proporcionar respuestas rápidas y consistentes, además de permitir que los clientes encuentren soluciones a sus problemas a través del autoservicio.",
          modal5_txt5:
            "Integración de canales: integra varios canales de atención al cliente, como correo electrónico, teléfono, WhatsApp y redes sociales. Esto ayuda a las empresas a ofrecer un servicio consistente y personalizado en todos los puntos de contacto.",
          modal5_txt6:
            "Análisis e informes: analiza resultados para hacer un seguimiento del rendimiento de la atención al cliente, monitorear métricas de satisfacción del cliente e identificar áreas de mejora. Los informes y paneles personalizables ofrecen información sobre la eficacia del servicio de soporte.",
          modal5_txt7:
            "Además, Service Cloud Salesforce se puede integrar con otros productos y nubes de Salesforce, para proporcionar una visión completa y unificada del cliente en todas las interacciones. Servicio al cliente basado en la nube que ofrece funciones para la atención y proporciona análisis sobre el rendimiento del servicio de soporte. Ayuda a las empresas a ofrecer un servicio excepcional a los clientes, mejorar la eficiencia operativa y aumentar la satisfacción del cliente.",
          modal6_txt1:
            "MuleSoft es una empresa de software de integración de sistemas que fue adquirida por Salesforce en 2018. MuleSoft Salesforce, también conocido como MuleSoft Anypoint Platform, es una plataforma de integración basada en la nube que permite conectar diferentes sistemas y aplicaciones de una organización, tanto interna como externamente. Facilita la integración de datos, la orquestación de procesos, la gestión de APIs y el desarrollo de aplicaciones, proporcionando una visión holística y una experiencia conectada para las empresas.",
          modal6_txt2:
            "Integración de sistemas: permite conectar sistemas heredados, aplicaciones en la nube, bases de datos y APIs de terceros, facilitando la comunicación y el intercambio de datos entre ellos.",
          modal6_txt3:
            "Orquestación de procesos: ofrece funciones de orquestación para facilitar la creación de flujos de trabajo complejos, permitiendo que diferentes sistemas y aplicaciones se comuniquen y coordinen la ejecución de procesos de negocios.",
          modal6_txt4:
            "Gestión de APIs: gestión de APIs que permite crear, implementar y gestionar APIs de forma centralizada. Esto facilita la exposición segura de datos y funciones para uso interno o externo.",
          modal6_txt5:
            "Conectividad de datos: conecta y transforma datos de diferentes fuentes, permitiendo la creación de una única visualización unificada de los datos para respaldar análisis y toma de decisiones.",
          modal6_txt6:
            "Desarrollo de aplicaciones: aprovecha herramientas para el desarrollo rápido de aplicaciones, permitiendo que las empresas creen soluciones personalizadas que se integren perfectamente con sus sistemas y procesos existentes.",
          modal6_txt7:
            "Gobernanza y seguridad: cuenta con funciones avanzadas de gobernanza y seguridad para garantizar el control y la conformidad de los datos y procesos de integración.",
          modal6_txt8:
            "La plataforma juega un papel importante en la estrategia de integración de Salesforce, permitiendo que las empresas conecten y unifiquen sus sistemas, datos y procesos de negocios en una sola plataforma. Facilita la creación de flujos de trabajo automatizados, la exposición segura de APIs y la obtención de ideas valiosas mediante la integración de datos de diversas fuentes.",
          modal7_txt1:
            "Es una solución de Salesforce que tiene como objetivo proporcionar una visión unificada y holística de los clientes para las empresas, funcionando como un CDP. Permite que las organizaciones accedan e integren datos de clientes provenientes de diferentes sistemas y fuentes, consolidando esta información de manera centralizada y ofreciendo experiencias personalizadas y consistentes. Algunos de los principales componentes de Customer 360 Salesforce incluyen:",
          modal7_txt2:
            "Mapeo e integración de datos: mapea e integra datos de diferentes sistemas, como CRM, ERP, servicio de atención al cliente y marketing, en un perfil de cliente centralizado. Esto ayuda a crear una visión completa y actualizada de los clientes.",
          modal7_txt3:
            "Unificación de identidad: vincula e unifica datos e identidades de clientes provenientes de diferentes fuentes, como direcciones de correo electrónico, IDs de redes sociales y números de teléfono, para crear una identidad única del cliente.",
          modal7_txt4:
            "Análisis e inteligencia de datos: obtén funciones de análisis e inteligencia artificial (IA) para identificar patrones, tendencias e ideas en los datos del cliente. Esto ayuda a las empresas a comprender mejor a sus clientes y tomar decisiones informadas.",
          modal7_txt5:
            "Experiencias personalizadas: proporciona experiencias personalizadas y relevantes a los clientes en todos los canales de interacción, basándose en la información consolidada del perfil del cliente.",
          modal7_txt6:
            "Seguridad y privacidad de datos: la plataforma ofrece información avanzada sobre seguridad y privacidad para proteger los datos del cliente y garantizar el cumplimiento de las regulaciones de protección de datos.",
          modal7_txt7:
            "Al adoptar el enfoque Customer 360 Salesforce, las empresas pueden mejorar la comprensión del cliente, perfeccionar la atención al cliente, optimizar el marketing dirigido e impulsar la fidelidad del cliente.",
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
