# nextjs-fullstack-boilerplate

## Usage

### terraform setup

既に環境が作られているならスキップしてよい。

`infra/terraform.tfvars`に次を記載する。

```hcl
vercel_api_token = VERCEL_API_TOKEN
```

### supabase setup

```shell
supabase start
supabase stop
```

### env setup

`.env.local`に`supabase start`で出力された値を記載する。

```
NEXT_PUBLIC_SUPABASE_URL=<SUPABASE_API_URL>
POSTGRES_PRISMA_URL=<SUPABASE_DB_URL>
```

productionと同じ環境変数はvercelか取得する。

```shell
vercel login
vercel link
vercel env pull .env
```
