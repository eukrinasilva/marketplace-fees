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

marketplace-fees/
├─ src/
│ └─ db/
│ ├─ migrations/
│ │ └─ 001_init.sql
│ ├─ database.ts
│ └─ migrate.ts
├─ database.sqlite
├─ package.json
├─ tsconfig.json
└─ README.md


### 📌 Observação importante
Neste estágio, **não existe arquitetura de negócio ainda**.  
Estamos conscientemente focados apenas em **infraestrutura e persistência**.

---

## 🧱 SQLite e Migrations

### O que são migrations?
Migrations são arquivos SQL versionados que:
- criam ou alteram o schema do banco
- garantem reprodutibilidade
- evitam alterações manuais

### Exemplo de migration
```sql
CREATE TABLE IF NOT EXISTS migrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  executed_at TEXT DEFAULT CURRENT_TIMESTAMP
);
