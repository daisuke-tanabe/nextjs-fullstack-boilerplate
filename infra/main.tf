terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 2.0"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
  team = "team_qTVzJx2AXeJXP0jWhxe1at3q"
}

resource "vercel_project" "nextjs-fullstack-boilerplate" {
  name      = "nextjs-fullstack-boilerplate"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = "daisuke-tanabe/nextjs-fullstack-boilerplate"
  }
}

resource "vercel_deployment" "nextjs-fullstack-boilerplate" {
  project_id = vercel_project.nextjs-fullstack-boilerplate.id
  ref        = "main"
}
