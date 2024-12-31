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
NEXT_PUBLIC_URL="http://localhost:3000"  
  
# supabase  
NEXT_PUBLIC_SUPABASE_URL=xxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
POSTGRES_PRISMA_URL=xxx 
POSTGRES_URL=xxx
  
# supabase auth provider  
SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_ID=xxx
SUPABASE_AUTH_EXTERNAL_GOOGLE_SECRET=xxx
SUPABASE_AUTH_EXTERNAL_GOOGLE_REDIRECT_URI=xxx
```

productionと同じ環境変数はvercelか取得する。

```shell
vercel login
vercel link
vercel env pull .env
```
