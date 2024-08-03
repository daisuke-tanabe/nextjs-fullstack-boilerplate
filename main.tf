terraform {
  required_version = "= 1.9.3"

  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.61.0"
    }
  }
}

provider "aws" {
  profile = "daisuke-tanabe"
  region = "ap-northeast-1"
}