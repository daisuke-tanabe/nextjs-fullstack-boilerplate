terraform {
  required_version = "= 1.9.3"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.61.0"
    }
  }
}

provider "aws" {
  profile = var.aws_sso_profile
  region  = var.aws_region
}

resource "aws_s3_bucket" "bucket-image" {
  bucket = "${var.app_name}-${var.env}-images-${var.aws_sso_profile}"
}
