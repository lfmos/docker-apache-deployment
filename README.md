# Docker Apache Deployment

Aplicação web estática executada em um container Apache e gerenciada com Docker Compose.

## Objetivo

Demonstrar conhecimentos em Docker, Docker Compose, Apache HTTP Server, mapeamento de portas e bind mounts por meio de um projeto visual de portfólio.

## Estrutura

```text
docker-apache-deployment/
├── website/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── css/
│   │   ├── animations.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   ├── reset.css
│   │   ├── responsive.css
│   │   ├── sections.css
│   │   ├── style.css
│   │   └── variables.css
│   ├── js/
│   │   └── script.js
│   └── index.html
├── docker-compose.yml
├── .gitattributes
├── .gitignore
├── LICENSE
└── README.md
```

## Executar

```bash
docker compose up -d
```

Abra:

```text
http://localhost:8080
```

Para encerrar:

```bash
docker compose down
```

## Autor

Luís Filipe Medeiros — [GitHub](https://github.com/lfmos)
