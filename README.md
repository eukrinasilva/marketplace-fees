# Marketplace Fees Simulator

Projeto educacional para **estudo prático de Node.js, TypeScript, SQLite e arquitetura de software**, construído **passo a passo**, sem frameworks mágicos e sem abstrações prematuras.

O objetivo não é apenas “funcionar”, mas **entender profundamente cada camada** do sistema.

---

## 🎯 Objetivo do Projeto

Simular **taxas cobradas por marketplaces e meios de pagamento**, como:

- Shopee
- Mercado Livre
- Amazon
- Maquininhas (Stone, Cielo, PagSeguro, etc.)

A partir de um valor bruto, o sistema calcula:
- taxas aplicadas
- valor líquido recebido
- impacto percentual real

⚠️ Importante:  
Este projeto **não começa pela regra de negócio**, mas pela **infraestrutura**, porque o foco inicial é aprendizado técnico sólido.

---

## 🧩 Abordagem Pedagógica

Este projeto segue uma regra simples:

> **Nenhuma abstração entra antes do entendimento do problema real.**

Por isso, o desenvolvimento é dividido em **etapas**:

1. SQLite puro (conexão, migrations, SQL)
2. Controle de migrations
3. Modelagem de dados
4. Repositórios
5. Regras de negócio
6. Arquitetura (Clean Architecture)
7. Interfaces (CLI / API)

Cada etapa é construída **intencionalmente**, mesmo que pareça “mais trabalho”.

---

## 🛠️ Tecnologias Utilizadas (até o momento)

- **Node.js**
- **TypeScript**
- **SQLite**
- **better-sqlite3** (driver SQLite)

### Por que `better-sqlite3`?
- API simples
- Sem dependências transitivas problemáticas
- Ideal para aprendizado
- Performance excelente
- Uso síncrono (bom para CLI e simuladores)

---

## 🗂 Estrutura Atual do Projeto

```
marketplace-fees/
├─ src/
│  └─ db/
│     ├─ migrations/
│     │  └─ 001_init.sql
│     ├─ database.ts
│     └─ migrate.ts
├─ database.sqlite
├─ package.json
├─ tsconfig.json
└─ README.md
```


### 📌 Observação importante
Neste estágio, **não existe arquitetura de negócio ainda**.  
Estou conscientemente focada apenas em **infraestrutura e persistência**.

---

## 🧱 SQLite e Migrations

### O que são migrations?
Migrations são arquivos SQL versionados que:
- criam ou alteram o schema do banco
- garantem reprodutibilidade
- evitam alterações manuais

### Exemplo de migration
```
CREATE TABLE IF NOT EXISTS migrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  executed_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

## ▶️ Como rodar o projeto

1. Instalar dependências
```npm install```

2. Executar migrations
```npm run migrate```

## ⚠️ Decisões Técnicas Importantes

### ❌ Por que não usei ORMs?

- Escondem SQL
- Criam falsa sensação de simplicidade
- Prejudicam aprendizado de base

### ❌ Por que não usei esModuleInterop?

- Mascara diferenças entre CommonJS e ES Modules
- Dificulta entendimento real do Node.js
- Gera bugs difíceis de diagnosticar no futuro

## 🧠 O que este projeto ensina (até agora)

- Como Node.js realmente carrega módulos
- Diferença entre CommonJS e ES Modules
- Como conectar e usar SQLite
- Como executar SQL a partir do Node
- Fundamentos de migrations
- Disciplina de evolução incremental

## 🧭 Próximos Passos Planejados

### A evolução natural do projeto segue esta ordem:

- Controle de migrations (executar apenas uma vez)
- Criação da tabela ```fees```
- Inserts e selects reais
- Repositório de dados
- Regras de cálculo
- Arquitetura Clean
- Comparação entre marketplaces
- Interface CLI ou API

Cada passo será feito apenas quando o anterior estiver compreendido.

## 🧠 Filosofia do Projeto

### Este projeto é uma incubadora de aprendizado, não um template pronto.

- Clareza > rapidez
- Fundamento > abstração
- Entendimento > copiar código

#### Se algo parecer “mais trabalhoso”, provavelmente é intencional.

## 📌 Nota Final

### Este repositório pode (e deve) evoluir junto com o aprendizado.

#### O README será atualizado conforme novas camadas surgirem.